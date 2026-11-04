import test from 'node:test';
import assert from 'node:assert/strict';
import {LESSONS,COURSE_STAGES,lessonFor,courseQuestion} from '../src/curriculum.mjs';
import {matchesAnswer} from '../src/answer-match.mjs';
import {shelterGuide} from '../src/shelter-guide.mjs';
import {lessonVisual} from '../src/lesson-visuals.mjs';
import {freshProgress,questionFor,recordAnswer,bossPassed,enterStage,validateProgress} from '../src/learning.mjs';
test('all 32 upstream units plus views and projection have real teaching and questions',()=>{
  assert.equal(Object.keys(LESSONS).length,34);
  const covered=new Set(COURSE_STAGES.flatMap(s=>s.skills).map(s=>lessonFor(s)?.id));
  for(const l of Object.values(LESSONS)){assert.ok(covered.has(l.id),l.id);assert.ok(l.steps.length>=4,l.id);assert.ok(l.questions.length>=6,l.id);}
  for(const {skills} of COURSE_STAGES)for(const skill of skills){
    assert.ok(shelterGuide[skill]?.every(text=>text.trim()),skill);
    assert.equal(shelterGuide[skill].length,3,skill);
    assert.ok(lessonVisual(skill)&&lessonVisual(skill,true),skill);
  }
});
test('all course questions have unique choices, an unambiguous key and feedback',()=>{
  for(const l of Object.values(LESSONS))for(const [n,source] of l.questions.entries()){
    const q=courseQuestion(l.id,n);assert.equal(q.optionLabels[q.answer],source.options.find(o=>o.id===source.answer).text);
    assert.equal(new Set(q.options).size,q.options.length);assert.ok(q.explanation&&q.hint&&q.prompt);assert.ok(q.options.includes(q.answer));
    assert.equal(q.options.filter(value=>matchesAnswer(q,value)).length,1,source.id);
  }
});
test('independent assessment never reuses a seen source item under a new cycle ID',()=>{
  const id='coordinates',len=LESSONS[id].questions.length;
  assert.equal(courseQuestion(id,0).id,courseQuestion(id,len).id);
});
test('the full thirteen-stage route can be completed and restored without broken knowledge links',()=>{
  let p=freshProgress();
  for(let i=0;i<COURSE_STAGES.length;i++){
    p.energy=10;
    assert.equal(enterStage(p,i),true);
    for(const skill of COURSE_STAGES[i].skills){const q=questionFor(skill,p.attempts);assert.ok(q.prompt);recordAnswer(p,q,q.answer);}
    assert.equal(bossPassed(p),true);p=validateProgress(JSON.parse(JSON.stringify(p)));assert.equal(p.stage,i);
  }
});
test('an unrelated number cannot pass a textual course question',()=>{
  const p=freshProgress(),q=courseQuestion('coordinates',0);
  recordAnswer(p,q,999999);assert.equal(p.evidence.coordinates,undefined);
  const correct=courseQuestion('coordinates',1);recordAnswer(p,correct,correct.answer);assert.equal(p.evidence.coordinates,true);
});
