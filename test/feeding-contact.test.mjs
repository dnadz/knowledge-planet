import test from 'node:test';import assert from 'node:assert/strict';
import {feedingContact} from '../src/feeding-contact.mjs';
const p={x:200,y:200,size:140,facing:1,moving:true,speed:100};
test('body overlap, behind, idle and brief touch do not eat',()=>{
 for(const fish of [{x:200,y:200},{x:170,y:200},{x:247,y:225}])assert.equal(feedingContact(p,fish,.2).eat,false);
 assert.equal(feedingContact({...p,moving:false},{x:247,y:200},.2).eat,false);
 assert.equal(feedingContact(p,{x:247,y:200},.05).eat,false);
});
test('sustained directed mouth contact eats; leaving clears contact',()=>{
 let r=feedingContact(p,{x:247,y:200},.07);r=feedingContact(p,{x:247,y:200},.07,r.held);assert.equal(r.eat,true);
 assert.equal(feedingContact(p,{x:247,y:250},.01,r.held).held,0);
 assert.equal(feedingContact({...p,facing:-1},{x:153,y:200},.13).eat,true);
});
test('a growing body does not turn body overlap into a bite',()=>{
 for(const size of [64,128,192])assert.equal(feedingContact({...p,size},{x:p.x,y:p.y},.5).eat,false);
});
