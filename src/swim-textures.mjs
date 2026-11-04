import {FRAME_COUNT,swimDeformation} from './visuals.mjs';
const eyes={fish:[[.875,.51,.038]],turtle:[[.94,.5,.027]],tuna:[[.86,.52,.026]],crab:[[.54,.42,.025],[.72,.41,.025]],octopus:[[.56,.42,.035]],jelly:[],manta:[[.75,.46,.021]],seahorse:[[.66,.22,.025]]};
const eyelidColors={fish:'#c4b28a',turtle:'#b2be86',tuna:'#9ebbc5',crab:'#df6e40',octopus:'#54a78c',manta:'#b9c6ad',seahorse:'#b1cad0'};
export function swimTexture(scene,textureKey,frameKey,kind='fish'){
  const key=`swim-${textureKey}-${frameKey}`;
  if(scene.textures.exists(key))return key;
  const texture=scene.textures.get(textureKey),frame=texture.get(frameKey),source=texture.getSourceImage();
  const width=160,height=Math.min(240,Math.round(width*frame.cutHeight/frame.cutWidth)),pad=12,w=width+pad*2,h=height+pad*2;
  const sheet=scene.textures.createCanvas(key,w*6,h*4);if(!sheet)return textureKey;
  const ctx=sheet.getContext();ctx.imageSmoothingEnabled=true;
  for(let i=0;i<FRAME_COUNT;i++){
    const ox=(i%6)*w,oy=Math.floor(i/6)*h;
    for(let x=0;x<width;x+=2){const pose=swimDeformation(i,x/width,kind),slice=Math.min(2,width-x);
      // Adjacent strips overlap slightly, preserving the complete silhouette without detached parts.
      ctx.drawImage(source,frame.cutX+x/width*frame.cutWidth,frame.cutY,slice/width*frame.cutWidth,frame.cutHeight,ox+pad+x,oy+pad+(height-height*pose.stretch)/2+pose.offset,slice+.6,height*pose.stretch);
    }
    if(i===FRAME_COUNT-1)for(const [ex,ey,r] of eyes[kind]||eyes.fish){const x=ox+pad+width*ex,y=oy+pad+height*ey;
      ctx.fillStyle=eyelidColors[kind]||eyelidColors.fish;ctx.beginPath();ctx.ellipse(x,y,width*r,height*r*.8,0,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#2b3c3f';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(x-width*r*.8,y);ctx.quadraticCurveTo(x,y+1.5,x+width*r*.8,y);ctx.stroke();
    }
    sheet.add(i,0,ox,oy,w,h);
  }
  sheet.refresh();return key;
}
