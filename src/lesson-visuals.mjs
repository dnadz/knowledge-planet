const svg = (label, body, height = 136) =>
  `<svg viewBox="0 0 360 ${height}" role="img" aria-label="${label}">${body}</svg>`;
const line = (x1,y1,x2,y2,color='#536862',width=2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}"/>`;
const label = (x,y,value) => `<text x="${x}" y="${y}" text-anchor="middle">${value}</text>`;
const dot = (x,y,solid=true,color='#27695e') =>
  `<circle cx="${x}" cy="${y}" r="5" fill="${solid?color:'#f8faf6'}" stroke="${color}" stroke-width="2"/>`;
const xOf = n => 180 + n * 22;
const axis = (min,max,y) => line(xOf(min)-10,y,xOf(max)+10,y)
  + `<path d="M${xOf(max)+4} ${y-4} l6 4 -6 4" fill="none" stroke="#536862" stroke-width="2"/>`
  + Array.from({length:max-min+1},(_,i)=>{
    const n=min+i,x=xOf(n);
    return line(x,y-4,x,y+4)+label(x,y+23,n);
  }).join('');
const arrow = (a,b,y,color='#27695e') => {
  const x=xOf(b), direction=Math.sign(b-a);
  return line(xOf(a),y,x,y,color,3)
    + `<path d="M${x-7*direction} ${y-5} L${x} ${y} L${x-7*direction} ${y+5}" fill="none" stroke="${color}" stroke-width="3"/>`;
};
const frame = (caption, art) => ({caption, art});

const distance = frame('−4 和 4 到 0 都是 4 格，所以 |−4| = |4| = 4。绝对值只表示距离。',
  svg('负四与正四关于原点对称',axis(-6,6,78)
    + arrow(0,-4,46)+arrow(0,4,46)
    + [-4,0,4].map(n=>dot(xOf(n),78)).join('')
    + label(xOf(-2),32,'4 格')+label(xOf(2),32,'4 格'),112));
const movement = [
  frame('起点是 −5。先在数轴上找到它。',svg('标出起点负五',axis(-7,6,78)+dot(xOf(-5),78))),
  frame('向右走 3 格，表示加 3。',svg('从负五向右走三格',axis(-7,6,78)+dot(xOf(-5),78)+arrow(-5,-2,47))),
  frame('终点是 −2。用算式核对：−5+3=−2。',svg('终点负二',axis(-7,6,78)+arrow(-5,-2,47)+dot(xOf(-2),78))),
];
const subtract = [
  frame('先圈出减号后面的整个数 (−2)。',svg('减去负二',label(154,32,'(−6) −')+label(203,32,'(−2)')+
    '<rect x="183" y="14" width="40" height="24" rx="5" fill="none" stroke="#27695e" stroke-width="2"/>'+axis(-7,6,79)+dot(xOf(-6),79))),
  frame('减去 −2，等于加上它的相反数 +2。',svg('改写成加二',label(180,32,'(−6) + 2')+axis(-7,6,79)+dot(xOf(-6),79))),
  frame('加 2 向右走两格，到 −4。',svg('从负六向右走到负四',axis(-7,6,79)+arrow(-6,-4,47)+dot(xOf(-4),79))),
];

const tile = (x,y,value,unknown) => `<rect x="${x-14}" y="${y-26}" width="28" height="25" rx="4" fill="${unknown?'#c3e4d9':'#f3dfaf'}" stroke="#536862"/>${label(x,y-8,value)}`;
function balance(left,right,equation){
  const pan = (x, values) => line(x-54,79,x+54,79)
    + values.map((v,i)=>tile(x+(i-(values.length-1)/2)*31,79,v,v==='x')).join('');
  return svg(equation, label(180,27,equation)
    + line(90,90,270,90, '#536862',4)+line(90,79,90,90)+line(270,79,270,90)
    + pan(90,left)+pan(270,right)+'<path d="M180 90 L158 121 H202 Z" fill="#869e90"/>');
}
const equations = [
  frame('左盘有两个 x 和 3，右盘是 11。两盘相等。',balance(['x','x',3],[11],'2x + 3 = 11')),
  frame('两边同时减 3，得到 2x=8，天平仍平衡。',balance(['x','x'],[8],'2x = 8')),
  frame('两边同时除以 2，得到 x=4。代回可得 2×4+3=11。',balance(['x'],[4],'x = 4')),
];

