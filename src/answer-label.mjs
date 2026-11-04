export function answerLabelPosition(x,y,width,height,viewportWidth,viewportHeight){
  const clamp=(value,min,max)=>max<min?(min+max)/2:Math.max(min,Math.min(max,value));
  return {x:clamp(x,width/2+8,viewportWidth-width/2-8),y:clamp(y-19,100+height/2,viewportHeight-height/2-10)};
}
