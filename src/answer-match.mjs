function numeric(value){
 if(typeof value==='number')return Number.isFinite(value)?value:null;
 if(typeof value!=='string')return null;
 const text=value.trim().replace(/−/g,'-'),number='[+-]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)';
 if(new RegExp(`^${number}$`).test(text))return Number(text);
 const fraction=text.match(new RegExp(`^(${number})\\s*/\\s*(${number})$`));
 return fraction&&Number(fraction[2])!==0?Number(fraction[1])/Number(fraction[2]):null;
}
export function matchesAnswer(question,value){
 if(value===question.answer)return true;
 if(question.sourceNode==='scientific-notation')return false;
 const a=numeric(question.answer),b=numeric(value);
 return a!==null&&b!==null&&Math.abs(a-b)<=1e-12*Math.max(1,Math.abs(a),Math.abs(b));
}