// x is width, y is depth away from the front, z is height.
const cubes = [[0,0,0],[1,0,0],[1,1,0],[0,0,1]];
const cubeX = (x,y) => 104 + 24*(x-y);
const cubeY = (x,y,z) => 133 + 12*(x+y)-26*z;
const cube = ([a,b,c]) => {
  const x=cubeX(a,b), y=cubeY(a,b,c);
  return `<g transform="translate(${x} ${y})" stroke="#536862" stroke-linejoin="round">
    <path d="M0 0 -24 -12 -24 14 0 26Z" fill="#8ba99c"/>
    <path d="M0 0 24 -12 24 14 0 26Z" fill="#acc9b9"/>
    <path d="M0 0 -24 -12 0 -24 24 -12Z" fill="#dcebe0"/>
  </g>`;
};
const views = [
  ['正面','主视图保留左右宽度和高度。重叠的方块只画一个格。',([x,,z])=>[x,1-z]],
  ['上面','俯视图保留左右宽度和前后深度。图上方是后侧。',([x,y])=>[x,1-y]],
  ['左面','左视图保留前后深度和高度。图左是后侧。',([,y,z])=>[1-y,1-z]],
];
const viewFrames = views.map(([name,caption,project])=>{
  const cells = new Set(cubes.map(c=>project(c).join(',')));
  const grid = Array.from({length:4},(_,i)=>{
    const x=i%2,y=Math.floor(i/2);
    return `<rect x="${231+x*32}" y="${54+y*32}" width="32" height="32" fill="${cells.has(`${x},${y}`)?'#acc9b9':'#f8faf6'}" stroke="#536862"/>`;
  }).join('');
  const model=[...cubes].sort((a,b)=>(a[0]+a[1])-(b[0]+b[1])||a[2]-b[2]).map(cube).join('');
  return frame(caption,svg(`方块模型与${name}视图`,label(104,28,'方块模型')+label(263,28,name)+model+grid,195));
});

const intersection = [
  frame('第一条 x > −2。−2 不包含，用空心点，向右取值。',
    svg('负二右边的数',axis(-6,6,68)+arrow(-2,6,47)+dot(xOf(-2),47,false),108)),
  frame('第二条 x ≤ 3。3 包含，用实心点，向左取值。',
    svg('三及其左边的数',axis(-6,6,68)+arrow(3,-6,47)+dot(xOf(3),47),108)),
  frame('取两条的重叠部分，得到 −2 < x ≤ 3。用 0 代入，两条都成立。',
    svg('两条不等式的交集',axis(-6,6,68)+line(xOf(-2),47,xOf(3),47,'#27695e',5)+dot(xOf(-2),47,false)+dot(xOf(3),47),108)),
];
const cards = (...steps) => steps.map(([expression, caption]) =>
  frame(caption, `<div class="demo-expression">${expression}</div>`));
const polygon = (points, fill='#c3e4d9') =>
  `<polygon points="${points}" fill="${fill}" stroke="#27695e" stroke-width="2"/>`;
const grid = () => {
  const origin=180, baseline=104, step=24;
  return Array.from({length:9},(_,i)=>line(84+i*step,27,84+i*step,177,'#d2dfd7',1)).join('')
    + Array.from({length:7},(_,i)=>line(84,32+i*step,276,32+i*step,'#d2dfd7',1)).join('')
    + line(78,baseline,284,baseline)+line(origin,182,origin,24)
    + label(294,109,'x')+label(181,19,'y')+label(170,121,'0');
};
const coordinates = [
  frame('从原点出发，先向右 3 格，确定横坐标。',svg('先找横坐标',grid()+line(180,104,252,104,'#27695e',4)+dot(252,104)+label(252,126,'3'),190)),
  frame('再向上 2 格，得到 P(3, 2)。横坐标在前。',svg('标出点 P',grid()+line(180,104,252,104,'#27695e',4)+line(252,104,252,56,'#b26942',4)+dot(252,56)+label(289,56,'P(3, 2)'),190)),
];
const translation = [
  frame('先选一个顶点 A，记录它的位置。',svg('平移前',grid()+polygon('108,128 156,128 108,80')+label(98,145,'A'),190)),
  frame('每个顶点都向右 4 格、向上 1 格。对应边保持平行且等长。',svg('三角形向右上平移',grid()+polygon('108,128 156,128 108,80','#e6eee7')+line(108,128,204,104,'#b26942',3)+polygon('204,104 252,104 204,56')+label(205,124,'A′'),190)),
];
const systemPlot = frame('交点 (2,1) 同时在 x+y=3 和 x−y=1 上，所以两式有同一组解。',
  svg('两条直线在二逗号一相交',grid()+line(156,8,276,128,'#27695e',3)
    +line(132,176,276,32,'#b26942',3)+dot(228,80)+label(257,75,'(2,1)'),190));
