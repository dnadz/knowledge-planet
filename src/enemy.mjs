export const ENEMY_SECONDS=10;
export const newEnemyCycle=()=>({active:false,remaining:ENEMY_SECONDS});
export function tickEnemy(enemy,seconds,paused=false){
  if(paused||!Number.isFinite(seconds)||seconds<=0)return null;
  let event=null;
  while(seconds>=enemy.remaining){seconds-=enemy.remaining;enemy.active=!enemy.active;enemy.remaining=ENEMY_SECONDS;event=enemy.active?'appeared':'expired';}
  enemy.remaining-=seconds;return event;
}
export function dispelEnemy(enemy,correct){
  if(!enemy.active||!correct)return false;
  enemy.active=false;enemy.remaining=ENEMY_SECONDS;return true;
}
