import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSE_STAGES,LESSONS} from '../src/curriculum.mjs';
import {matchesAnswer} from '../src/answer-match.mjs';
import {PRACTICE_BANK,drawPracticeQuestion,practiceFish} from '../src/practice-bank.mjs';
import {newRound,eatAnswer} from '../src/feeding.mjs';

function randomFrom(seed){
  return ()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/2**32);
}

test('all 13 banks have 100 distinct prompts, cover their skills and offer exactly one correct fish',()=>{
  // Parentheses, minus signs and exponents can change the math.
  const normalize=text=>text.normalize('NFC').replace(/\s+/g,'').replace(/[。？?!！]+$/u,'');
  const bossPrompts=new Set(Object.values(LESSONS).flatMap(l=>l.questions.map(q=>normalize(q.prompt))));
  for(const [stage,bank] of PRACTICE_BANK.entries()){
    assert.equal(bank.length,100);
    assert.equal(new Set(bank.map(q=>q.id)).size,100);
    assert.equal(new Set(bank.map(q=>normalize(q.prompt))).size,100);
    assert.deepEqual(new Set(bank.map(q=>q.skill)),new Set(COURSE_STAGES[stage].skills));
    for(const q of bank){
      assert.ok(!bossPrompts.has(normalize(q.prompt)),q.id);
      assert.equal(new Set(q.options.map(String)).size,3,q.id);
      const fish=practiceFish(q,[],randomFrom(stage+1)).add;
      assert.equal(fish.length,7);
      assert.equal(fish.filter(value=>matchesAnswer(q,value)).length,1,q.id);
      const round=newRound(q.skill,0,0,stage);
      round.question=q;
      assert.equal(eatAnswer(round,fish.find(value=>matchesAnswer(q,value))).correct,true);
    }
  }
});

test('serialized seen records prevent repeats through exhaustion and replay can avoid the last item',()=>{
  const random=randomFrom(51);
  for(const [stage,bank] of PRACTICE_BANK.entries()){
    let seen=[];
    for(let i=0;i<100;i++){
      const skills=COURSE_STAGES[stage].skills;
      const q=drawPracticeQuestion(bank,seen,skills[i%skills.length],random);
      assert.ok(q);
      assert.ok(!seen.includes(q.id));
      seen=JSON.parse(JSON.stringify([...seen,q.id]));
    }
    assert.equal(drawPracticeQuestion(bank,seen,bank[0].skill,random),null);
    assert.notEqual(drawPracticeQuestion(bank,[seen.at(-1)],bank[0].skill,random).id,seen.at(-1));
  }
});

test('a full run maintains seven fish, preserves survivors and never spawns a lone correct fish',()=>{
  const random=randomFrom(31);
  let correct=0,trials=0,single=0;
  for(let run=0;run<10;run++)for(const bank of PRACTICE_BANK){
    const seen=[];
    let existing=[];
    for(let i=0;i<bank.length;i++){
      const q=drawPracticeQuestion(bank,seen,bank[Math.floor(i/10)*10].skill,random,existing);
      assert.ok(!seen.includes(q.id));
      seen.push(q.id);
      const {remove,add}=practiceFish(q,existing,random,bank.filter(item=>!seen.includes(item.id)));
      const survivors=existing.filter((_,index)=>!remove.includes(index));
      if(i>0){
        assert.ok(remove.length<=3);
        if(add.length===1){
          single++;
          assert.equal(matchesAnswer(q,add[0]),false);
        }
        correct+=Number(matchesAnswer(q,add[0]));
        trials++;
      }
      const school=[...survivors,...add];
      assert.equal(school.length,7);
      assert.ok(q.options.every(value=>school.includes(value)));
      assert.equal(school.filter(value=>matchesAnswer(q,value)).length,1);
      assert.deepEqual(practiceFish(q,school,random),{remove:[],add:[]});
      existing=school.filter((_,index)=>index!==survivors.length);
    }
  }
  assert.ok(correct/trials<=1/7+.02,`${correct}/${trials}`);
  console.log(`First spawned fish accuracy: ${correct}/${trials}. Single replacements: ${single}/${trials}.`);
});
