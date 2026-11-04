import test from 'node:test';import assert from 'node:assert/strict';
import {answerLabelPosition} from '../src/answer-label.mjs';
test('long answers remain inside viewport at left, right and top edges',()=>{
 for(const [x,y] of [[30,155],[770,155],[200,490]]){const p=answerLabelPosition(x,y,120,80,800,520);assert.ok(p.x-60>=0&&p.x+60<=800);assert.ok(p.y-40>=100&&p.y+40<=520);}
});
