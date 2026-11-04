import {COURSE_STAGES} from './curriculum.mjs';
import {matchesAnswer} from './answer-match.mjs';

// Each family supplies a worked result and plausible mistakes for the same task.
const families = {
  axis:[
    n=>[`从数轴上的 −${n} 向右走 ${2*n-3} 格，到达哪里？`,n-3,3-n,3-3*n,'向右表示加上移动的格数。'],
    n=>[`从数轴上的 ${n} 向左走 ${2*n+4} 格，到达哪里？`,-n-4,n+4,3*n+4,'向左表示减去移动的格数。'],
    n=>[`数轴上相邻整数的刻度间隔是 2 cm。−2 和 ${n} 之间相距多少厘米？`,2*(n+2),n+2,2*n,'先数两个位置相差几格，再乘每格长度。']],
  opposite:[
    n=>[`与 −${n}/${n+1} 互为相反数的是哪个数？`,`${n}/${n+1}`,`−${n}/${n+1}`,`${n+1}/${n}`,'关于原点对称的数只改变符号。'],
    n=>[`a+${n}=0，a 是多少？`,-n,n,0,'和为零的两个数互为相反数。'],
    n=>[`a=−${n}，−(−a) 等于多少？`,-n,n,2*n,'取两次相反数会回到原数。']],
  distance:[
    n=>[`数轴上 −${n} 与 4 之间相距多少？`,n+4,-n-4,n-4,'两点距离等于差的绝对值。'],
    n=>[`计算 −|−${n}|+2。`,2-n,n+2,n-2,'先算绝对值，再处理绝对值外的负号。'],
    n=>[`若 |x|=${n}，负数解是多少？`,-n,n,0,'两个对称解中选负的那个。']],
  add:[
    n=>[`计算 (−${n})+(−7)。`,-n-7,n+7,7-n,'同号相加，保留负号并把绝对值相加。'],
    n=>[`计算 (−${2*n+7})+${n}。`,-n-7,n+7,-3*n-7,'异号相加，绝对值相减并取绝对值较大的数的符号。'],
    n=>[`计算 ${n}+(${n+2})+(−${n})。`,n+2,-n-2,3*n+2,'互为相反数的两项先相加得零。']],
  subtract:[
    n=>[`计算 4−(−${n})。`,4+n,4-n,-4-n,'减去负数，等于加上它的相反数。'],
    n=>[`计算 (−${n})−7。`,-n-7,7-n,n+7,'减去正数相当于加上一个负数。'],
    n=>[`潜水艇从海平面下 ${2*n+8} 米升到海平面下 ${n} 米，上升几米？`,n+8,-n-8,3*n+8,'用终点高度减去起点高度。']],
  multiply:[
    n=>[`计算 (−${n})×(−4)。`,4*n,-4*n,n+4,'两个负数相乘得正。'],
    n=>[`计算 5×(−${n})。`,-5*n,5*n,5-n,'异号相乘得负，再乘绝对值。'],
    n=>[`计算 (−2)×${n}×(−3)。`,6*n,-6*n,n+6,'两个负因数使积为正。']],
  'rational-numbers':[
    n=>[`以地面为零，向上为正。地面下 ${n} 米记为什么？`,-n,n,0,'地面下是负方向。'],
    n=>[`将 ${n*10}/10 化简，得到哪个整数？`,n,-n,n*10,'分子除以分母。'],
    n=>[`−${n}.4 与 −${n}.7 哪个更大？`,`−${n}.4`,`−${n}.7`,'一样大','两个负数中，绝对值较小的数较大。']],
  'rational-operations':[
    n=>[`计算 (−${6*n})÷3。`,-2*n,2*n,-3*n,'异号相除得负，绝对值相除。'],
    n=>[`计算 ${n}+2×(−3)。`,n-6,-3*(n+2),n+6,'先乘后加。'],
    n=>[`计算 ${n}÷(1/4)。`,4*n,n/4,-4*n,'除以分数等于乘它的倒数。']],
  powers:[
    n=>[`计算 (−${n})²。`,n*n,-n*n,2*n,'括号内的负数整体是底数。'],
    n=>[`计算 −${n}²。`,-n*n,n*n,-2*n,'没有括号时，先平方，再取相反数。'],
    n=>[`开始有 ${n} 个，每次翻倍，连续翻倍 3 次后有几个？`,8*n,6*n,3*n,'连续乘三个 2。']],
  'scientific-notation':[
    n=>[`把 ${n*1000} 写成标准科学记数法（用 a×10^k）。`,`${n/10}×10^4`,`${n}×10^3`,`${n/10}×10^3`,'系数要大于等于 1 且小于 10。'],
    n=>[`把 ${n}.267 四舍五入到百分位。`,`${n}.27`,`${n}.26`,`${n}.3`,'看千分位的 7，需要进一。'],
    n=>[`把 ${n}.96 四舍五入到十分位。`,`${n+1}.0`,`${n+1}`,`${n}.9`,'进位后仍保留一位小数。']],
  'algebra-expressions':[
    n=>[`每本 x 元，买 ${n} 本再付 5 元运费，总价多少元？`,`${n}x+5`,`${n}(x+5)`,`5x+${n}`,'本数乘单价，再加一次运费。'],
    n=>[`x=−${n} 时，2x+1 等于多少？`,1-2*n,1+2*n,-2*(n+1),'代入负数时用括号。'],
    n=>[`x 与 ${n} 的和的三倍，怎么写？`,`3(x+${n})`,`3x+${n}`,`x+${3*n}`,'整个和一起乘 3。']],
  polynomials:[
    n=>[`单项式 −${n}x²y 的系数是多少？`,-n,n,3,'系数带着项前的负号。'],
    n=>[`多项式 ${n}x³−x+${n+1} 的常数项是？`,n+1,-1,n,'常数项不含字母。'],
    n=>[`多项式 2x^${n}−5x+7 的次数是？`,n,n+1,1,'看非零项的最高次数。']],
  'polynomial-addition':[
    n=>[`化简 ${n}x²+3x−2x²。`,`${n-2}x²+3x`,`${n+2}x²+3x`,`${n+1}x²`,'只合并字母和指数都相同的项。'],
    n=>[`去括号：−(x−${n})。`,`−x+${n}`,`−x−${n}`,`x−${n}`,'括号前是负号，里面每项都变号。'],
    n=>[`当 x=2 时，${n}x−(x+3) 的值是？`,2*n-5,2*n+1,2*n-2,'先去括号，再代入。']],
  equality:[
    n=>[`由 x+${n}=20，两边同减 ${n}，x 等于多少？`,20-n,20+n,n-20,'等式两边减去相同的数。'],
    n=>[`由 ${n}x=${n*7}，两边除以 ${n}，得到什么？`,'x=7','x=−7',`x=${n*7}`,'等式两边可同除以相同的非零数。'],
    n=>[`检验 x=−${n} 是否满足 2x+1=−${2*n-1}。左边等于多少？`,1-2*n,1+2*n,-2*n-1,'将负数整体代入 x。']],
  'linear-equation':[
    n=>[`解方程 4x−${n}=12。`,(12+n)/4,(12-n)/4,12+n,'先移项，再除以 4。'],
    n=>[`解方程 3(x+${n})=2x+${3*n+5}。`,5,-5,2*n+5,'展开括号，再把含 x 的项合并。'],
    n=>[`方程 x/2+${n}=x/3，求 x。`,-6*n,6*n,-n,'两边同时乘 6，常数项也要乘。']],
  'linear-models':[
    n=>[`原价 ${n*10} 元的商品打八折，现价多少元？`,8*n,2*n,12*n,'八折是原价的 80%。'],
    n=>[`起步费 ${n} 元，另付每千米 3 元，超出起步范围 7 千米共付多少？`,n+21,7*n+3,n+7,'固定费用加额外路程费用。'],
    n=>[`两人同地反向出发，速度为 ${n} 和 4 千米/时，2 小时后相距多少千米？`,2*(n+4),2*n+4,n+4,'反向时两段路程相加。']],
  'solid-views':[
    n=>[`用 ${n} 个单位正方体竖直叠成一列，从正上方看可见几个单位方格？`,1,n,n+1,'同一列的方块在俯视图中重合。'],
    n=>[`把 ${n} 个方块沿左右方向排成一排。从正面看，每个方块可见一面，共几格？`,n,1,n+1,'正面视图保留左右宽度。'],
    n=>[`一排有 ${n} 个方块，每个位置竖直叠两层。从正面看占几格？`,2*n,n,n+2,'正面宽为方块列数，高为两层。']],
  projection:[
    n=>[`同一水平地面上，平行光下 2 米杆影长 3 米。${2*n} 米竖杆影长多少米？`,3*n,2*n,n,'同方向平行光下，影长与杆高成正比。'],
    n=>[`点光源离屏幕 ${n*6} cm，平行薄片离光源 ${n*2} cm。影子的宽度是薄片的几倍？`,3,2,1/3,'用屏幕到光源的距离除以薄片到光源的距离。'],
    n=>[`平行光垂直屏幕照射边长 ${n} cm、与屏幕平行的正方形薄片。影子面积是多少平方厘米？`,n*n,4*n,2*n,'平行且垂直投影时形状、大小保持。']],
  'lines-segments':[
    n=>[`M 是 AB 中点，AM=${n} cm。AB 长多少厘米？`,2*n,n,n/2,'中点把线段分成等长两段。'],
    n=>[`C 在线段 AB 上，AB=${n+7} cm，AC=7 cm。CB 长多少厘米？`,n,n+14,n+7,'总长减去已知的一段。'],
    n=>[`A、B、C 依次共线，AB=${n} cm，BC=6 cm。AC 长多少厘米？`,n+6,n-6,n,'B 在中间，两段相加。']],
  angles:[
    n=>[`${n+30}° 的补角是多少度？`,150-n,60-n,n+30,'补角之和是 180°。'],
    n=>[`∠AOB 为 ${2*n}°，OD 平分它。∠AOD 为多少度？`,n,2*n,4*n,'角平分线把角度均分。'],
    n=>[`${n}.5° 写成度、分是什么？`,`${n}°30′`,`${n}°50′`,`${n}°5′`,'1° 等于 60′。']],
  'distance-sum':[
    n=>[`|x−${n}|+|x+3| 的最小值是多少？`,n+3,n-3,2*n+3,'两个端点之间的任一点可使距离和等于端点间距。'],
    n=>[`若 x≥${n+4}，|x−${n}|+|x−1| 的最小值是多少？`,n+7,n+3,2*n+7,'在两个端点右侧，x 越靠左距离和越小。'],
    n=>[`有几个整数 x 能使 |x−${n}|+|x+2| 达到最小？`,n+3,n+2,n+1,'从 −2 数到右端点，两端都算。']],
  'modeling-process':[
    n=>[`预算 ${5*n+3} 元，每份 5 元，无其他费用，最多买几份？`,n,n+1,n-1,'整数份数不能超过算出的上限。'],
    n=>[`估计每人喝水 0.5 升，${2*n} 人需备多少升？`,n,2*n,4*n,'人数乘以每人估计量。'],
    n=>[`每份材料 4 元，固定运费 ${n} 元，买 x 份的总价是什么？`,`4x+${n}`,`${n}x+4`,`(4+${n})x`,'固定运费只加一次。']],
  'design-project':[
    n=>[`比例尺 1:100，实际长 ${n} 米，图上长多少厘米？`,n,n*100,n/100,'先把实际米数换成厘米，再除以 100。'],
    n=>[`长 ${n} 米、宽 6 米的区域，沿长边留 2 米宽通道。其余面积是多少平方米？`,4*n,6*n,2*n,'扣掉通道后，剩余宽度是 4 米。'],
    n=>[`矩形长和宽都缩成原来的 1/${n}，新面积是原来的几分之几？`,`1/${n*n}`,`1/${n}`,`1/${n*n+1}`,'面积比例等于两条边比例的乘积。']],
  'parallel-perpendicular':[
    n=>[`两条平行线被截，一对同旁内角中一个为 ${n+32}°，另一个为多少度？`,148-n,n+32,58-n,'两条平行线的同旁内角互补。'],
    n=>[`两条直线相交，其中一个角是 ${n+23}°，它的对顶角是多少度？`,n+23,157-n,67-n,'对顶角相等。'],
    n=>[`两平行线被截，一对内错角中一个为 ${n+18}°，另一个为多少度？`,n+18,162-n,72-n,'平行线的内错角相等。']],
  'geometric-proof':[
    n=>[`要反驳“平方等于 ${n*n} 的实数一定为正”，哪个数是反例？`,-n,n,0,'反例必须满足题设并使结论不成立。'],
    n=>[`两角在不同位置，分别是 ${n+20}° 与 ${160-n}°。它们可反驳哪句话？`,'互补的角一定相邻','互补的角和为180°','角度可以比较','这两个角互补，却没有相邻。'],
    n=>[`已知两个角都与 ${n+20}° 的角互余。两角各是多少度？`,70-n,160-n,n+20,'分别用 90° 减同一个角。']],
  translation:[
    n=>[`点 (−2,${n}) 向右 5 格，得到哪个点？`,`(3,${n})`,`(−7,${n})`,`(−2,${n+5})`,'右移只增加横坐标。'],
    n=>[`点 (${n},−4) 向上 6 格，得到哪个点？`,`(${n},2)`,`(${n},−10)`,`(${n+6},−4)`,'上移只增加纵坐标。'],
    n=>[`A(${n},2) 移到 A′(${n+4},−1)。B(0,0) 随同平移后在哪？`,'(4,−3)','(−4,3)','(4,3)','所有点使用同一个位移。']],
  'square-roots':[
    n=>[`√${n*n} 等于多少？`,n,-n,n*n,'根号表示非负的算术平方根。'],
    n=>[`x=−${n} 时，√(x²) 是多少？`,n,-n,n*n,'√(x²) 等于 |x|。'],
    n=>[`${n*n} 的所有平方根是什么？`,`±${n}`,`只有 ${n}`,`只有 −${n}`,'正数有两个互为相反数的平方根。']],
  'cube-roots':[
    n=>[`∛(−${n**3}) 等于多少？`,-n,n,-n*n,'负数的立方根是负数。'],
    n=>[`体积是 ${n**3} cm³ 的正方体，棱长是多少厘米？`,n,n*n,n**3,'棱长的三次方等于体积。'],
    n=>[`∛${n**3+1} 位于哪两个相邻整数之间？`,`${n} 与 ${n+1}`,`${n-1} 与 ${n}`,`${n+1} 与 ${n+2}`,'用相邻整数的立方夹住被开方数。']],
  'real-numbers':[
    n=>[`√${n*n+1} 位于哪两个相邻整数之间？`,`${n} 与 ${n+1}`,`${n-1} 与 ${n}`,`${n+1} 与 ${n+2}`,'先找相邻的完全平方数。'],
    n=>[`在 √${n*n}、√${n*n+1}、${n}/3 中，哪个是无理数？`,`√${n*n+1}`,`√${n*n}`,`${n}/3`,'相邻完全平方数之间的整数不是完全平方数。'],
    n=>[`比较 −√${n*n+1} 与 −${n}，哪个更大？`,`−${n}`,`−√${n*n+1}`,'一样大','负数绝对值越大，数值越小。']],
  coordinates:[
    n=>[`点 (−${n},4) 关于 x 轴的对称点是？`,`(−${n},−4)`,`(${n},4)`,`(${n},−4)`,'关于 x 轴对称只改变纵坐标的符号。'],
    n=>[`点 (${n},−7) 位于第几象限？`,'第四象限','第一象限','第二象限','横正纵负是第四象限。'],
    n=>[`A(−${n},3)、B(4,3) 的直线距离是多少？`,n+4,n-4,3+n,'纵坐标相同，距离等于横坐标之差的绝对值。'],
    n=>[`点 (${n},0) 在哪里？`,'x 轴正半轴','y 轴正半轴','第一象限','纵坐标为 0，横坐标为正。'],
    n=>[`原点右移 ${n} 格、坐标轴方向不变。旧坐标 (2,3) 在新坐标系中的坐标是？`,`(${2-n},3)`,`(${2+n},3)`,`(2,${3-n})`,'固定位置的横坐标要减去原点向右的位移。'],
    n=>[`点 P(${n},−3) 关于 y 轴的对称点是？`,`(−${n},−3)`,`(${n},3)`,`(−${n},3)`,'关于 y 轴对称，改变横坐标的符号。']],
  'linear-systems':[
    n=>[`x+y=${n+5}，x−y=${n-5}。求 x。`,n,5,n+5,'两式相加消去 y。'],
    n=>[`y=2x，x+y=${3*n}。求 y。`,2*n,n,3*n,'将 2x 代入和式。'],
    n=>[`3x+2y=${5*n+8}，x+2y=${3*n+8}。求 y。`,n+4,2*n+8,n,'两式相减先求 x，再代入求 y。'],
    n=>[`x+y=${n}，2x+2y=${2*n+1}。这个方程组有几个实数解？`,'无解','唯一解','无数解','第一式两边乘 2 后与第二式矛盾。'],
    n=>[`x−y=${n}，3x−3y=${3*n}。两式联立有几组实数解？`,'无数组','恰好一组','零组','第二式是第一式的三倍。'],
    n=>[`成人票 12 元、儿童票 7 元，共售 ${2*n+3} 张，收入 ${19*n+21} 元。成人票卖了几张？`,n,n+3,2*n+3,'把总张数和总票款分别列成方程。']],
  inequalities:[
    n=>[`解不等式 −2x<${2*n}。`,`x>−${n}`,`x<−${n}`,`x≥−${n}`,'除以负数要改变不等号方向。'],
    n=>[`同时满足 x≥${n} 与 x<${n+4} 的整数有几个？`,4,3,5,'左端点包含，右端点排除。'],
    n=>[`数轴上在 ${n} 处标空心点，取右侧所有点。对应哪个范围？`,`x>${n}`,`x≥${n}`,`x<${n}`,'空心点不含端点，向右表示更大。'],
    n=>[`联立 x<${n} 与 x≥${n}，求交集。`,'无解',`x=${n}`,`x≤${n}`,'两条范围没有公共点。'],
    n=>[`预算 ${4*n+7} 元，固定费用 5 元，每小时 4 元。按整小时收费，最多几小时？`,n,n+1,n-1,'先扣固定费，再求不超过上限的最大整数。'],
    n=>[`解 3(x−${n})≤6。`,`x≤${n+2}`,`x≥${n+2}`,`x≤${n+6}`,'同除以正数 3，不等号方向保持。']],
  sampling:[
    n=>[`从 ${n*20} 人中随机抽取 ${n} 人做调查，样本容量是多少？`,n,n*20,n*19,'样本容量是实际抽取的个体数量。'],
    n=>[`调查全校上学方式，某队伍有 ${n} 名队员。以下哪种选样较合理？`,'全校名单随机抽取','只调查该队伍','只询问同桌','抽样范围应覆盖目标总体。'],
    n=>[`有 ${n} 人未回答运动时长，统计前如何标记？`,'标为缺失','都填 0 分钟','都填样本平均值','缺失与实际为零不同。']],
  'statistical-charts':[
    n=>[`扇形统计图中一个类别占 ${n*2}%，对应圆心角是多少度？`,72*n/10,36*n/10,n*2,'占比乘以 360°。'],
    n=>[`要看连续 ${n} 天水温的升降趋势，优先用哪种图？`,'折线图','扇形图','只列总和','折线图适合看随时间变化。'],
    n=>[`两班各有 ${n*2} 人，甲班步行比例 50%，甲班步行人数是多少？`,n,2*n,n/2,'用甲班总人数乘本班比例。']],
  histograms:[
    n=>[`样本共 ${n*5} 个值，某组有 ${n} 个，该组频率是多少？`,'20%','25%','50%','组频数除以总频数。'],
    n=>[`区间为 0≤x<${n} 和 ${n}≤x<${2*n}，数据 ${n} 属于哪组？`,'第二组','第一组','两组都算','看端点的不等号。'],
    n=>[`直方图纵轴为频数密度，某柱宽为 ${n}、高为 3，频数是多少？`,3*n,n+3,n,'频数等于柱面积。']],
  'sample-estimation':[
    n=>[`代表性样本的比例是 25%，总体有 ${n*20} 人，估计有多少人符合条件？`,5*n,10*n,20*n,'用总体人数乘样本比例。'],
    n=>[`在 ${n*4} 个样本中有 ${n} 个符合条件，比例是多少？`,'25%','20%','75%','符合条件的数量除以样本容量。'],
    n=>[`抽取 ${n} 名社团成员估计全校情况，结论应该怎么写？`,'说明样本偏向该社团','可以准确代表全校','人数足够就没有偏差','代表性取决于抽样方式。']],
  'data-project':[
    n=>[`共记录 ${n+2} 次，有两次重复。删除重复后有几条有效记录？`,n,n+2,n-2,'只删除重复的两条。'],
    n=>[`有效记录 ${2*n} 条，其中 ${n} 条达成目标。达成比例是多少？`,'50%','25%','100%','分母用有效记录总数。'],
    n=>[`记录 ${n} 天后发现甲习惯和完成率同时上升，可以直接认定甲习惯造成上升吗？`,'不能，可能有其他因素','能，两个量同时上升就够了','能，记录天数足够就行','同时变化不能单独证明因果。']],
};

