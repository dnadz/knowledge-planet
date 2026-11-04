import {practiceFish} from './practice-bank.mjs';
import {oceanLayout,spawnPosition} from './ocean-layout.mjs';
import {smoothVelocity} from './motion.mjs';
import {feedingContact} from './feeding-contact.mjs';
import {fishAppearance} from './fish-appearance.mjs';
import {stageLook,animationFrame} from './visuals.mjs';
import {swimTexture} from './swim-textures.mjs';
import {bodyRatio} from './energy.mjs';
import {answerLabelPosition} from './answer-label.mjs';
import {drawShelter} from './shelter-art.mjs';
export function createOcean({onEat,onShelter,onNotice,onReady,onPoolChanged,onBoss,initialQuestion,stage=0,energy=0}) {
  const Phaser=window.Phaser; if(!Phaser) throw new Error('游戏引擎未能加载，请重新启动本地服务。');
  let sceneRef; let stopped=false; let currentQuestion=initialQuestion,currentStage=stage,currentEnergy=energy; const held={};
  const api={fishAnswers(){return sceneRef?.food?.map(fish=>fish.answer)??[];},prepareFeeding(round,future){return sceneRef?.questionText?sceneRef.prepareFeeding(round,future):null;},setEnergy(value){currentEnergy=Math.max(0,Math.min(10,value));},setStage(value){currentStage=value;if(sceneRef){for(const f of sceneRef.food){f.label.destroy();f.destroy();}sceneRef.food=[];sceneRef.paintWorld();sceneRef.configureBoss();sceneRef.goToStart();}},setQuestion(q){currentQuestion=q;if(sceneRef?.questionText)sceneRef.applyQuestion();},setPaused(value){stopped=value;if(value)for(const key of Object.keys(held))held[key]=false; if(sceneRef){sceneRef.target=null;sceneRef.velocity={x:0,y:0};if(value)for(const f of sceneRef.food||[])f.biteTime=0;}},goShelter(){if(sceneRef){sceneRef.player.x=sceneRef.shelter.x;sceneRef.player.y=sceneRef.shelter.y;sceneRef.target=null;}},setDirection(dir,value){held[dir]=value;},destroy(){game.destroy(true);}};
  class OceanScene extends Phaser.Scene {
    preload(){this.load.image('creatures','assets/ocean-creatures-v1.png');this.load.image('reef-background','assets/reef-background-v1.png');this.load.image('answer-fish','assets/answer-fish-v1.png');this.load.image('stage-backgrounds','assets/stage-backgrounds-v1.png');this.load.image('guardians','assets/guardians-v1.png');}
    sprite(x,y,key){return this.textures.exists('creatures')?this.add.image(x,y,'creatures',key):this.add.image(x,y,key);}
    create(){
      sceneRef=this; this.w=this.scale.width;this.h=this.scale.height;this.clock=0;this.target=null;this.velocity={x:0,y:0};this.lastSafe=null;
      this.layout=oceanLayout(this.w,this.h);
      this.currentSize=this.layout.food*bodyRatio(currentEnergy);this.layout.turtle=this.currentSize;this.layout.boss=this.layout.food*4;
      if(this.textures.exists('stage-backgrounds'))this.backdrop=this.add.image(this.w/2,this.h/2,'stage-backgrounds').setDepth(-2);
      else if(this.textures.exists('reef-background'))this.backdrop=this.add.image(this.w/2,this.h/2,'reef-background').setDepth(-2);
      this.art=this.add.graphics();
      this.cave=this.add.graphics().setDepth(1);
      const signStyle={
        fontFamily:'Microsoft YaHei, sans-serif',fontSize:this.w<600?'13px':'15px',
        fontStyle:'bold',color:'#fff5d8',stroke:'#17383e',strokeThickness:4,padding:{x:4,y:3},
      };
      this.shelterLabel=this.add.text(0,0,'',signStyle).setOrigin(.5).setDepth(8);
      this.makeTextures();this.paintWorld();
      this.shelter={x:this.w*.16,y:this.h*.69};
      this.player=this.add.container(this.w*.43,this.h*.55);this.shell=this.sprite(0,0,'turtle').setDisplaySize(this.layout.turtle,this.layout.turtle);this.player.add(this.shell);this.player.setDepth(10);
      if(this.textures.exists('creatures'))this.shell.setTexture(swimTexture(this,'creatures','turtle','turtle'),0).setDisplaySize(this.layout.turtle,this.layout.turtle);
      this.food=[];this.fishSerial=0;
      this.questionText=this.add.text(0,0,'',{
        fontFamily:'Microsoft YaHei, sans-serif',fontSize:'15px',fontStyle:'bold',
        color:'#e0f5ee',stroke:'#303b38',strokeThickness:4,padding:{x:4,y:2},
        align:'center',wordWrap:{width:240,useAdvancedWrap:true},
      }).setOrigin(.5,1).setDepth(20);
      this.applyQuestion();this.positionQuestion();
      this.boss=this.sprite(this.w*.8,this.h*.26,'tuna').setDisplaySize(this.layout.boss,this.layout.boss).setDepth(5);
      this.configureBoss();
      this.mouthGuide=this.add.circle(0,0,17,0xeee2ab,.04).setStrokeStyle(1,0xf5e9b9,.5).setDepth(12).setVisible(false);
      this.boss.setInteractive({useHandCursor:true});this.boss.on('pointerdown',()=>onBoss?.());
      this.bossLabel=this.add.text(0,0,stageLook(currentStage).bossName,signStyle)
        .setOrigin(.5,0).setDepth(8).setInteractive({useHandCursor:true});
      this.bossLabel.on('pointerdown',()=>onBoss?.());
      this.positionBossLabel();
      this.bubbles=Array.from({length:6},(_,i)=>{const b=this.add.circle((i*73+40)%this.w,(i*53)%this.h,i%2+1,0x9de2dc,.035).setStrokeStyle(1,0xb2f1e4,.07).setDepth(3);b.speed=3+i%3*2;return b;});
      this.keys=this.input.keyboard.addKeys('W,A,S,D,UP,DOWN,LEFT,RIGHT');
      this.input.keyboard.addCapture(['UP','DOWN','LEFT','RIGHT','SPACE']);
      this.input.on('pointerdown',p=>{if(!stopped)this.target={x:p.x,y:p.y};});
      this.input.on('pointermove',p=>{if(p.isDown&&!stopped)this.target={x:p.x,y:p.y};});
      this.input.on('pointerup',()=>{this.target=null;});
      this.scale.on('resize',size=>{const oldW=this.w,oldH=this.h;this.w=size.width;this.h=size.height;this.player.x*=this.w/oldW;this.player.y*=this.h/oldH;this.shelter={x:this.w*.16,y:this.h*.69};this.layout=oceanLayout(this.w,this.h);this.currentSize=this.layout.food*bodyRatio(currentEnergy);this.layout.turtle=this.currentSize;this.layout.boss=this.layout.food*4;this.shell.setDisplaySize(this.layout.turtle,this.layout.turtle);this.boss.setPosition(this.w*.83,this.h*.28);this.configureBoss();for(const f of this.food){f.x*=this.w/oldW;f.y*=this.h/oldH;f.setDisplaySize(this.layout.food,this.layout.food);}this.paintWorld();this.positionQuestion();onPoolChanged?.();});
      onReady?.(api);
    }
    goToStart(){this.player.setPosition(this.w*.43,this.h*.55);this.velocity={x:0,y:0};this.target=null;}
    configureBoss(){
      const look=stageLook(currentStage);
      if(this.textures.exists('guardians'))this.boss.setTexture(swimTexture(this,'guardians',look.boss,look.boss),0);
      else if(this.textures.exists('creatures'))this.boss.setTexture(swimTexture(this,'creatures','tuna','tuna'),0);
      this.boss.setTint(look.tint).setDisplaySize(this.layout.boss,this.layout.boss*this.boss.frame.height/this.boss.frame.width);
      this.bossLabel?.setText(look.bossName);
      this.positionBossLabel();
    }
    positionBossLabel(){
      if(!this.bossLabel)return;
      const inset=this.bossLabel.width/2+6;
      // The animation frame includes transparent padding below the creature.
      const labelY=this.boss.y+this.boss.displayHeight*.30;
      this.bossLabel.setPosition(Phaser.Math.Clamp(this.boss.x,inset,this.w-inset),
        Math.min(this.h-this.bossLabel.height-6,labelY));
    }
    animateFish(f,phase){
      const wave=Math.sin(this.clock*4+phase);
      if(f.texture.key.startsWith('swim-'))f.setFrame(animationFrame(this.clock,phase));
      f.rotation=wave*.018;
      const size=f===this.boss?this.layout.boss:this.layout.food;
      f.setDisplaySize(size*(1+wave*.022),size*f.frame.height/f.frame.width*(1-wave*.025));
    }
    styleFood(f){
      const appearance=fishAppearance(f.answer);
      f.choiceMode=!!currentQuestion.optionLabels;
      if(this.textures.exists('answer-fish'))f.setTexture(swimTexture(this,'answer-fish','pearl','fish'),0).clearTint();
      f.setDisplaySize(this.layout.food,this.layout.food*f.frame.height/f.frame.width);f.label.setText(appearance.label);
      f.label.setFontSize(appearance.label.length>10?11:appearance.label.length>4?13:17).setWordWrapWidth(120,true).setAlign('center');
    }
    makeTextures(){
      if(this.textures.exists('stage-backgrounds')){const t=this.textures.get('stage-backgrounds'),source=t.getSourceImage(),w=source.width/4,h=source.height/4;for(let i=0;i<16;i++){const x=Math.round(i%4*w),y=Math.round(Math.floor(i/4)*h);t.add(i,0,x,y,Math.round((i%4+1)*w)-x,Math.round((Math.floor(i/4)+1)*h)-y);}}
      if(this.textures.exists('guardians')){const t=this.textures.get('guardians'),source=t.getSourceImage(),w=source.width/3,h=source.height/2;for(const [i,key] of ['tuna','crab','octopus','jelly','manta','seahorse'].entries()){const x=Math.round(i%3*w),y=Math.round(Math.floor(i/3)*h),right=key==='manta'?Math.round(w*2.19):Math.round((i%3+1)*w);t.add(key,0,x,y,right-x,Math.round((Math.floor(i/3)+1)*h)-y);}}
      if(this.textures.exists('answer-fish')){const sheet=this.textures.get('answer-fish'),source=sheet.getSourceImage(),cell=source.width/3;for(const [i,key] of ['red','blue','pearl'].entries())sheet.add(key,0,Math.round(i*cell),0,Math.round((i+1)*cell)-Math.round(i*cell),source.height);}
      if(this.textures.exists('creatures')){const atlas=this.textures.get('creatures'),source=atlas.getSourceImage(),w=source.width/2,h=source.height/2;for(const [key,x,y] of [['turtle',0,0],['food',1,0],['predator',0,1],['tuna',1,1]])atlas.add(key,0,x*w,y*h,w,h);return;}
      const g=this.make.graphics({x:0,y:0,add:false});
      const fish=(key,color,size)=>{
        g.clear();g.fillStyle(color,1);g.fillTriangle(size*.2,size*.5,0,size*.12,0,size*.88);g.fillEllipse(size*.58,size*.5,size*.75,size*.45);
        g.fillStyle(0xffffff,.22);g.fillEllipse(size*.62,size*.42,size*.5,size*.12);g.fillStyle(0xeaffed);g.fillCircle(size*.82,size*.44,size*.055);g.fillStyle(0x103e50);g.fillCircle(size*.835,size*.44,size*.026);
        g.fillStyle(color);g.fillTriangle(size*.48,size*.3,size*.6,size*.14,size*.7,size*.32);g.generateTexture(key,size,size);};
      fish('food',0xf7c781,44);fish('tuna',0x7bb9c9,145);fish('predator',0x416d86,170);
      g.clear();g.fillStyle(0x8fd7ad);g.fillEllipse(29,15,20,13);g.fillEllipse(27,57,20,13);g.fillEllipse(53,17,22,13);g.fillEllipse(52,55,22,13);g.fillEllipse(70,35,25,23);g.fillTriangle(14,30,3,35,15,39);
      g.fillStyle(0x1c635b);g.fillEllipse(40,35,54,44);g.lineStyle(3,0xb5db8c);g.strokeEllipse(40,35,49,39);g.fillStyle(0x65976c);g.fillPoints([{x:29,y:26},{x:44,y:22},{x:54,y:32},{x:49,y:45},{x:32,y:47},{x:23,y:36}],true);g.lineStyle(1.5,0xa4c18a);g.strokePoints([{x:29,y:26},{x:44,y:22},{x:54,y:32},{x:49,y:45},{x:32,y:47},{x:23,y:36},{x:29,y:26}],false);g.fillStyle(0x143f42);g.fillCircle(76,31,2.5);g.generateTexture('turtle',86,72);g.destroy();
    }
    paintWorld(){
      const g=this.art,w=this.w,h=this.h;g.clear();
      this.paintShelter();
      if(this.backdrop){if(this.textures.exists('stage-backgrounds'))this.backdrop.setTexture('stage-backgrounds',stageLook(currentStage).background);this.backdrop.setPosition(w/2,h/2).setDisplaySize(w,h).setAlpha(.32).setTint(0xc3d3ce);g.fillStyle(0x6b898c,.35);g.fillRect(0,0,w,h);return;}
      for(let y=0;y<h;y+=3){const t=y/h;g.fillStyle(Phaser.Display.Color.GetColor(17-10*t,currentStage?89-55*t:122-78*t,currentStage?122-57*t:132-57*t),1);g.fillRect(0,y,w,4);}
      // All scenery is drawn only on creation, resize or stage change.
      for(let i=6;i>0;i--){g.fillStyle(currentStage?0x63a9cb:0x9cd6bc,.018);g.fillEllipse(w*.34,h*.08,w*(.45+i*.1),h*(.3+i*.12));}
      g.fillStyle(0x234f63,.35);g.fillPoints([{x:0,y:h*.62},{x:w*.1,y:h*.48},{x:w*.19,y:h*.58},{x:w*.28,y:h*.43},{x:w*.4,y:h*.64},{x:w*.56,y:h*.49},{x:w*.69,y:h*.57},{x:w*.8,y:h*.4},{x:w,y:h*.58},{x:w,y:h},{x:0,y:h}],true);
      g.fillStyle(0x163f51,.5);g.fillPoints([{x:0,y:h*.76},{x:w*.16,y:h*.66},{x:w*.29,y:h*.75},{x:w*.5,y:h*.61},{x:w*.67,y:h*.77},{x:w*.89,y:h*.6},{x:w,y:h*.72},{x:w,y:h},{x:0,y:h}],true);
      for(let i=0;i<9;i++){const x=w*(.09+i*.105),y=h*(.25+(i%3)*.065);g.fillStyle(0x91bfb7,.12);g.fillEllipse(x,y,10+i%3*3,4);g.fillTriangle(x-4,y,x-11,y-4,x-11,y+4);}
      for(let i=0;i<80;i++){g.fillStyle(0xcce9d3,.025+(i%3)*.015);g.fillCircle((i*173+71)%w,125+(i*97)%(Math.max(1,h-170)),i%2+.6);}
      g.fillStyle(0xa4e7d4,.035);for(let i=0;i<5;i++)g.fillTriangle(w*(i*.25-.15),0,w*(i*.25+.03),0,w*(i*.25+.4),h);
      g.fillStyle(0x0a5062,.7);g.fillEllipse(w*.12,h*.98,w*.75,h*.3);g.fillStyle(0x234d50);g.fillEllipse(w*.7,h*1.02,w,h*.33);
      g.lineStyle(3,0x172f38,.8);g.strokeEllipse(w*.7,h*1.02,w,h*.33);
      g.fillStyle(0x8d9671,.25);g.fillEllipse(w*.48,h*1.02,w*.9,h*.23);
      for(let i=0;i<18;i++){const x=(i*137+60)%w,y=h-25-(i%4)*12;g.fillStyle(i%2?0x334f4c:0x57716a,.8);g.fillEllipse(x,y,16+i%3*7,8+i%3*4);g.lineStyle(1,0x18383f,.7);g.strokeEllipse(x,y,16+i%3*7,8+i%3*4);}
      // Sand ripples follow the seabed, leaving a quiet center for navigation.
      g.lineStyle(1,0x6ab0ad,.09);for(let i=0;i<7;i++)g.strokeEllipse(w*.4+i*17,h*.96+i*8,w*.7,h*.2);
      for(let i=0;i<24;i++){const x=i*w/23,y=h-15-(i%4)*8;g.lineStyle(2+(i%3),i%2?0x318f85:0x237b77,.8);g.beginPath();g.moveTo(x,y);g.lineTo(x-7,y-25-i%5*12);g.lineTo(x+3,y-50-i%5*14);g.strokePath();}
      const coral=(x,y,color)=>{const branch=()=>{g.beginPath();g.moveTo(x,y);g.lineTo(x,y-50);g.moveTo(x,y-20);g.lineTo(x-20,y-43);g.lineTo(x-23,y-66);g.moveTo(x,y-32);g.lineTo(x+19,y-53);g.lineTo(x+21,y-75);g.strokePath();};g.lineStyle(9,0x283d41,.9);branch();g.lineStyle(5,color,.95);branch();};
      coral(w*.04,h*.88,0xe29383);coral(w*.28,h*.94,0xa27591);coral(w*.9,h*.96,0xe5a18d);coral(w*.95,h*.89,0xcb7f85);
      for(let i=0;i<5;i++){g.fillStyle(0x8ccdc0,.12);g.fillEllipse(w*.64+i*27,h*.17+i*13,34,9);}
    }
    paintShelter(){
      const x=this.w*.16,y=this.h*.69;
      const size=Math.min(1,this.w/440);
      const name=drawShelter(this.cave,currentStage,x,y,size);
      this.shelterLabel.setText(`庇护所 · ${name}`);
      const inset=this.shelterLabel.width/2+6;
      this.shelterLabel.setPosition(Phaser.Math.Clamp(x,inset,this.w-inset),y+53*size);
    }
    newFish(i){const pos=spawnPosition(this.w,this.h,this.food,this.player);const f=this.sprite(pos.x,pos.y,'food');f.setDisplaySize(this.layout.food,this.layout.food);f.speed=10+i%4*2;f.dir=i%2?1:-1;f.setFlipX(f.dir<0);f.phase=i;f.setDepth(4);f.label=this.add.text(f.x,f.y,'',{fontFamily:'Microsoft YaHei, sans-serif',fontSize:'17px',fontStyle:'bold',color:'#fff1ca',stroke:'#303b38',strokeThickness:4,padding:{x:4,y:2}}).setOrigin(.5).setDepth(6);return f;}
    prepareFeeding(round,future=[]){
      currentQuestion=round.question;
      if(currentQuestion){
        const {remove,add}=practiceFish(currentQuestion,this.food.map(f=>f.answer),Math.random,future);
        for(const index of remove.reverse()){
          const [fish]=this.food.splice(index,1);
          fish.label.destroy();fish.destroy();
        }
        for(const answer of add){
          const f=this.newFish(this.fishSerial++);
          f.answer=answer;
          this.styleFood(f);
          this.positionFoodLabel(f);
          this.food.push(f);
        }
      }
      this.applyQuestion();
      return currentQuestion;
    }
    positionFoodLabel(f){const p=answerLabelPosition(f.x,f.y,f.label.displayWidth,f.label.displayHeight,this.w,this.h);f.label.setPosition(p.x,p.y);}
    applyQuestion(){
      if(!currentQuestion){this.questionText.setText('');return;}
      this.questionText.setText(currentQuestion.condition);
      for(const f of this.food)if(f.choiceMode!==!!currentQuestion.optionLabels)this.styleFood(f);
      this.positionQuestion();
    }
    positionQuestion(){if(!this.questionText)return;const half=this.questionText.width/2+8;this.questionText.x=Phaser.Math.Clamp(this.player.x,half,this.w-half);this.questionText.y=Math.max(this.questionText.height+8,this.player.y-this.layout.turtle*.29);}
    update(time,delta){
      if(stopped||!this.player)return;const dt=Math.min(delta,100)/1000;this.clock+=dt;
      const targetSize=this.layout.food*bodyRatio(currentEnergy);
      this.currentSize+=(targetSize-this.currentSize)*(1-Math.exp(-8*dt));this.layout.turtle=this.currentSize;this.layout.boss=this.layout.food*4;
      let dx=Number(!!(this.keys.D.isDown||this.keys.RIGHT.isDown||held.right))-Number(!!(this.keys.A.isDown||this.keys.LEFT.isDown||held.left)),dy=Number(!!(this.keys.S.isDown||this.keys.DOWN.isDown||held.down))-Number(!!(this.keys.W.isDown||this.keys.UP.isDown||held.up));
      let targetMotion=false;
      if(!dx&&!dy&&this.target){targetMotion=true;dx=this.target.x-this.player.x;dy=this.target.y-this.player.y;if(Math.hypot(dx,dy)<3){dx=0;dy=0;}}
      this.velocity=smoothVelocity(this.velocity,dx,dy,dt,targetMotion?Math.min(170,Math.hypot(dx,dy)*7):170);
      this.player.x+=this.velocity.x*dt;this.player.y+=this.velocity.y*dt;
      if(Math.abs(this.velocity.x)>8)this.shell.setFlipX(this.velocity.x<0);
      const moving=Math.hypot(this.velocity.x,this.velocity.y)>10;
      if(this.shell.texture.key.startsWith('swim-'))this.shell.setFrame(animationFrame(this.clock,moving?1:0));
      this.shell.rotation+=(Math.sin(this.clock*(moving?6:2))*(moving ? .035 : .012)-this.shell.rotation)*Math.min(1,dt*8);
      this.shell.setScale(this.layout.turtle/this.shell.frame.width*(1+Math.sin(this.clock*5)*.015),this.layout.turtle/this.shell.frame.height*(1-Math.sin(this.clock*5)*.018));
      this.player.x=Phaser.Math.Clamp(this.player.x,38,this.w-38);this.player.y=Phaser.Math.Clamp(this.player.y,100,this.h-75);
      this.positionQuestion();
      const safe=Phaser.Math.Distance.Between(this.player.x,this.player.y,this.shelter.x,this.shelter.y)<70;
      if(safe!==this.lastSafe){this.lastSafe=safe;onShelter(safe);}
      // Gentle lane separation keeps answer labels readable without changing their values.
      for(let i=0;i<this.food.length;i++)for(let j=i+1;j<this.food.length;j++){
        const a=this.food[i],b=this.food[j];
        if(Math.abs(a.x-b.x)<90&&Math.abs(a.y-b.y)<65){const direction=a.y<b.y?-1:1;a.y=Phaser.Math.Clamp(a.y+direction*28*dt,155,this.h-120);b.y=Phaser.Math.Clamp(b.y-direction*28*dt,155,this.h-120);}
      }
      for(const f of this.food){f.x+=f.dir*f.speed*dt;f.y+=Math.sin(this.clock*2+f.phase)*dt*7;if(f.x<30){f.x=30;f.dir=1;f.setFlipX(false);}if(f.x>this.w-30){f.x=this.w-30;f.dir=-1;f.setFlipX(true);}
        this.animateFish(f,f.phase);this.positionFoodLabel(f);
        const contact=feedingContact({x:this.player.x,y:this.player.y,size:this.layout.turtle,facing:this.shell.flipX?-1:1,moving:Math.hypot(dx,dy)>0,speed:Math.hypot(this.velocity.x,this.velocity.y)},f,dt,f.biteTime||0);
        f.biteTime=this.clock>(this.nextBite||0)?contact.held:0;
        this.mouthGuide.setPosition(contact.mouth.x,contact.mouth.y).setVisible(contact.contact);
        if(currentQuestion&&this.clock>(this.nextBite||0)&&contact.eat){
          this.nextBite=this.clock+1.2;const value=f.answer;


          this.food.splice(this.food.indexOf(f),1);f.label.destroy();f.destroy();
          onEat(value);break;
        }}
      if(stopped)return;
      this.boss.x=this.w*.83+Math.sin(this.clock*.7)*4;this.boss.y=this.h*.28+Math.cos(this.clock)*3;
      this.animateFish(this.boss,2);
      this.positionBossLabel();
      for(const b of this.bubbles){b.y-=b.speed*dt;if(b.y<65){b.y=this.h-30;b.x=Math.random()*this.w;}}
    }
  }
  const game=new Phaser.Game({type:Phaser.AUTO,parent:'game',backgroundColor:'#52777c',transparent:false,fps:{target:60},scale:{mode:Phaser.Scale.RESIZE,width:document.querySelector('#game').clientWidth,height:document.querySelector('#game').clientHeight},render:{antialias:true},scene:OceanScene,audio:{noAudio:true},input:{touch:{capture:true}}});
  return api;
}








