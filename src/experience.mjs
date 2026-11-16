import {createAdventureStore} from './adventure-storage.mjs';
import {readSettings,writeSettings} from './experience-settings.mjs';
import {createAudio} from './audio.mjs';
export function createExperience({onMode,onFreeze,onWorld,onGuide,onChallenge,onRecords}){
 let storage;try{storage=window.localStorage;}catch{storage={getItem(){throw Error();},setItem(){throw Error();}};}
 const store=createAdventureStore(storage),settings=readSettings(storage),audio=createAudio();let settingsFailed=false;
 const reduced=()=>settings.reducedMotion??matchMedia('(prefers-reduced-motion: reduce)').matches;
 const mode=()=>'practice';
 const bar=document.createElement('section');bar.className='experience-bar';bar.innerHTML='<div class="activity-actions" aria-label="海域活动"><button id="mode-practice">觅食练习</button></div><div class="experience-tools"><button id="stage-knowledge">本海域知识与解题方法</button><button id="quick-challenge">挑战守卫</button><button id="learning-record">学习记录</button><button id="toggle-map">展开 / 收起航线</button><button id="experience-settings">声音与显示</button></div>';
 if(matchMedia('(min-width:1051px)').matches)document.body.classList.add('panels-open');
 document.querySelector('.expedition-heading').after(bar);
 const status=document.createElement('p');
 status.className='experience-save';
 status.setAttribute('role','status');
 bar.after(status);
 const settingsDialog=document.createElement('dialog');settingsDialog.id='settings-panel';settingsDialog.innerHTML='<div class="task-top"><h2>让航行适合你</h2><button id="settings-close" aria-label="关闭设置">×</button></div><label class="setting-row"><span>声音反馈</span><input id="sound-enabled" type="checkbox"></label><label class="setting-row"><span>音量</span><input id="sound-volume" type="range" min="0" max="1" step="0.05"></label><label class="setting-row"><span>减少动态效果</span><select id="reduced-motion"><option value="system">跟随系统</option><option value="yes">开启</option><option value="no">关闭</option></select></label><p id="audio-status" role="status">声音默认关闭，开启后可听到交互反馈。</p><button id="sound-preview" class="primary">试听反馈</button>';
 document.body.append(settingsDialog);settingsDialog.addEventListener('close',()=>onFreeze());
 function render(){
  document.body.classList.toggle('reduced-motion',reduced());
  document.body.classList.add('v03-layout');
  status.textContent=settingsFailed?'偏好设置未保存；本次仍可使用。':'';
  status.classList.toggle('warning',settingsFailed);
  onWorld?.(reduced());
 }
 function persistSettings(){settingsFailed=!writeSettings(storage,settings);audio.setVolume(settings.volume);audio.setMuted(!settings.soundEnabled);render();}
 document.querySelector('#mode-practice').onclick=()=>{onMode('practice');const game=document.querySelector('#game');game.scrollIntoView({block:'nearest'});game.focus({preventScroll:true});};
 document.querySelector('#stage-knowledge').onclick=onGuide;document.querySelector('#quick-challenge').onclick=onChallenge;document.querySelector('#learning-record').onclick=onRecords;
 document.querySelector('#toggle-map').onclick=()=>document.body.classList.toggle('panels-open');
 document.querySelector('#experience-settings').onclick=()=>{if(document.querySelector('#panel').open)return;settingsDialog.querySelector('#sound-enabled').checked=settings.soundEnabled;settingsDialog.querySelector('#sound-volume').value=settings.volume;settingsDialog.querySelector('#reduced-motion').value=settings.reducedMotion===null?'system':settings.reducedMotion?'yes':'no';settingsDialog.showModal();onFreeze();};
 settingsDialog.querySelector('#settings-close').onclick=()=>settingsDialog.close();
 settingsDialog.querySelector('#sound-enabled').onchange=async e=>{settings.soundEnabled=e.target.checked;if(settings.soundEnabled&&!await audio.unlock()){settings.soundEnabled=false;e.target.checked=false;settingsDialog.querySelector('#audio-status').textContent='浏览器未能启用声音；游戏可继续。';}persistSettings();};
 settingsDialog.querySelector('#sound-volume').oninput=e=>{settings.volume=Number(e.target.value);persistSettings();};
 settingsDialog.querySelector('#reduced-motion').onchange=e=>{settings.reducedMotion=e.target.value==='system'?null:e.target.value==='yes';persistSettings();};
 settingsDialog.querySelector('#sound-preview').onclick=async()=>{if(!settings.soundEnabled){settingsDialog.querySelector('#audio-status').textContent='先开启声音反馈，再试听。';return;}await audio.unlock();audio.resume();audio.play('success');};
 matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',render);
 const unlockFromGesture=()=>{if(settings.soundEnabled)audio.unlock();};document.addEventListener('pointerdown',unlockFromGesture);document.addEventListener('keydown',unlockFromGesture);
 audio.setMuted(!settings.soundEnabled);audio.setVolume(settings.volume);render();
 return {get mode(){return mode();},get blocked(){return settingsDialog.open;},get store(){return store;},get settings(){return settings;},get reducedMotion(){return reduced();},refresh:render,feedback(kind){audio.play(kind);},syncPause(value){value?audio.suspend():audio.resume();},exportData(){return {adventureRecords:structuredClone(store.state),experienceSettings:{...settings},adventureRecovery:store.rawPreserved===null?null:{raw:store.rawPreserved,readOnly:store.readOnly,conflict:store.conflict}};}};
}
