import test from 'node:test';
import assert from 'node:assert/strict';
import {STAGES,freshProgress,recordAnswer,questionFor,bossPassed,enterStage,validateProgress} from '../src/learning.mjs';
import {newRound,nextRound} from '../src/feeding.mjs';
import {smoothVelocity} from '../src/motion.mjs';
test('boss unlocks next playable stage without allowing early entry',()=>{
  const p=freshProgress();assert.equal(enterStage(p,1),false);
  for(const s of STAGES[0].skills){const q=questionFor(s,0);recordAnswer(p,q,q.answer);}
  p.energy=10;assert.equal(bossPassed(p),true);assert.equal(enterStage(p,1),true);assert.equal(p.stage,1);assert.equal(bossPassed(p),false);
});
test('stage, unlock and evidence survive a validated save; old saves migrate',()=>{
  const p=freshProgress();for(const s of STAGES[0].skills)p.evidence[s]=true;
  p.energy=10;enterStage(p,1);const restored=validateProgress(JSON.parse(JSON.stringify(p)));
  assert.equal(restored.stage,1);assert.equal(enterStage(restored,2),false);
  assert.equal(validateProgress({version:1,stage:1,evidence:{}}).stage,0);
});
test('arithmetic questions are correct and feeding remains within the active stage',()=>{
  for(let n=0;n<30;n++)for(const s of STAGES[1].skills){const q=questionFor(s,n);assert.equal(q.answer,s==='add'?q.start+q.move:s==='subtract'?q.start-q.move:q.start*q.move);assert.ok(q.options.includes(q.answer));}
  const r=newRound('multiply',0,0,1);r.correct=9;r.eaten=10;assert.equal(nextRound(r).skill,'add');assert.equal(nextRound(r).stage,1);
});
test('movement accelerates, releases smoothly, and behaves consistently across frame rates',()=>{
  let a={x:0,y:0},b={x:0,y:0};for(let i=0;i<60;i++)a=smoothVelocity(a,1,0,1/60);for(let i=0;i<30;i++)b=smoothVelocity(b,1,0,1/30);
  assert.ok(Math.abs(a.x-b.x)<.01);assert.ok(a.x<=170);const released=smoothVelocity(a,0,0,.1);assert.ok(released.x<a.x&&released.x>0);
});
