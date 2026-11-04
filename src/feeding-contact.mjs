export function feedingContact(player,fish,seconds,previous=0){
  const facing=player.facing||1,mouth={x:player.x+facing*player.size*.34,y:player.y};
  const intentional=player.moving&&player.speed>20;
  const inFront=(fish.x-player.x)*facing>player.size*.18;
  const contact=intentional&&inFront&&Math.hypot(fish.x-mouth.x,fish.y-mouth.y)<17;
  const held=contact?previous+seconds:0;
  return {held,eat:held>=.12,mouth,contact};
}
