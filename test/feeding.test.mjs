import test from 'node:test';
import assert from 'node:assert/strict';
import {newRound,eatAnswer,nextRound,feedingQuestion,planFeedingTurn} from '../src/feeding.mjs';
test('correct adds one, wrong subtracts one; only eaten food counts',()=>{
  const r=newRound(); const q=feedingQuestion(r);
  eatAnswer(r,q.answer); assert.equal(r.score,1);assert.equal(r.correct,1);
  eatAnswer(r,feedingQuestion(r).answer+100);assert.equal(r.score,0);assert.equal(r.eaten,2);
});
test('7/10 requires help, 8/10 meets threshold, ten is a hard boundary',()=>{
  for(const correct of [7,8,10]){const r=newRound();let result;
    for(let i=0;i<10;i++)result=eatAnswer(r,feedingQuestion(r).answer+(i<correct?0:100));
    assert.equal(result.accuracy,correct*10);assert.equal(result.needsHint,correct<8);
    const before=JSON.stringify(r);assert.equal(eatAnswer(r,0),null);assert.equal(JSON.stringify(r),before);
  }
});
test('retry clears counts, retains skill and cumulative score, advances questions',()=>{
  const r=newRound();for(let i=0;i<10;i++)eatAnswer(r,999);
  const fresh=nextRound(r);assert.equal(fresh.eaten,0);assert.equal(fresh.correct,0);assert.equal(fresh.score,-10);
  assert.equal(fresh.skill,r.skill);assert.notEqual(feedingQuestion(fresh).id,feedingQuestion(r).id);
});
test('successful rounds rotate knowledge without marking boss mastery',()=>{
  const r=newRound();for(let i=0;i<10;i++)eatAnswer(r,feedingQuestion(r).answer);
  assert.equal(nextRound(r).skill,'opposite');
  for(const skill of ['axis','opposite','distance']){const q=feedingQuestion(newRound(skill));assert.ok(q.condition);assert.ok(q.options.includes(q.answer));}
});
test('replenishment preserves survivors and only adds one or two fish',()=>{
  const existing=[-3,2,8,4],snapshot=[...existing];
  for(const count of [1,2]){const p=planFeedingTurn(newRound(),existing,count,9,()=>.3);assert.equal(p.added.length,count);assert.deepEqual(existing,snapshot);assert.ok([...existing,...p.added].includes(p.question.answer));}
});
test('question is selected for an available answer, without relabeling old fish',()=>{
  const old=[-3,2,4];
  for(const count of [1,2]){const p=planFeedingTurn(newRound(),old,count,9,()=>.8);assert.ok([...old,...p.added].includes(p.question.answer));}
  assert.deepEqual(old,[-3,2,4]);
});
test('population stays bounded while guaranteeing an answer across many meals',()=>{
  let fish=Array(8).fill(0);
  for(let i=0;i<100;i++){fish.shift();const p=planFeedingTurn(newRound('axis',0,i),fish,2,9,()=>.5);fish.push(...p.added);assert.ok(fish.includes(p.question.answer));assert.ok(fish.length<=9);}
});
test('compact viewport replenishment respects its own population limit',()=>{
  const existing=[1,1,3,3,1];
  const p=planFeedingTurn(newRound(),existing,2,6,()=>.2);
  assert.equal(p.added.length,1);assert.ok([...existing,...p.added].includes(p.question.answer));
});
