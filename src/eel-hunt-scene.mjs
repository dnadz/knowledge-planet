import {advanceHuntClock,mouthTouches,sharkMouthOffset,cageFish,createHunt,eelSpeed,feedEel,huntTarget,restartChase} from './eel-hunt.mjs';

import {swimTexture} from './swim-textures.mjs';
import {animationFrame} from './visuals.mjs';

export const SWIM_SPEED=170;
export const EEL_SPAWN_WAIT=10;

export function attachHunt(scene,{onCage,onEat,onBite,onStatus}){
 const art=scene.add.graphics().setDepth(8);
 const fishSprites=cageFish.map((_,i)=>scene.add.image(0,0,'cage-fish',i).setDepth(7).setVisible(false));
 const predatorSprite=scene.add.image(0,0,'__MISSING').setDepth(7).setVisible(false);
 let spriteWidth=128;
 const zones=cageFish.map((fish,i)=>{
  const zone=scene.add.zone(0,0,52,49).setDepth(9).setInteractive({useHandCursor:true});
  zone.on('pointerdown',()=>onCage(i));
  return zone;
 });
 let state,hunt,position,fishPositions,wait=0,finished=false,facing=-1;
 const spawn=()=>({x:Math.max(65,scene.boss.x-scene.boss.displayWidth*.63)/scene.w,y:(scene.boss.y+scene.boss.displayHeight*.20)/scene.h});
 const cage=i=>({x:1-30/scene.w,y:(Math.round(scene.h/2)+(i-1)*72)/scene.h});
 function move(from,to,step){
  const dx=(to.x-from.x)*scene.w,dy=(to.y-from.y)*scene.h;
  const distance=Math.hypot(dx,dy);
  if(distance){const fraction=Math.min(1,step/distance);from.x+=dx/scene.w*fraction;from.y+=dy/scene.h*fraction;}
  return distance;
 }
 function drawFish(x,y,i,released,reduced){
  const width=released?50:43;
  const bob=released&&!reduced?Math.sin(hunt.age*7+i)*1.7:0;
  fishSprites[i].setVisible(true).setPosition(x,y+bob).setDisplaySize(width,width*144/256);
 }
 function draw(reduced=false){
  art.clear();
  zones.forEach((zone,i)=>{
   const spot=cage(i),x=spot.x*scene.w,y=spot.y*scene.h;
   zone.setPosition(x,y);
   zone.input.enabled=!!state&&state.solved[i]<3;
   fishSprites[i].setVisible(false);
   if(!state)return;
   art.lineStyle(2,state.solved[i]===3?0x78aa9a:0xf2d29b,.95);
   art.strokeRoundedRect(x-23,y-22,46,44,5);
   if(state.solved[i]<3){
    drawFish(x,y,i,false,reduced);
    for(const offset of [-13,0,13])art.lineStyle(1,0xf2d29b,.85).lineBetween(x+offset,y-21,x+offset,y+21);
   }else if(!state.eaten[i]){
    const fish=fishPositions[i];
    drawFish(fish.x*scene.w,fish.y*scene.h,i,true,reduced);
   }
  });
  predatorSprite.setVisible(!!hunt&&!finished);
  if(!hunt||finished)return;
  predatorSprite.setPosition(position.x*scene.w,position.y*scene.h).setFlipX(facing<0);
  if(predatorSprite.texture.key.startsWith('swim-')){
   predatorSprite.setFrame(reduced||hunt.rest>0||wait>0?0:animationFrame(hunt.age,1));
  }
  predatorSprite.setDisplaySize(spriteWidth,spriteWidth*predatorSprite.frame.height/predatorSprite.frame.width);
  predatorSprite.setAlpha(hunt.rest>0?.82:1);
 }
 return {
  enter(next,predator){
   state=next;
   hunt=state?createHunt():null;
   position=spawn();
   fishPositions=cageFish.map((_,i)=>cage(i));
   finished=!state||state.eaten.every(Boolean);
   wait=EEL_SPAWN_WAIT;
   if(hunt){
    hunt.rest=state.rest||0;
    spriteWidth=1.4*Math.min(148,Math.max(116,scene.layout.food*2.05));
    if(scene.textures.exists(predator.texture))predatorSprite.setTexture(swimTexture(scene,predator.texture,'__BASE',predator.animation),0);
   }
   draw();
  },
  refresh(){draw();},
  correct(){if(hunt)restartChase(hunt);},
  update(dt,reduced){
   if(!hunt||finished)return;
   if(wait>0){
    wait=Math.max(0,wait-dt);
    position=spawn();
    onStatus('waiting',.5,Math.ceil(wait));
    draw(reduced);
    return;
   }
   const activeTime=advanceHuntClock(hunt,dt);
   state.rest=hunt.rest;
   const target=huntTarget(state,hunt);
   for(const [i,fish] of fishPositions.entries()){
    if(state.solved[i]===3&&!state.eaten[i])move(fish,{x:.65,y:cage(i).y},dt*44);
   }
   if(target==='leave'){
    facing=1;
    move(position,{x:1.25,y:position.y},dt*SWIM_SPEED);
    finished=position.x>1+70/scene.w;
   }else if(target!=='rest'&&activeTime>0){
    const fishIndex=state.solved.findIndex((count,i)=>count===3&&!state.eaten[i]);
    const destination=target==='fish'?fishPositions[fishIndex]:{x:scene.player.x/scene.w,y:scene.player.y/scene.h};
    facing=Math.sign(destination.x-position.x)||facing;
    const step=activeTime*SWIM_SPEED*eelSpeed(hunt.age);
    const offset=sharkMouthOffset(spriteWidth,facing);
    move(position,{x:destination.x-offset.x/scene.w,y:destination.y-offset.y/scene.h},step);
    const mouth={x:position.x*scene.w+offset.x,y:position.y*scene.h+offset.y};
    const prey={x:destination.x*scene.w,y:destination.y*scene.h};
    const radius=target==='fish'?14:Math.min(28,Math.max(13,scene.layout.turtle*.17));
    if(target==='fish'&&mouthTouches(mouth,prey,radius)){
     feedEel(state,hunt,fishIndex);
     state.rest=hunt.rest;
     onEat(fishIndex);
    }else if(target==='player'&&mouthTouches(mouth,prey,radius)){
     restartChase(hunt);
     position=spawn();
     wait=EEL_SPAWN_WAIT;
     onBite();
    }
   }
   if(wait>0)onStatus('waiting',.5,Math.ceil(wait));
   else onStatus(target,eelSpeed(hunt.age),Math.ceil(hunt.rest));
   draw(reduced);
  },
 };
}
