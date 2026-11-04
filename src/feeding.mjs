import {STAGES,questionFor} from './learning.mjs';
import {lessonFor} from './curriculum.mjs';
import {matchesAnswer} from './answer-match.mjs';
export const newRound=(skill='axis',score=0,offset=0,stage=0)=>({stage,skill,score,offset,eaten:0,correct:0,complete:false,question:null,recent:[]});
export function feedingQuestion(round){
  if(round.question)return round.question;
  const q=questionFor(round.skill,round.offset+round.eaten);
  if(q.sourceQuestionId==='rational-numbers-q8')return {...q,id:q.id+':food-v1',prompt:'一座车库以地面层记为0，向上为正。B1层在地面下一层，应该记为哪个数？',condition:'地面为0，向上为正\n地下1层B1记为？',options:[-1,1,0],answer:-1,optionLabels:{'-1':'−1','1':'+1','0':'0'},hint:'地面下的位置在负方向，先看相差几层。',explanation:'向上规定为正，B1在地面下一层，所以记为−1。'};
  if(q.condition)return q;
  q.condition=q.skill==='axis'?`${q.start} 处向右 ${q.move} 格\n到达哪个数？`:q.skill==='opposite'?`${q.start} 的相反数\n是多少？`:`|${q.start}| = ?\n到原点的距离`;
  return q;
}
export function eatAnswer(round,value){
  if(round.complete)return null;
  const q=feedingQuestion(round),correct=matchesAnswer(q,value);
  round.eaten++;round.correct+=Number(correct);round.score+=correct?1:-1;
  round.complete=round.eaten===10;round.question=null;
  return {correct,question:q,complete:round.complete,accuracy:round.correct/round.eaten*100,needsHint:round.complete&&round.correct<8};
}
export function planFeedingTurn(round,existing,requested=1,maxFish=9,random=Math.random){
  if(round.question&&existing.includes(round.question.answer))return {question:round.question,added:[],removeIndex:null};
  const repaired=!!round.question;round.question=null;
  const legacy=['axis','opposite','distance','add','subtract','multiply'].includes(round.skill);
  const size=legacy?(['axis','opposite','distance'].includes(round.skill)?35:210):lessonFor(round.skill).questions.length;
  const candidates=Array.from({length:size},(_,i)=>feedingQuestion({...round,question:null,offset:round.offset+i,eaten:0}));
  const pick=list=>list[Math.floor(random()*list.length)];
  const reservoir=[...new Set(candidates.map(q=>q.answer))];
  let survivors=[...existing],removeIndex=null;
  const hasOld=candidates.some(q=>survivors.includes(q.answer));
  if(!hasOld&&survivors.length>=maxFish){removeIndex=survivors.length-1;survivors.pop();}
  const count=Math.min(Math.max(requested,hasOld?0:1),Math.max(0,maxFish-survivors.length));
  // New values are drawn BEFORE the next question, from many questions' answer pool.
  // Nothing here inserts a chosen question's answer into its newest fish.
  const added=Array.from({length:count},()=>pick(reservoir));
  if(!survivors.length&&reservoir.length>1){const shuffled=[...reservoir];for(let i=shuffled.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}for(let i=0;i<Math.min(added.length,shuffled.length);i++)added[i]=shuffled[i];}
  const available=[...survivors,...added],all=candidates.filter(q=>available.includes(q.answer));
  const fresh=all.filter(q=>!round.recent.includes(q.id)),pool=fresh.length?fresh:all;
  if(!pool.length)throw new Error('No available answer for feeding turn');
  const oldPool=pool.filter(q=>survivors.includes(q.answer)),newPool=pool.filter(q=>added.includes(q.answer));
  const selected=pick(oldPool.length&&random()<.75?oldPool:newPool.length?newPool:pool);
  round.question=selected;round.recent=[...round.recent,selected.id].slice(-2);
  return {question:selected,added,removeIndex,repaired};
}
export function nextRound(round){
  const skills=STAGES[round.stage??0].skills;
  const skill=round.correct>=8?skills[(skills.indexOf(round.skill)+1)%skills.length]:round.skill;
  return newRound(skill,round.score,round.offset+round.eaten+1,round.stage??0);
}
