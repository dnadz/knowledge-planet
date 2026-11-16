import test from 'node:test';
import assert from 'node:assert/strict';
import {bossQuestion} from '../src/energy.mjs';
import {shouldOfferSubtractionCheck,checkOutcome,transferQuestion,featuredQuestions} from '../src/subtraction-support.mjs';

test('only wrong two-term subtraction of a negative in the second sea offers a check',()=>{
 const eligible=Array.from({length:12},(_,i)=>bossQuestion('subtract',i)).find(q=>q.subtractNegative);
 assert.ok(eligible);
 assert.equal(shouldOfferSubtractionCheck(1,eligible,false),true);
 assert.equal(shouldOfferSubtractionCheck(1,eligible,true),false);
 assert.equal(shouldOfferSubtractionCheck(0,eligible,false),false);
 assert.equal(shouldOfferSubtractionCheck(1,bossQuestion('add',0),false),false);
 assert.equal(shouldOfferSubtractionCheck(1,bossQuestion('subtract',1,2),false),false);
});
test('a successful check does not suggest remediation; a failed check does',()=>{
 assert.equal(checkOutcome('add-opposite'),'review-current');
 assert.equal(checkOutcome('subtract-magnitude'),'show-lesson');
 for(let i=0;i<3;i++){
  const q=transferQuestion(i);
  assert.equal(q.answer,q.high-q.low);
  assert.equal(new Set(q.options).size,3);
  assert.ok(q.options.includes(q.answer));
 }
});
test('curated source questions retain distinct IDs and correct one-result answers',()=>{
 assert.deepEqual(featuredQuestions.map(q=>q.answer),[-.5,5,-2,12]);
 assert.equal(new Set(featuredQuestions.map(q=>q.id)).size,4);
 for(const q of featuredQuestions)assert.ok(q.options.includes(q.answer));
});
