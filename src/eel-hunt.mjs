import {COURSE_STAGES,courseQuestion,lessonFor} from './curriculum.mjs';
import {PRACTICE_BANK} from './practice-bank.mjs';

export const cageFish=[
 {name:'金尾鲱',color:0xf0b54e,mark:'尾'},
 {name:'蓝纹鲭',color:0x6ccefb,mark:'纹'},
 {name:'赤鳍鲷',color:0xf38d8d,mark:'鳍'},
];
export const cageKey=stage=>'knowledge-planet-ocean-v1:fish-cages:'+stage;
export const eelSpeed=seconds=>(5+Math.min(10,Math.max(0,Math.floor((seconds-15)/2))))/10;
export const createHunt=()=>({age:0,rest:0,leaving:false});
export const restartChase=hunt=>{hunt.age=0;};
export function advanceHuntClock(hunt,dt){
 const resting=Math.min(hunt.rest,dt);
 hunt.rest-=resting;
 hunt.age+=dt-resting;
 return dt-resting;
}
export function sharkMouthOffset(width,facing){
 return {x:width*.36*facing,y:width*.035};
}
export function mouthTouches(mouth,target,radius){
 return Math.hypot(mouth.x-target.x,mouth.y-target.y)<=radius;
}
export function readCages(raw){
 let saved;
 try{saved=JSON.parse(raw);}catch{}
 const solved=cageFish.map((_,i)=>Number.isInteger(saved?.solved?.[i])?Math.max(0,Math.min(3,saved.solved[i])):0);
 const eaten=solved.map((count,i)=>count===3&&saved?.eaten?.[i]===true);
 const rest=Number.isFinite(saved?.rest)?Math.max(0,Math.min(60,saved.rest)):0;
 const pending=cageFish.map((_,i)=>typeof saved?.pending?.[i]==='string'?saved.pending[i]:null);
 const seen=Array.isArray(saved?.seen)?saved.seen.filter(id=>typeof id==='string').slice(-12):[];
 const correctIds=Array.isArray(saved?.correctIds)?[...new Set(saved.correctIds.filter(id=>typeof id==='string'))].slice(0,9):[];
 return {solved,eaten,rest,pending,seen,correctIds};
}
export function huntTarget(state,hunt){
 if(state.eaten.every(Boolean))return 'leave';
 if(hunt.rest>0)return 'rest';
 return state.solved.some((count,i)=>count===3&&!state.eaten[i])?'fish':'player';
}
export function feedEel(state,hunt,i){
 state.eaten[i]=true;
 if(!state.eaten.every(Boolean))hunt.rest=60;
}
export function cageQuestions(stage){
 const pool=COURSE_STAGES[stage].skills.flatMap(skill=>lessonFor(skill).questions.map((_,i)=>courseQuestion(skill,i)));
 const unique=new Map();
 for(const q of [...pool.filter(q=>q.dimension==='transfer'),...pool.filter(q=>q.dimension==='apply'),...pool,...PRACTICE_BANK[stage]]){
   if(!unique.has(q.prompt))unique.set(q.prompt,q);
   if(unique.size===18)break;
 }
 return [...unique.values()];
}

export function drawCageQuestion(stage,state,cage,random=Math.random){
 const pool=cageQuestions(stage);
 const current=pool.find(q=>q.id===state.pending[cage]);
 if(current)return current;
 const available=pool.filter(q=>!state.pending.includes(q.id)&&!state.correctIds.includes(q.id));
 const fresh=available.filter(q=>!state.seen.includes(q.id));
 const candidates=fresh.length?fresh:available.filter(q=>q.id!==state.seen.at(-1));
 const next=candidates[Math.floor(random()*candidates.length)];
 state.pending[cage]=next.id;
 return next;
}
export function finishCageQuestion(state,cage,correct){
 const id=state.pending[cage];
 if(!id)return;
 state.seen=[...state.seen.filter(previous=>previous!==id),id].slice(-12);
 state.pending[cage]=null;
 if(correct){
  state.solved[cage]++;
  state.correctIds.push(id);
 }
}
