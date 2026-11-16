import {activateDevice,createEel,stepEel} from './eel.mjs';

export function attachEel(scene,{onStatus,onVictory,onHit}){
  const art=scene.add.graphics().setDepth(6);
  const label=scene.add.text(0,0,'',{fontSize:'14px',color:'#fff0ca',stroke:'#132b42',strokeThickness:4}).setOrigin(.5).setDepth(8);
  let eel;
  return {
    start(){
      if(eel)return false;
      eel=createEel();
      onStatus?.(eel);
      return true;
    },
    stop(){
      eel=null;
      art.clear();
      label.setText('');
      onStatus?.(null);
    },
    activate(id,repaired){
      if(!eel||!activateDevice(eel,id,repaired))return false;
      onStatus?.(eel);
      return true;
    },
    update(dt,reduced){
      if(!eel)return;
      const {w,h,player}=scene;
      const result=stepEel(eel,{x:player.x/w,y:player.y/h},dt,w,h);
      if(result==='victory'){this.stop();onVictory?.();return;}
      if(result==='hit'){eel=createEel();scene.goToStart();scene.positionQuestion();onHit?.();return;}
      const x=eel.x*w,y=eel.y*h;
      const facing=eel.target&&['charge','warning'].includes(eel.phase)?Math.sign(eel.target.x-eel.x)||-1:eel.direction;
      const exposed=eel.phase==='exposed',warning=eel.phase==='warning',disrupted=eel.phase==='disrupted';
      const color=exposed?0xffd26d:warning?0xff8874:disrupted?0x9ff4e1:0x8689cd;
      art.clear();
      art.lineStyle(2,0xf9d792,.52).lineBetween(w*.56,h*.55,w*.56,h*.82);
      if(warning&&eel.target)art.lineStyle(3,color,.7).lineBetween(x,y,eel.target.x*w,eel.target.y*h);
      if(disrupted||exposed)art.lineStyle(2,color,.7).strokeCircle(x,y,31+(reduced?0:Math.sin(eel.age*5)*5));
      art.lineStyle(12,color,1).beginPath();
      for(let i=0;i<=12;i++){
        const wave=Math.sin(i*.55-(reduced?0:eel.age*8))*i*.85;
        if(i===0)art.moveTo(x,y);else art.lineTo(x-facing*i*5,y+wave);
      }
      art.strokePath().fillStyle(color).fillEllipse(x,y,25,17);
      art.fillStyle(0x142638).fillCircle(x+facing*5,y-3,2.6);
      const text=exposed?'弱点暴露 · 游近反击':warning?'鳗鱼准备冲刺':disrupted?'鳗鱼受到干扰':eel.phase==='charge'?'鳗鱼冲刺':'巡游鳗鱼';
      label.setPosition(Math.min(w-76,Math.max(76,x)),y+28);
      if(label.text!==text)label.setText(text);
      onStatus?.(eel);
    },
  };
}
