import {ADVENTURES,missionsForStage} from './adventure-content.mjs';
import {landmarkSvg} from './adventure-art.mjs';
import {activeRecords} from './adventure-state.mjs';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const names={demo:'观察演示',guided:'引导练习',independent:'独立尝试',transfer:'换个情境'};
const limits=q=>[q.min??(q.kind==='distance'?0:-6),q.max??6];
function diagram(q,r,step,draft){
 const x=n=>46+(n+6)*34;const reveal=q.phase==='demo'?step>=1:r?.done;
 if(q.phase==='transfer'&&!reveal)return '';
 if(q.expression)return `<svg class="task-axis arithmetic-diagram" viewBox="0 0 500 185" role="img" aria-label="${esc(q.expression)}，${reveal?'运算核对':'先预测结果'}"><text x="250" y="80" style="font-size:28px">${esc(q.expression)} = ${reveal?q.answer:'?'}</text><text x="250" y="132">${reveal?'结合运算规则，核对符号与大小':'先看运算符，再判断符号'}</text></svg>`;
 const end=q.answer,from=q.kind==='axis'?q.start:0;
 const ticks=Array.from({length:13},(_,i)=>{const n=i-6;return `<g><path d="M${x(n)} 105v8"/><text x="${x(n)}" y="137">${n}</text></g>`;}).join('');
 let art=`<path d="M35 105H465l-7-5m7 5-7 5"/>${ticks}<circle cx="${x(0)}" cy="105" r="5" fill="#f2ce7d"/><text x="${x(0)}" y="164">原点 0</text>`;
 art+=`<circle cx="${x(q.start)}" cy="105" r="8" fill="#9ce4cd"/><text x="${x(q.start)}" y="87">${q.kind==='axis'?'起点':'位置'} ${q.start}</text>`;
 if(reveal){const target=q.kind==='distance'?q.start:end;
  art+=`<path class="verify-path" d="M${x(from)} 62H${x(target)}" stroke="#f2ce7d" stroke-width="5"/><circle cx="${x(target)}" cy="62" r="6" fill="#f2ce7d"/><text x="250" y="30">${q.kind==='distance'?`相差 ${end} 个单位`:q.kind==='axis'?`${q.start} ${q.move<0?'−':'+'} ${Math.abs(q.move)} = ${end}`:`${q.start} 与 ${end} 关于 0 对称`}</text>`;
 }else if(draft.value!==''&&Number.isInteger(Number(draft.value))&&Math.abs(Number(draft.value))<=6){art+=`<path d="M${x(Number(draft.value))} 49v27" stroke="#f2ce7d"/><text x="250" y="30">你的预测：${esc(draft.value)}，提交后一起核对</text>`;}
 return `<svg class="task-axis" viewBox="0 0 500 185" role="img" aria-label="从负6到6的数轴，原点0，向右为正，每相邻刻度一个单位"><g fill="none" stroke="#719da6" stroke-width="2">${art}</g></svg>`;
}
export function createAdventureView({root,onEvent,onExit,onStudy,onResume,getStage=()=>0,getStageTitle=()=>'基准浅湾'}){
 let state,feedback='',readOnly=false,demoStep=0,lastItem=null,journal=false,paused=false;
 const dialog=document.createElement('dialog');dialog.id='adventure-panel';dialog.className='adventure-panel';root.append(dialog);
 function emit(type,extra={}){onEvent({type,missionId:state.missionId,itemId:state.itemId,...extra});}
 function close(){dialog.close();}
 dialog.addEventListener('close',()=>{lastItem=null;onExit();});
 dialog.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.action==='close')return close();
  if(b.dataset.action==='resume'){onResume?.();return;}
  if(paused)return;
  if(b.dataset.action==='study'){const m=ADVENTURES.find(m=>m.id===state.missionId&&m.stage===getStage())||missionsForStage(getStage())[0];close();onStudy?.(m?.skill);return;}
  if(b.dataset.open){journal=false;emit('START',{missionId:b.dataset.open});return;}
  if(b.dataset.action==='demo'){demoStep++;draw();return;}
  if(b.dataset.action==='replay'){demoStep=0;draw();return;}
  if(b.dataset.step){const input=dialog.querySelector('#task-value'),q=ADVENTURES.flatMap(m=>m.items).find(q=>q.id===state.itemId),[min,max]=limits(q);const current=Number(input.value||0);input.value=String(Math.max(min,Math.min(max,current+Number(b.dataset.step))));emit('SELECT_VALUE',{value:input.value});return;}
  if(b.dataset.action==='hint')emit('SHOW_HINT');
  if(b.dataset.action==='next')emit('NEXT');
 });
 dialog.addEventListener('input',e=>{if(e.target.id==='task-value')emit('SELECT_VALUE',{value:e.target.value});});
 dialog.addEventListener('change',e=>{if(e.target.name==='task-reason')emit('SELECT_REASON',{reasonId:e.target.value});});
 dialog.addEventListener('submit',e=>{e.preventDefault();emit('SUBMIT');});
 function draw(){
  const stageMissions=missionsForStage(getStage()),m=ADVENTURES.find(m=>m.id===state.missionId&&m.stage===getStage())||stageMissions[0]||ADVENTURES[0],q=m.items.find(q=>q.id===state.itemId),r=q&&activeRecords(state)[q.id];
  if(lastItem!==state.itemId){demoStep=0;lastItem=state.itemId;}
  let content='';
  if(journal){content=`<p class="task-kicker">航海日志</p><h2>这条航线，留下了你的发现</h2><p>任务完成包含引导与订正；首答记录仅反映本次固定题集，不代表长期掌握。</p><div class="journal-missions">${stageMissions.length?'':'<p>本海域暂无附加任务。知识导览、解题方法、觅食和守卫仍完整可用。</p>'}${stageMissions.map((mission,i)=>`<section>${landmarkSvg(mission.id,state.completed.includes(mission.id))}<div><h3>${mission.title}</h3><p>${state.completed.includes(mission.id)?mission.reward:'等待探索'}</p><p>${mission.items.filter(q=>q.phase!=='demo').map(q=>{const a=state.records[q.id];return `${names[q.phase]}：${a?.done?(a.firstIndependent?'首答正确':a.hinted?'已用提示后完成':'已完成 / 订正'):a?.attempts?'待订正':'待尝试'}`;}).join('；')}</p><button data-open="${mission.id}" ${i>0&&!state.completed.includes(stageMissions[i-1].id)?'disabled':''}>${state.completed.includes(mission.id)?'回看 / 固定题复练':'进入任务'}</button></div></section>`).join('')}</div>`;
  }else if(!q){const siblings=missionsForStage(m.stage),next=siblings[siblings.indexOf(m)+1];content=`<div class="mission-finish">${landmarkSvg(m.id,true)}<p class="task-kicker">航线修复完成</p><h2>${m.reward}</h2><p>${m.concept}</p><p>你已经完成这段任务。提示与订正都有记录；继续原题觅食，或回看本海域知识，再挑战原有守卫。任务不会直接替代通关。</p><div class="task-actions">${next?`<button class="primary" data-open="${next.id}">继续：${next.title}</button>`:'<button class="primary" data-action="close">回到原题，继续觅食与挑战</button>'}</div></div>`;
  }else{content=`<p class="task-kicker">${m.number} / ${m.title} · ${m.items.indexOf(q)+1} / 6</p><div class="task-heading"><h2>${names[q.phase]}</h2><span>${state.completed.includes(m.id)?'固定题复练':q.phase==='independent'||q.phase==='transfer'?'先自己想一想':'慢慢观察，再试一次'}</span></div><p class="task-prompt">${esc(q.prompt)}</p>${diagram(q,r,demoStep,state.draft)}${q.phase==='demo'?`<p class="task-explanation">${demoStep===0?m.concept:demoStep===1?(q.expression?'先应用规则，再核对符号与大小。':'看清起点与原点，数一数等长的单位段。'):q.explanation}</p><div class="task-actions"><button data-action="replay">重播</button>${demoStep<2?'<button class="primary" data-action="demo">下一步演示</button>':'<button class="primary" data-action="next">明白了，开始尝试</button>'}</div>`:`<form id="task-form"><label class="answer-field" for="task-value">${q.expression?'运算结果':q.kind==='distance'?'相差的大小':'你预测的位置'}<span class="number-control"><button type="button" data-step="-1" aria-label="数值减一">−</button><input id="task-value" type="text" inputmode="text" autocomplete="off" maxlength="24" value="${esc(state.draft.value)}" ${r?.done||readOnly?'disabled':''} aria-describedby="task-range"><button type="button" data-step="1" aria-label="数值加一">+</button></span><small id="task-range">${limits(q)[0]} 至 ${limits(q)[1]} 的整数；也可以用键盘输入负号</small></label>${q.phase==='transfer'?`<fieldset ${r?.done||readOnly?'disabled':''}><legend>${esc(q.reasonPrompt)}</legend>${q.reasons.map((reason,i)=>`<label class="reason-choice"><input type="radio" name="task-reason" value="${reason.id}" ${state.draft.reasonId===reason.id?'checked':''}><span>${String.fromCharCode(65+i)}. ${reason.text}</span></label>`).join('')}</fieldset>`:''}<div class="task-feedback ${r?.done?'is-correct':''}" role="status">${esc(feedback|| (r?.done?q.explanation:r?.hinted?q.hint:q.phase==='transfer'?'核对结果和本题理由。答错不会扣能量。':'填入结果。答错不会扣能量。'))}</div><div class="task-actions"><button type="button" data-action="hint" ${r?.done||readOnly?'disabled':''}>给我一点提示</button>${r?.done?'<button type="button" class="primary" data-action="next">继续航行</button>':`<button type="submit" class="primary" ${readOnly?'disabled':''}>${q.phase==='transfer'?'提交结果与理由':'提交结果'}</button>`}</div></form>`}`;}
  dialog.innerHTML=`<header class="task-top"><span>${esc(getStageTitle())} · 航线维护</span><button data-action="close" aria-label="关闭任务">×</button></header>${paused?'<section class="task-pause" role="status"><p>航行已暂停，草稿已保留。</p><button class="primary" data-action="resume">继续任务</button></section>':''}${readOnly?'<p class="task-warning">记录暂为只读，请返回海洋导出记录或重新载入。</p>':''}<div class="task-content" ${paused?'inert':''}>${content}<footer class="task-bottom"><button data-action="study">查看完整分步讲解</button><span>不计守卫通关 · 可随时暂停离开</span></footer></div>`;
 }
 return {render(next,options={}){const focus=dialog.querySelector(':focus');state=next;feedback=options.feedback||'';readOnly=!!options.readOnly;
  if(options.soft&&focus){const value=dialog.querySelector('#task-value');if(value&&value.value!==state.draft.value)value.value=state.draft.value;return;}draw();},
 open(){journal=false;draw();if(!dialog.open)dialog.showModal();dialog.querySelector(paused?'[data-action="resume"]':'button')?.focus();},
 journal(){journal=true;draw();if(!dialog.open)dialog.showModal();},setPaused(value){if(paused===!!value)return;paused=!!value;if(state&&dialog.open){draw();if(paused)dialog.querySelector('[data-action="resume"]')?.focus();}},close,get isOpen(){return dialog.open;},destroy(){dialog.remove();}};
}
