import {SKILLS,STAGES,canEnterStage,enterStage,freshProgress,validateProgress,grow,bossPassed,questionFor} from './learning.mjs';
import {lessonFor} from './curriculum.mjs';
import {stageLook} from './visuals.mjs';
import {shelterName} from './shelter-art.mjs';
import {canChallenge,recordBossAnswer,bossQuestion} from './energy.mjs';
import {createOcean} from './ocean.mjs';
import {newRound,eatAnswer,nextRound} from './feeding.mjs';
import {PRACTICE_BANK,drawPracticeQuestion,practicePromptGraphic} from './practice-bank.mjs';
import {shelterGuide} from './shelter-guide.mjs';
import {lessonVisual,bindLessonVisuals} from './lesson-visuals.mjs';
const $=s=>document.querySelector(s),storageKey='knowledge-planet-ocean-v1';
let progress=freshProgress(),saveAvailable=true;
try{const raw=localStorage.getItem(storageKey);if(raw){const parsed=JSON.parse(raw);progress=validateProgress(parsed);if(![1,2].includes(parsed?.version))$('#save-status').textContent='旧存档无法识别，已使用新航程';}}catch{saveAvailable=false;$('#save-status').textContent='存档无法读取，本次仍可游玩；请导出记录';}
let ocean,paused=false,nearShelter=false,learned=false,noticeTimer,modalMode='',skillIndex=0,questionIndex=progress.attempts,question,hinted=false,lessonPage=0,returnFocus;
const names=SKILLS.map(s=>questionFor(s,0).label);
const activeSkills=()=>STAGES[progress.stage].skills;
let feedingRound=newRound(activeSkills()[0],progress.feedingScore,0,progress.stage),pendingRound=false;
const practiceState=new Map();
function readPractice(stage){
  const key=`${storageKey}:practice:${stage}`;
  try{
    const raw=JSON.parse(localStorage.getItem(key)||'null');
    if(Array.isArray(raw?.seen)&&Array.isArray(raw?.wrong))practiceState.set(stage,raw);
  }catch{}
  return practiceState.get(stage)||{seen:[],wrong:[],last:null};
}
function writePractice(stage,state){
  practiceState.set(stage,state);
  try{localStorage.setItem(`${storageKey}:practice:${stage}`,JSON.stringify(state));}
  catch{$('#save-status').textContent='题库记录无法保存，刷新后可能重复出题';}
}
const feedingHud=document.createElement('div');feedingHud.className='feeding-hud';feedingHud.setAttribute('aria-live','polite');document.querySelector('.ocean-frame').append(feedingHud);
const conditionText=document.createElement('div');conditionText.className='feeding-condition';document.querySelector('.control-strip').before(conditionText);
const fishLegend=document.createElement('p');fishLegend.className='fish-legend';document.querySelector('.control-strip').before(fishLegend);
const courseToolbar=document.createElement('div');courseToolbar.className='course-toolbar';courseToolbar.innerHTML='<label>海域 <select id="stage-choice" aria-label="选择已解锁海域"></select></label><label>本轮知识点 <select id="skill-choice" aria-label="选择本轮知识点"></select></label><button id="catalog" class="outline">初一完整课程目录</button>';
document.querySelector('.ocean-frame').before(courseToolbar);
courseToolbar.after(conditionText);
const seaStatus=document.createElement('div');seaStatus.className='sea-status-row';
document.querySelector('.ocean-frame').before(seaStatus);seaStatus.append(document.querySelector('.hud'),feedingHud);
document.querySelector('.control-strip').before($('#game-notice'));
$('#catalog').onclick=showCatalog;$('#stage-choice').onchange=e=>{
  const index=Number(e.target.value);
  e.target.value=String(progress.stage);
  showStageGuide(index);
};
$('#skill-choice').onchange=e=>{feedingRound=newRound(e.target.value,progress.feedingScore,questionIndex++,progress.stage);updateFeeding();notice('已切换知识点，本轮从 0 / 10 开始。');};
function updateFeeding(){
  const stage=progress.stage, bank=PRACTICE_BANK[stage],state=readPractice(stage);
  if(!feedingRound.question){
    const exclude=state.seen.length===0&&state.last?[state.last]:state.seen;
    feedingRound.question=drawPracticeQuestion(bank,exclude,feedingRound.skill,Math.random,ocean?.fishAnswers());
    if(feedingRound.question){
      state.last=feedingRound.question.id;
      state.seen.push(state.last);
      writePractice(stage,state);
    }
  }
  const q=feedingRound.question;
  if(q)feedingRound.skill=q.skill;
  ocean?.prepareFeeding(feedingRound,bank.filter(item=>!state.seen.includes(item.id)));
  fishLegend.textContent='先想出答案，再找带有对应答案的生物。';
  feedingHud.textContent=`本轮 ${feedingRound.eaten} / 10　答对 ${feedingRound.correct}　总分 ${feedingRound.score>0?'+':''}${feedingRound.score}`;
  conditionText.replaceChildren();
  const prompt=document.createElement('strong');
  prompt.textContent=q?q.prompt:'本关新题已练完';
  conditionText.append(prompt);
  if(q?.graphic)conditionText.insertAdjacentHTML('beforeend',practicePromptGraphic(q.graphic));
  const controls=document.createElement('div');
  controls.className='practice-tools';
  if(!q){
    const restart=document.createElement('button');
    restart.className='outline';restart.textContent='开始复习';
    restart.onclick=()=>{
      const current=readPractice(stage);
      if(current.seen.length>=bank.length)writePractice(stage,{...current,seen:[]});
      updateFeeding();
    };
    controls.append(restart);
  }
  if(state.wrong.length){
    const review=document.createElement('button');
    review.className='outline';review.textContent='回顾错题';
    review.onclick=()=>{
      openPanel('本关错题');
      $('#panel-content').innerHTML=bank.filter(item=>state.wrong.includes(item.id)).map(item=>
        `<details><summary>${escapeText(item.prompt)}</summary><p>${escapeText(item.explanation)}</p></details>`).join('');
    };
    controls.append(review);
  }
  if(controls.childElementCount)conditionText.append(controls);
  $('#skill-choice').value=feedingRound.skill;
}
function finishFeeding(result){
  pendingRound=true;openPanel(result.needsHint?'本轮小结 · 看看知识点':'本轮小结 · 完成十次觅食');
  const tips={axis:'数轴规定原点、正方向和单位长度。向右移动表示增加，向左移动表示减少。例如从 −3 向右移动 5 格，到达 2。',opposite:'相反数到原点的距离相同，位于原点两侧。例如 −4 的相反数是 4；0 的相反数是 0。',distance:'绝对值表示到原点的距离，不能是负数。例如 |−4| = 4，|0| = 0。',add:'同号相加取相同符号，绝对值相加；异号相加取绝对值较大者的符号，绝对值相减。互为相反数相加得0。',subtract:'减去一个数，等于加上这个数的相反数。例如 −3−(−5)=−3+5=2。',multiply:'两数相乘，同号得正、异号得负，绝对值相乘。任何数乘0都得0。'};
  const tip=tips[feedingRound.skill]||lessonFor(feedingRound.skill).steps.map(s=>s.text).slice(0,3).join(' ');
  $('#panel-content').innerHTML=`<h2>本轮正确率 ${result.accuracy} / 100</h2><p>吃了 10 个食物，答对 ${feedingRound.correct} 个，答错 ${10-feedingRound.correct} 个。本轮得分 ${2*feedingRound.correct-10}，累计得分 ${feedingRound.score}。</p><div class="feedback">${result.needsHint?'低于 80%，先回顾知识点：':'达到 80%，下一轮尝试下一个知识点。练习成绩不自动认定 Boss 通关。'}</div><p>${result.needsHint?'下一轮继续练习同一知识点，十个食物重新计数。':'下一轮从 0 / 10 开始，总分保留。'}</p><div class="dialog-actions"><button id="restart-feeding" class="primary">${result.needsHint?'明白了，重新练习':'开始下一轮'}</button></div>`;
  if(result.needsHint)$('#panel-content .feedback').append(document.createTextNode(tip));
  $('#restart-feeding').onclick=closePanel;
}
function eatFood(value){
  if(!feedingRound.question)return;
  const result=eatAnswer(feedingRound,value);if(!result)return;
  if(!result.correct){
    const state=readPractice(progress.stage);
    if(!state.wrong.includes(result.question.id))state.wrong.push(result.question.id);
    writePractice(progress.stage,state);
  }
  progress.feedingScore=feedingRound.score;grow(progress,result.correct?1:-1);save();update();
  if(result.complete){feedingHud.textContent=`本轮 10 / 10　正确率 ${result.accuracy}%　总分 ${feedingRound.score}`;finishFeeding(result);}else updateFeeding();
  notice(result.correct?'答对了，+1 分！':'答错了，−1 分。'+result.question.explanation);
}
function renderMap(){
  $('#route').replaceChildren();
  $('#stage-choice').replaceChildren();$('#skill-choice').replaceChildren();
  for(const [i,stage] of STAGES.entries()){
    const title=stage.title,available=canEnterStage(progress,i),active=i===progress.stage;
    const el=document.createElement('button');el.className='route-stop'+(active?' active':'');el.disabled=!available;
    const passedBefore=STAGES.slice(0,i).every((_,j)=>bossPassed(progress,j));
    el.innerHTML=`<span class="stop-number">${i+1}</span><span><b>${title}</b><small>${active?'正在探索':available?'已解锁 · 点击进入':passedBefore?'需满10点能量进入':'通过前序 Boss 解锁'}</small></span>`;
    if(active)el.setAttribute('aria-current','step');el.onclick=()=>showStageGuide(i);$('#route').append(el);
    const option=new Option(`${i+1}. ${title}${available?'':' · 待解锁'}`,String(i));option.disabled=!available;$('#stage-choice').add(option);
  }
  $('#stage-choice').value=String(progress.stage);
  for(const skill of activeSkills())$('#skill-choice').add(new Option(questionFor(skill,0).label,skill));$('#skill-choice').value=feedingRound.skill;
  $('.expedition-heading h2').textContent=STAGES[progress.stage].title;
  $('.expedition-heading .section-label').textContent=`第 ${progress.stage+1} 站 / ${STAGES[progress.stage].chapter}`;
  $('.status-pill').textContent=`守卫：${stageLook(progress.stage).bossName}`;
  $('#shelter-shortcut').textContent=`前往${shelterName(progress.stage)} ↗`;
  $('.knowledge-note p').textContent=lessonFor(feedingRound.skill).why;
  $('.map-panel .muted').textContent=progress.stage<7?'七年级数学 · 上册':'七年级数学 · 下册通用范围';
}
function switchStage(index){
  if(!enterStage(progress,index)){notice('需要通过前序 Boss，并积满 10 点能量。');return;}
  pendingRound=false;learned=false;lessonPage=0;
  nearShelter=false;$('#interact').hidden=true;
  feedingRound=newRound(activeSkills()[0],progress.feedingScore,questionIndex++,progress.stage);
  ocean?.setStage(index);renderMap();updateFeeding();save();update();if($('#panel').open)closePanel();notice(`进入${STAGES[index].title}：${STAGES[index].chapter}。`);
}
function save(){try{localStorage.setItem(storageKey,JSON.stringify(progress));if(saveAvailable)$('#save-status').textContent='航行进度已保存在这台设备';}catch{saveAvailable=false;$('#save-status').textContent='无法保存，请在航海记录中导出备份';}}
function update(){
  $('#energy-value').textContent=`${progress.energy} / 10`;$('#energy-fill').style.width=progress.energy*10+'%';ocean?.setEnergy(progress.energy);
  $('.creature-tag small').textContent=`能量 ${progress.energy} · 体长 ${(1+progress.energy*.2).toFixed(1)} 倍`;
  $('#goal-food>span').textContent=progress.energy>0?'✓':'○';$('#goal-learn>span').textContent=learned?'✓':'○';$('#goal-boss>span').textContent=bossPassed(progress)?'✓':'○';
  $('#learn-step').classList.toggle('done',learned);$('#boss-step').classList.toggle('done',bossPassed(progress));$('#challenge').textContent=bossPassed(progress)?'通关记录 / 前往下一阶段':canChallenge(progress)?`挑战${stageLook(progress.stage).bossName}`:`挑战需 5 点能量 · 当前 ${progress.energy}`;
  renderMap();
}
function notice(text){$('#game-notice').textContent=text;clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>{$('#game-notice').textContent='看海龟身上的题目，吃带有正确答案的食物；每 10 个结算。';},6500);}
function freeze(){ocean?.setPaused(paused||$('#panel').open);}
function setPause(value){paused=value;$('#pause-overlay').hidden=!value;$('#pause').textContent=value?'▷':'Ⅱ';$('#pause').setAttribute('aria-label',value?'继续游戏':'暂停游戏');freeze();}
function openPanel(tag){
  $('#panel-tag').textContent=tag;
  if(!$('#panel').open){
    returnFocus=document.activeElement;
    $('#panel').showModal();
  }
  freeze();
}
function closePanel(){$('#panel').close();}
$('#close-panel').onclick=closePanel;$('#panel').addEventListener('close',()=>{
  if(pendingRound){feedingRound=nextRound(feedingRound);pendingRound=false;}
  updateFeeding();freeze();returnFocus?.focus?.();
});
$('#pause').onclick=()=>setPause(!paused);$('#resume').onclick=()=>setPause(false);
document.addEventListener('visibilitychange',()=>{if(document.hidden)setPause(true);});window.addEventListener('blur',()=>{if(!$('#panel').open)setPause(true);});
document.addEventListener('keydown',e=>{if(e.code==='Space'&&!$('#panel').open&&e.target.tagName!=='BUTTON'){e.preventDefault();setPause(!paused);}});
function axis(marked){return `<div class="lesson-visual"><div class="axis-line">${Array.from({length:13},(_,i)=>i-6).map(n=>`<span class="${n===marked?'marked':n===0?'origin':''}">${n}</span>`).join('')}</div></div>`;}
const escapeText=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const topicNames={axis:'数轴',opposite:'相反数',distance:'绝对值',add:'有理数加法',subtract:'有理数减法',multiply:'有理数乘法'};
const topicName=skill=>topicNames[skill]||lessonFor(skill).title.split('：')[0];
const arithmeticBasics={
  add:'同号相加时，先保留相同的符号，再把绝对值相加。例如 (−4)+(−7)=−11。异号相加时，用较大绝对值减较小绝对值，再取绝对值较大的数的符号。例如 (−8)+3=−5。两数互为相反数时和为零。',
  subtract:'先把减法改写成加法：减去一个数，等于加上这个数的相反数。例如 4−(−7) 先把 −7 改成它的相反数 7，再算 4+7=11。',
  multiply:'先定符号，再乘绝对值。同号得正，异号得负。例如 (−5)×2 先定负号，再算 5×2=10，得 −10。任何数乘零都得零。',
};
function showStageGuide(index){
  if(!canEnterStage(progress,index))return;
  const stage=STAGES[index];
  openPanel('出发前 · 知识导览');
  $('#panel-content').innerHTML=`<h2>${escapeText(stage.title)}</h2><p>${escapeText(stage.chapter)}。点开一个知识分类，看看规则和例子。</p>
    <div class="study-topics">${stage.skills.map(skill=>{
      const lesson=lessonFor(skill);
      return `<details><summary>${escapeText(topicName(skill))}</summary>
        <p>${escapeText(arithmeticBasics[skill]||lesson.why)}</p>
        ${arithmeticBasics[skill]?'':lesson.steps.map(step=>`<h3>${escapeText(step.title)}</h3><p>${escapeText(step.text)}</p>`).join('')}
        ${lessonVisual(skill)}
        <h3>做题时先检查</h3><p>${escapeText(shelterGuide[skill][0])}</p>
      </details>`;
    }).join('')}</div><div class="dialog-actions"><button class="primary" id="enter-sea">进入海域</button></div>`;
  bindLessonVisuals($('#panel-content'));
  $('#enter-sea').onclick=()=>{if(index===progress.stage)closePanel();else switchStage(index);};
}
function showShelter(){
  if(!nearShelter||$('#panel').open)return;
  learned=true;update();
  openPanel(`庇护所 · ${shelterName(progress.stage)}`);
  $('#panel-content').innerHTML=`<h2>${escapeText(STAGES[progress.stage].title)} · 解题书架</h2>
    <p>已为你展开当前题目的知识点。查完技巧，可以返回海域继续原题。</p>
    <div class="study-topics">${activeSkills().map(skill=>`<details ${skill===feedingRound.skill?'open':''}>
      <summary>${escapeText(topicName(skill))}${skill===feedingRound.skill?' · 当前题目':''}</summary>
      ${shelterGuide[skill].map((tip,i)=>`<h3>${['解题技巧','二级公式与规则','高级技巧'][i]}</h3><p>${escapeText(tip)}</p>`).join('')}
      ${lessonVisual(skill,true)}
    </details>`).join('')}</div><div class="dialog-actions"><button class="primary" id="leave-shelter">离开庇护所 · 继续原题</button></div>`;
  bindLessonVisuals($('#panel-content'));
  $('#leave-shelter').onclick=closePanel;
}
function showCatalog(){
  modalMode='catalog';openPanel('初一课程 · 上下册知识目录');
  $('#panel-content').innerHTML='<h2>初一知识航图</h2><p>34 个教学单元，含完整讲解、练习与阶段验收。上册依仓库教材目录关联；下册为通用范围，尚待指定教材逐页核对。可以自由查阅讲解，海域进阶仍需通过 Boss。</p><div id="catalog-list"></div>';
  const seen=new Set();
  for(const stage of STAGES){const section=document.createElement('section');section.className='catalog-section';const heading=document.createElement('h3');heading.textContent=stage.chapter;section.append(heading);for(const skill of stage.skills){const l=lessonFor(skill);if(seen.has(l.id))continue;seen.add(l.id);const b=document.createElement('button');b.className='catalog-topic';b.textContent=`${l.title} · ${l.questions.length} 题`;b.onclick=()=>{lessonPage=0;showLesson(skill,true);};section.append(b);}if(section.children.length>1)$('#catalog-list').append(section);}
}
function showLesson(skill=feedingRound.skill,preview=false){
  modalMode='lesson';const l=lessonFor(skill),pages=[{type:'为什么学',title:l.title,text:l.why},...l.steps,{type:'观察与操作',title:'自己动手核对',text:l.explore?.prompt||'用实物或纸笔重现本单元的一个例子，并检查条件。'},{type:'回顾',title:'说清理由，再换一种情境',text:l.reflection||'用自己的话说明本单元的条件，并举一个例子。'}];
  lessonPage=Math.min(lessonPage,pages.length-1);const page=pages[lessonPage];openPanel(preview?'初一课程 · 知识查阅':'庇护所 · 珊瑚书屋');
  $('#panel-content').innerHTML=`<p class="muted">${escapeText(l.title)} · ${lessonPage+1} / ${pages.length}</p><h2>${escapeText(page.title)}</h2><p>${escapeText(page.text)}</p><div class="feedback">${escapeText(page.type)} · ${preview?'课程查阅不计入通关':'读完后尝试独立应用'}</div><div class="dialog-actions"><button class="text-button" id="previous">${lessonPage?'上一页':preview?'返回目录':'返回海洋'}</button><button class="primary" id="next">${lessonPage<pages.length-1?'继续发现':preview?'返回课程目录':'练习这个知识点'}</button></div>`;
  $('#previous').onclick=()=>{if(lessonPage){lessonPage--;showLesson(skill,preview);}else if(preview)showCatalog();else closePanel();};
  $('#next').onclick=()=>{if(lessonPage<pages.length-1){lessonPage++;showLesson(skill,preview);}else if(preview)showCatalog();else{learned=true;update();startQuestions('practice',skill);}};
}
function startQuestions(mode,skill){if(mode==='boss'&&!canChallenge(progress)){showEnergyLocked();return;}modalMode=mode;skillIndex=mode==='boss'?Math.max(0,activeSkills().findIndex(s=>!progress.evidence[s])):Math.max(0,activeSkills().indexOf(skill));showQuestion();}
function showEnergyLocked(){openPanel('能量不足 · 先去觅食');$('#panel-content').innerHTML=`<h2>积满 5 点，再挑战守卫</h2><p>当前能量 ${progress.energy} / 10，还需 ${Math.max(0,5-progress.energy)} 点。吃对加1点，吃错减1点；Boss答错扣5点。已经通过的知识点和层数保留。</p><button id="back-for-energy" class="primary">返回海域补充能量</button>`;$('#back-for-energy').onclick=closePanel;}
function showQuestion(){
  if(modalMode==='boss'&&!canChallenge(progress)){showEnergyLocked();return;}
  const skill=activeSkills()[skillIndex];
  question=modalMode==='boss'?bossQuestion(skill,questionIndex++,progress.bossSteps[skill]||0,progress.seen):questionFor(skill,questionIndex++);hinted=false;openPanel(modalMode==='boss'?`${stageLook(progress.stage).bossName} · ${STAGES[progress.stage].title}试炼`:'珊瑚书屋 · 安心练习');
  const stages=modalMode==='boss'?`<div class="boss-progress">${activeSkills().map(s=>`<span class="${progress.evidence[s]?'complete':''}"></span>`).join('')}</div>`:'';
  $('#panel-content').innerHTML=`${stages}<p class="muted">${modalMode==='boss'?`知识点 ${skillIndex+1} / ${activeSkills().length} · 第 ${(progress.bossSteps[skill]||0)+1} / 3 层 · 能量 ${progress.energy}/10 · 答错扣5点`:'练习不计入 Boss 独立通关'}</p><h2>${escapeText(question.label)}</h2><p>${escapeText(question.prompt)}</p>${typeof question.start==='number'&&!progress.stage ? axis(question.start) : ''}<div class="answers ${question.optionLabels?'text-answers':''}">${question.options.map((n,i)=>`<button data-choice="${i}">${escapeText(question.optionLabels?.[n]??n)}</button>`).join('')}</div><div id="answer-feedback" class="feedback" role="status"></div><div class="dialog-actions"><button id="hint" class="text-button">给我一点提示</button><button id="question-next" class="primary" hidden>继续</button></div>`;
  document.querySelectorAll('[data-choice]').forEach(btn=>btn.onclick=()=>answer(question.options[Number(btn.dataset.choice)],btn));
  $('#hint').onclick=()=>{hinted=true;$('#answer-feedback').textContent=question.hint;$('#hint').disabled=true;};
}
function answer(value,button){
  const correct=value===question.answer;let independent=false;
  if(modalMode==='boss'){const result=recordBossAnswer(progress,question,value,hinted);independent=result.independent;save();}else{progress.attempts++;save();}
  document.querySelectorAll('[data-choice]').forEach(b=>{b.disabled=true;if(question.options[Number(b.dataset.choice)]===question.answer)b.classList.add('correct');});if(!correct)button.classList.add('wrong');
  $('#hint').disabled=true;$('#answer-feedback').textContent=`${correct?'找到了！':'再一起看看。'} ${question.explanation}${modalMode==='boss'&&correct&&!independent?' 这题用过提示或已作答，请用一道新题独立验证。':''}`;
  if(modalMode==='boss'&&!correct)$('#answer-feedback').append(document.createTextNode(` 能量 −5，剩余 ${progress.energy}/10。`));
  const next=$('#question-next');next.hidden=false;next.textContent=modalMode==='boss'?(!canChallenge(progress)?'返回海域补充能量':independent?(bossPassed(progress)?'领取通行徽章':'下一道关卡'):'换一道再试'):'继续练习';
  next.onclick=()=>{if(modalMode==='boss'){if(!canChallenge(progress)){closePanel();return;}if(bossPassed(progress)){showVictory();return;}if(independent)skillIndex=activeSkills().findIndex(s=>!progress.evidence[s]);}else skillIndex=(skillIndex+1)%activeSkills().length;showQuestion();};update();
}
function showVictory(){
  const nextStage=STAGES[progress.stage+1];openPanel(`${STAGES[progress.stage].title} · 阶段通过`);
  const ready=nextStage&&canEnterStage(progress,progress.stage+1);
  $('#panel-content').innerHTML=`<div class="badge">🏅</div><h2>${STAGES[progress.stage].title}挑战通过！</h2><p>你已完成本阶段 ${activeSkills().length} 个知识点的 Boss 试炼。能量 ${progress.energy} / 10。</p><div class="feedback">${nextStage?`下一站：${nextStage.chapter}。首次进入需要满10点能量，并消耗10点；再次返回不收费。${ready?'现在可以出发！':`还需积累 ${10-progress.energy} 点能量，通关记录会保留。`}`:'当前初一课程航线已通过，可以返回目录复习；这不等于长期掌握已验证。'}阶段通过仍需后续复习验证。</div><div class="dialog-actions"><button class="text-button" id="return-sea">返回海域${ready?'练习':'补充能量'}</button>${nextStage?`<button class="primary" id="next-stage" ${ready?'':'disabled'}>进入${nextStage.title}</button>`:''}</div>`;
  $('#return-sea').onclick=closePanel;if(nextStage)$('#next-stage').onclick=()=>showStageGuide(progress.stage+1);save();update();renderMap();
}
function challenge(){if(bossPassed(progress))showVictory();else startQuestions('boss');}
function showRecords(){openPanel('我的航海记录');$('#panel-content').innerHTML=`<h2>每一点进步，都有迹可循</h2><div class="record-row"><span>成长能量</span><b>${progress.energy} / 10</b></div>${SKILLS.map((s,i)=>`<div class="record-row"><span>${names[i]}</span><b>${progress.evidence[s]?'阶段独立通过':'等待挑战'}</b></div>`).join('')}<p class="small-note">游戏能量不代表知识掌握。当前记录尚无跨日保持验证。</p><div class="dialog-actions"><button id="export" class="primary">导出航行记录</button><button id="back" class="text-button">返回海洋</button></div>`;$('#back').onclick=closePanel;$('#export').onclick=()=>{const blob=new Blob([JSON.stringify(progress,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='知识星球-浅湾记录.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};}
$('#journal').onclick=()=>{openPanel('航行手册');$('#panel-content').innerHTML='<h2>安心探索，独立闯关</h2><p>用方向键或 WASD 游动，也可以按住海面移动；平板和手机可用左下角方向按钮。用嘴部对准食物并主动游近，短暂接触后才会吃掉；身体擦过和停着不会进食。普通敌人现已移除，没有追击与倒计时。能量0至10点，吃对加1、吃错减1，体型随能量改变；5点可挑战Boss，Boss答错扣5点。每个知识点通过三轮后，通关且满10点可以消耗能量进入新海域。</p><p>看海龟的题目，寻找带正确答案的金色小鱼。在珊瑚书屋学习，再点击海域守卫或右侧挑战按钮答题。每个知识点须独立答对；使用提示后要换题补验。</p><p>通过基准浅湾 Boss 后，可以进入潮汐海沟，继续有理数加、减、乘法。海域入口和学习记录保存在本机。</p><div class="feedback">已接入初一上下册现有课程清单及视图、投影补充内容。七下为通用范围，尚未完成指定教材逐页核对。海龟吸收能量鱼属于幻想玩法；生物素材由图像工具生成，背景由程序绘制。</div>';};
$('#progress-button').onclick=showRecords;$('#challenge').onclick=challenge;
$('#shelter-shortcut').onclick=()=>{ocean?.goShelter();notice(`已到${shelterName(progress.stage)}入口，选择「进入庇护所」查看解题技巧。`);};
$('#interact').onclick=showShelter;
for(const b of document.querySelectorAll('[data-dir]')){b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);ocean?.setDirection(b.dataset.dir,true);});for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,()=>ocean?.setDirection(b.dataset.dir,false));}
try{ocean=createOcean({energy:progress.energy,stage:progress.stage,onBoss:challenge,onEat:eatFood,onShelter(safe){nearShelter=safe;$('#interact').hidden=!safe;},onPoolChanged(){if(feedingRound.question&&!feedingRound.complete)updateFeeding();},onReady(api){ocean=api;ocean.prepareFeeding(feedingRound);freeze();}});}catch(error){notice(error.message);$('#challenge').disabled=false;}
document.querySelector('#goal-food b').textContent='吃下正确答案';
document.querySelector('#goal-food small').textContent='海龟带题、食物带答案；每 10 个结算。';
document.querySelector('.control-strip .legend-dot').parentElement.lastChild.textContent='食物上的数字是答案';
const oldManual=$('#journal').onclick;
$('#journal').onclick=()=>{oldManual();const p=document.createElement('p');p.textContent='觅食练习：题目跟随海龟，食物上的数字是答案。每吃一个换题，答对加1分、答错减1分；每10个结算正确率。低于80%显示知识提示并重练，达到80%进入下一知识点。累计总分保留，刷新页面会开始新一轮。';$('#panel-content').prepend(p);};
$('#game-notice').textContent='看海龟身上的题目，寻找正确答案。答对 +1，答错 −1。';
document.querySelector('#goal-learn small').textContent='在本关庇护所学习解题技巧。';
document.querySelector('#goal-boss b').textContent='通过 Boss，解锁下一阶段';
document.querySelector('#goal-boss small').textContent='点击海域守卫，完成本阶段全部知识点的试炼。';
document.querySelector('.trail-title h3').textContent='探索、练习，再向下一片海出发';
document.querySelector('.control-strip span:first-child').title='游动有缓慢加速与减速';
document.querySelector('footer span:nth-child(2)').textContent='初一课程：13 个海域 / 34 个教学单元';
update();
showStageGuide(progress.stage);








