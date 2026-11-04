export function fishAppearance(value,numberedChoice=false){
  if(numberedChoice)return {frame:'pearl',label:`${value}号`,category:'答案编号'};
  if(typeof value!=='number'){
    const text=String(value),normalized=text.trim().replace(/−/g,'-');
    if(/^[+-]?(?:\d+(?:\.\d+)?|\.\d+)$/.test(normalized))return {frame:Number(normalized)>0?'red':Number(normalized)<0?'blue':'pearl',label:text,category:Number(normalized)>0?'正数':Number(normalized)<0?'负数':'零'};
    return {frame:'pearl',label:text,category:'文字或式子'};
  }
  if(value>0)return {frame:'red',label:`+${value}`,category:'正数'};
  if(value<0)return {frame:'blue',label:String(value),category:'负数'};
  return {frame:'pearl',label:'0',category:'零'};
}
