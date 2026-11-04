import test from 'node:test';import assert from 'node:assert/strict';
import {swimTexture} from '../src/swim-textures.mjs';
import {FRAME_COUNT} from '../src/visuals.mjs';
test('whole-model frames are generated once, bounded and cached',()=>{
 const cache=new Map(),frames=[],draws=[];let refreshes=0;
 const ctx={drawImage(...args){draws.push(args);},beginPath(){},ellipse(){},fill(){},moveTo(){},quadraticCurveTo(){},stroke(){}};
 const source={width:600,height:200},base={get(){return {cutX:200,cutY:0,cutWidth:200,cutHeight:200};},getSourceImage(){return source;}};
 const scene={textures:{exists:k=>cache.has(k),get:()=>base,createCanvas(k,w,h){const sheet={getContext:()=>ctx,add(...frame){frames.push({frame,w,h});},refresh(){refreshes++;}};cache.set(k,sheet);return sheet;}}};
 const key=swimTexture(scene,'fish','red');assert.equal(frames.length,FRAME_COUNT);assert.equal(refreshes,1);
 assert.equal(swimTexture(scene,'fish','red'),key);assert.equal(refreshes,1);
 for(const {frame,w,h} of frames){const [, ,x,y,fw,fh]=frame;assert.ok(x>=0&&y>=0&&x+fw<=w&&y+fh<=h);}
 for(const [,sx,sy,sw,sh] of draws){assert.ok(sx>=200&&sx+sw<=400.00001);assert.equal(sy,0);assert.equal(sh,200);}
});