function makeQuestion(stage,skill,family,n,template){
  const [prompt,answer,...rest]=template(n);
  const hint=rest.pop();
  const graphic=skill==='inequalities'&&family===2?n:null;
  return {id:`practice-${stage}-${skill}-${family}-${n}`,skill,family,prompt,condition:prompt,
    graphic,answer,options:[answer,...rest],hint,explanation:`${hint} 正确答案：${answer}。`};
}

export function practicePromptGraphic(value){
  return `<svg class="practice-axis" viewBox="0 0 290 49" role="img" aria-label="${value} 处为空心点，箭头向右">
    <path d="M14 19H276m-8 -5 8 5 -8 5" fill="none" stroke="#526965" stroke-width="2"/>
    <path d="M132 19H257m-8 -5 8 5 -8 5" fill="none" stroke="#27695e" stroke-width="3"/>
    <circle cx="132" cy="19" r="5" fill="#f8faf6" stroke="#27695e" stroke-width="2"/>
    <text x="132" y="42" text-anchor="middle" fill="#304b49">${value}</text>
  </svg>`;
}

export const PRACTICE_BANK=COURSE_STAGES.map(({skills},stage)=>{
  const bank=[];
  // Interleave skills and families so each 100-item bank covers the full stage.
  for(let n=10;bank.length<100;n++){
    for(let family=0;family<Math.max(...skills.map(skill=>families[skill].length));family++){
      for(const skill of skills){
        const template=families[skill][family];
        if(!template)continue;
        const q=makeQuestion(stage,skill,family,n,template);
        if(q.options.some((value,i)=>q.options.slice(0,i).some(other=>matchesAnswer({answer:other},value)))&&skill!=='scientific-notation')continue;
        if(skill==='scientific-notation')q.sourceNode=skill;
        if(bank.length<100)bank.push(q);
      }
    }
  }
  return bank;
});

