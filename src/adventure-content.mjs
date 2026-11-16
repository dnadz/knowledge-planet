const reasons={
 add:[{id:'combine',text:'同号相加保留符号并相加绝对值；异号相加比较绝对值，取较大者的符号。'},{id:'always-add',text:'不管正负号，绝对值一律相加，再写正号。'},{id:'first-sign',text:'结果的符号永远和第一个数相同。'}],
 subtract:[{id:'reverse',text:'减去一个数，等于加上这个数的相反数。'},{id:'ignore-sign',text:'只把减号去掉，后面的数保持不变。'},{id:'negative-result',text:'有减号的算式，结果一定是负数。'}],
 multiply:[{id:'product-sign',text:'先判符号：同号得正、异号得负；再乘绝对值，有0相乘得0。'},{id:'positive-product',text:'相乘总会得到正数。'},{id:'add-instead',text:'两个数相乘，就是把两个数直接相加。'}],
 axis:[{id:'direction',text:'先找起点，再按等长单位移动：向右增加，向左减少。'},{id:'endpoint',text:'移动几格，终点就一定是几。'},{id:'sign',text:'只看起点的正负号，不需要看方向。'}],
 opposite:[{id:'symmetry',text:'关于原点对称，到原点距离相等；0 的相反数仍是 0。'},{id:'same',text:'相反数必须和原数相同。'},{id:'positive',text:'相反数总是正数。'}],
 distance:[{id:'length',text:'求与 0 相差的大小，距离或相差大小非负，可以为 0。'},{id:'negative',text:'位置是负数，距离也必须是负数。'},{id:'always',text:'到原点的距离必须大于 0。'}],
};
const phases=['demo','guided','guided','independent','independent','transfer'];
function items(id,kind,rows){return rows.map(([start,move,prompt],i)=>{
 const answer=kind==='axis'?start+move:kind==='opposite'?(start===0?0:-start):Math.abs(start);
 const operation=kind==='axis'?`${start} ${move<0?'−':'+'} ${Math.abs(move)} = ${answer}`:kind==='opposite'?`${start} 与 ${answer} 关于 0 对称`:`|${start}| = ${answer}`;
 return {id:`${id}-${i}`,kind,phase:phases[i],start,move:move||0,prompt:prompt||(kind==='axis'?`从 ${start} 出发，向${move<0?'左':'右'}移动 ${Math.abs(move)} 个单位，终点在哪里？`:kind==='opposite'?`航标在 ${start}，它关于原点对称的位置是多少？`:`海龟在 ${start}，到基地 0 的距离是多少个单位？`),answer,reasons:[...reasons[kind].slice(i%3),...reasons[kind].slice(0,i%3)],reasonId:reasons[kind][0].id,hint:kind==='axis'?'把起点与方向分开看。数的是等长的单位段，不是刻度点的个数。':kind==='opposite'?'先比较两点到 0 的距离，再检查是否关于原点对称。0 只与自己对应。':'位置告诉你在哪边；距离告诉你离 0 多远。数一数单位段，0 处的距离就是 0。',explanation:operation+'。'+reasons[kind][0].text};
});}
const firstSea=[
 {id:'beacon',skill:'axis',title:'信标归位',subtitle:'用数轴找回航线',number:'01',x:.34,y:.34,guide:'我是航线维护员阿澜。风暴吹乱了信标，帮我按正确的位置重新点亮它。',concept:'浮标是原点 0，向右为正。每相邻刻度之间都是 1 个单位。先确定起点，再看移动方向。',reward:'航线信标已点亮',items:items('beacon','axis',[[-3,5],[0,3],[-2,-3],[-4,6],[5,-7],[2,-5,'轨道检修车在坐标 2，向左行驶 5 个单位。它停在哪里？']])},
 {id:'mirror',skill:'opposite',title:'镜像航标',subtitle:'发现相反数的对称',number:'02',x:.63,y:.51,guide:'两座航标要在原点两侧互相照应。距离相等，位置才会对称。',concept:'互为相反数的两点关于原点对称。非零时在原点两侧，到原点的距离相同；0 的相反数是 0。',reward:'两座航标开始呼应',items:items('mirror','opposite',[[-4],[3],[-2],[0],[5],[-6,0,'灯塔位于道路原点左侧 6 个单位，另一座与它关于原点对称。另一座灯塔的坐标是多少？']])},
 {id:'distance',skill:'distance',title:'回港测距',subtitle:'让绝对值成为距离',number:'03',x:.79,y:.73,guide:'回港牌上的数字丢了。无论海龟在基地哪一侧，我们都要告诉它还离基地多远。',concept:'绝对值表示数轴上的点到原点的距离。位置有正负，距离非负；在原点时距离为 0。',reward:'回港距离牌已修复',items:items('distance','distance',[[-4],[3],[0],[-5],[4],[-2,0,'温度计示数是 −2℃，与 0℃相差多少摄氏度？这里求温差的大小。']])},
];
function arithmeticItems(id,kind,rows){const op={add:'+',subtract:'−',multiply:'×'}[kind],calculate={add:(a,b)=>a+b,subtract:(a,b)=>a-b,multiply:(a,b)=>a*b};return rows.map(([start,move,prompt],i)=>{
 const calculated=calculate[kind](start,move),answer=calculated===0?0:calculated,expression=`(${start}) ${op} (${move})`;
 return {id:`${id}-${i}`,kind,phase:phases[i],start,move,answer,expression,min:-24,max:24,prompt:prompt||`计算 ${expression}，结果是多少？`,reasonId:reasons[kind][0].id,reasons:[...reasons[kind].slice(i%3),...reasons[kind].slice(0,i%3)],hint:reasons[kind][0].text,explanation:`${expression} = ${answer}。${reasons[kind][0].text}`};
});}
const secondSea=[
 {id:'flow',skill:'add',title:'潮汐合流',subtitle:'用有理数加法合并变化',number:'01',x:.34,y:.34,guide:'这里是潮汐海沟。把两次带方向的变化合在一起，帮我校准观测器。',concept:reasons.add[0].text,reward:'潮汐观测器已校准',items:arithmeticItems('flow','add',[[-3,5],[-4,-2],[4,-6],[-5,2],[3,-5],[-2,6,'以固定参照面为0，水位在−2米处又上升6米。最终水位记为多少米？']])},
 {id:'reverse',skill:'subtract',title:'逆流校准',subtitle:'把减法转成加相反数',number:'02',x:.63,y:.51,guide:'逆流记录需要做减法。先看清减号后面的整个数，再用相反数校准。',concept:reasons.subtract[0].text,reward:'逆流记录仪已修复',items:arithmeticItems('reverse','subtract',[[-4,-2],[3,5],[-2,-5],[-5,3],[4,-2],[-3,4,'温度从−3℃下降4℃，现在的温度是多少摄氏度？']])},
 {id:'array',skill:'multiply',title:'温差阵列',subtitle:'用乘法记录重复变化',number:'03',x:.79,y:.73,guide:'把同样的温度变化重复记录。先判断结果符号，再计算变化的大小。',concept:reasons.multiply[0].text,reward:'温差阵列开始工作',items:arithmeticItems('array','multiply',[[-3,2],[-2,-3],[0,-4],[-4,3],[-2,-5],[-2,3,'每小时温度变化−2℃，连续3小时，合计温度变化是多少摄氏度？这里求带方向的变化量。']])},
];
export const ADVENTURES=[...firstSea.map(m=>({...m,stage:0,sea:'基准浅湾'})),...secondSea.map(m=>({...m,stage:1,sea:'潮汐海沟'}))];
export const missionsForStage=stage=>ADVENTURES.filter(m=>m.stage===stage);
export function previousMission(m,definitions=ADVENTURES){const siblings=definitions.filter(d=>(d.stage??0)===(m.stage??0));return siblings[siblings.indexOf(m)-1];}

