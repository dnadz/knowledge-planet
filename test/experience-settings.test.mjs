import test from 'node:test';import assert from 'node:assert/strict';
import {validateSettings,readSettings,writeSettings} from '../src/experience-settings.mjs';
import {createAdventureStore,ADVENTURE_KEY} from '../src/adventure-storage.mjs';
test('settings reject invalid types and preserve explicit accessibility preferences',()=>{
 const v=validateSettings({soundEnabled:'true',volume:Infinity,reducedMotion:'false',preferredMode:'hack'});
 assert.deepEqual(v,{version:1,soundEnabled:false,volume:.3,reducedMotion:null,preferredMode:null});
 assert.equal(validateSettings({reducedMotion:false,volume:0,preferredMode:'adventure'}).reducedMotion,false);
 assert.equal(readSettings({getItem(){throw Error();}}).soundEnabled,false);
 assert.equal(writeSettings({setItem(){throw Error();}},v),false);
});
test('task storage only writes its own key; failure exports memory; external updates freeze writes',()=>{
 const map=new Map([['knowledge-planet-ocean-v1','legacy']]);let fail=false;
 const storage={getItem:k=>map.get(k)??null,setItem(k,v){if(fail)throw Error('quota');map.set(k,v);}};
 const store=createAdventureStore(storage);assert.equal(map.size,1);
 store.dispatch({type:'START',missionId:'beacon'});assert.equal(map.get('knowledge-planet-ocean-v1'),'legacy');assert.equal(map.size,2);
 fail=true;store.dispatch({type:'NEXT',missionId:'beacon',itemId:'beacon-0'});assert.equal(store.dirty,true);assert.equal(store.state.itemId,'beacon-1');
 store.externalChange(map.get(ADVENTURE_KEY));const before=JSON.stringify(store.state);store.dispatch({type:'NEXT',missionId:'beacon',itemId:'beacon-1'});assert.equal(JSON.stringify(store.state),before);assert.equal(store.readOnly,true);
});
test('corrupt and future stores never overwrite raw data on startup or dispatch',()=>{
 for(const raw of ['{broken','{"version":9}']){
 let writes=0;const s=createAdventureStore({getItem:()=>raw,setItem(){writes++;}});
 s.dispatch({type:'START',missionId:'beacon'});assert.equal(writes,0);assert.equal(s.rawPreserved,raw);assert.equal(s.readOnly,true);
 }
});