export const PRACTICE_SCHOOL_SIZE=7;

export function drawPracticeQuestion(bank, seen, skill, random=Math.random, existing=[]){
  const visited=new Set(seen);
  const remaining=bank.filter(q=>!visited.has(q.id));
  const preferred=remaining.filter(q=>q.skill===skill);
  const eligible=preferred.length?preferred:remaining;
  const previous=bank.find(q=>q.id===seen.at(-1));
  const supported=eligible.filter(q=>q.options.every(value=>existing.includes(value)));
  const supportedElsewhere=remaining.filter(q=>q.options.every(value=>existing.includes(value)));
  const familiar=remaining.filter(q=>existing.includes(q.answer));
  const candidates=supported.length?supported:supportedElsewhere.length?supportedElsewhere:familiar.length?familiar:eligible;
  const ranked=candidates.map(q=>({
    q, cost:2*q.options.filter(value=>!existing.includes(value)).length
      +Number(existing.length>0&&!existing.includes(q.answer)),
  }));
  const minimum=Math.min(...ranked.map(entry=>entry.cost));
  const closest=ranked.filter(entry=>entry.cost===minimum).map(entry=>entry.q);
  const varied=closest.filter(q=>q.skill!==previous?.skill||q.family!==previous.family);
  const pool=varied.length?varied:closest;
  return pool[Math.floor(random()*pool.length)]||null;
}

