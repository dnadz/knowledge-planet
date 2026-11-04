import test from 'node:test';import assert from 'node:assert/strict';
import {fishAppearance} from '../src/fish-appearance.mjs';
import {oceanLayout} from '../src/ocean-layout.mjs';
test('positive red, negative blue, zero pearl; sign stays visible',()=>{
  assert.deepEqual(fishAppearance(3),{frame:'red',label:'+3',category:'正数'});
  assert.equal(fishAppearance(-2).frame,'blue');assert.equal(fishAppearance(-2).label,'-2');assert.equal(fishAppearance(0).frame,'pearl');
});
test('choice IDs are neutral, not portrayed as positive answers',()=>{
  assert.equal(fishAppearance(2,true).frame,'pearl');assert.equal(fishAppearance(2,true).label,'2号');
});
test('initial and maximum counts meet the six-to-nine visible fish request',()=>{
  for(const [w,h] of [[360,480],[800,520],[1200,700]]){const l=oceanLayout(w,h);assert.ok(l.initial>=6&&l.initial<=9);assert.ok(l.max>=l.initial&&l.max<=9);}
});
