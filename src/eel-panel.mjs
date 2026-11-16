import {eelDevices,eelVictoryKey} from './eel.mjs';

export function createEelPanel({getStage,getCompleted,getOcean,focusGame}){
  const panel=document.createElement('section');
  panel.className='eel-panel';
  panel.hidden=true;
  panel.innerHTML='<strong>海沟深处 · 巡游鳗鱼</strong><p id="eel-status" aria-live="polite"></p><div class="eel-actions"><button id="eel-start" class="outline">开始深水遭遇</button><button id="eel-leave" class="outline">结束遭遇</button>'+eelDevices.map(d=>'<button class="outline" data-eel-device="'+d.id+'">'+d.action+'</button>').join('')+'<button id="eel-combo" class="primary">三台联动 · 暴露弱点</button><button id="eel-observe" class="outline">查看潮汐观测窗</button></div><div id="eel-observation" hidden><p>🏅 海沟观测员 · 水流恢复平稳，赤甲蟹正在观测窗外巡游。</p><div class="eel-window" aria-hidden="true"><span>🦀</span></div></div>';
  document.querySelector('.ocean-frame').after(panel);
  const find=id=>panel.querySelector(id);
  const start=find('#eel-start'),leave=find('#eel-leave'),combo=find('#eel-combo');
  const status=find('#eel-status'),observe=find('#eel-observe'),observation=find('#eel-observation');
  const devices=[...panel.querySelectorAll('[data-eel-device]')];
  let encounter=null,won=false,saveFailed=false,last='';
  try{won=localStorage.getItem(eelVictoryKey)==='won';}catch{}
  function render(){
    panel.hidden=getStage()!==1;
    if(panel.hidden){last='';return;}
    const repaired=getCompleted();
    const active=!!encounter,all=eelDevices.every(d=>repaired.includes(d.id));
    const cooling=Math.ceil(Math.max(0,encounter?.cooldown||0));
    const remaining=Math.ceil(Math.max(0,encounter?.remaining||0));
    const signature=[active,won,saveFailed,encounter?.phase,cooling,remaining,repaired.join()].join('|');
    if(signature===last)return;
    last=signature;
    status.textContent=won?'潮汐观测窗已开启 · 获得「海沟观测员」徽章。'+(saveFailed?'本次奖励未能保存。':'')
      :!active?'可选遭遇。鳗鱼在右下深水区巡游，左侧可安全觅食。修好设备即可干扰它。'
      :encounter.phase==='exposed'?'弱点暴露 '+remaining+' 秒 · 游到鳗鱼身旁反击！'
      :encounter.phase==='disrupted'?'鳗鱼受到干扰 '+remaining+' 秒。'
      :cooling?'设备正在复位 '+cooling+' 秒，可游回左侧安全区。'
      :all?'三台设备就绪。靠近鳗鱼后启动联动，再游近反击。'
      :'往右下进入深水区。修复设备后，可在这里主动干扰鳗鱼。';
    start.hidden=active||won;
    leave.hidden=!active;
    observe.hidden=!won;
    for(const button of devices){
      button.hidden=!active;
      button.disabled=!!cooling||!repaired.includes(button.dataset.eelDevice);
    }
    combo.hidden=!active;
    combo.disabled=!!cooling||!all;
  }
  start.onclick=()=>{if(!won&&getOcean()?.startEel())focusGame();};
  leave.onclick=()=>{getOcean()?.leaveEel();start.focus();};
  for(const button of devices){
    button.onclick=()=>{if(getOcean()?.useEelDevice(button.dataset.eelDevice))focusGame();};
  }
  combo.onclick=()=>{if(getOcean()?.useEelDevice('combo'))focusGame();};
  observe.onclick=()=>{observation.hidden=!observation.hidden;observe.setAttribute('aria-expanded',String(!observation.hidden));};
  return {
    render,
    update(state){encounter=state;render();},
    win(){
      won=true;
      try{localStorage.setItem(eelVictoryKey,'won');}catch{saveFailed=true;}
      render();
    },
  };
}
