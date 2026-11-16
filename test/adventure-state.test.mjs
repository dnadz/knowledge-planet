import test from 'node:test';import assert from 'node:assert/strict';
import {ADVENTURES} from '../src/adventure-content.mjs';
import {freshAdventure,reduceAdventure,validateAdventure} from '../src/adventure-state.mjs';
const event=(s,type,extra={})=>reduceAdventure(s,{type,missionId:s.missionId||'beacon',itemId:s.itemId,...extra}).state;
function solve(s,q){s=event(s,'SELECT_VALUE',{value:String(q.answer)});s=event(s,'SELECT_REASON',{reasonId:q.reasonId});return event(s,'SUBMIT');}
test('cannot jump to locked missions, skip unanswered items, or submit twice',()=>{
 let s=freshAdventure();assert.deepEqual(event(s,'START',{missionId:'mirror'}),s);
 s=event(s,'START');s=event(s,'NEXT');const before=structuredClone(s);
 assert.deepEqual(event(s,'NEXT'),before);
 s=solve(s,ADVENTURES[0].items[1]);assert.equal(s.records[s.itemId].attempts,1);
 assert.deepEqual(event(s,'SUBMIT'),s);assert.equal(s.records[s.itemId].firstIndependent,false);
});
test('hints and wrong first submissions survive restore and cannot become independent',()=>{
 let s=event(freshAdventure(),'START');s=event(s,'NEXT');
 for(let i=1;i<3;i++){s=solve(s,ADVENTURES[0].items[i]);s=event(s,'NEXT');}
 const q=ADVENTURES[0].items[3];s=event(s,'SHOW_HINT');s=event(s,'SELECT_VALUE',{value:'0'});s=event(s,'SELECT_REASON',{reasonId:q.reasonId});s=event(s,'SUBMIT');
 assert.equal(s.records[q.id].attempts,1);
 s=validateAdventure(JSON.stringify(s)).state;s=solve(s,q);
 assert.equal(s.records[q.id].attempts,2);assert.equal(s.records[q.id].firstIndependent,false);assert.equal(s.records[q.id].hinted,true);
 assert.equal(validateAdventure(JSON.stringify(s)).readOnly,false);
});
test('complete three missions without unrelated progress and restore without duplicated rewards',()=>{
 let s=freshAdventure();
 for(const m of ADVENTURES.slice(0,3)){s=event(s,'START',{missionId:m.id});for(const q of m.items){if(q.phase!=='demo')s=solve(s,q);s=event(s,'NEXT');}}
 assert.deepEqual(s.completed,['beacon','mirror','distance']);assert.equal(s.records['beacon-3'].firstIndependent,true);
 assert.deepEqual(validateAdventure(JSON.stringify(s)).state,s);
 const saved=structuredClone(s);s=event(s,'START',{missionId:'beacon'});assert.deepEqual(s.records,saved.records);assert.deepEqual(s.completed,saved.completed);
 assert.equal('energy' in s,false);assert.equal('evidence' in s,false);
});
test('second-sea tasks have local prerequisites and restore without requiring first-sea optional tasks',()=>{
 let s=freshAdventure();const second=ADVENTURES.filter(m=>m.stage===1);assert.equal(second.length,3);
 assert.deepEqual(event(s,'START',{missionId:second[1].id}),s);
 for(const m of second){s=event(s,'START',{missionId:m.id});for(const q of m.items){if(q.phase!=='demo')s=solve(s,q);s=event(s,'NEXT');}assert.equal(validateAdventure(JSON.stringify(s)).readOnly,false);}
 assert.deepEqual(s.completed,['flow','reverse','array']);assert.equal('evidence' in s,false);assert.equal('energy' in s,false);
 const restored=validateAdventure(JSON.stringify(s));assert.deepEqual(restored.state,s);
});
test('bad records and unknown versions are preserved read-only, missing data starts writable',()=>{
 assert.equal(validateAdventure(null).readOnly,false);
 for(const raw of ['{broken',JSON.stringify({version:9}),JSON.stringify({...freshAdventure(),completed:['distance']})]){
  const r=validateAdventure(raw);assert.equal(r.readOnly,true);assert.equal(r.rawPreserved,raw);
 }
 let s=event(freshAdventure(),'START');s=event(s,'NEXT');s=event(s,'SELECT_VALUE',{value:'−3'});
 assert.equal(validateAdventure(JSON.stringify(s)).state.draft.value,'−3');
 const bad=structuredClone(s);bad.records[bad.itemId]={attempts:-1};assert.equal(validateAdventure(JSON.stringify(bad)).readOnly,true);
});
test('fixed-item replay accepts new attempts but never changes original first-attempt evidence',()=>{
 let s=event(freshAdventure(),'START');for(const q of ADVENTURES[0].items){if(q.phase!=='demo')s=solve(s,q);s=event(s,'NEXT');}
 const original=structuredClone(s.records);s=event(s,'START');s=event(s,'NEXT');
 const q=ADVENTURES[0].items[1];s=event(s,'SELECT_VALUE',{value:'0'});s=event(s,'SELECT_REASON',{reasonId:q.reasonId});s=event(s,'SUBMIT');
 assert.equal(s.replay?.records[q.id]?.attempts,1);assert.equal(s.replay.records[q.id].lastCorrect,false);
 s=validateAdventure(JSON.stringify(s)).state;s=solve(s,q);assert.equal(s.replay.records[q.id].attempts,2);assert.equal(s.replay.records[q.id].done,true);assert.equal(s.replay.records[q.id].firstIndependent,false);assert.deepEqual(s.records,original);
 const invalid=structuredClone(s);invalid.replay.records[q.id].firstIndependent=true;assert.equal(validateAdventure(JSON.stringify(invalid)).readOnly,true);
});

test('legacy numeric-correct wrong-reason attempt and legacy completed application remain readable',()=>{
 let s=event(freshAdventure(),'START');s=event(s,'NEXT');
 s.records['beacon-1']={attempts:1,hinted:false,firstIndependent:false,lastCorrect:false,done:false,value:'3',reasonId:'endpoint'};
 assert.equal(validateAdventure(JSON.stringify(s)).readOnly,false);
 for(const q of ADVENTURES[0].items.slice(1)){s=solve(s,q);s=event(s,'NEXT');}
 s.records['beacon-5'].reasonId='direction';
 assert.equal(validateAdventure(JSON.stringify(s)).readOnly,false);
 assert.deepEqual(s.completed,['beacon']);
});
