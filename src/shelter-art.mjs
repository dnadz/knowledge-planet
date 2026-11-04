// The order follows the first thirteen cells of the ocean background atlas.
const shelters=[
  ['珊瑚书屋',0x69796c,0xb6b695,0xdf8e70,'coral'],
  ['海草书屋',0x476955,0x8fa47a,0x9ecb76,'kelp'],
  ['漩涡石窟',0x394e78,0x7a91bd,0x9ac8ff,'rings'],
  ['符文书屋',0x4d6c63,0x94a985,0xe9c477,'ruins'],
  ['遗迹石门',0x476476,0x9fb7b7,0xffd88a,'arch'],
  ['灯塔书屋',0x786c55,0xc3ac82,0xffdd88,'tower'],
  ['沉船营帐',0x694f45,0x9f7b5e,0xe9c488,'tent'],
  ['紫珊瑚石窟',0x575477,0x9887b1,0xe7abf3,'coral'],
  ['晶洞书屋',0x315e75,0x6fa9be,0x9dece8,'crystal'],
  ['坐标遗迹',0x49677a,0x91aeb5,0xaedcdd,'ruins'],
  ['浅滩贝屋',0x657a6f,0xb8bc9c,0xf2d4a3,'shell'],
  ['树根书屋',0x635c42,0x9f9871,0xc6d596,'roots'],
  ['观测书屋',0x4b6873,0x92a7a4,0xe8c378,'observatory'],
];

export const shelterName=stage=>(shelters[stage]??shelters[0])[0];

export function drawShelter(g,stage,x,y,scale){
  const [name,stone,light,accent,shape]=shelters[stage]??shelters[0];
  const polygon=(color,points)=>g.fillStyle(color).fillPoints(points.map(([x,y])=>({x,y})),true);
  g.clear().setPosition(x,y).setScale(scale);
  g.fillStyle(0x18373d,.36).fillEllipse(0,43,144,22);
  if(['ruins','arch','tower','observatory'].includes(shape)){
    const roof=shape==='tower'?-57:-40;
    g.fillStyle(stone).fillRoundedRect(-53,roof,106,41-roof,10);
    g.fillStyle(light).fillRect(-58,-37,116,9).fillRect(-59,34,118,9)
      .fillRect(-48,-28,11,62).fillRect(37,-28,11,62);
    if(shape==='tower')g.fillStyle(accent).fillRect(-19,-56,38,13);
    if(shape==='ruins')polygon(accent,[[0,-39],[10,-29],[0,-19],[-10,-29]]);
    if(shape==='observatory')g.lineStyle(3,accent).strokeCircle(0,-45,19).strokeEllipse(0,-45,36,14);
  }else if(shape==='tent'){
    polygon(stone,[[-69,39],[-40,-21],[-10,-46],[32,-35],[68,39]]);
    polygon(light,[[-69,39],[-10,-46],[10,35]]);
    g.lineStyle(3,accent).lineBetween(-65,37,-10,-46).lineBetween(-10,-46,67,37);
  }else{
    g.fillStyle(stone).fillEllipse(0,0,126,94);
    g.fillStyle(light).fillEllipse(-36,9,51,56).fillEllipse(35,9,52,56).fillEllipse(-5,-27,72,37);
    if(shape==='crystal'){
      polygon(accent,[[-58,30],[-66,-8],[-54,-39],[-43,-4],[-46,31]]);
      polygon(accent,[[44,33],[43,-2],[61,-23],[65,6],[57,33]]);
    }
    if(shape==='shell')g.lineStyle(3,accent).strokeEllipse(0,-8,107,62).strokeEllipse(0,-8,79,45);
    if(shape==='rings')g.lineStyle(3,accent).strokeCircle(-40,-18,13).strokeCircle(37,-15,9);
    if(['coral','kelp','roots'].includes(shape)){
      for(const side of [-1,1]){
        const edge=side*53;
        const top=shape==='roots'?-43:shape==='kelp'?-34:-18;
        g.lineStyle(shape==='roots'?6:4,accent).lineBetween(edge,34,edge-side*8,top)
          .lineBetween(edge-side*3,11,edge+side*13,top+14);
      }
    }
  }
  g.fillStyle(0x27474b).fillRoundedRect(-34,-22,68,63,23);
  g.fillStyle(0x142e37).fillRoundedRect(-26,-16,52,56,18);
  g.fillStyle(light).fillEllipse(0,40,73,12);
  g.fillStyle(accent).fillCircle(-39,13,5).fillCircle(39,13,5);
  return name;
}