const segment = frame('M 到两端都是 3 cm，且 M 在线段 AB 上，所以 M 是中点。',
  svg('标出线段中点',line(58,68,302,68)+[58,180,302].map(x=>dot(x,68)).join('')
    +label(58,96,'A')+label(180,96,'M')+label(302,96,'B')+label(119,51,'3 cm')+label(241,51,'3 cm'),110));
const angle = frame('中间的射线把 60° 分成两个 30°，它就是角平分线。',
  svg('六十度角平分图',line(114,132,274,132)+line(114,132,252,52)+line(114,132,180,18)
    +'<path d="M158 132 A44 44 0 0 0 136 94" fill="none" stroke="#27695e" stroke-width="2"/>'
    +label(194,113,'30°')+label(171,81,'30°'),150));
const projection = [
  frame('平行光的光线方向相同。在同一水平地面上，竖杆的影长与杆高成比例。',
    svg('平行光照在竖杆上',line(25,118,335,118)+line(80,118,80,66,'#27695e',4)+line(190,118,190,40,'#27695e',4)
      +line(55,41,132,118,'#b26942')+line(170,20,268,118,'#b26942')+line(80,118,132,118,'#27695e',5)+line(190,118,268,118,'#27695e',5))),
  frame('点光源的光线从同一点发出。杆离光源的位置不同，影长也会变。',
    svg('点光源照在两根竖杆上',line(25,118,335,118)+dot(48,22)+line(128,118,128,70,'#27695e',4)
      +line(170,118,170,70,'#27695e',4)+line(48,22,208,118,'#b26942')+line(48,22,292,118,'#b26942')
      +line(128,118,208,118,'#27695e',4)+line(170,124,292,124,'#27695e',4))),
];
const parallel = (marked) => svg('截线与两条平行线',line(42,49,318,49)+line(42,105,318,105)
  +line(126,132,225,20,'#b26942',3)+(marked?
    '<path d="M218 49 A19 19 0 0 0 212 35 M169 105 A19 19 0 0 0 163 91" fill="none" stroke="#27695e" stroke-width="3"/>'
    +label(238,36,'∠1')+label(190,91,'∠2'):''));
const parallelSteps = [
  frame('先找到同时穿过两条线的截线。',parallel(false)),
  frame('∠1 和 ∠2 位于各自交点的相同方位，是同位角。若两线平行，两角相等。',parallel(true)),
];
const square = frame('正方形面积是 9，所以边长是 √9=3。若求 x²=9，−3 和 3 都是解。',
  svg('九个小正方形拼成面积九',Array.from({length:9},(_,i)=>
    `<rect x="${109+i%3*36}" y="${22+Math.floor(i/3)*36}" width="36" height="36" fill="#c3e4d9" stroke="#536862"/>`).join('')
    +label(163,153,'边长 3')+label(271,82,'面积 9'),167));
const cubeRoot = frame('每层有 2×2=4 个单位方块，叠两层共有 8 个，所以 ∛8=2。',
  svg('两层各四个单位方块',label(106,29,'第 1 层')+label(254,29,'第 2 层')
    +[66,214].map(x=>Array.from({length:4},(_,i)=>`<rect x="${x+i%2*40}" y="${46+Math.floor(i/2)*40}" width="40" height="40" fill="#c3e4d9" stroke="#536862"/>`).join('')).join(''),142));
const bars = (values, names, max=8) => svg('数据柱形对照',line(55,119,318,119)+line(55,119,55,25)
  +values.map((value,i)=>{
    const x=91+i*80,h=value/max*82;
    return `<rect x="${x}" y="${119-h}" width="42" height="${h}" rx="2" fill="#8ab6a4"/>`
      +label(x+21,113-h,value)+label(x+21,140,names[i]);
  }).join(''),152);
const histogram = frame('纵轴是频数密度。第一柱面积 2×3=6，第二柱面积 4×2=8，宽度不同也能按面积比较。',
  svg('不等组距的直方图',line(68,119,308,119)+line(68,119,68,25)
    +'<rect x="68" y="50" width="76" height="69" fill="#c3e4d9" stroke="#536862"/><rect x="144" y="73" width="152" height="46" fill="#aacbbb" stroke="#536862"/>'
    +label(106,87,'面积 6')+label(220,101,'面积 8')+label(56,55,'3')+label(56,78,'2')
    +label(68,141,'0')+label(144,141,'2')+label(296,141,'6')+label(65,17,'频数密度'),154));

