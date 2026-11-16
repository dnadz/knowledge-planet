export const SETTINGS_KEY='knowledge-planet-ocean-v1:settings:v1';
export function validateSettings(raw){return {version:1,soundEnabled:raw?.soundEnabled===true,volume:typeof raw?.volume==='number'&&Number.isFinite(raw.volume)?Math.max(0,Math.min(1,raw.volume)):.3,reducedMotion:typeof raw?.reducedMotion==='boolean'?raw.reducedMotion:null,preferredMode:['practice','adventure'].includes(raw?.preferredMode)?raw.preferredMode:null};}
export function readSettings(storage){try{return validateSettings(JSON.parse(storage.getItem(SETTINGS_KEY)));}catch{return validateSettings(null);}}
export function writeSettings(storage,settings){try{storage.setItem(SETTINGS_KEY,JSON.stringify(validateSettings(settings)));return true;}catch{return false;}}
