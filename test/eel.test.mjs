import test from 'node:test';
import assert from 'node:assert/strict';
import {createEel,activateDevice,stepEel,deviceHint} from '../src/eel.mjs';
const all=['flow','reverse','array'];
test('only repaired devices activate, and all three are required for a counterattack',()=>{
 const e=createEel();
 assert.equal(activateDevice(e,'flow',[]),false);
 assert.equal(activateDevice(e,'combo',['flow','reverse']),false);
 assert.equal(activateDevice(e,'flow',['flow']),true);
 assert.equal(e.phase,'disrupted');
 assert.equal(activateDevice(e,'flow',['flow']),false);
 const fresh=createEel();
 assert.equal(activateDevice(fresh,'combo',all),true);
 assert.equal(stepEel(fresh,{x:fresh.x,y:fresh.y},0,800,500),'victory');
});
test('safe water prevents contact; disruption expires; contact returns hit instead of victory',()=>{
 const e=createEel();
 assert.equal(stepEel(e,{x:.35,y:.65},1,800,500),undefined);
 activateDevice(e,'flow',['flow']);
 for(let i=0;i<51;i++)stepEel(e,{x:.35,y:.65},.1,800,500);
 assert.equal(e.phase,'patrol');
 e.phase='charge';e.remaining=.5;
 assert.equal(stepEel(e,{x:e.x,y:e.y},0,800,500),'hit');
});
test('tools use the current operands without giving the result',()=>{
 assert.match(deviceHint({skill:'add',prompt:'计算 (−8)+3。'}),/左移 8.*右移 3/);
 assert.match(deviceHint({skill:'subtract',prompt:'计算 4−(−5)。'}),/4 \+ \(5\)/);
 assert.match(deviceHint({skill:'multiply',prompt:'计算 (−2)×4×(−3)。'}),/2 个负因数/);
});
