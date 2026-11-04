import test from 'node:test';import assert from 'node:assert/strict';
import {courseQuestion} from '../src/curriculum.mjs';
import {newRound,eatAnswer} from '../src/feeding.mjs';
test('equivalent decimal fish answers a fraction calculation correctly',()=>{
 const r=newRound('rational-operations',0,0,2);r.question=courseQuestion('rational-operations',6);
 assert.equal(r.question.answer,'−3/2');assert.equal(eatAnswer(r,-1.5).correct,true);
});
test('decimal precision questions still distinguish ten from ten point zero',()=>{
 const r=newRound();r.question={answer:'10.0',sourceNode:'scientific-notation'};
 assert.equal(eatAnswer(r,10).correct,false);
});
