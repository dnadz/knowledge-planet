import test from 'node:test';
import assert from 'node:assert/strict';
import {newEnemyCycle,tickEnemy,dispelEnemy} from '../src/enemy.mjs';
test('starts safe, appears after ten seconds and disappears ten seconds later',()=>{
  const e=newEnemyCycle();assert.equal(e.active,false);
  tickEnemy(e,9);assert.equal(e.active,false);tickEnemy(e,1);assert.equal(e.active,true);assert.equal(e.remaining,10);
  tickEnemy(e,10);assert.equal(e.active,false);assert.equal(e.remaining,10);
});
test('only correct food during encounter dispels and resets safe interval',()=>{
  const e=newEnemyCycle();tickEnemy(e,10);tickEnemy(e,3);
  assert.equal(dispelEnemy(e,false),false);assert.equal(e.remaining,7);
  assert.equal(dispelEnemy(e,true),true);assert.equal(e.active,false);assert.equal(e.remaining,10);
  tickEnemy(e,9);assert.equal(e.active,false);tickEnemy(e,1);assert.equal(e.active,true);
});
test('paused time does not count; idle correct answers do not postpone spawn',()=>{
  const e=newEnemyCycle();tickEnemy(e,5);tickEnemy(e,50,true);assert.equal(e.remaining,5);
  dispelEnemy(e,true);assert.equal(e.remaining,5);tickEnemy(e,5);assert.equal(e.active,true);
});