const visuals = {
  axis:movement, opposite:[distance], distance:[distance], subtract,
  equality:equations, 'linear-equation':equations,
  'solid-views':viewFrames, inequalities:intersection,
  add:movement,
  multiply:cards(['同号 → <mark>正</mark>　异号 → <mark>负</mark>','先判断两个非零因数的符号。有零时乘积为零。'],
    ['(−7)×3 = <mark>−</mark>(7×3) = −21','异号取负，再把绝对值相乘。']),
  'rational-numbers':cards(['有理数 → <mark>整数</mark> / <mark>非整数的有理数</mark>','先化简再分类。8/4=2，属于整数；−3/5 属于非整数的有理数。']),
  'rational-operations':cards(['18÷<mark>(2+4)</mark> − 5','先算括号。'],['<mark>18÷6</mark> − 5','再算除法。'],['3 − 5 = <mark>−2</mark>','最后算减法。']),
  powers:cards(['(−2)³ = <mark>(−2)(−2)(−2)</mark>','括号内的 −2 整体是底数。'],['(−2)³=−8　　(−2)⁴=16','负底数的奇次幂为负，偶次幂为正。']),
  'scientific-notation':cards(['0.00<mark>53</mark> → 5.3','把小数点右移三位，系数落在 1 到 10 之间。'],['0.0053 = 5.3 × <mark>10⁻³</mark>','为保持原值，再把 5.3 缩小 1000 倍。']),
  'algebra-expressions':cards(['每张 a 元 → <mark>6 张</mark> → 6a 元','用乘法把单价和数量连起来。'],['a=8 → 6×8=<mark>48</mark> 元','代入具体数值，保留实际单位。']),
  polynomials:cards(['<mark>4x²y</mark> − 3x + 5','按项看次数。第一项中 x 的指数是 2，y 的指数是 1。'],['2+1=<mark>3</mark>　｜　1　｜　0','合并同类项后，这三个非零项中最高次数是 3。']),
  'polynomial-addition':cards(['<mark>3x²</mark> + 2x <mark>− x²</mark>','先找字母和指数完全相同的项。'],['(3−1)x²+2x = <mark>2x²+2x</mark>','合并系数，保留字母和指数。']),
  'linear-models':cards(['去程：3x　　回程：2(x+6)','设去程速度是 x，回程每小时快 6。把速度乘时间得到路程。'],
    ['同一路程 → <mark>3x=2(x+6)</mark>','用同一路程建立等式，解得 x=12，来回路程均为 36。']),
  projection,'lines-segments':[segment],angles:[angle],
  'distance-sum':[frame('x 在两端之间时，两段距离刚好拼成总长。图中 3+5=8。',
    svg('两段距离拼成八格',axis(-5,5,78)+[-4,-1,4].map(n=>dot(xOf(n),78)).join('')
      +arrow(-1,-4,46)+arrow(-1,4,46)+label(125,32,'3 格')+label(212,32,'5 格'),110))],
  'modeling-process':cards(['问题 → <mark>选择已知量</mark> → 建模 → 核对','例如估算活动用水量，先数人数，再估计每人用量。'],
    ['24 人 × 0.5 升/人 = <mark>12 升</mark>','若每人实际用量为 0.6 升，估算随之变成 14.4 升。']),
  'design-project':cards(['图上 4 cm → 比例 <mark>1:50</mark> → 实际 200 cm','先按比例放大，再统一单位。'],
    ['200 cm = <mark>2 m</mark> → 和场地宽度比较','若场地只有 1.8 米宽，就要调整设计。']),
  'parallel-perpendicular':parallelSteps,
  'geometric-proof':[parallelSteps[0],frame('已知 ∠1=∠2。先认出同位角，再用同位角相等判定两线平行。',parallel(true))],
  translation,'square-roots':[square],'cube-roots':[cubeRoot],
  'real-numbers':cards(['实数 → <mark>有理数</mark> / <mark>无理数</mark>','例如 1/3 是有理数，√2 是无理数。'],
    ['√49 → <mark>7</mark> → 有理数','根式要先化简，再决定分类。']),
  coordinates,
  'linear-systems':[systemPlot,...cards(['<mark>x+y=3</mark><br><mark>x−y=1</mark>','两式的 y 系数互为相反数，可以直接相加。'],
    ['2x=4 → x=2 → <mark>y=1</mark>','代回任意一式求 y，再用另一式核对。'])],
  sampling:[frame('两份示意样本都是 8 人。只在甲班调查时，乙班完全没有机会被抽中。',bars([8,0],['甲班','乙班'])),
    frame('两班各抽 4 人能覆盖两班。若要代表全校，还要按全校的班级分布设计抽样。',bars([4,4],['甲班','乙班']))],
  'statistical-charts':[
    frame('同一组数据 2、4、2。条形图方便比较三天的数量。',bars([2,4,2],['周一','周二','周三'])),
    frame('折线图突出先上升再下降的变化。',svg('三天数量的折线图',line(55,116,316,116)+line(55,116,55,20)
      +line(103,76,180,36,'#27695e',3)+line(180,36,257,76,'#27695e',3)
      +[103,180,257].map((x,i)=>dot(x,i===1?36:76)+label(x,132,['周一','周二','周三'][i])+label(x,i===1?24:63,[2,4,2][i])).join(''),146)),
    frame('扇形图突出占比。周二是总量的一半，另外两天各占四分之一。',svg('三天占比的扇形图',
      '<path d="M100 74 V22 A52 52 0 0 1 100 126 Z" fill="#8ab6a4" stroke="#536862"/><path d="M100 74 V126 A52 52 0 0 1 48 74 Z" fill="#eddbaf" stroke="#536862"/><path d="M100 74 H48 A52 52 0 0 1 100 22 Z" fill="#c3e4d9" stroke="#536862"/>'
      +dot(177,41,true,'#c3e4d9')+dot(177,72,true,'#8ab6a4')+dot(177,103,true,'#eddbaf')
      +label(238,46,'周一 25%')+label(238,77,'周二 50%')+label(238,108,'周三 25%'))),
  ],
  histograms:[histogram],
  'sample-estimation':[frame('样本中 20 人有 5 人选择 A，占 1/4。',bars([5,15],['选择 A','其他'],20)),
    ...cards(['总体 120 人 × 1/4 ≈ <mark>30 人</mark>','样本有代表性时，可以用比例估计总体人数。'])],
  'data-project':cards(['提出问题 → 收集 → <mark>核对记录</mark> → 作图','例如调查通学方式，先检查是否有重复填写。'],
    ['50 份记录 − 2 份重复 = <mark>48</mark> 份有效记录','若 12 份选择步行，步行频率为 12/48=25%。']),
};

