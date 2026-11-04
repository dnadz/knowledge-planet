import {grow,recordAnswer,questionFor} from './learning.mjs';
import {courseQuestion,lessonFor} from './curriculum.mjs';
export const bodyRatio=energy=>1+.2*Math.max(0,Math.min(10,energy));
export const canChallenge=p=>p.energy>=5;
const arithmetic = {
  add:{sign:'+',calculate:(a,b)=>a+b},
  subtract:{sign:'−',calculate:(a,b)=>a-b},
  multiply:{sign:'×',calculate:(a,b)=>a*b},
};
function arithmeticBossQuestion(skill,index,tier,recent){
  const {sign,calculate}=arithmetic[skill];
  const level=Math.max(0,Math.min(2,tier));
  const pool=Array.from({length:12},(_,i)=>{
    const a=i+3,b=i%2?-5:5,c=i%3?-2:2;
    const operands=level===0?[a,b]:level===1?[-a,-b]:[-a,b,c];
    const expression=operands.map(value=>value<0?`(${value})`:String(value)).join(` ${sign} `);
    const answer=operands.reduce(calculate);
    const options=[answer,answer+3,answer-2];
    options.push(...options.splice(0,i%3));
    const {label,hint}=questionFor(skill,i);
    return {
      id:`boss-${skill}-${level}-${i}`,skill,tier,answer,options,label,
      prompt:`计算 ${expression}，结果是多少？`,
      hint:level===2?'从左到右，先算前两个数，再和第三个数运算。'+hint:hint,
      explanation:`${expression} = ${answer}。${hint}`,
    };
  }).filter(q=>!recent.includes(q.id));
  return pool[Math.abs(index)%pool.length];
}
export function bossQuestion(skill,index,tier=0,seen=[]){
  const recent=seen.slice(-4);
  if(arithmetic[skill])return arithmeticBossQuestion(skill,index,tier,recent);
  const lesson=lessonFor(skill),dimension=['concept','apply','transfer'][Math.min(2,tier)];
  const all=lesson.questions.map((_,i)=>courseQuestion(skill,i));
  const fresh=all.filter(q=>!recent.includes(q.id)),preferred=fresh.filter(q=>q.dimension===dimension);
  const pool=preferred.length?preferred:fresh.length?fresh:all;
  return {...pool[Math.abs(index)%pool.length],tier};
}
export function recordBossAnswer(p,q,value,hinted=false){
  if(!canChallenge(p))return {correct:false,independent:false,blocked:true};
  const already=p.evidence[q.skill]===true,result=recordAnswer(p,q,value,hinted);
  if(!already)delete p.evidence[q.skill];
  p.bossSteps??={};
  if(result.independent){p.bossSteps[q.skill]=Math.min(3,(p.bossSteps[q.skill]||0)+1);if(p.bossSteps[q.skill]===3)p.evidence[q.skill]=true;}
  if(!result.correct)grow(p,-5);
  return result;
}
