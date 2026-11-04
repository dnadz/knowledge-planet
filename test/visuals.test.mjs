import test from 'node:test';import assert from 'node:assert/strict';
import {stageLook,swimDeformation,animationFrame,FRAME_COUNT} from '../src/visuals.mjs';
test('thirteen stages use thirteen different background cells and several bosses',()=>{
 const looks=Array.from({length:13},(_,i)=>stageLook(i));assert.equal(new Set(looks.map(l=>l.background)).size,13);assert.ok(new Set(looks.map(l=>l.boss)).size>=5);
});
test('swimming tail and fins actually move across frames without invalid scaling',()=>{
 const a=swimDeformation(0,.1),b=swimDeformation(3,.1);assert.notEqual(a.offset,b.offset);
 for(let i=0;i<FRAME_COUNT;i++)for(const x of [0,.3,.5,.9,1]){const p=swimDeformation(i,x);assert.ok(p.stretch>.8&&p.stretch<1.2);assert.ok(Number.isFinite(p.offset));}
});
test('animation frames are bounded and include blink frames',()=>{
 for(let t=0;t<20;t+=.03){const f=animationFrame(t,2);assert.ok(f>=0&&f<FRAME_COUNT);}
 assert.equal(swimDeformation(FRAME_COUNT-1,.8).blink,true);
});
