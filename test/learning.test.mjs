import test from 'node:test';
import assert from 'node:assert/strict';
import { freshProgress, validateProgress, recordAnswer, grow, bossPassed, questionFor } from '../src/learning.mjs';

test('energy growth is capped and cannot unlock knowledge', () => {
  const p = freshProgress(); grow(p, 10000);
  assert.equal(p.energy, 10); assert.equal(bossPassed(p), false);
});
test('hints do not count as independent success and retry must use a new question', () => {
  const p = freshProgress(); const q = questionFor('axis', 0);
  recordAnswer(p, q, q.answer, true); assert.equal(p.evidence.axis, undefined);
  recordAnswer(p, q, q.answer, false); assert.equal(p.evidence.axis, undefined);
  const next = questionFor('axis', 1); recordAnswer(p, next, next.answer, false);
  assert.equal(p.evidence.axis, true); assert.equal(bossPassed(p), false);
});
test('three independent skills pass the regional boss; mistakes do not erase prior success', () => {
  const p = freshProgress();
  for(const skill of ['axis','opposite','distance']) { const q = questionFor(skill,0); recordAnswer(p,q,q.answer,false); }
  assert.equal(bossPassed(p), true);
  recordAnswer(p,questionFor('axis',1),999,false); assert.equal(p.evidence.axis,true);
});
test('corrupt and forged save data are rejected or sanitized', () => {
  assert.deepEqual(validateProgress(null),freshProgress());
  const p=validateProgress({version:1,energy:Infinity,evidence:{axis:'yes',opposite:true},attempts:-3});
  assert.equal(p.energy,0); assert.equal(p.evidence.axis,undefined); assert.equal(p.evidence.opposite,true);
});
test('question bank mathematical answers agree with declared operation', () => {
  for(const skill of ['axis','opposite','distance']) for(let n=0;n<20;n++) {
    const q=questionFor(skill,n); assert.equal(new Set(q.options).size,q.options.length);
    assert.ok(q.options.includes(q.answer));
    assert.equal(q.answer,skill==='axis'?q.start+q.move:skill==='opposite'?-q.start:Math.abs(q.start));
  }
});
