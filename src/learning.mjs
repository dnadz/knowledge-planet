import {COURSE_STAGES,courseQuestion} from './curriculum.mjs';
export const STAGES=COURSE_STAGES;
export const SKILLS = STAGES.flatMap(s=>s.skills);
export const freshProgress = () => ({version:2,stage:0,visited:[0],energy:0,feedingScore:0,evidence:{},bossSteps:{},seen:[],attempts:0});
export function validateProgress(raw) {
  const p=freshProgress();
  if(!raw || ![1,2].includes(raw.version)) return p;
  p.energy=Number.isFinite(raw.energy)?Math.max(0,Math.min(10,Math.floor(raw.energy/(raw.version===1?5:1)))):0;
  p.feedingScore=Number.isSafeInteger(raw.feedingScore)?raw.feedingScore:0;
  p.attempts=Number.isSafeInteger(raw.attempts)&&raw.attempts>=0?raw.attempts:0;
  for(const s of SKILLS) if(raw.evidence?.[s]===true) p.evidence[s]=true;
  for(const s of SKILLS){if(p.evidence[s])p.bossSteps[s]=3;else if(Number.isInteger(raw.bossSteps?.[s]))p.bossSteps[s]=Math.max(0,Math.min(2,raw.bossSteps[s]));}
  if(Number.isInteger(raw.stage)&&raw.stage>=0&&raw.stage<STAGES.length&&STAGES.slice(0,raw.stage).every(s=>s.skills.every(id=>p.evidence[id])))p.stage=raw.stage;
  const visited=raw.version===1?Array.from({length:p.stage+1},(_,i)=>i):Array.isArray(raw.visited)?raw.visited:[];
  p.visited=[...new Set([0,p.stage,...visited.filter(i=>Number.isInteger(i)&&i>=0&&i<STAGES.length&&STAGES.slice(0,i).every(s=>s.skills.every(id=>p.evidence[id])))])];
  p.seen=Array.isArray(raw.seen)?raw.seen.filter(x=>typeof x==='string'&&x.length<80).slice(-200):[];
  return p;
}
export function grow(p, amount) {p.energy=Math.max(0,Math.min(10,p.energy+amount));}
export const bossPassed = (p,stage=p.stage??0) => !!STAGES[stage]&&STAGES[stage].skills.every(s=>p.evidence[s]===true);
export const canEnterStage=(p,stage)=>Number.isInteger(stage)&&!!STAGES[stage]&&STAGES.slice(0,stage).every((_,i)=>bossPassed(p,i))&&(stage===0||p.visited?.includes(stage)||p.energy>=10);
export function enterStage(p,stage){if(!canEnterStage(p,stage))return false;if(stage>0&&!p.visited?.includes(stage)){grow(p,-10);p.visited??=[0];p.visited.push(stage);}p.stage=stage;return true;}
export function recordAnswer(p,q,value,hinted=false) {
  const correct=value===q.answer; const seen=p.seen.slice(-4).includes(q.id);
  p.attempts++; if(!seen) p.seen.push(q.id); p.seen=p.seen.slice(-200);
  if(correct&&!hinted&&!seen) p.evidence[q.skill]=true;
  return {correct,independent:correct&&!hinted&&!seen};
}
export function questionFor(skill,index=0) {
  if(!SKILLS.includes(skill)) throw new Error('Unknown skill');
  if(!['axis','opposite','distance','add','subtract','multiply'].includes(skill))return courseQuestion(skill,index);
  if(['add','subtract','multiply'].includes(skill)){
    const n=Math.abs(Math.floor(index)),start=(n%2?-1:1)*(n%7+2),move=(n%3?-1:1)*(n%5+1);
    const op=skill==='add'?'+':skill==='subtract'?'−':'×',answer=skill==='add'?start+move:skill==='subtract'?start-move:start*move;
    const expression=`(${start}) ${op} (${move})`;
    const rule=skill==='add'?'同号相加保留原符号，绝对值相加；异号相加用较大的绝对值减较小的，取绝对值较大者的符号。互为相反数相加得0。':skill==='subtract'?'减去一个数，等于加上这个数的相反数。':'非零两数相乘，同号得正、异号得负，再把绝对值相乘；乘0得0。';
    const options=[answer,answer+3,answer-2];options.push(...options.splice(0,n%3));
    return {id:`${skill}-${n}`,skill,label:skill==='add'?'有理数加法':skill==='subtract'?'有理数减法':'有理数乘法',start,move,answer,options,prompt:`计算 ${expression}，结果是多少？`,condition:`${expression} = ?`,explanation:`${rule} ${expression} = ${answer}。`,hint:rule};
  }
  const n=Math.abs(Math.floor(index)); const start=-(n%7+2); const move=n%5+5;
  const answer=skill==='axis'?start+move:skill==='opposite'?-start:Math.abs(start);
  const label=skill==='axis'?'数轴定位':skill==='opposite'?'相反数':'绝对值';
  const prompt=skill==='axis'?`海龟在数轴 ${start} 处，向右游 ${move} 个单位，到达的位置表示哪个数？`:skill==='opposite'?`导航浮标位于 ${start}。它关于原点对称的位置表示哪个数？`:`海龟位于数轴 ${start} 处。它到原点的距离是多少个单位？`;
  const explanation=skill==='axis'?`向右移动对应增加：${start} + ${move} = ${answer}。位置可以为负，移动的距离是非负数。`:skill==='opposite'?`${start} 与 ${answer} 到原点的距离相等，分别在原点两侧，所以互为相反数。`:`绝对值表示到原点的距离。|${start}| = ${answer}，距离不能是负数。`;
  const options=[answer,answer+2,answer-3]; const rotate=n%3; options.push(...options.splice(0,rotate));
  return {id:`${skill}-${n}`,skill,label,start,move,answer,options,prompt,explanation,hint:skill==='axis'?'先标出起点，再向右数单位格。':skill==='opposite'?'在原点的另一侧，找距离相同的点。':'数一数当前位置与原点之间有几个单位格。'};
}
