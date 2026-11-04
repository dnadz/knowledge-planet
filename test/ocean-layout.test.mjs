import test from 'node:test';
import assert from 'node:assert/strict';
import {oceanLayout,spawnPosition} from '../src/ocean-layout.mjs';
test('fish density scales with viewport, with distinct creature sizes',()=>{
  const mobile=oceanLayout(360,510),desktop=oceanLayout(950,600);
  assert.ok(mobile.initial<desktop.initial);assert.ok(mobile.max<=7);assert.ok(desktop.max<=12);
  for(const l of [mobile,desktop]){assert.ok(l.food<l.turtle);assert.ok(l.turtle<l.predator);assert.ok(l.predator<l.boss);assert.ok(l.initial<l.max);}
});
test('spawn selects open water away from player and occupied fish',()=>{
  const point=spawnPosition(800,520,[{x:120,y:180}],{x:400,y:260},()=>.5);
  assert.ok(Math.hypot(point.x-400,point.y-260)>=110);
  assert.ok(Math.hypot(point.x-120,point.y-180)>=75);
  assert.ok(point.y>=155&&point.y<=400);
});
