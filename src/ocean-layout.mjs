export function oceanLayout(width,height){
  const compact=width<600;
  const max=compact?7:9;
  return {max,initial:compact?6:8,food:compact?56:64,turtle:compact?108:126,predator:compact?190:235,boss:compact?210:260};
}
export function spawnPosition(width,height,fish,player,random=Math.random){
  const top=155,bottom=Math.max(top+30,height-120),left=48,right=Math.max(left+40,width-48);
  const candidates=[];
  for(let i=0;i<50;i++)candidates.push({x:left+random()*(right-left),y:top+random()*(bottom-top)});
  for(let row=0;row<4;row++)for(let col=0;col<7;col++)candidates.push({x:left+col*(right-left)/6,y:top+row*(bottom-top)/3});
  const clearance=p=>Math.min(Math.hypot(p.x-player.x,p.y-player.y)/1.45,...fish.map(f=>Math.hypot(p.x-f.x,p.y-f.y)));
  return candidates.reduce((best,p)=>clearance(p)>clearance(best)?p:best,candidates[0]);
}
