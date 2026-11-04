export function smoothVelocity(previous,dx,dy,seconds,speed=170){
  const length=Math.hypot(dx,dy),blend=1-Math.exp(-10*seconds);
  const x=length?dx/length*speed:0,y=length?dy/length*speed:0;
  return {x:previous.x+(x-previous.x)*blend,y:previous.y+(y-previous.y)*blend};
}
