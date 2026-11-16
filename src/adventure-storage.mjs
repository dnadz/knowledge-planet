import {freshAdventure,validateAdventure,reduceAdventure} from './adventure-state.mjs';
export const ADVENTURE_KEY='knowledge-planet-ocean-v1:adventure:v1';
export function createAdventureStore(storage){
 let raw=null,unreadable=false;try{raw=storage.getItem(ADVENTURE_KEY);}catch{unreadable=true;}
 const result=validateAdventure(raw);let state=result.state,readOnly=result.readOnly||unreadable,dirty=false,conflict=false,rawPreserved=result.rawPreserved;
 const warnings=unreadable?['浏览器拒绝读取任务记录；原记录未覆盖。']:result.warnings;
 function save(){try{storage.setItem(ADVENTURE_KEY,JSON.stringify(state));dirty=false;}catch{dirty=true;}}
 return {get state(){return state;},get readOnly(){return readOnly;},get dirty(){return dirty;},get conflict(){return conflict;},get rawPreserved(){return rawPreserved;},get warnings(){return warnings;},
 dispatch(event){if(readOnly)return '任务记录暂为只读，请先导出并处理记录问题。';const next=reduceAdventure(state,event);if(next.state!==state){state=next.state;save();}return next.feedback;},
 externalChange(value){readOnly=true;conflict=true;rawPreserved=value;},
 rebuild(){let parsed;try{parsed=JSON.parse(raw);}catch{}if(parsed&&(parsed.version!==1||parsed.contentVersion!==1)||unreadable||conflict)return false;state=freshAdventure();readOnly=false;save();return !dirty;},
 };
}
