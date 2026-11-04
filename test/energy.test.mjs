import test from 'node:test';import assert from 'node:assert/strict';
import {freshProgress,grow,validateProgress,STAGES,enterStage} from '../src/learning.mjs';
import {bodyRatio,canChallenge,recordBossAnswer,bossQuestion} from '../src/energy.mjs';
test('energy is zero to ten; approved body ratio is 1.0 to 3.0',()=>{
 const p=freshProgress();grow(p,50);assert.equal(p.energy,10);grow(p,-20);assert.equal(p.energy,0);
 for(let i=0;i<=10;i++)assert.ok(Math.abs(bodyRatio(i)-(1+i*.2))<1e-10);
});
test('boss requires five, wrong costs five, correct needs three independent rounds',()=>{
 const p=freshProgress();p.energy=4;assert.equal(canChallenge(p),false);p.energy=10;
 const wrong=bossQuestion('axis',0,0);recordBossAnswer(p,wrong,'wrong');assert.equal(p.energy,5);
 for(let i=0;i<3;i++){const q=bossQuestion('axis',i,i,p.seen);recordBossAnswer(p,q,q.answer);if(i<2)assert.equal(p.evidence.axis,undefined);}
 assert.equal(p.evidence.axis,true);assert.equal(p.bossSteps.axis,3);
});
test('new stage requires ten and consumes it; revisiting does not charge again',()=>{
 const p=freshProgress();for(const s of STAGES[0].skills)p.evidence[s]=true;
 p.energy=9;assert.equal(enterStage(p,1),false);p.energy=10;assert.equal(enterStage(p,1),true);assert.equal(p.energy,0);
 assert.equal(enterStage(p,0),true);assert.equal(enterStage(p,1),true);assert.equal(p.energy,0);
});
test('legacy saves migrate without losing evidence and new saves keep the scale',()=>{
 const old=validateProgress({version:1,energy:25,evidence:{axis:true}});assert.equal(old.energy,5);assert.equal(old.evidence.axis,true);
 const p=freshProgress();p.energy=7;assert.equal(validateProgress(p).energy,7);
});
test('all stages can pass the new three-round boss rules without exhausting a bank',()=>{
 const p=freshProgress();
 for(let stage=0;stage<STAGES.length;stage++){
   p.energy=10;assert.equal(enterStage(p,stage),true);p.energy=5;
   for(const skill of STAGES[stage].skills)for(let tier=0;tier<3;tier++){
     const q=bossQuestion(skill,p.attempts,tier,p.seen),result=recordBossAnswer(p,q,q.answer);
     assert.equal(result.independent,true,`${stage}:${skill}:${tier}`);
   }
   for(const skill of STAGES[stage].skills)assert.equal(p.evidence[skill],true);
 }
});
test('energy below five cannot submit boss answers; mistakes retain earlier layers',()=>{
 const p=freshProgress();p.energy=4;const q=bossQuestion('axis',0,0);
 assert.equal(recordBossAnswer(p,q,q.answer).blocked,true);assert.equal(p.attempts,0);
 p.energy=5;recordBossAnswer(p,q,q.answer);const next=bossQuestion('axis',1,1,p.seen);recordBossAnswer(p,next,'wrong');
 assert.equal(p.energy,0);assert.equal(p.bossSteps.axis,1);assert.equal(p.evidence.axis,undefined);
});
test('the arithmetic Boss evaluates the named operation at every tier',()=>{
 const operations={add:['+', (a,b)=>a+b],subtract:['−',(a,b)=>a-b],multiply:['×',(a,b)=>a*b]};
 for(const [skill,[symbol,calculate]] of Object.entries(operations)){
   const seen=[];
   for(let tier=0;tier<3;tier++)for(let i=0;i<12;i++){
     const q=bossQuestion(skill,i,tier,seen);
     assert.ok(!seen.slice(-4).includes(q.id));
     const expression=q.prompt.match(/^计算 (.*)，结果是多少？$/)[1];
     const operands=expression.split(` ${symbol} `).map(part=>Number(part.replace(/[()]/g,'')));
     assert.equal(operands.length,tier===2?3:2);
     assert.ok(operands.every(Number.isFinite));
     assert.equal(q.answer,operands.reduce(calculate));
     assert.equal(q.options.filter(value=>value===q.answer).length,1);
     seen.push(q.id);
   }
 }
});
