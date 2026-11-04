export const FRAME_COUNT=24;
const bosses=['tuna','crab','octopus','manta','crab','jelly','seahorse','manta','jelly','seahorse','octopus','tuna','crab'];
const names={tuna:'金枪鱼守卫',crab:'赤甲蟹守卫',octopus:'章鱼守卫',manta:'蝠鲼守卫',jelly:'月光水母守卫',seahorse:'海马守卫'};
const tints=[0xffffff,0xffede1,0xddefff,0xe5fff1,0xffe7c9,0xf0e5ff,0xe8ffff,0xe3f0ff,0xffe5f8,0xe1fff0,0xffeddd,0xe0f5ff,0xf2ffdf];
export function stageLook(stage){const i=Math.max(0,Math.min(12,stage));return {background:i,boss:bosses[i],bossName:names[bosses[i]],tint:tints[i]};}
export function animationFrame(seconds,phase=0){return Math.floor(Math.max(0,seconds)*12+phase*3)%FRAME_COUNT;}
export function swimDeformation(frame,x,kind='fish'){
  const phase=frame/FRAME_COUNT*Math.PI*4;
  const tail=Math.max(0,(.58-x)/.58)**2;
  const fin=Math.exp(-(((x-.53)/.17)**2));
  const wing=(kind==='manta'||kind==='crab')?Math.abs(x-.5)*2:tail;
  const amplitude=kind==='turtle'?3:kind==='jelly'?4:8;
  return {offset:Math.sin(phase+x*3)*wing*amplitude,stretch:1+Math.sin(phase+.7)*fin*(kind==='turtle'||kind==='manta'?.10:.055),blink:frame===FRAME_COUNT-1};
}
