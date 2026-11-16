import {ADVENTURES,previousMission} from './adventure-content.mjs';
export const freshAdventure=()=>({version:1,contentVersion:1,missionId:null,itemId:null,draft:{value:'',reasonId:''},records:{},completed:[],replay:null});
export const activeRecords=state=>state.replay?.missionId===state.missionId?state.replay.records:state.records;
const blank=()=>({attempts:0,hinted:false,firstIndependent:false,lastCorrect:false,done:false,value:'',reasonId:''});
export function gradeAdventureItem(item,{value,reasonId},legacy=false){
 const needsReason=legacy||item.phase==='transfer';
 const normalized=typeof value==='string'?value.trim().replace(/−/g,'-'):typeof value==='number'?String(value):'';
 const number=/^[+-]?\d+$/.test(normalized)?Number(normalized):NaN;
 const valid=Number.isSafeInteger(number)&&number>=(item.min??(item.kind==='distance'?0:-6))&&number<=(item.max??6)&&(!needsReason||item.reasons.some(r=>r.id===reasonId));
 const valueCorrect=valid&&number===item.answer,reasonCorrect=valid&&(!needsReason||reasonId===item.reasonId);
 return {valid,valueCorrect,reasonCorrect,correct:valueCorrect&&reasonCorrect,explanation:!valid?(needsReason?'请填入范围内的整数，并选择一个理由。':'请填入范围内的整数。'):valueCorrect&&reasonCorrect?item.explanation:!valueCorrect?(item.expression?'再检查运算符、符号和结果的大小。':'再检查位置、方向或距离。')+item.hint:'数值正确，再想想为什么。'+item.hint};
}
export function reduceAdventure(state,event,definitions=ADVENTURES){
 const no=feedback=>({state,feedback});const mission=definitions.find(m=>m.id===event.missionId);
 if(event.type==='EXIT')return no('已保留任务进度');
 if(!mission)return no('任务不存在');
 const previous=previousMission(mission,definitions);if(previous&&!state.completed.includes(previous.id))return no('先完成本海域前一项航线任务');
 if(event.type==='START'){
  if(state.missionId===mission.id&&state.itemId)return no('继续上次任务');
  const index=state.completed.includes(mission.id)?0:Math.max(0,mission.items.findIndex(q=>!state.records[q.id]?.done));
  return {state:{...state,missionId:mission.id,itemId:mission.items[index].id,draft:{value:'',reasonId:''},replay:state.completed.includes(mission.id)?{missionId:mission.id,records:{}}:null},feedback:''};
 }
 if(state.missionId!==mission.id||event.itemId!==state.itemId)return no('该项目已变化，请重新打开');
 const q=mission.items.find(q=>q.id===state.itemId);if(!q)return no('项目不存在');
 const s=structuredClone(state),records=activeRecords(s),record=records[q.id]||blank();
 if(event.type==='NEXT'){
  if(q.phase!=='demo'&&!record.done)return no('先完成当前项目');
  if(q.phase==='demo')records[q.id]={...blank(),done:true,lastCorrect:true};
  const next=mission.items[mission.items.indexOf(q)+1];
  if(next){s.itemId=next.id;s.draft={value:'',reasonId:''};}
  else{if(!s.completed.includes(mission.id))s.completed.push(mission.id);s.itemId=null;s.draft={value:'',reasonId:''};}
  return {state:s,feedback:next?'':mission.reward};
 }
 if(record.done)return no('本项目已完成，选择继续');
 if(event.type==='SELECT_VALUE'){s.draft.value=String(event.value??'').slice(0,24);return {state:s,feedback:''};}
 if(event.type==='SELECT_REASON'){if(q.phase!=='transfer')return no('');if(!q.reasons.some(r=>r.id===event.reasonId))return no('请选择有效理由');s.draft.reasonId=event.reasonId;return {state:s,feedback:''};}
 if(event.type==='SHOW_HINT'){records[q.id]={...record,hinted:true};return {state:s,feedback:q.hint};}
 if(event.type==='SUBMIT'){
  const result=gradeAdventureItem(q,s.draft);if(!result.valid)return no(result.explanation);
  if(record.attempts>=Number.MAX_SAFE_INTEGER)return no('尝试记录已达到上限，请导出记录');
  const attempts=record.attempts+1;
  records[q.id]={...record,attempts,value:s.draft.value,reasonId:q.phase==='transfer'?s.draft.reasonId:'',lastCorrect:result.correct,done:result.correct,firstIndependent:!s.replay&&attempts===1&&!record.hinted&&['independent','transfer'].includes(q.phase)&&result.correct};
  return {state:s,feedback:result.explanation};
 }
 return no('未知操作');
}
function gradeSavedAttempt(item,record){
 if(item.legacyReasons?.some(reason=>reason.id===record.reasonId)){
  return gradeAdventureItem({...item,reasons:item.legacyReasons,reasonId:item.legacyReasonId},record,true);
 }
 return gradeAdventureItem(item,record,item.phase!=='transfer'&&record.reasonId!=='');
}
export function validateAdventure(raw,definitions=ADVENTURES){
 const invalid=message=>({state:freshAdventure(),warnings:[message],readOnly:true,rawPreserved:typeof raw==='string'?raw:JSON.stringify(raw)});
 if(raw===null||raw===undefined)return {state:freshAdventure(),warnings:[],readOnly:false,rawPreserved:null};
 let s;try{s=typeof raw==='string'?JSON.parse(raw):structuredClone(raw);}catch{return invalid('任务记录无法读取，原始记录已保留。');}
 if(!s||s.version!==1||s.contentVersion!==1)return invalid('任务记录版本不匹配；请使用匹配版本或导出后重建任务记录。');
 if(!s.records||typeof s.records!=='object'||Array.isArray(s.records)||!Array.isArray(s.completed)||new Set(s.completed).size!==s.completed.length)return invalid('任务记录格式异常。');
 s.replay??=null;
 const all=definitions.flatMap(m=>m.items);
 function validRecords(records,replayMission=null){
  if(!records||typeof records!=='object'||Array.isArray(records))return false;
  for(const [id,r]of Object.entries(records)){
   const q=all.find(q=>q.id===id),m=definitions.find(m=>m.items.some(item=>item.id===id));
   if(!q||replayMission&&m.id!==replayMission||!r||!Number.isSafeInteger(r.attempts)||r.attempts<0||!['hinted','firstIndependent','lastCorrect','done'].every(k=>typeof r[k]==='boolean')||typeof r.value!=='string'||typeof r.reasonId!=='string')return false;
   if(q.phase==='demo'){if(r.attempts!==0||!r.done||!r.lastCorrect||r.firstIndependent)return false;}
   else if(r.done!==r.lastCorrect||r.attempts===0&&(r.done||r.firstIndependent)||r.attempts>0&&(!gradeSavedAttempt(q,r).valid||gradeSavedAttempt(q,r).correct!==r.lastCorrect)||r.firstIndependent!==(!replayMission&&r.attempts===1&&!r.hinted&&['independent','transfer'].includes(q.phase)&&r.lastCorrect))return false;
   for(const before of m.items.slice(0,m.items.indexOf(q)))if(!records[before.id]?.done)return false;
   const previous=previousMission(m,definitions);if(previous&&!s.completed.includes(previous.id))return false;
  }return true;
 }
 if(!validRecords(s.records))return invalid('任务作答或步骤记录异常。');
 if(s.replay&&(!s.completed.includes(s.replay.missionId)||s.replay.missionId!==s.missionId||!validRecords(s.replay.records,s.replay.missionId)))return invalid('复练记录异常。');
 for(let i=0;i<s.completed.length;i++){const done=definitions.find(m=>m.id===s.completed[i]);if(!done||!done.items.every(q=>s.records[q.id]?.done))return invalid('任务完成记录异常。');const previous=previousMission(done,definitions);if(previous&&!s.completed.slice(0,i).includes(previous.id))return invalid('任务完成顺序异常。');}
 const m=definitions.find(m=>m.id===s.missionId);
 if(s.missionId!==null&&!m||s.itemId!==null&&(!m||!m.items.some(q=>q.id===s.itemId))||!s.draft||typeof s.draft.value!=='string'||s.draft.value.length>24||typeof s.draft.reasonId!=='string')return invalid('当前任务记录异常。');
 if(m){const previous=previousMission(m,definitions);if(previous&&!s.completed.includes(previous.id))return invalid('当前任务未解锁。');const index=m.items.findIndex(q=>q.id===s.itemId);if(index>0&&!m.items.slice(0,index).every(q=>activeRecords(s)[q.id]?.done))return invalid('当前任务步骤异常。');}
 return {state:s,warnings:[],readOnly:false,rawPreserved:null};
}
