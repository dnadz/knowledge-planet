import test from 'node:test';import assert from 'node:assert/strict';
import {newRound,planFeedingTurn,eatAnswer,nextRound} from '../src/feeding.mjs';
const seeded=seed=>()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
test('continuous correct play keeps old answers, guarantees availability and does not always reward new fish',()=>{
 const random=seeded(71);let round=newRound(),fish=[],oldWins=0,newOnly=0;
 for(let n=0;n<200;n++){
   const old=[...fish],plan=planFeedingTurn(round,old,fish.length?1:8,9,random);
   if(plan.removeIndex!==null)fish.splice(plan.removeIndex,1);fish.push(...plan.added);
   assert.ok(fish.includes(plan.question.answer));assert.ok(fish.length>=6&&fish.length<=9);
   if(n){if(old.includes(plan.question.answer))oldWins++;else newOnly++;}
   fish.splice(fish.indexOf(plan.question.answer),1);eatAnswer(round,plan.question.answer);
   if(round.complete)round=nextRound(round);
 }
 assert.ok(oldWins>100);assert.ok(newOnly<80);
});
test('blindly eating the newly spawned fish is not a near-certain strategy',()=>{
 const random=seeded(42);let round=newRound('axis'),fish=[],hits=0;
 for(let n=0;n<200;n++){
   const plan=planFeedingTurn(round,fish,fish.length?1:8,9,random);
   if(plan.removeIndex!==null)fish.splice(plan.removeIndex,1);fish.push(...plan.added);
   const target=plan.added.at(-1)??fish[0];hits+=Number(target===plan.question.answer);fish.splice(fish.lastIndexOf(target),1);eatAnswer(round,target);
   if(round.complete)round=nextRound(round);
 }
 assert.ok(hits<120,`new fish strategy got ${hits}/200`);
});
test('planning is idempotent and does not relabel surviving fish',()=>{
 const r=newRound(),existing=[2,4,6,8,0,-2],snapshot=[...existing],random=seeded(2);
 const p=planFeedingTurn(r,existing,2,9,random);assert.deepEqual(existing,snapshot);
 assert.ok(p.added.length<=2);assert.deepEqual(planFeedingTurn(r,existing,2,9,random).added,[]);
});
