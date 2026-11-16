const tones={enter:[440,.08],confirm:[520,.10],success:[660,.28],retry:[270,.16]};
export function scheduleTone(context,output,kind,volume=.3){
 const [frequency,duration]=tones[kind]||tones.confirm,osc=context.createOscillator(),gain=context.createGain(),now=context.currentTime;
 osc.type='sine';osc.frequency.setValueAtTime(frequency,now);if(kind==='success')osc.frequency.exponentialRampToValueAtTime(990,now+duration);
 gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(volume*.18,now+.012);gain.gain.exponentialRampToValueAtTime(.0001,now+duration);
 osc.connect(gain);gain.connect(output);osc.start(now);osc.stop(now+duration+.02);osc.onended=()=>{osc.disconnect();gain.disconnect();};return osc;
}
export function createAudio({contextFactory=()=>new (window.AudioContext||window.webkitAudioContext)()}={}){
 let context,muted=true,volume=.3,suspended=false;const active=new Set();
 return {async unlock(){try{context??=contextFactory();await context.resume();return true;}catch{return false;}},
 play(kind){if(muted||suspended||!context||context.state!=='running')return false;const osc=scheduleTone(context,context.destination,kind,volume);active.add(osc);osc.addEventListener('ended',()=>active.delete(osc),{once:true});return true;},
 setMuted(value){muted=!!value;if(muted)for(const o of active){try{o.stop();}catch{}}},setVolume(value){volume=Math.max(0,Math.min(1,value));},suspend(){suspended=true;},resume(){suspended=false;},get activeCount(){return active.size;},destroy(){for(const o of active){try{o.stop();}catch{}}active.clear();context?.close();}};
}