const transferChoices={
 beacon:['检修车往左，为什么要做减法？','从 2 出发，往左表示坐标减少 5。','从 2 出发，往左表示坐标增加 5。','左移 5 格，所以终点一定是 −5。'],
 mirror:['怎样用道路原点定位另一座灯塔？','把原点左边 6 格的位置镜像到右边 6 格。','保持在原点左边 6 格，因为距离相同。','把灯塔移到原点，因为原点是对称中心。'],
 distance:['题目求温差的大小，应该取什么？','取 −2 与 0 之间的距离，结果非负。','直接用温度计读数 −2 作为温差大小。','以 0℃ 为参照，所以温差大小就是 0。'],
 flow:['水位从 −2 米上升 6 米，如何判断最后在哪一侧？','上升记作 +6，和 −2 方向相反。6 的绝对值更大，结果为正。','−2 与 +6 同向，把两个绝对值相加。','起点是 −2 米，结果一定在参照面下方。'],
 reverse:['气温从 −3℃ 下降 4℃，应怎样列式？','从 −3 再减去 4，写作 −3 − 4。','把下降的 4 当成上升，写作 −3 + 4。','把原温度当成正数，写作 3 − 4。'],
 array:['连续三小时每小时降 2℃，怎样算总变化？','把每小时的 −2 重复 3 次，写作 (−2) × 3。','把 3 小时当成温度，写作 −2 + 3。','只用变化大小，写作 2 × 3，结果为正。'],
};
for(const mission of ADVENTURES){
 const item=mission.items.at(-1);
 const [question,...choices]=transferChoices[mission.id];
 item.legacyReasons=item.reasons;
 item.legacyReasonId=item.reasonId;
 item.reasonPrompt=question;
 item.reasonId='application';
 const options=choices.map((text,index)=>({id:index===0?'application':'application-'+index,text}));
 const offset=ADVENTURES.indexOf(mission)%options.length;
 item.reasons=[...options.slice(offset),...options.slice(0,offset)];
}
