import test from 'node:test';
import assert from 'node:assert/strict';
import {advanceHuntClock,sharkMouthOffset,mouthTouches,eelSpeed,createHunt,feedEel,huntTarget,cageQuestions,readCages,drawCageQuestion,finishCageQuestion} from '../src/eel-hunt.mjs';

test('speed starts at half and rises by tenths after each full two seconds past fifteen',()=>{
 for(const [seconds,multiplier] of [[0,.5],[15,.5],[16.99,.5],[17,.6],[19,.7],[35,1.5],[90,1.5]])assert.equal(eelSpeed(seconds),multiplier);
});
test('released fish take priority, two meals pause pursuit, third meal ends this stage',()=>{
 const state=readCages(null);
 const eel=createHunt();
 state.solved=[3,3,3];
 assert.equal(huntTarget(state,eel),'fish');
 feedEel(state,eel,0);
 assert.equal(eel.rest,60);
 assert.equal(huntTarget(state,eel),'rest');
 eel.rest=0;
 feedEel(state,eel,1);
 assert.equal(eel.rest,60);
 eel.rest=0;
 feedEel(state,eel,2);
 assert.equal(huntTarget(state,eel),'leave');
 assert.deepEqual(readCages(JSON.stringify(state)).eaten,[true,true,true]);
});
test('each later sea has nine distinct valid cage questions',()=>{
 for(let stage=2;stage<13;stage++){
  const questions=cageQuestions(stage);
  assert.ok(questions.length>=12);
  assert.equal(new Set(questions.map(q=>q.prompt)).size,questions.length);
  for(const q of questions)assert.ok(q.options.includes(q.answer));
 }
});

test('cage questions vary and wrong answers replace the prompt without advancing',()=>{
 const state=readCages(null);
 const first=drawCageQuestion(2,state,0,()=>0);
 assert.notEqual(drawCageQuestion(2,readCages(null),0,()=>.9).id,first.id);
 assert.equal(drawCageQuestion(2,readCages(JSON.stringify(state)),0,()=>.9).id,first.id);
 finishCageQuestion(state,0,false);
 const next=drawCageQuestion(2,state,0,()=>0);
 assert.notEqual(next.prompt,first.prompt);
 assert.equal(state.solved[0],0);
 finishCageQuestion(state,0,true);
 assert.equal(state.solved[0],1);
 assert.notEqual(drawCageQuestion(2,state,0,()=>0).id,next.id);
});

test('rest freezes acceleration and only the active fraction advances on wake',()=>{
 const hunt={...createHunt(),age:16,rest:60};
 assert.equal(advanceHuntClock(hunt,59),0);
 assert.equal(hunt.age,16);
 assert.equal(advanceHuntClock(hunt,1.5),.5);
 assert.equal(eelSpeed(hunt.age),.5);
 advanceHuntClock(hunt,.5);
 assert.equal(eelSpeed(hunt.age),.6);
});
test('the mouth follows the drawn shark direction and size',()=>{
 const right=sharkMouthOffset(180,1),left=sharkMouthOffset(180,-1);
 assert.equal(right.x,-left.x);
 assert.equal(mouthTouches(right,{x:65,y:6},14),true);
 assert.equal(mouthTouches(left,{x:65,y:6},14),false);
 assert.equal(mouthTouches(right,{x:0,y:6},14),false);
});
test('a solved question stays out of the pool after recent wrong answers roll over',()=>{
 const state=readCages(null);
 const solved=drawCageQuestion(2,state,0,()=>0);
 finishCageQuestion(state,0,true);
 for(let i=0;i<32;i++){
  const q=drawCageQuestion(2,state,0,()=>0);
  assert.notEqual(q.id,solved.id);
  finishCageQuestion(state,0,false);
 }
 const restored=readCages(JSON.stringify(state));
 assert.equal(restored.solved[0],1);
 assert.notEqual(drawCageQuestion(2,restored,0,()=>0).id,solved.id);
});
