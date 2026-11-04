import {SOURCE_LESSONS} from './grade7-content.mjs';
import {EXTRA_LESSONS} from './grade7-supplement.mjs';
export const LESSONS=Object.fromEntries([...SOURCE_LESSONS,...EXTRA_LESSONS].map(l=>[l.id,l]));
const aliases={axis:'number-line',opposite:'opposite-number',distance:'absolute-value',add:'rational-operations',subtract:'rational-operations',multiply:'rational-operations'};
export const lessonFor=skill=>LESSONS[aliases[skill]||skill];
export const COURSE_STAGES=[
  {title:'基准浅湾',chapter:'七上 · 数轴、相反数与绝对值',skills:['axis','opposite','distance']},
  {title:'潮汐海沟',chapter:'七上 · 有理数加减乘法',skills:['add','subtract','multiply']},
  {title:'数之漩涡',chapter:'七上 · 有理数分类、四则、乘方与近似数',skills:['rational-numbers','rational-operations','powers','scientific-notation']},
  {title:'符文海草林',chapter:'七上 · 代数式与整式加减',skills:['algebra-expressions','polynomials','polynomial-addition']},
  {title:'平衡遗迹',chapter:'七上 · 等式与一元一次方程',skills:['equality','linear-equation','linear-models']},
  {title:'灯塔礁群',chapter:'七上 · 图形、视图、投影、线段与角',skills:['solid-views','projection','lines-segments','angles']},
  {title:'探索者营地',chapter:'七上 · 距离、建模与综合实践',skills:['distance-sum','modeling-process','design-project']},
  {title:'平行珊瑚峡',chapter:'七下通用 · 相交、平行、证明与平移',skills:['parallel-perpendicular','geometric-proof','translation']},
  {title:'实数深泉',chapter:'七下通用 · 平方根、立方根与实数',skills:['square-roots','cube-roots','real-numbers']},
  {title:'坐标航路',chapter:'七下通用 · 平面直角坐标系',skills:['coordinates']},
  {title:'双线交汇湾',chapter:'七下通用 · 二元一次方程组',skills:['linear-systems']},
  {title:'边界潮汐带',chapter:'七下通用 · 不等式与不等式组',skills:['inequalities']},
  {title:'数据观测站',chapter:'七下通用 · 调查、统计图与样本估计',skills:['sampling','statistical-charts','histograms','sample-estimation','data-project']}
];
export function courseQuestion(skill,index=0){
  const l=lessonFor(skill);if(!l)throw new Error('课程不存在：'+skill);
  const n=Math.abs(Math.floor(index))%l.questions.length,source=l.questions[n];
  const numeric=text=>{const normalized=text.trim().replace(/−/g,'-');return /^[+-]?\d+$/.test(normalized)?Number(normalized):text;};
  const candidate=source.options.map(o=>numeric(o.text));
  const value=new Set(candidate).size===candidate.length?numeric:text=>text;
  const options=source.options.map(o=>value(o.text)),optionLabels=Object.fromEntries(source.options.map(o=>[value(o.text),o.text]));
  const answer=value(source.options.find(o=>o.id===source.answer).text);
  return {id:`course:${l.id}:${l.version}:${n}`,skill,label:l.title.split('：')[0],prompt:source.prompt,condition:source.prompt.length<=36?source.prompt:`${l.title.split('：')[0]}\n寻找正确答案`,answer,options,optionLabels,hint:source.hint,explanation:source.explanation,dimension:source.dimension,sourceNode:l.id,sourceVersion:l.version,sourceQuestionId:source.id};
}
