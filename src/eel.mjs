export const eelDevices = [
  {id:'flow', skill:'add', tool:'潮汐尺', action:'水流推开', duration:5},
  {id:'reverse', skill:'subtract', tool:'逆流镜', action:'逆流诱导', duration:6},
  {id:'array', skill:'multiply', tool:'温差仪', action:'照亮暗区', duration:7},
];
export const eelVictoryKey='knowledge-planet-ocean-v1:eel-victory:v1';
export const deepWater=p=>p.x>=.56&&p.y>=.55;
export const createEel=()=>({x:.8,y:.72,phase:'patrol',remaining:0,cooldown:0,age:0,direction:1,effect:null,target:null});

export function activateDevice(eel,id,repaired){
  const device=eelDevices.find(item=>item.id===id);
  const combo=id==='combo'&&eelDevices.every(item=>repaired.includes(item.id));
  if(eel.cooldown>0||!(combo||device&&repaired.includes(id)))return false;
  eel.phase=combo?'exposed':'disrupted';
  eel.remaining=combo?8:device.duration;
  eel.cooldown=eel.remaining+3;
  eel.effect=id;
  if(id==='flow')eel.x=Math.min(.87,eel.x+.10);
  if(id==='reverse')eel.direction*=-1;
  return true;
}

export function stepEel(eel,player,dt,width,height){
  eel.age+=dt;
  eel.cooldown=Math.max(0,eel.cooldown-dt);
  eel.remaining-=dt;
  const near=deepWater(player);
  const distance=Math.hypot((player.x-eel.x)*width,(player.y-eel.y)*height);
  if(eel.phase==='exposed'&&eel.remaining>0&&near&&distance<36)return 'victory';
  if((eel.phase==='exposed'||eel.phase==='disrupted')&&eel.remaining>0){
    if(eel.effect==='reverse')eel.x=Math.max(.63,Math.min(.9,eel.x+eel.direction*dt*.045));
    return;
  }
  if(eel.phase!=='patrol'&&eel.remaining<=0){
    if(eel.phase==='warning'&&near){
      eel.phase='charge';
      eel.remaining=.85;
    }else eel.phase='patrol';
  }
  if(eel.phase==='patrol'){
    eel.x+=eel.direction*dt*.07;
    if(eel.x<.64||eel.x>.87)eel.direction*=-1;
    eel.y=.72;
    if(near&&distance<Math.min(195,width*.36)){
      eel.phase='warning';
      eel.remaining=.8;
      eel.target={...player};
    }
  }
  if(eel.phase==='charge'&&near){
    if(distance<34)return 'hit';
    const target=eel.target||player;
    const dx=(target.x-eel.x)*width,dy=(target.y-eel.y)*height;
    const length=Math.hypot(dx,dy);
    if(length>0){
      const stride=Math.min(length,dt*190)/length;
      eel.x=Math.max(.58,Math.min(.92,eel.x+dx*stride/width));
      eel.y=Math.max(.56,Math.min(.80,eel.y+dy*stride/height));
    }
  }
}

export function deviceHint(question){
  const expression=question.prompt.match(/^计算 (.+)。$/)?.[1]?.replaceAll('−','-');
  if(question.skill==='add'&&expression){
    const terms=expression.split('+').map(term=>Number(term.replace(/[()]/g,'')));
    if(terms.every(Number.isFinite)){
      return ['从 0 出发',...terms.map(term=>term===0?'原地不动':(term<0?'← 左移 ':'→ 右移 ')+Math.abs(term)),'最后在哪？'].join('　');
    }
  }
  if(question.skill==='subtract'){
    const pair=expression?.match(/^(\(-?\d+\)|-?\d+)-(\(-?\d+\)|-?\d+)$/);
    if(pair)return '改写成 '+pair[1]+' + ('+(-Number(pair[2].replace(/[()]/g,'')))+')，再自己计算。';
    return '以海平面为 0，两个水下位置都记为负数。用终点高度减去起点高度。';
  }
  if(question.skill==='multiply'&&expression){
    const factors=expression.split('×').map(term=>Number(term.replace(/[()]/g,'')));
    if(factors.every(Number.isFinite)){
      return '找到 '+factors.filter(n=>n<0).length+' 个负因数。先判断积的符号，再计算 '+factors.map(Math.abs).join(' × ')+'。';
    }
  }
  return '先判断每个数的方向，再检查运算符。';
}
