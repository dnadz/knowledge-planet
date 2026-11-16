export const shouldOfferSubtractionCheck=(stage,question,correct)=>
  stage===1&&question.skill==='subtract'&&question.subtractNegative===true&&!correct;

export const checkOutcome=choice=>choice==='add-opposite'?'review-current':'show-lesson';

export function transferQuestion(index){
  const [high,low]=[[2,-7],[-2,-10],[5,-4]][index%3];
  const answer=high-low;
  const options=[answer,high+low,low-high];
  const offset=index%options.length;
  return {
    id:'subtract-transfer-'+index%3, high, low, answer,
    prompt:'海沟水温从 '+low+'℃ 升到 '+high+'℃，一共升高多少摄氏度？',
    options:[...options.slice(offset),...options.slice(0,offset)],
    explanation:'用终点温度减去起点温度：'+high+' − ('+low+') = '+answer+'。',
  };
}

export const featuredQuestions=[
  {id:'cnm_005_q4',prompt:'数轴上点 A 表示 -3，点 B 在原点右侧，且 A，B 两点间的距离是 5，则线段 AB 的中点表示的数是多少？',answer:-.5,options:[.5,-.5,2],explanation:'B 在 −3 的右边 5 格，所以 B 表示 2。中点是 (−3 + 2) ÷ 2 = −1/2。'},
  {id:'cnm_007_q4',prompt:'在数轴上，到原点距离小于 3 的整数共有几个？',answer:5,options:[4,7,5],explanation:'整数是 −2、−1、0、1、2。题目说小于 3，两个端点都不算。'},
  {id:'cnm_010_q4',prompt:'已知 |a|=6，|b|=4，且 a<0<b，求 a+b 的值。',answer:-2,options:[-2,2,-10],explanation:'由符号条件得 a = −6、b = 4，所以 a + b = −2。'},
  {id:'cnm_012_q5',prompt:'某地某天最高气温是 3 ℃，最低气温是 -9 ℃，这一天的温差是多少 ℃？',answer:12,options:[6,12,-6],explanation:'温差是 3 − (−9) = 3 + 9 = 12℃。'},
];
