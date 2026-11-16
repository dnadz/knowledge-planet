const seaTurtle={
 species:'turtle',
 animation:'turtle',
 predator:{
  name:'虎鲨',
  texture:'tiger-shark',
  asset:'assets/tiger-shark-v1.png',
  animation:'shark',
 },
};

// Pick the creature and its predator together when a sea introduces a new player species.
export function creatureForStage(_stage){
 return seaTurtle;
}
