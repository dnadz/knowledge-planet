import test from 'node:test';
import assert from 'node:assert/strict';
import {ADVENTURES} from '../src/adventure-content.mjs';
import {gradeAdventureItem} from '../src/adventure-state.mjs';
test('all thirty-six items have independently checked mathematical answers and valid reasons',()=>{
 const expected=[[2,3,-5,2,-2,-3],[4,-3,2,0,-5,6],[4,3,0,5,4,2],[2,-6,-2,-3,-2,4],[-2,-2,3,-8,6,-7],[-6,6,0,-12,10,-6]];
 assert.equal(ADVENTURES.length,6);const ids=new Set();
 ADVENTURES.forEach((m,mi)=>{assert.equal(m.items.length,6);m.items.forEach((q,qi)=>{
  assert.ok(!ids.has(q.id));ids.add(q.id);assert.equal(q.answer,expected[mi][qi]);
  const calculate={axis:()=>q.start+q.move,opposite:()=>q.start===0?0:-q.start,distance:()=>Math.abs(q.start),add:()=>q.start+q.move,subtract:()=>q.start-q.move,multiply:()=>q.start*q.move};
  const independentlyCalculated=calculate[q.kind]();assert.equal(q.answer,independentlyCalculated===0?0:independentlyCalculated);
  assert.equal(new Set(q.reasons.map(r=>r.id)).size,q.reasons.length);
  assert.ok(q.reasons.some(r=>r.id===q.reasonId));
  assert.equal(gradeAdventureItem(q,{value:String(q.answer),reasonId:q.reasonId}).correct,true);
 });});
});
test('invalid numeric input is not an incorrect attempt; wrong reason is incorrect',()=>{
 const q=ADVENTURES[0].items[1];
 for(const value of ['', 'Infinity','3.1','100','1+2','<img>',null])assert.equal(gradeAdventureItem(q,{value,reasonId:q.reasonId}).valid,false);
 assert.equal(gradeAdventureItem(ADVENTURES[0].items[2],{value:'−5',reasonId:'direction'}).correct,true);
 assert.equal(gradeAdventureItem(q,{value:'3'}).correct,true);
 const transfer=ADVENTURES[0].items.at(-1);
 assert.equal(gradeAdventureItem(transfer,{value:'-3'}).valid,false);
 assert.equal(gradeAdventureItem(transfer,{value:'-3',reasonId:transfer.reasons.find(r=>r.id!==transfer.reasonId).id}).correct,false);
});
test('reason position varies so option position cannot reveal the correct rule',()=>{
 for(const m of ADVENTURES)assert.ok(new Set(m.items.map(q=>q.reasons.findIndex(r=>r.id===q.reasonId))).size>1);
});

test('transfer reason applies to the actual operands',()=>{
 const q=ADVENTURES.find(m=>m.id==='flow').items.at(-1);
 assert.match(q.reasons.find(r=>r.id===q.reasonId).text,/−2.*6/);
 assert.notEqual(q.reasonId,'combine');
});