export function lessonVisual(skill, shelter=false){
  const frames=skill==='distance'&&shelter?[distance,...movement]:visuals[skill];
  if(!frames)return '';
  return `<figure class="lesson-demo" data-lesson-demo="${skill}" data-shelter="${shelter}">
    <div data-demo-art>${frames[0].art}</div>
    <figcaption aria-live="polite">${frames[0].caption}</figcaption>
    ${frames.length===1?'':`<div class="demo-controls">${skill==='solid-views'
      ?views.map(([name],i)=>`<button type="button" data-view="${i}" aria-pressed="${i===0}">${name}</button>`).join('')
      :'<button type="button" data-demo-reset>重播</button><span data-demo-count>1 / '+frames.length+'</span><button type="button" data-demo-next>下一步</button>'}</div>`}
  </figure>`;
}

export function bindLessonVisuals(container){
  for(const demo of container.querySelectorAll('[data-lesson-demo]')){
    const skill=demo.dataset.lessonDemo;
    const frames=skill==='distance'&&demo.dataset.shelter==='true'?[distance,...movement]:visuals[skill];
    const next=demo.querySelector('[data-demo-next]');
    const views=demo.querySelectorAll('[data-view]');
    let index=0;
    function show(i){
      index=i;
      demo.querySelector('[data-demo-art]').innerHTML=frames[i].art;
      demo.querySelector('figcaption').textContent=frames[i].caption;
      if(next){
        demo.querySelector('[data-demo-count]').textContent=`${i+1} / ${frames.length}`;
        next.disabled=i===frames.length-1;
      }
      for(const button of views)button.setAttribute('aria-pressed',String(Number(button.dataset.view)===i));
    }
    if(next){
      next.onclick=()=>show(Math.min(index+1,frames.length-1));
      demo.querySelector('[data-demo-reset]').onclick=()=>show(0);
    }
    for(const button of views)button.onclick=()=>show(Number(button.dataset.view));
  }
}
