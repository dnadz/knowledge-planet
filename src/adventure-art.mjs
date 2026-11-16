export function landmarkSvg(kind,lit=false){
 const color=lit?'#91e8cd':'#829ea1';
 const shape=kind==='mirror'?'<path d="M21 69V31l10-12 10 12v38m19 0V31l10-12 10 12v38"/><path d="M12 69h76M31 19V9m39 10V9"/>':kind==='distance'?'<path d="M50 85V19M18 23h64v32H18zM30 36h40M30 44h18"/>':'<path d="M33 79l5-42h24l5 42M30 79h40M35 37h30V23H35zM42 23V12h16v11"/><path d="M18 28H7m75 0h11M24 13l-8-8m60 8 8-8"/>';
 return `<svg viewBox="0 0 100 100" aria-hidden="true" fill="none" stroke="${color}" stroke-width="3" stroke-linejoin="round"><circle cx="50" cy="49" r="44" fill="${lit?'#245e60':'#24444d'}" stroke-opacity=".2"/>${shape}<path d="M10 87q10-7 20 0t20 0 20 0 20 0" opacity=".6"/></svg>`;
}
export function drawOceanLandmarks(scene,definitions,completed,onSelect){
 return definitions.map((m,i)=>{
  const c=scene.add.container(scene.w*m.x,scene.h*m.y).setDepth(7),g=scene.add.graphics();const lit=completed.includes(m.id),available=i===0||completed.includes(definitions[i-1].id);
  g.fillStyle(0x092c3c,.85);g.fillCircle(0,0,24);g.lineStyle(2,lit?0xa6efd0:available?0xe6c87f:0x72949b,.9);g.strokeCircle(0,0,24);
  g.fillStyle(lit?0x96e4bc:0x9bb2af);g.fillRoundedRect(-8,-15,16,28,3);g.fillStyle(lit?0xf0e2a4:0x476567);g.fillCircle(0,-10,5);g.fillRect(-16,13,32,5);
  const label=scene.add.text(0,35,m.title,{fontFamily:'Microsoft YaHei,sans-serif',fontSize:scene.w<500?'13px':'16px',color:available?'#f4e7b4':'#b5c7c4',stroke:'#10333f',strokeThickness:4}).setOrigin(.5);
  c.add([g,label]);c.setSize(58,80);if(available){c.setInteractive({useHandCursor:true});c.on('pointerdown',()=>onSelect?.(m.id));}return c;
 });
}
