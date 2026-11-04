import fs from 'node:fs';
import assert from 'node:assert/strict';
import {STAGES} from '../src/learning.mjs';
import {newRound,planFeedingTurn,eatAnswer,nextRound} from '../src/feeding.mjs';
const seeds=[1,7,19,42,99,223,553,1001,1024,9001];
const report={kind:'automated-state-simulation-not-browser-play',seeds:seeds.length,stages:STAGES.length,skills:STAGES.reduce((n,s)=>n+s.skills.length,0),meals:0,correct:0,wrong:0,resizes:0,cachedChecks:0,errors:[]};
for(const seed0 of seeds)for(const [stage,s] of STAGES.entries())for(const skill of s.skills){
 let seed=seed0;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 let round=newRound(skill,0,0,stage),fish=[],max=9,pending=8;
 for(let i=0;i<30;i++)try{
   let plan=planFeedingTurn(round,fish,pending,max,random);
   if(plan.removeIndex!==null)fish.splice(plan.removeIndex,1);fish.push(...plan.added);pending=0;
   assert.ok(fish.includes(plan.question.answer),'question has no physical answer value');
   const same=planFeedingTurn(round,fish,0,max,random);assert.equal(same.question.id,plan.question.id);assert.equal(same.added.length,0);report.cachedChecks++;
   if(i%7===6){max=max===9?7:9;while(fish.length>max){const index=fish.findIndex(v=>v!==plan.question.answer);fish.splice(index<0?fish.length-1:index,1);}report.resizes++;plan=planFeedingTurn(round,fish,0,max,random);assert.ok(fish.includes(plan.question.answer));}
   const wrong=fish.find(v=>v!==plan.question.answer);
   const value=(i<10||i>=20&&i%3!==0||wrong===undefined)?plan.question.answer:wrong;
   fish.splice(fish.indexOf(value),1);const result=eatAnswer(round,value);report.meals++;report[result.correct?'correct':'wrong']++;
   assert.ok(round.eaten<=10);pending=random()<.5?1:2;
   if(round.complete){
     // Resize while the result dialog is open, before the next topic is prepared.
     max=7;while(fish.length>max)fish.pop();report.resizes++;
     round=nextRound(round);
   }
 }catch(error){report.errors.push({seed:seed0,stage,skill,meal:i,error:error.message});break;}
}
fs.mkdirSync('test-output',{recursive:true});fs.writeFileSync('test-output/game-audit.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));if(report.errors.length)process.exitCode=1;
