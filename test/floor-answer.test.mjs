import test from 'node:test';import assert from 'node:assert/strict';
import {courseQuestion,LESSONS} from '../src/curriculum.mjs';
import {feedingQuestion,newRound} from '../src/feeding.mjs';
test('garage floor scenario asks one quantity and fish carry only numbers',()=>{
 const i=LESSONS['rational-numbers'].questions.findIndex(q=>q.prompt.includes('B1'));
 const q=feedingQuestion(newRound('rational-numbers',0,i,2));
 assert.deepEqual(q.options,[-1,1,0]);assert.equal(q.answer,-1);
 assert.ok(q.prompt.includes('B1'));assert.ok(q.prompt.includes('向上为正'));
 assert.ok(!Object.values(q.optionLabels).some(s=>s.includes('B1')));
});