export function practiceFish(question, existing, random=Math.random, future=[]){
  const keep=new Set();
  const add=[];
  for(const value of question.options){
    const i=existing.findIndex((candidate,index)=>candidate===value&&!keep.has(index));
    if(i<0)add.push(value);
    else keep.add(i);
  }
  const wrong=value=>!matchesAnswer(question,value)&&!question.options.includes(value);
  const available=future.filter(q=>q.id!==question.id);
  const futureAnswers=new Set(available.map(q=>q.answer));
  const spare=existing.map((value,index)=>({value,index})).filter(item=>wrong(item.value));
  spare.sort((a,b)=>Number(futureAnswers.has(b.value))-Number(futureAnswers.has(a.value)));
  const freshAnswer=add.some(value=>matchesAnswer(question,value));
  const seedReserve=freshAnswer&&existing.length>=6&&available.length>1
    &&spare.filter(item=>futureAnswers.has(item.value)).length<2;
  const capacity=PRACTICE_SCHOOL_SIZE-add.length-Number(existing.length>=6&&freshAnswer&&(add.length===1||seedReserve));
  for(const {index} of spare){
    if(keep.size>=capacity)break;
    keep.add(index);
  }
  const used=new Set([...question.options,...[...keep].map(i=>existing[i])]);
  const overlap=q=>q.options.filter(value=>used.has(value)).length;
  available.sort((a,b)=>overlap(b)-overlap(a));
  const candidates=existing.length
    ?[...available.map(q=>q.answer),...available.flatMap(q=>q.options)]
    :available.flatMap(q=>q.options);
  for(const value of candidates){
    if(keep.size+add.length>=PRACTICE_SCHOOL_SIZE)break;
    if(used.has(value)||existing.includes(value)||!wrong(value))continue;
    used.add(value);
    add.push(value);
  }
  // Useful even on the final question, when there is no future answer to seed.
  for(let value=1;keep.size+add.length<PRACTICE_SCHOOL_SIZE;value++){
    if(used.has(value)||existing.includes(value)||!wrong(value))continue;
    used.add(value);
    add.push(value);
  }
  for(let i=add.length-1;i>0;i--){
    const j=Math.floor(random()*(i+1));
    [add[i],add[j]]=[add[j],add[i]];
  }
  return {remove:existing.flatMap((_,i)=>keep.has(i)?[]:[i]),add};
}
