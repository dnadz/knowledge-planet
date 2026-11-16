import {SKILLS,STAGES,canEnterStage,enterStage,freshProgress,validateProgress,grow,bossPassed,questionFor} from './learning.mjs';
import {lessonFor} from './curriculum.mjs';
import {stageLook} from './visuals.mjs';
import {shelterName} from './shelter-art.mjs';
import {canChallenge,recordBossAnswer,bossQuestion} from './energy.mjs';
import {createOcean} from './ocean.mjs';
import {newRound,eatAnswer,nextRound} from './feeding.mjs';
import {PRACTICE_BANK,drawPracticeQuestion,practicePromptGraphic} from './practice-bank.mjs';
import {validatePractice,restorePracticeRound,storePracticeRound,recordPracticeAttempt} from './practice-progress.mjs';
import {matchesAnswer} from './answer-match.mjs';
import {shelterGuide} from './shelter-guide.mjs';
import {lessonVisual,bindLessonVisuals} from './lesson-visuals.mjs';
import {shouldOfferSubtractionCheck,checkOutcome,transferQuestion,featuredQuestions} from './subtraction-support.mjs';
import {creatureForStage} from './creature-profile.mjs';
import {cageFish,cageKey,drawCageQuestion,finishCageQuestion,readCages} from './eel-hunt.mjs';
import {createExperience} from './experience.mjs';
const $=s=>document.querySelector(s),storageKey='knowledge-planet-ocean-v1';
let progress=freshProgress(),experience;
try{const raw=localStorage.getItem(storageKey);if(raw){const parsed=JSON.parse(raw);progress=validateProgress(parsed);if(![1,2].includes(parsed?.version))$('#save-status').textContent='旧存档无法识别，已使用新航程';}}catch{$('#save-status').textContent='存档无法读取，本次仍可游玩；请导出记录';}
let ocean,paused=false,nearShelter=false,learned=false,noticeTimer,modalMode='',skillIndex=0,questionIndex=progress.attempts,question,hinted=false,lessonPage=0,returnFocus;
const names=SKILLS.map(s=>questionFor(s,0).label);
const activeSkills=()=>STAGES[progress.stage].skills;
let feedingRound=newRound(activeSkills()[0],progress.feedingScore,0,progress.stage),pendingRound=false;
const practiceState=new Map();
const unsavedPractice=new Set();
function readPractice(stage){
  if(practiceState.has(stage))return practiceState.get(stage);
  const key=`${storageKey}:practice:${stage}`;
  try{
    const raw=JSON.parse(localStorage.getItem(key)||'null');
    practiceState.set(stage,validatePractice(raw,PRACTICE_BANK[stage]));
  }catch{}
  if(!practiceState.has(stage))practiceState.set(stage,validatePractice(null,PRACTICE_BANK[stage]));
  return practiceState.get(stage);
}
function writePractice(stage,state){
  practiceState.set(stage,state);
  try{
    localStorage.setItem(`${storageKey}:practice:${stage}`,JSON.stringify(state));
    unsavedPractice.delete(stage);
  }
  catch{
    unsavedPractice.add(stage);
    $('#save-status').textContent='题库记录未保存，请导出航行记录备份';
  }
}
feedingRound=restorePracticeRound(readPractice(progress.stage),PRACTICE_BANK[progress.stage],progress.feedingScore,progress.stage);
function persistRound(){
  const state=readPractice(progress.stage);
  storePracticeRound(state,feedingRound);
  writePractice(progress.stage,state);
}
const feedingHud=document.createElement('div');feedingHud.className='feeding-hud';feedingHud.setAttribute('aria-live','polite');document.querySelector('.ocean-frame').append(feedingHud);
const conditionText=document.createElement('div');conditionText.className='feeding-condition';document.querySelector('.control-strip').before(conditionText);
const fishLegend=document.createElement('p');fishLegend.className='fish-legend';document.querySelector('.control-strip').before(fishLegend);
const huntPanel=document.createElement('section');
huntPanel.className='eel-panel';
huntPanel.hidden=true;
huntPanel.innerHTML='<strong id="hunt-heading">天敌与鱼笼</strong><p id="hunt-status"></p><div class="eel-actions">'+cageFish.map((fish,i)=>'<button class="outline" data-fish-cage="'+i+'"></button>').join('')+'</div><p id="cage-save-warning" role="status" hidden>鱼笼进度未能保存。</p>';
document.querySelector('.ocean-frame').after(huntPanel);
const cageButtons=[...huntPanel.querySelectorAll('[data-fish-cage]')];
cageButtons.forEach((button,i)=>{button.onclick=()=>showCage(i);});
let cageState=null,cageSavedRaw=null,cageConflict=false;
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
  if(experience?.mode==='adventure')return;
  const stage=progress.stage, bank=PRACTICE_BANK[stage],state=readPractice(stage);
  const topicBank=bank.filter(q=>q.skill===feedingRound.skill);
  if(!feedingRound.question&&!feedingRound.complete){
    const exclude=state.seen.length===0&&state.last?[state.last]:state.seen;
    feedingRound.question=drawPracticeQuestion(topicBank,exclude,feedingRound.skill,Math.random,ocean?.fishAnswers());
    if(feedingRound.question){
      state.last=feedingRound.question.id;
      persistRound();
    }
  }
  const q=feedingRound.question;
  if(q)feedingRound.skill=q.skill;
  $('.knowledge-note p').textContent=lessonFor(feedingRound.skill).why;
  ocean?.prepareFeeding(feedingRound,topicBank.filter(item=>!state.seen.includes(item.id)));
  persistRound();
  fishLegend.textContent='先想出答案，再找带有对应答案的生物。';
  feedingHud.textContent=`本轮 ${feedingRound.eaten} / 10　答对 ${feedingRound.correct}　总分 ${feedingRound.score>0?'+':''}${feedingRound.score}`;
  conditionText.replaceChildren();
  const prompt=document.createElement('strong');
  prompt.textContent=q?q.prompt:feedingRound.complete?'本轮已完成，请查看小结':'这个知识点的新题已练完，可以复习或切换知识点';
  conditionText.append(prompt);
  if(q?.graphic)conditionText.insertAdjacentHTML('beforeend',practicePromptGraphic(q.graphic));
  const controls=document.createElement('div');
  controls.className='practice-tools';
  if(!q&&!feedingRound.complete){
    const restart=document.createElement('button');
    restart.className='outline';restart.textContent='开始复习';
    restart.onclick=()=>{
      const current=readPractice(stage);
      current.seen=current.seen.filter(id=>!topicBank.some(q=>q.id===id));
      writePractice(stage,current);
      feedingRound=newRound(feedingRound.skill,progress.feedingScore,questionIndex++,stage);
      updateFeeding();
    };
    controls.append(restart);
    const nextTopic=document.createElement('button');
    nextTopic.className='outline';nextTopic.textContent='换下一个知识点';
    nextTopic.onclick=()=>{
      const skills=activeSkills();
      feedingRound=newRound(skills[(skills.indexOf(feedingRound.skill)+1)%skills.length],progress.feedingScore,questionIndex++,stage);
      updateFeeding();
    };
    controls.append(nextTopic);
  }
  if(state.wrong.length){
    const review=document.createElement('button');
    review.className='outline';review.textContent='回顾错题';
    review.onclick=()=>{
      showWrongQuestions();
    };
    controls.append(review);
  }
  if(controls.childElementCount)conditionText.append(controls);
  $('#skill-choice').value=feedingRound.skill;
}
function showWrongQuestions(){
  const state=readPractice(progress.stage),bank=PRACTICE_BANK[progress.stage];
  openPanel('本关错题 · 先独立重做');
  $('#panel-content').innerHTML='<h2>检查上次卡住的地方</h2><p>先重做，再看解释。复练答对会保留记录，过一段时间再试才能检查是否记住。</p><div id="wrong-list"></div>';
  for(const q of bank.filter(item=>state.wrong.includes(item.id))){
    const section=document.createElement('section');
    const status=state.answers[q.id]?.lastCorrect?'最近复练答对':'待复练';
    section.innerHTML=`<h3>${escapeText(q.prompt)}</h3><p>${status}</p><div class="answers text-answers"></div><p class="feedback" role="status"></p>`;
    const options=[...q.options];
    // Rotate the authored key away from a fixed position, including on retries.
    const offset=Math.floor(Math.random()*options.length);
    options.push(...options.splice(0,offset));
    for(const value of options){
      const button=document.createElement('button');
      button.textContent=value;
      button.onclick=()=>{
        const correct=matchesAnswer(q,value);
        recordPracticeAttempt(state,q,correct);
        writePractice(progress.stage,state);
        section.querySelectorAll('button').forEach(b=>{b.disabled=true;});
        section.querySelector('.feedback').textContent=`${correct?'这次答对了。':'这次还需要练习。'} ${q.explanation}`;
        section.querySelector('p').textContent=correct?'最近复练答对':'待复练';
      };
      section.querySelector('.answers').append(button);
    }
    $('#wrong-list').append(section);
  }
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
  if(experience?.mode==='adventure')return;
  if(!feedingRound.question)return;
  const result=eatAnswer(feedingRound,value);if(!result)return;
  logAnswer("觅食",result.question,value,result.correct);
  if(result.correct)ocean?.correctHuntAnswer();
  experience?.feedback(result.correct?'success':'retry');ocean?.setFeedback(result.correct?'success':'retry');
  const state=readPractice(progress.stage);
  recordPracticeAttempt(state,result.question,result.correct);
  persistRound();
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
  $('#boss-step').textContent=`③ 挑战${stageLook(progress.stage).bossName}`;
  $('#shelter-shortcut').textContent=`前往${shelterName(progress.stage)} ↗`;
  $('.knowledge-note p').textContent=lessonFor(feedingRound.skill).why;
  $('.map-panel .muted').textContent=progress.stage<7?'七年级数学 · 上册':'七年级数学 · 下册';
}
function switchStage(index){
  const oldStage=progress.stage;
  if(!enterStage(progress,index)){notice('需要通过前序 Boss，并积满 10 点能量。');return;}
  if(cageSavedRaw!==null)saveCages(oldStage);
  pendingRound=false;learned=false;lessonPage=0;
  nearShelter=false;$('#interact').hidden=true;
  feedingRound=restorePracticeRound(readPractice(index),PRACTICE_BANK[index],progress.feedingScore,index);
  ocean?.setStage(index);enterHunt();ocean?.setMode(experience?.mode||'practice');experience?.refresh();renderMap();updateFeeding();save();update();if($('#panel').open)closePanel();else if(feedingRound.complete&&experience?.mode!=='adventure')finishFeeding({needsHint:feedingRound.correct<8,accuracy:feedingRound.correct*10});notice(`进入${STAGES[index].title}：${STAGES[index].chapter}。`);
}
function save(){
  try{
    localStorage.setItem(storageKey,JSON.stringify(progress));
    $('#save-status').textContent=unsavedPractice.size?'部分题库记录未保存，请导出航行记录备份':'航行进度已保存在这台设备';
  }catch{$('#save-status').textContent='无法保存，请在航海记录中导出备份';}
}
function update(){
  $('#energy-value').textContent=`${progress.energy} / 10`;$('#energy-fill').style.width=progress.energy*10+'%';ocean?.setEnergy(progress.energy);
  $('.creature-tag small').textContent=`能量 ${progress.energy} · 体长 ${(1+progress.energy*.2).toFixed(1)} 倍`;
  $('#goal-food>span').textContent=progress.energy>0?'✓':'○';$('#goal-learn>span').textContent=learned?'✓':'○';$('#goal-boss>span').textContent=bossPassed(progress)?'✓':'○';
  $('#learn-step').classList.toggle('done',learned);$('#boss-step').classList.toggle('done',bossPassed(progress));$('#challenge').textContent=bossPassed(progress)?'通关记录 / 前往下一阶段':canChallenge(progress)?`挑战${stageLook(progress.stage).bossName}`:`挑战需 5 点能量 · 当前 ${progress.energy}`;
  renderMap();
  experience?.refresh();
}
function notice(text){$('#game-notice').textContent=text;clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>{$('#game-notice').textContent='看海龟身上的题目，吃正确答案的食物；每 10 个结算。';},6500);}
function freeze(){const blocked=paused||$('#panel').open||experience?.blocked||document.hidden;ocean?.setPaused(!!blocked);experience?.syncPause(paused||document.hidden);}
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
  if(pendingRound&&experience?.mode!=='adventure'){feedingRound=nextRound(feedingRound);pendingRound=false;persistRound();}
  updateFeeding();freeze();returnFocus?.focus?.();
  if(feedingRound.complete&&!pendingRound&&experience?.mode!=='adventure')finishFeeding({needsHint:feedingRound.correct<8,accuracy:feedingRound.correct*10});
});
$('#pause').onclick=()=>setPause(!paused);$('#resume').onclick=()=>setPause(false);
document.addEventListener('visibilitychange',()=>{if(document.hidden)setPause(true);});window.addEventListener('blur',()=>{if(!$('#panel').open)setPause(true);});
document.addEventListener('keydown',e=>{if(e.code==='Space'&&!$('#panel').open&&!experience?.blocked&&!['BUTTON','INPUT','SELECT','TEXTAREA'].includes(e.target.tagName)){e.preventDefault();setPause(!paused);}});
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
    ${index>=2?`<p class="feedback">${escapeText(creatureForStage(index).predator.name)}会从守卫处游出。吃对答案鱼能让它减速，点海图右侧的鱼笼可答题放鱼。</p>`:''}
    ${index===0?'<section class="feedback"><h3>起步：先认识正负数，再找位置</h3><p>以地面为0，向上为正。地上2米记为+2，地下2米记为−2。正负号区分方向，2说明离基准多远；0是基准，既不是正数也不是负数。</p><p>先用整数学习。遇到分数位置时，需要会把一个单位平均分成几份；遇到字母a时，它表示一个待确定的数。每格一样长，才能数位置和距离。</p><button class="outline" data-study="rational-numbers">从正负数开始学</button></section>':''}
    <div class="study-topics">${stage.skills.map((skill,topicIndex)=>{
      const lesson=lessonFor(skill);
      return `<details ${topicIndex===0?'open':''}><summary>${escapeText(topicName(skill))}</summary>
        <p>${escapeText(arithmeticBasics[skill]||lesson.why)}</p>
        ${arithmeticBasics[skill]?'':lesson.steps.map(step=>`<h3>${escapeText(step.title)}</h3><p>${escapeText(step.text)}</p>`).join('')}
        ${lessonVisual(skill)}
        <h3>做题时先检查</h3><p>${escapeText(shelterGuide[skill][0])}</p><button class="outline" data-study="${skill}">一步一步学${escapeText(topicName(skill))}</button>
      </details>`;
    }).join('')}</div>${index===1?'<p><button class="outline" id="featured-questions">选做 · 四道特色题</button></p>':''}<div class="dialog-actions"><button class="primary" id="enter-sea">进入海域</button></div>`;
  bindLessonVisuals($('#panel-content'));
  bindStudyButtons();
  if(index===1)$('#featured-questions').onclick=()=>showFeatured(0);
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
      ${lessonVisual(skill,true)}<button class="outline" data-study="${skill}">查看完整讲解并练习</button>
    </details>`).join('')}</div><div class="dialog-actions"><button class="primary" id="leave-shelter">离开庇护所 · 继续原题</button></div>`;
  bindLessonVisuals($('#panel-content'));
  bindStudyButtons();
  $('#leave-shelter').onclick=closePanel;
}
function showCatalog(){
  modalMode='catalog';openPanel('初一课程 · 上下册知识目录');
  $('#panel-content').innerHTML='<h2>初一知识航图</h2><p>34 个教学单元，提供讲解、练习与阶段挑战。以人教版七年级上下册为主线，含帮助理解的补充内容；已核对两册目录，逐页教学覆盖仍在审查。可以自由查阅讲解，海域进阶仍需通过 Boss。</p><div id="catalog-list"></div>';
  const seen=new Set();
  for(const stage of STAGES){const section=document.createElement('section');section.className='catalog-section';const heading=document.createElement('h3');heading.textContent=stage.chapter;section.append(heading);for(const skill of stage.skills){const l=lessonFor(skill);if(seen.has(l.id))continue;seen.add(l.id);const b=document.createElement('button');b.className='catalog-topic';b.textContent=`${l.title} · ${l.questions.length} 题`;b.onclick=()=>{lessonPage=0;showLesson(skill,true);};section.append(b);}if(section.children.length>1)$('#catalog-list').append(section);}
}
function bindStudyButtons(){
  for(const button of document.querySelectorAll('[data-study]')){
    button.onclick=()=>{lessonPage=0;showLesson(button.dataset.study, !activeSkills().includes(button.dataset.study));};
  }
}
function showLesson(skill=feedingRound.skill,preview=false){
  modalMode='lesson';const l=lessonFor(skill),pages=[{type:'为什么学',title:l.title,text:l.why},...l.steps,{type:'观察与操作',title:'自己动手核对',text:l.explore?.prompt||'用实物或纸笔重现本单元的一个例子，并检查条件。'},{type:'回顾',title:'说清理由，再换一种情境',text:l.reflection||'用自己的话说明本单元的条件，并举一个例子。'}];
  lessonPage=Math.min(lessonPage,pages.length-1);const page=pages[lessonPage];openPanel(preview?'初一课程 · 知识查阅':'庇护所 · 珊瑚书屋');
  $('#panel-content').innerHTML=`<p class="muted">${escapeText(l.title)} · ${lessonPage+1} / ${pages.length}</p><h2>${escapeText(page.title)}</h2><p>${escapeText(page.text)}</p>${page.type==='观察与操作'?lessonVisual(skill):''}<div class="feedback">${escapeText(page.type)} · ${preview?'课程查阅不计入通关':'读完后尝试独立应用'}</div><div class="dialog-actions"><button class="text-button" id="previous">${lessonPage?'上一页':preview?'返回目录':'返回海洋'}</button><button class="primary" id="next">${lessonPage<pages.length-1?'继续发现':preview?'返回课程目录':'练习这个知识点'}</button></div>`;
  bindLessonVisuals($('#panel-content'));
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
  $('#panel-content').innerHTML=`${stages}<p class="muted">${modalMode==='boss'?`知识点 ${skillIndex+1} / ${activeSkills().length} · 第 ${(progress.bossSteps[skill]||0)+1} / 3 层 · 能量 ${progress.energy}/10 · 答错扣5点`:'练习不计入 Boss 独立通关'}</p><h2>${escapeText(question.label)}</h2><p class="question-prompt">${escapeText(question.prompt)}</p>${typeof question.start==='number'&&!progress.stage ? axis(question.start) : ''}<div class="answers ${question.optionLabels?'text-answers':''}">${question.options.map((n,i)=>`<button data-choice="${i}">${escapeText(question.optionLabels?.[n]??n)}</button>`).join('')}</div><div id="answer-feedback" class="feedback" role="status"></div><div class="dialog-actions"><button id="hint" class="text-button">给我一点提示</button><button id="question-next" class="primary" hidden>继续</button></div>`;
  document.querySelectorAll('[data-choice]').forEach(btn=>btn.onclick=()=>answer(question.options[Number(btn.dataset.choice)],btn));
  $('#hint').onclick=()=>{hinted=true;$('#answer-feedback').textContent=question.hint;$('#hint').disabled=true;};
}
function answer(value,button){
  const correct=value===question.answer;let independent=false;
  if(modalMode==="boss")logAnswer("守卫",question,value,correct);
  experience?.feedback(correct?'success':'retry');ocean?.setFeedback(correct?'success':'retry');
  if(modalMode==='boss'){const result=recordBossAnswer(progress,question,value,hinted);independent=result.independent;save();}else{progress.attempts++;save();}
  document.querySelectorAll('[data-choice]').forEach(b=>{b.disabled=true;if(question.options[Number(b.dataset.choice)]===question.answer)b.classList.add('correct');});if(!correct)button.classList.add('wrong');
  $('#hint').disabled=true;$('#answer-feedback').textContent=`${correct?'找到了！':'再一起看看。'} ${question.explanation}${modalMode==='boss'&&correct&&!independent?' 这题用过提示或已作答，请用一道新题独立验证。':''}`;
  if(modalMode==='boss'&&!correct)$('#answer-feedback').append(document.createTextNode(` 能量 −5，剩余 ${progress.energy}/10。`));
  if(modalMode==='boss'&&shouldOfferSubtractionCheck(progress.stage,question,correct)){
    const check=document.createElement('button');
    check.className='outline';
    check.id='subtract-check';
    check.textContent='做一道检查题 · 不扣能量';
    check.onclick=showSubtractionCheck;
    $('#hint').after(check);
  }
  const next=$('#question-next');next.hidden=false;next.textContent=modalMode==='boss'?(!canChallenge(progress)?'返回海域补充能量':independent?(bossPassed(progress)?'领取通行徽章':'下一道关卡'):'换一道再试'):'继续练习';
  next.onclick=()=>{if(modalMode==='boss'){if(!canChallenge(progress)){closePanel();return;}if(bossPassed(progress)){showVictory();return;}if(independent)skillIndex=activeSkills().findIndex(s=>!progress.evidence[s]);}else skillIndex=(skillIndex+1)%activeSkills().length;showQuestion();};update();
}

const subtractionKey=storageKey+':subtraction-review:v1';
let subtractionReview=null,transferIndex=0;
const attemptedTransfers=new Set();
try{
  const previous=JSON.parse(localStorage.getItem(subtractionKey));
  if(previous?.questionId&&Number.isFinite(previous.verifiedAt))subtractionReview=previous;
}catch{}
function supportQuestion(tag,title,prompt,options,onChoice,source=''){
  openPanel(tag);
  $('#panel-content').innerHTML=`<h2>${escapeText(title)}</h2><p class="question-prompt">${escapeText(prompt)}</p>
    <div class="answers text-answers">${options.map((option,i)=>`<button data-support-choice="${i}">${escapeText(option)}</button>`).join('')}</div>
    <div class="feedback" id="support-feedback" role="status"></div>${source}
    <div class="dialog-actions"><button class="text-button" id="support-exit">返回海域</button><button class="primary" id="support-next" hidden></button></div>`;
  $('#support-exit').onclick=closePanel;
  const buttons=$('#panel-content').querySelectorAll('[data-support-choice]');
  buttons.forEach((button,i)=>{button.onclick=()=>{
    buttons.forEach(item=>item.disabled=true);
    onChoice(i,button,buttons);
  };});
}
function supportNext(label,handler){
  const button=$('#support-next');
  button.textContent=label;
  button.hidden=false;
  button.onclick=handler;
  button.focus();
}
function showSubtractionCheck(){
  supportQuestion('珊瑚书屋 · 错因检查','先看看会不会改写','把 6 − (−7) 改写成加法，应写成哪一式？',['6 + (−7)','6 + 7','−6 + 7'],(index,button,buttons)=>{
    const needsLesson=checkOutcome(index===1?'add-opposite':'subtract-magnitude')==='show-lesson';
    buttons[1].classList.add('correct');
    if(needsLesson)button.classList.add('wrong');
    $('#support-feedback').textContent=needsLesson?'这道改写题也没答对。可以先练「减去负数」。':'你在这道题正确改写了减法。上次错因还不能确定，可以回海域后换题再试。';
    if(needsLesson)supportNext('去书屋补练',showSubtractionLesson);
  });
}
function showSubtractionLesson(){
  openPanel('珊瑚书屋 · 减法补练');
  $('#panel-content').innerHTML='<h2>减去负数，改成加上正数</h2><p class="question-prompt">以海平面为 0，浮标从水下 6 米升到水面上 1 米，一共上升多少米？</p><ol><li>求上升了多少米，用终点坐标减去起点坐标。</li><li>写出 1 − (−6)。减去 −6，就是加上它的相反数 6。</li><li>1 + 6 = 7，所以浮标上升了 7 米。</li></ol><div class="dialog-actions"><button class="text-button" id="support-exit">返回海域</button><button class="primary" id="support-transfer">换道新题独立试试</button></div>';
  $('#support-exit').onclick=closePanel;
  $('#support-transfer').onclick=showSubtractionTransfer;
}
function showSubtractionTransfer(){
  const q=transferQuestion(transferIndex++);
  const fresh=!attemptedTransfers.has(q.id)&&subtractionReview?.questionId!==q.id;
  supportQuestion('珊瑚书屋 · 独立复测','用温度记录独立试一次',q.prompt,q.options,(index,button,buttons)=>{
    attemptedTransfers.add(q.id);
    const correct=q.options[index]===q.answer;
    buttons[q.options.indexOf(q.answer)].classList.add('correct');
    if(!correct)button.classList.add('wrong');
    let message=correct?(fresh?'补练后独立答对。':'这道复练题答对了。'):'这次还没答对，可以回看书屋讲解。';
    if(correct&&fresh){
      subtractionReview={questionId:q.id,verifiedAt:Date.now()};
      try{localStorage.setItem(subtractionKey,JSON.stringify(subtractionReview));}
      catch{message+=' 本次记录未能保存到浏览器。';}
    }
    $('#support-feedback').textContent=message+' '+q.explanation;
    if(!correct)supportNext('回看讲解',showSubtractionLesson);
  });
}
function showFeatured(index){
  const q=featuredQuestions[index];
  const source='<p class="muted">题干来源：<a href="https://github.com/xiaoyang111222/cn-math-taxonomy" target="_blank" rel="noopener">cn-math-taxonomy</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener">CC BY-NC 4.0</a>。本游戏新增选项和解析，供非商业试玩。</p>';
  supportQuestion('珊瑚书屋 · 特色题','选做 '+(index+1)+' / '+featuredQuestions.length,q.prompt,q.options,(choice,button,buttons)=>{
    buttons[q.options.indexOf(q.answer)].classList.add('correct');
    if(q.options[choice]!==q.answer)button.classList.add('wrong');
    $('#support-feedback').textContent=q.explanation;
    supportNext(index+1<featuredQuestions.length?'下一道':'返回知识导览',()=>index+1<featuredQuestions.length?showFeatured(index+1):showStageGuide(1));
  },source);
}


function stopCageWrites(){
  cageConflict=true;
  ocean?.enterHunt(null);
  renderCages();
  const warning=$('#cage-save-warning');
  warning.textContent='另一个标签页更新了鱼笼进度，请刷新后继续。';
  warning.hidden=false;
}
function saveCages(stage=progress.stage){
  if(!cageState||cageConflict)return false;
  try{
    const key=cageKey(stage);
    if(localStorage.getItem(key)!==cageSavedRaw){stopCageWrites();return false;}
    const next=JSON.stringify(cageState);
    if(next!==cageSavedRaw)localStorage.setItem(key,next);
    cageSavedRaw=next;
    $('#cage-save-warning').hidden=true;
  }catch{
    const warning=$('#cage-save-warning');
    warning.textContent='鱼笼进度未能保存。';
    warning.hidden=false;
  }
  return !cageConflict;
}
window.addEventListener('pagehide',()=>{if(cageSavedRaw!==null)saveCages();});
window.addEventListener('storage',event=>{
  if(cageState&&(event.key===cageKey(progress.stage)||event.key===null)&&event.newValue!==cageSavedRaw)stopCageWrites();
});
function renderCages(){
  huntPanel.hidden=!cageState;
  if(!cageState)return;
  $('#hunt-heading').textContent=creatureForStage(progress.stage).predator.name+'与鱼笼';
  cageButtons.forEach((button,i)=>{
    const count=cageState.solved[i];
    button.textContent=cageFish[i].name+' · '+(cageState.eaten[i]?'已被吃掉':count===3?'已放出':count+' / 3 道');
    button.disabled=cageConflict||count===3;
  });
}
function enterHunt(){
  cageState=null;
  cageSavedRaw=null;
  cageConflict=false;
  if(progress.stage>=2){
    let raw=null;
    try{raw=localStorage.getItem(cageKey(progress.stage));}catch{}
    cageSavedRaw=raw;
    cageState=readCages(raw);
  }
  $('#cage-save-warning').hidden=true;
  ocean?.enterHunt(cageState);
  renderCages();
  huntStatus(cageState?.eaten.every(Boolean)?'leave':'waiting',.5,10);
}
function huntStatus(target,speed,rest){
  if(!cageState)return;
  const name=creatureForStage(progress.stage).predator.name;
  const text=cageState.eaten.every(Boolean)?'已吃饱，本关不再追击。'
    :target==='waiting'?'在守卫处 · '+rest+' 秒后出发'
    :rest?'正在休息 · '+rest+' 秒'
    :target==='fish'?'正在追放出的鱼 · '+speed.toFixed(1)+' 倍游速'
    :'正在追击 · '+speed.toFixed(1)+' 倍游速。吃对答案鱼可降速。';
  const status=$('#hunt-status');
  if(status.textContent!==name+text)status.textContent=name+text;
}
function onHuntBite(){
  grow(progress,-1);
  const current=feedingRound.question;
  if(current&&!feedingRound.complete){
    const state=readPractice(progress.stage);
    const candidates=PRACTICE_BANK[progress.stage].filter(q=>q.skill===current.skill&&q.id!==current.id);
    feedingRound.question=drawPracticeQuestion(candidates,state.seen,current.skill,Math.random,ocean?.fishAnswers())||candidates[0]||null;
    if(feedingRound.question)state.last=feedingRound.question.id;
  }
  updateFeeding();
  save();
  update();
  notice('被'+creatureForStage(progress.stage).predator.name+'咬到，能量 −1。已换一道觅食题。');
}
function showCage(i,continuing=false){
  if(!cageState||cageConflict||cageState.solved[i]===3||(!continuing&&$('#panel').open))return;
  const stage=progress.stage,state=cageState;
  const step=state.solved[i],q=drawCageQuestion(stage,state,i);
  if(!saveCages())return;
  supportQuestion('海图右侧 · '+cageFish[i].name+'鱼笼','第 '+(step+1)+' / 3 道',q.prompt,q.options.map(value=>q.optionLabels?.[value]??value),(choice,button,buttons)=>{
    const correct=q.options[choice]===q.answer;
    buttons[q.options.indexOf(q.answer)].classList.add('correct');
    if(!correct)button.classList.add('wrong');
    if(cageConflict){$('#support-feedback').textContent='另一个标签页更新了鱼笼进度，请刷新后继续。';return;}
    finishCageQuestion(state,i,correct);
    if(!saveCages()){$('#support-feedback').textContent='另一个标签页更新了鱼笼进度，请刷新后继续。';return;}
    logAnswer("鱼笼",q,q.options[choice],correct);
    if(correct){
      renderCages();
      ocean?.refreshCages();
    }
    $('#support-feedback').textContent=(state.solved[i]===3?'笼门打开，'+cageFish[i].name+'游出去了。':correct?'答对了。':'这题答错了，下一道会换题。')+' '+q.explanation;
    if(state.solved[i]<3)supportNext(correct?'下一道':'换一道题',()=>showCage(i,true));
  });
}

function showVictory(){
  const nextStage=STAGES[progress.stage+1];openPanel(`${STAGES[progress.stage].title} · 阶段通过`);
  const ready=nextStage&&canEnterStage(progress,progress.stage+1);
  $('#panel-content').innerHTML=`<div class="badge">🏅</div><h2>${STAGES[progress.stage].title}挑战通过！</h2><p>你已完成本阶段 ${activeSkills().length} 个知识点的 Boss 试炼。能量 ${progress.energy} / 10。</p><div class="feedback">${nextStage?`下一站：${nextStage.chapter}。首次进入需要满10点能量，并消耗10点；再次返回不收费。${ready?'现在可以出发！':`还需积累 ${10-progress.energy} 点能量，通关记录会保留。`}`:'当前初一课程航线已通过，可以返回目录复习；这不等于长期掌握已验证。'}阶段通过仍需后续复习验证。</div><div class="dialog-actions"><button class="text-button" id="return-sea">返回海域${ready?'练习':'补充能量'}</button>${nextStage?`<button class="primary" id="next-stage" ${ready?'':'disabled'}>进入${nextStage.title}</button>`:''}</div>`;
  $('#return-sea').onclick=closePanel;if(nextStage)$('#next-stage').onclick=()=>showStageGuide(progress.stage+1);save();update();renderMap();
}
function challenge(){if(bossPassed(progress))showVictory();else startQuestions('boss');}
function showRecords(){
  openPanel('我的航海记录');
  const practiceRecords=Object.fromEntries(STAGES.map((_,stage)=>[stage,readPractice(stage)]));
  const answered=Object.values(practiceRecords).reduce((n,state)=>n+Object.keys(state.answers).length,0);
  const wrong=Object.values(practiceRecords).reduce((n,state)=>n+state.wrong.length,0);
  const retried=Object.values(practiceRecords).reduce((n,state)=>n+state.wrong.filter(id=>state.answers[id]?.lastCorrect).length,0);
  $('#panel-content').innerHTML=`<h2>每一点进步，都有迹可循</h2><p>本版已作答 ${answered} 道不同觅食题；曾答错 ${wrong} 道，其中最近复练答对 ${retried} 道。</p><p class="small-note">旧版已见题和错题继续保留，旧版没有逐题作答次数，无法补算。</p>${subtractionReview?'<div class="record-row"><span>减去负数</span><b>补练后独立答对</b></div>':''}<div class="record-row"><span>成长能量</span><b>${progress.energy} / 10</b></div>${SKILLS.map((s,i)=>`<div class="record-row"><span>${names[i]}</span><b>${progress.evidence[s]?'阶段独立通过':'等待挑战'}</b></div>`).join('')}<p class="small-note">游戏能量不代表知识掌握。当前记录尚无跨日保持验证。</p><div class="dialog-actions"><button id="answer-review" class="primary">答题回顾</button><button id="export" class="primary">导出航行记录</button><button id="back" class="text-button">返回海洋</button></div>`;
  $('#back').onclick=closePanel;
  $('#answer-review').onclick=()=>showAnswerReview();
  $('#export').onclick=()=>{
    const record={...progress,appVersion:'0.3.1',exportedAt:new Date().toISOString(),practiceRecords,answerHistory:readAnswerHistory(),subtractionReview,fishCages:cageState,...experience?.exportData()};
    const blob=new Blob([JSON.stringify(record,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob),link=document.createElement('a');
    link.href=url;link.download='知识星球-v0.3-航行记录.json';link.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  };
}

const answerHistoryKey=storageKey+':answer-history:v1';
let unsavedAnswers=[];
function readAnswerHistory(){
  let saved=[];
  try{const raw=JSON.parse(localStorage.getItem(answerHistoryKey));if(Array.isArray(raw))saved=raw.filter(row=>row&&typeof row.key==='string'&&Array.isArray(row.options));}catch{}
  return [...saved,...unsavedAnswers];
}
function logAnswer(source,q,value,correct,origin=null){
  const label=v=>String(q.optionLabels?.[v]??v);
  const stage=origin?.stage??progress.stage;
  const entry={key:origin?.key??JSON.stringify([stage,source,q.id]),stage,source,
    originalSource:origin?.originalSource??source,skill:q.skill,prompt:q.prompt,
    options:q.options.map(label),answer:label(q.answer),value:label(value),correct,
    explanation:q.explanation,time:Date.now()};
  unsavedAnswers.push(entry);
  try{
    localStorage.setItem(answerHistoryKey,JSON.stringify(readAnswerHistory()));
    unsavedAnswers=[];
  }catch{}
}
function answerGroups(history){
  const groups=new Map();
  const add=row=>{
    if(!groups.has(row.key))groups.set(row.key,{latest:row,attempts:0,correct:0,rows:[]});
    return groups.get(row.key);
  };
  const newFeeding=new Map();
  for(const row of history){
    const group=add(row);
    group.latest=row;group.rows.push(row);group.attempts++;group.correct+=Number(row.correct);
    if(row.source==='觅食'){
      const count=newFeeding.get(row.key)||{attempts:0,correct:0};
      count.attempts++;count.correct+=Number(row.correct);newFeeding.set(row.key,count);
    }
  }
  STAGES.forEach((_,stage)=>{
    const state=readPractice(stage);
    for(const q of PRACTICE_BANK[stage]){
      const stat=state.answers[q.id];
      if(!stat&&!state.wrong.includes(q.id))continue;
      const key=JSON.stringify([stage,'觅食',q.id]),count=newFeeding.get(key);
      const oldAttempts=Math.max(0,(stat?.attempts||0)-(count?.attempts||0));
      const oldCorrect=Math.max(0,(stat?.correct||0)-(count?.correct||0));
      if(!oldAttempts&&groups.has(key))continue;
      const label=v=>String(q.optionLabels?.[v]??v);
      const row={key,stage,source:'觅食',originalSource:'觅食',skill:q.skill,prompt:q.prompt,
        options:q.options.map(label),answer:label(q.answer),correct:stat?.lastCorrect??false,explanation:q.explanation};
      const group=add(row);
      group.attempts+=oldAttempts;group.correct+=oldCorrect;
      group.historical=oldAttempts?'历史汇总 · '+oldAttempts+' 次，答对 '+oldCorrect+' 次':'旧错题 · 作答次数未知';
    }
  });
  return [...groups.values()].sort((a,b)=>(b.latest.time||0)-(a.latest.time||0));
}
function showAnswerReview(mode='recent',stage='',skill='',result=''){
  openPanel('学习记录 · 答题回顾');
  const history=readAnswerHistory(),groups=answerGroups(history);
  const sources=groups.map(group=>group.latest);
  const skills=[...new Set(sources.map(row=>row.skill).filter(Boolean))];
  $('#panel-content').innerHTML=`<h2>答题回顾</h2>
    <div class="dialog-actions">${[['recent','最近作答'],['retry','待复练'],['all','全部做过的题']].map(([id,label])=>`<button class="outline" data-review-mode="${id}" aria-pressed="${id===mode}">${label}</button>`).join('')}</div>
    ${unsavedAnswers.length?'<p role="status">有作答记录尚未保存，离开页面前可导出。</p>':''}
    <div class="review-filters">
      <label>海域 <select id="review-stage"><option value="">全部</option>${STAGES.map((sea,i)=>`<option value="${i}">${escapeText(sea.title)}</option>`).join('')}</select></label>
      <label>知识点 <select id="review-skill"><option value="">全部</option>${skills.map(id=>`<option value="${escapeText(id)}">${escapeText(topicName(id))}</option>`).join('')}</select></label>
      ${mode!=='retry'?'<label>结果 <select id="review-result"><option value="">全部</option><option value="correct">答对</option><option value="wrong">答错</option></select></label>':''}
    </div><div id="review-list"></div><div class="dialog-actions"><button id="review-more" class="outline" hidden>显示更多</button><button id="review-back" class="text-button">返回学习记录</button></div>`;
  const filter=row=>(stage===''||String(row.stage)===stage)&&(!skill||row.skill===skill)&&
    (mode==='retry'?!row.correct:!result||row.correct===(result==='correct'));
  const items=mode==='recent'?[...history].reverse().filter(filter).map(row=>({latest:row,rows:[]})):groups.filter(group=>filter(group.latest));
  const details=row=>`<p>${row.time?escapeText(new Date(row.time).toLocaleString('zh-CN'))+' · ':''}${escapeText(row.source)} · ${row.correct?'答对':'答错'}${row.value!==undefined?' · 我的答案 '+escapeText(row.value):''}</p>`;
  let shown=0;
  function showMore(){
    const next=items.slice(shown,shown+20);
    $('#review-list').insertAdjacentHTML('beforeend',next.map((group,i)=>{
      const row=group.latest;
      return `<article class="feedback review-card"><p class="muted">${escapeText(STAGES[row.stage]?.title||'海域记录')} · ${escapeText(row.originalSource||row.source)}</p><h3>${escapeText(row.prompt)}</h3>
      ${details(row)}${mode==='all'?`<p>已记录 ${group.attempts} 次，答对 ${group.correct} 次</p>`:''}
      ${group.historical?`<p>${escapeText(group.historical)}</p>`:''}
      <details><summary>查看答案与解析</summary><p>正确答案 ${escapeText(row.answer)}</p><p>${escapeText(row.explanation||'')}</p></details>
      ${group.rows.length>1?`<details><summary>历次作答</summary>${[...group.rows].reverse().map(details).join('')}</details>`:''}
      <button class="outline" data-review-retry="${shown+i}">重做</button></article>`;
    }).join(''));
    shown+=next.length;
    $('#review-more').hidden=shown>=items.length;
  }
  if(items.length)showMore();else $('#review-list').textContent=mode==='recent'?'暂无符合条件的逐次记录。旧觅食题可在「全部做过的题」查看。':'暂无符合条件的题目。';
  $('#review-more').onclick=showMore;
  $('#review-list').onclick=e=>{
    const button=e.target.closest('[data-review-retry]');
    if(button)redoAnswer(items[Number(button.dataset.reviewRetry)].latest,()=>showAnswerReview(mode,stage,skill,result));
  };
  $('#review-back').onclick=showRecords;
  for(const [id,value] of [['stage',stage],['skill',skill],['result',result]]){
    const control=$('#review-'+id);
    if(!control)continue;
    control.value=value;
    control.onchange=()=>showAnswerReview(mode,$('#review-stage').value,$('#review-skill').value,$('#review-result')?.value||'');
  }
  document.querySelectorAll('[data-review-mode]').forEach(button=>button.onclick=()=>showAnswerReview(button.dataset.reviewMode,stage,skill));
}
function redoAnswer(row,back){
  const q={skill:row.skill,prompt:row.prompt,options:row.options,answer:row.answer,explanation:row.explanation};
  supportQuestion('答题回顾 · 复练','重新作答',q.prompt,q.options,(index,button,buttons)=>{
    const correct=q.options[index]===q.answer;
    logAnswer('复练',q,q.options[index],correct,row);
    buttons[q.options.indexOf(q.answer)]?.classList.add('correct');
    if(!correct)button.classList.add('wrong');
    $('#support-feedback').textContent=(correct?'答对了。':'答错了。')+' 正确答案 '+q.answer+'。 '+(q.explanation||'');
    supportNext('返回答题回顾',back);
  });
  $('#support-exit').textContent='返回答题回顾';
  $('#support-exit').onclick=back;
}

$('#journal').onclick=()=>{openPanel('航行手册');$('#panel-content').innerHTML='<h2>安心探索，独立闯关</h2><p>用方向键或 WASD 游动，也可以按住海面移动；平板和手机可用左下角方向按钮。用嘴部对准食物并主动游近，短暂接触后才会吃掉；身体擦过和停着不会进食。从第三海域起，天敌会追踪海龟；吃对答案鱼可降低天敌速度。能量0至10点，吃对加1、吃错减1，体型随能量改变；5点可挑战Boss，Boss答错扣5点。每个知识点通过三轮后，通关且满10点可以消耗能量进入新海域。</p><p>看海龟的题目，寻找带正确答案的金色小鱼。在珊瑚书屋学习，再点击海域守卫或右侧挑战按钮答题。每个知识点须独立答对；使用提示后要换题补验。</p><p>每次进入海域会先打开知识导览；上方“本海域知识与解题方法”可随时回看。从第三海域起，海图右侧有三个鱼笼。每笼答对三道题后放鱼，天敌会优先去吃这些鱼。</p><p>通过基准浅湾 Boss 后，可以进入潮汐海沟，继续有理数加、减、乘法。海域入口和学习记录保存在本机。</p><div class="feedback">已接入初一上下册现有课程清单及视图、投影补充内容。已核对人教版上下册目录，教学内容尚待逐页复核。海龟吸收能量鱼属于幻想玩法；主要生物与海景素材由图像工具生成，任务地标以SVG绘制。</div>';};
$('#progress-button').onclick=showRecords;$('#challenge').onclick=challenge;
$('#shelter-shortcut').onclick=()=>{ocean?.goShelter();notice(`已到${shelterName(progress.stage)}入口，选择「进入庇护所」查看解题技巧。`);};
$('#interact').onclick=showShelter;
for(const b of document.querySelectorAll('[data-dir]')){b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);ocean?.setDirection(b.dataset.dir,true);});for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,()=>ocean?.setDirection(b.dataset.dir,false));}
experience=createExperience({onMode(){updateFeeding();setPause(false);notice('看海龟身上的题，游向带正确答案的小鱼。');},onGuide:()=>showStageGuide(progress.stage),onChallenge:challenge,onRecords:showRecords,onFreeze:freeze,onWorld:reduced=>ocean?.setReducedMotion(reduced)});
try{ocean=createOcean({onNotice:notice,onCage:showCage,onHuntEat(){saveCages();renderCages();},onHuntBite,onHuntStatus:huntStatus,mode:experience.mode,energy:progress.energy,stage:progress.stage,onBoss:challenge,onEat:eatFood,onShelter(safe){nearShelter=safe;$('#interact').hidden=!safe;},onPoolChanged(){if(experience.mode==='practice'&&feedingRound.question&&!feedingRound.complete)updateFeeding();},onReady(api){ocean=api;enterHunt();if(experience.mode==='practice')updateFeeding();experience.refresh();freeze();}});}catch(error){notice(error.message);$('#challenge').disabled=false;}
document.querySelector('#goal-food b').textContent='吃下正确答案';
document.querySelector('#goal-food small').textContent='海龟带题、食物带答案；每 10 个结算。';
document.querySelector('.control-strip .legend-dot').parentElement.lastChild.textContent='食物上的数字是答案';
const oldManual=$('#journal').onclick;
$('#journal').onclick=()=>{oldManual();const p=document.createElement('p');p.textContent='觅食练习：题目跟随海龟，食物上的数字是答案。每吃一个换题，答对加1分、答错减1分；每10个结算正确率。低于80%显示知识提示并重练，达到80%进入下一知识点。累计总分保留，刷新后保留当前题目与本轮进度。每轮固定一个知识点，新题用完可主动复习。';$('#panel-content').prepend(p);};
$('#game-notice').textContent='看海龟身上的题目，寻找正确答案。答对 +1，答错 −1。';
document.querySelector('#goal-learn small').textContent='在本关庇护所学习解题技巧。';
document.querySelector('#goal-boss b').textContent='通过 Boss，解锁下一阶段';
document.querySelector('#goal-boss small').textContent='点击海域守卫，完成本阶段全部知识点的试炼。';
document.querySelector('.trail-title h3').textContent='探索、练习，再向下一片海出发';
document.querySelector('.control-strip span:first-child').title='游动有缓慢加速与减速';
document.querySelector('footer span:first-child').textContent='知识星球 · 海洋远航 0.3.1';
document.querySelector('footer span:nth-child(2)').textContent='初一课程：13 个海域 / 34 个教学单元';
update();
if(feedingRound.complete)finishFeeding({needsHint:feedingRound.correct<8,accuracy:feedingRound.correct*10});else showStageGuide(progress.stage);









