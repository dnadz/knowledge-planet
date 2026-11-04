import test from 'node:test';import assert from 'node:assert/strict';
import {courseQuestion,LESSONS} from '../src/curriculum.mjs';
import {fishAppearance} from '../src/fish-appearance.mjs';
test('third scene carries actual answers rather than ordinal fish',()=>{
 const q=courseQuestion('rational-numbers',0);const source=LESSONS['rational-numbers'].questions[0];
 assert.ok(q.options.some(v=>String(v).replace('-','−')===source.options.find(o=>o.id===source.answer).text));
 assert.ok(!q.condition.includes('编号'));assert.ok(!fishAppearance(q.answer).label.endsWith('号'));
});
test('textual and symbolic answers remain visible instead of turning into zero',()=>{
 assert.equal(fishAppearance('x > 2').label,'x > 2');assert.equal(fishAppearance('不是有理数').label,'不是有理数');
});
test('decimal precision survives answer labels and fish appearance',()=>{
 assert.equal(fishAppearance('10.0').label,'10.0');assert.equal(fishAppearance('−0.50').frame,'blue');
 for(let i=0;i<LESSONS['scientific-notation'].questions.length;i++){
   const source=LESSONS['scientific-notation'].questions[i],q=courseQuestion('scientific-notation',i);
   for(const o of source.options)assert.ok(Object.values(q.optionLabels).includes(o.text));
 }
});
