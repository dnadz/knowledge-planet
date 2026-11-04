import test from 'node:test';import assert from 'node:assert/strict';
import {newRound,planFeedingTurn,eatAnswer,nextRound} from '../src/feeding.mjs';
import {STAGES,freshProgress,grow,enterStage,validateProgress,bossPassed} from '../src/learning.mjs';
import {canChallenge,bossQuestion,recordBossAnswer} from '../src/energy.mjs';
const seeded=seed=>()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
function apply(fish,plan){const result=[...fish];if(plan.removeIndex!==null)result.splice(plan.removeIndex,1);result.push(...plan.added);return result;}
test('cached question is repaired if its only answer fish is no longer present',()=>{
 const r=newRound(),random=seeded(12);const p=planFeedingTurn(r,[],8,9,random);
 const survivors=p.added.filter(v=>v!==p.question.answer);
 const repaired=planFeedingTurn(r,survivors,0,9,random);
 assert.ok(apply(survivors,repaired).includes(repaired.question.answer));
});
test('full pool after shrink can start a different topic even with pending incoming fish',()=>{
 const old=Array(7).fill('previous topic');const r=newRound('coordinates',0,0,9);
 const p=planFeedingTurn(r,old,1,7,seeded(3));
 assert.ok(apply(old,p).includes(p.question.answer));assert.ok(apply(old,p).length<=7);
});
test('all thirteen stages survive correct, wrong, hint, energy recovery and save cycles',()=>{
 const random=seeded(19);let p=freshProgress(),meals=0;
 for(let stage=0;stage<STAGES.length;stage++){
   p.energy=10;assert.ok(enterStage(p,stage));let fish=[],r=newRound(STAGES[stage].skills[0],p.feedingScore,0,stage);
   for(let i=0;i<25;i++){
     const plan=planFeedingTurn(r,fish,fish.length?1:8,9,random);fish=apply(fish,plan);assert.ok(fish.includes(plan.question.answer));
     const wrong=fish.find(v=>v!==plan.question.answer),value=i%5===0&&wrong!==undefined?wrong:plan.question.answer;
     fish.splice(fish.indexOf(value),1);const result=eatAnswer(r,value);grow(p,result.correct?1:-1);meals++;
     if(r.complete)r=nextRound(r);
   }
   p.energy=5;const first=STAGES[stage].skills[0];let q=bossQuestion(first,p.attempts,0,p.seen);
   recordBossAnswer(p,q,'deliberately wrong');assert.equal(p.energy,0);assert.equal(canChallenge(p),false);
   q=bossQuestion(first,p.attempts,0,p.seen);assert.equal(recordBossAnswer(p,q,q.answer).blocked,true);
   grow(p,5);recordBossAnswer(p,q,q.answer,true);assert.notEqual(p.evidence[first],true);
   for(const skill of STAGES[stage].skills)while(!p.evidence[skill]){
     q=bossQuestion(skill,p.attempts,p.bossSteps[skill]||0,p.seen);recordBossAnswer(p,q,q.answer);
     assert.ok(p.attempts<1000);
   }
   assert.ok(bossPassed(p));p=validateProgress(JSON.parse(JSON.stringify(p)));assert.equal(p.stage,stage);
 }
 assert.equal(meals,325);
});
