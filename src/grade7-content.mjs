// Original teaching content reused under MIT from https://github.com/dnadz/xunli
// Copyright (c) 2026 Xunli contributors. See THIRD_PARTY_NOTICES.md.
export const SOURCE_LESSONS = [
  {
    "id": "rational-numbers",
    "title": "正负数与有理数：先选基准，再表示数量",
    "version": "0.1.0",
    "why": "同样是5，收入5元和支出5元表示的变化不同。我们需要在数值之外说明方向，也需要弄清哪些数可以放在同一类。",
    "steps": [
      {
        "type": "约定",
        "title": "正负号要配合基准使用",
        "text": "把零上温度记作正数、零下温度记作负数，是先选定0℃作为基准。把收入记为正，支出记为负，也是先说明正方向。不能只看到负号就断定事情不好，例如支出减少可以是好事。"
      },
      {
        "type": "定义",
        "title": "0不属于正数，也不属于负数",
        "text": "大于0的数是正数，小于0的数是负数。0表示分界，也可以表示没有变化；0不总表示什么都没有，例如0℃是一个确定的温度。"
      },
      {
        "type": "定义",
        "title": "整数与分数合起来叫有理数",
        "text": "正整数、0、负整数都是整数。正分数和负分数都是分数。整数和分数合称有理数。有限小数、无限循环小数能化成分数，所以也是有理数；不能因为写成小数就把它排除。"
      },
      {
        "type": "推导",
        "title": "不同写法可能表示同一个数",
        "text": "0.75=75/100=3/4，−1.5=−15/10=−3/2。整数6也能写成6/1。有理数可以写成两个整数的比p/q，其中q不能为0。分类时按数的实际值判断，不只看外观，例如6/3=2是整数。"
      },
      {
        "type": "联系",
        "title": "按正负或按整数分数分类，都要不重不漏",
        "text": "按整数和分数分，有理数分为整数与分数；按正负分，有理数分为正有理数、0、负有理数。0要单独放。正整数既是正有理数又是整数，这两套分类不是互相排斥的标签。"
      },
      {
        "type": "推导",
        "title": "在数轴上比较大小",
        "text": "同一条数轴上，越靠右的数越大。正数大于0，负数小于0，正数大于负数。两个负数比较时，离原点更远的反而更小：−7在−2左边，所以−7<−2。"
      },
      {
        "type": "例子与检查",
        "title": "先还原实际含义，再检查分类",
        "text": "若以海平面为0，向上为正，海平面下12米记为−12米。它是负整数，也是负有理数。若记录的深度是12米，则说的是距离，不能因为地点在海平面下就把距离也写成负数。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "在纸上把−2、0、3/5、−0.4、7、6/3写在卡片上。先化成你熟悉的数，再分别按整数/分数和正/零/负分类。画数轴检查其中两个负数的大小。"
    },
    "reflection": "0为什么既不是正数也不是负数？用一个例子说明同一个有理数可以有不同写法。",
    "method": "举例与反例",
    "questions": [
      {
        "id": "rational-numbers-q1",
        "prompt": "下面哪个数是负整数？",
        "options": [
          {
            "id": "c",
            "text": "0"
          },
          {
            "id": "b",
            "text": "−8"
          },
          {
            "id": "a",
            "text": "−2.5"
          }
        ],
        "answer": "b",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "先检查是否小于0，再检查值是不是整数。",
        "explanation": "−8小于0，并且是整数。−2.5是负分数，0既不是正数也不是负数。"
      },
      {
        "id": "rational-numbers-q2",
        "prompt": "关于0，哪句话正确？",
        "options": [
          {
            "id": "a",
            "text": "0是最小的正数"
          },
          {
            "id": "c",
            "text": "0是整数，但既不是正数也不是负数"
          },
          {
            "id": "b",
            "text": "0只表示没有东西"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "“整数”和“正负”是两种分类标准。",
        "explanation": "0属于整数；正数必须大于0，负数必须小于0，所以0两者都不是。0℃等例子也说明它不只表示没有。"
      },
      {
        "id": "rational-numbers-q3",
        "prompt": "把收入记为正，支出记为负。支出18元，应记为多少元？",
        "options": [
          {
            "id": "b",
            "text": "18"
          },
          {
            "id": "c",
            "text": "0"
          },
          {
            "id": "a",
            "text": "−18"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "先按题目规定的方向表示这次变化。",
        "explanation": "题目把支出规定为负，因此支出18元记为−18元；18表示变化量的大小。"
      },
      {
        "id": "rational-numbers-q4",
        "prompt": "一个数写成10/5，按它的实际值应怎样分类？",
        "options": [
          {
            "id": "a",
            "text": "只能算分数，不能算整数"
          },
          {
            "id": "b",
            "text": "是整数，也是有理数"
          },
          {
            "id": "c",
            "text": "不是有理数"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "先算出这个数的值。",
        "explanation": "10/5=2。2是整数，整数属于有理数。数的写法不能代替对实际值的判断。"
      },
      {
        "id": "rational-numbers-q5",
        "prompt": "−0.8与−0.3相比，哪句话正确？",
        "options": [
          {
            "id": "a",
            "text": "−0.8>−0.3"
          },
          {
            "id": "c",
            "text": "−0.8<−0.3"
          },
          {
            "id": "b",
            "text": "二者相等"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "把两个数放在同一条数轴上。",
        "explanation": "−0.8在−0.3的左边，所以−0.8<−0.3。两个负数中，绝对值较大的数较小。"
      },
      {
        "id": "rational-numbers-q6",
        "prompt": "一个温度记录为0℃，能否据此说“没有温度”？",
        "options": [
          {
            "id": "b",
            "text": "能，因为0就是没有"
          },
          {
            "id": "c",
            "text": "不能，因为0一定是负数"
          },
          {
            "id": "a",
            "text": "不能，0℃是所选刻度下的一个温度"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "0作为分界和0表示数量为零，是不是同一件事？",
        "explanation": "0℃是温度刻度中的确定位置，不是没有温度。0本身也不是负数。"
      },
      {
        "id": "rational-numbers-q7",
        "prompt": "下面哪组数全部是有理数？",
        "options": [
          {
            "id": "a",
            "text": "1/0、2、3"
          },
          {
            "id": "b",
            "text": "−1/4、0.6、5"
          },
          {
            "id": "c",
            "text": "√2、π、1"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "分母为0的写法没有意义；有限小数能化成分数。",
        "explanation": "−1/4是分数，0.6=3/5，5是整数，三者都是有理数。1/0没有意义，√2与π不是有理数。"
      },
      {
        "id": "rational-numbers-q8",
        "prompt": "一座车库以地面层记为0，向上为正。B1层在地面下一层，B3层在地面下三层。哪个记录合理？",
        "options": [
          {
            "id": "c",
            "text": "B1和B3都记为0"
          },
          {
            "id": "a",
            "text": "B3记为3，且比B1高"
          },
          {
            "id": "b",
            "text": "B1记为−1，B3记为−3，B3比B1低"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "先按共同基准标位置，再比较。",
        "explanation": "地面下用负数表示，所以B1是−1，B3是−3。−3在−1下方，说明B3比B1低。"
      }
    ],
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "sourceScope": "原创通用教学；上册目录已与项目导入教材关联，本文件未逐页校对整册教材，不冒充教材逐页讲解。",
    "coverageTopics": [
      "正负数与基准",
      "0的意义",
      "整数与分数分类",
      "分数与有限小数",
      "数轴大小比较"
    ],
    "methods": {
      "explainPrompt": "0为什么既不是正数也不是负数？用一个例子说明同一个有理数可以有不同写法。",
      "cuePrompts": [
        "0为什么需要单独分类？",
        "同一个数换一种写法，会改变它的分类吗？"
      ],
      "reviewPrompts": [
        "0为什么既不是正数也不是负数？用一个例子说明同一个有理数可以有不同写法。",
        "合上资料，给这个概念举一个自己的例子，并说明它需要哪些条件。"
      ]
    }
  },
  {
    "id": "rational-operations",
    "title": "有理数四则运算：符号变化要有理由",
    "version": "0.1.0",
    "why": "把收入、支出和温度变化放在一起计算时，旧的运算需要扩展到负数。我们希望扩展后的算法仍保留加法、乘法的基本规律。",
    "steps": [
      {
        "type": "观察与定义",
        "title": "把加法理解成合并变化",
        "text": "在数轴上，从−4出发再向右走7个单位，到3，所以−4+7=3。同号相加，相同方向的长度相加并保留方向；异号相加，先抵消相反方向的部分，剩余部分决定符号。互为相反数的两个数之和为0。"
      },
      {
        "type": "推导",
        "title": "减去一个数，等于加上它的相反数",
        "text": "因为b+(−b)=0，要从a中去掉b，可以加上−b，所以a−b=a+(−b)。例如−2−(−6)=−2+6=4。双负号不是看到就删掉，而是先认清这里是减去一个负数。"
      },
      {
        "type": "性质",
        "title": "交换和分组不改变加法的和",
        "text": "有理数加法仍满足a+b=b+a、(a+b)+c=a+(b+c)。可以把相反数先合成0，或把容易凑整的数先相加。减法本身不满足交换律，必须先改成加法并带着符号移动各项。"
      },
      {
        "type": "推导",
        "title": "为什么负数乘正数为负数",
        "text": "例如(−3)×4表示四个−3相加，结果是−12。为了保持交换律，4×(−3)也等于−12。乘积的大小是两个绝对值之积，符号由两个因子的正负决定。0乘任何数都是0。"
      },
      {
        "type": "推导",
        "title": "负负得正不是靠口号决定",
        "text": "由分配律，(−3)×[2+(−2)]=(−3)×0=0。展开后是−6+(−3)×(−2)=0。因此(−3)×(−2)必须等于6。一般的负负得正也来自保留分配律和相反数关系的要求。"
      },
      {
        "type": "定义与边界",
        "title": "除法通过乘法反过来找",
        "text": "a÷b就是找一个数x，使b×x=a，b不能为0。b不为0时，a÷b=a×(1/b)。两个非零数相除，同号得正、异号得负。0除以非零数为0；任何数都不能除以0，0÷0也不能。"
      },
      {
        "type": "例子",
        "title": "先确定运算顺序，再计算",
        "text": "计算5−2×(−4)：先做乘法，2×(−4)=−8，再算5−(−8)=13。同一级运算一般从左到右；先括号，再乘方，再乘除，最后加减。只有改写为乘法、加法后，才能按对应运算律重新分组。"
      },
      {
        "type": "反例",
        "title": "连续除法不能任意换括号",
        "text": "24÷6÷2=(24÷6)÷2=2，而24÷(6÷2)=8。括号改变了运算的对象。约分时只约乘法因子，不能把加减中的一项直接与分母约掉。"
      },
      {
        "type": "方法",
        "title": "用估计、符号和逆运算检查",
        "text": "先估计结果应该为正、为负还是0，再算大小。例如负数除以负数应为正；算完可用商乘除数检查被除数。检查不能只重算同一遍，也可以换数轴或相反数关系说明。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "用数轴分别表示−5+8与−5−(−8)。再在纸上用分配律推导(−2)×(−4)，不要只写“负负得正”。这里没有专门的拖动控件，图和推导都由你自己完成。"
    },
    "reflection": "减去负数为什么等于加正数？两个负数相乘为什么为正？分别说明使用的关系，不要混成一个口诀。",
    "method": "从定义推导",
    "questions": [
      {
        "id": "rational-operations-q1",
        "prompt": "−6+9的结果是？",
        "options": [
          {
            "id": "c",
            "text": "−3"
          },
          {
            "id": "a",
            "text": "−15"
          },
          {
            "id": "b",
            "text": "3"
          }
        ],
        "answer": "b",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "先抵消方向相反的6个单位。",
        "explanation": "从−6向右走9个单位，先到0再走3个单位，所以结果为3。"
      },
      {
        "id": "rational-operations-q2",
        "prompt": "下面哪个算式没有意义？",
        "options": [
          {
            "id": "c",
            "text": "7÷(−1)"
          },
          {
            "id": "a",
            "text": "0÷7"
          },
          {
            "id": "b",
            "text": "(−5)÷0"
          }
        ],
        "answer": "b",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "除数能不能为0？",
        "explanation": "除法的除数不能为0。0÷7=0，7÷(−1)=−7，都有意义。"
      },
      {
        "id": "rational-operations-q3",
        "prompt": "计算−7−(−3)，结果是？",
        "options": [
          {
            "id": "c",
            "text": "−4"
          },
          {
            "id": "a",
            "text": "−10"
          },
          {
            "id": "b",
            "text": "10"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "先把减法改为加相反数。",
        "explanation": "−7−(−3)=−7+3=−4。这里减去−3，等于加上3。"
      },
      {
        "id": "rational-operations-q4",
        "prompt": "若a、b都小于0，且b不为0，a÷b一定怎样？",
        "options": [
          {
            "id": "b",
            "text": "小于0"
          },
          {
            "id": "c",
            "text": "等于0"
          },
          {
            "id": "a",
            "text": "大于0"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "把除法改写为乘倒数，检查两个因子的符号。",
        "explanation": "b的倒数仍小于0，a也是负数；两个负数相乘为正，所以a÷b>0。"
      },
      {
        "id": "rational-operations-q5",
        "prompt": "计算4−3×(−2)，结果是？",
        "options": [
          {
            "id": "a",
            "text": "−2"
          },
          {
            "id": "b",
            "text": "10"
          },
          {
            "id": "c",
            "text": "−14"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "先乘后减，保留乘积的负号。",
        "explanation": "3×(−2)=−6，所以4−(−6)=10。"
      },
      {
        "id": "rational-operations-q6",
        "prompt": "某人把18÷3÷2算成18÷(3÷2)。问题在哪里？",
        "options": [
          {
            "id": "b",
            "text": "把从左到右的除法改了分组，值可能改变"
          },
          {
            "id": "a",
            "text": "除法只能在整数中做"
          },
          {
            "id": "c",
            "text": "所有除法都必须先做右边"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "分别按两种括号计算一次。",
        "explanation": "原式=(18÷3)÷2=3；改写式=18÷1.5=12。除法不能像乘法那样任意重新分组。"
      },
      {
        "id": "rational-operations-q7",
        "prompt": "计算(−3/4)÷(1/2)，结果是？",
        "options": [
          {
            "id": "b",
            "text": "3/2"
          },
          {
            "id": "c",
            "text": "−3/2"
          },
          {
            "id": "a",
            "text": "−3/8"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "除以非零分数，等于乘它的倒数。",
        "explanation": "(−3/4)÷(1/2)=(−3/4)×2=−3/2。一个负数除以正数，结果为负。"
      },
      {
        "id": "rational-operations-q8",
        "prompt": "已知a+b=0，哪句话一定正确？",
        "options": [
          {
            "id": "c",
            "text": "a和b一定相等且不为0"
          },
          {
            "id": "a",
            "text": "a和b互为相反数，也可能都为0"
          },
          {
            "id": "b",
            "text": "a、b一定一正一负"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "检查a=b=0是否也符合条件。",
        "explanation": "a+b=0说明b=−a，所以二者互为相反数。a=0时b也为0，不能排除这种情况。"
      }
    ],
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "sourceScope": "原创通用教学；上册目录已与项目导入教材关联，本文件未逐页校对整册教材，不冒充教材逐页讲解。",
    "coverageTopics": [
      "有理数加减",
      "加法交换结合律",
      "乘法符号与分配律",
      "负负得正的依据",
      "倒数与除法",
      "除数非零",
      "混合运算与顺序"
    ],
    "methods": {
      "explainPrompt": "减去负数为什么等于加正数？两个负数相乘为什么为正？分别说明使用的关系，不要混成一个口诀。",
      "cuePrompts": [
        "减去一个负数，为什么是加正数？",
        "负负得正怎样从分配律说明？"
      ],
      "reviewPrompts": [
        "减去负数为什么等于加正数？两个负数相乘为什么为正？分别说明使用的关系，不要混成一个口诀。",
        "合上资料，给这个概念举一个自己的例子，并说明它需要哪些条件。"
      ]
    }
  },
  {
    "id": "scientific-notation",
    "title": "科学记数法与近似数：让大小和精度都说清",
    "version": "0.1.0",
    "why": "从细菌的长度到地球间的距离，普通数字有时太长。科学记数法把数的主要大小和10的倍数分开，近似数则说明我们保留到多细。",
    "steps": [
      {
        "type": "定义",
        "title": "把正数写成a乘10的整数次方",
        "text": "一个正数写成a×10ⁿ，其中1≤a<10，n是整数，叫科学记数法。例如460000=4.6×10⁵。对于负数可以先表示绝对值，再在前面加负号，例如−460000=−4.6×10⁵。0不按这个标准形式表示。"
      },
      {
        "type": "推导",
        "title": "为什么移动小数点要配10的乘方",
        "text": "把460000变成4.6，相当于除以100000；为了数值不变，必须再乘100000，即10⁵。不能只数0的个数，因为某些数末尾没有0，或数字中间也会有0。"
      },
      {
        "type": "扩展定义",
        "title": "很小的数需要负整数指数",
        "text": "对正整数n，规定10⁻ⁿ=1/10ⁿ，所以0.0046=4.6×10⁻³。这个定义让10的乘方继续符合乘除法关系。负指数表示倒数，不表示这个数本身为负；4.6×10⁻³仍大于0。"
      },
      {
        "type": "例子",
        "title": "把式子还原，检查数量级",
        "text": "7.2×10⁴=72000，7.2×10⁻⁴=0.00072。一个数按科学记数法写好后，可反向展开检查。a必须小于10，所以72×10³数值虽对，却不是这里的标准形式。"
      },
      {
        "type": "约定",
        "title": "近似数要说明精确到哪一位",
        "text": "采用通常的四舍五入法，保留位后的下一位小于5就舍去，大于或等于5就向保留位进1。例如3.476精确到百分位为3.48。精确到0.01与保留两位小数表示相同的位置要求。"
      },
      {
        "type": "边界",
        "title": "末尾的0也能传递精度信息",
        "text": "2.30与2.3数值相等，但作为近似数时，前者精确到百分位，后者精确到十分位。0不能随意省略。把2.30×10⁴还原看，其最后保留的位在百位，不是百分位。"
      },
      {
        "type": "方法",
        "title": "先比较同一单位，再决定保留多少位",
        "text": "把3.2千米与2800米比较，先统一单位：3.2千米=3200米。如果是实际测量，先记录原始数据，再在最后按要求取近似值，避免每一步都提前舍入导致误差扩大。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "在纸上展开3.7×10⁶与3.7×10⁻⁴，再把83000和0.00083改写为标准科学记数法。选一个测量值，分别写成精确到十分位和百分位的近似数，并解释末尾0是否可省。"
    },
    "reflection": "负指数为什么不意味着结果是负数？近似数中的末尾0有什么作用？",
    "method": "从定义推导",
    "questions": [
      {
        "id": "scientific-notation-q1",
        "prompt": "560000的标准科学记数法是？",
        "options": [
          {
            "id": "a",
            "text": "56×10⁴"
          },
          {
            "id": "b",
            "text": "5.6×10⁵"
          },
          {
            "id": "c",
            "text": "0.56×10⁶"
          }
        ],
        "answer": "b",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "数值相等还不够，前面的正数还要满足1≤a<10。",
        "explanation": "560000=5.6×100000=5.6×10⁵。其他两个式子数值相等，但前面的数不在规定范围内。"
      },
      {
        "id": "scientific-notation-q2",
        "prompt": "8×10⁻³的值是？",
        "options": [
          {
            "id": "a",
            "text": "−8000"
          },
          {
            "id": "b",
            "text": "0.008"
          },
          {
            "id": "c",
            "text": "0.0008"
          }
        ],
        "answer": "b",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "10⁻³是1/1000，不是一个负数。",
        "explanation": "8×10⁻³=8/1000=0.008，大于0。"
      },
      {
        "id": "scientific-notation-q3",
        "prompt": "把0.00051写成标准科学记数法，应是？",
        "options": [
          {
            "id": "c",
            "text": "51×10⁻⁵"
          },
          {
            "id": "b",
            "text": "5.1×10⁴"
          },
          {
            "id": "a",
            "text": "5.1×10⁻⁴"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "先把前面的数调到1到10之间，再反向展开检查。",
        "explanation": "5.1×10⁻⁴=5.1/10000=0.00051；51不小于10，所以第三项不是标准形式。"
      },
      {
        "id": "scientific-notation-q4",
        "prompt": "某近似长度写为4.20×10³米，最后保留的是哪一位？",
        "options": [
          {
            "id": "a",
            "text": "十分位"
          },
          {
            "id": "b",
            "text": "百位"
          },
          {
            "id": "c",
            "text": "十位"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "把它展开为4200米，追踪4.20中的最后一个0。",
        "explanation": "4.20的小数点后第二位乘1000后，对应十位，所以这个近似数精确到10米。"
      },
      {
        "id": "scientific-notation-q5",
        "prompt": "按四舍五入法，6.284精确到百分位为？",
        "options": [
          {
            "id": "b",
            "text": "6.28"
          },
          {
            "id": "a",
            "text": "6.2"
          },
          {
            "id": "c",
            "text": "6.29"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "保留两位小数，看第三位。",
        "explanation": "第三位是4，小于5，所以保留6.28。"
      },
      {
        "id": "scientific-notation-q6",
        "prompt": "作为近似数，1.50与1.5应怎样理解？",
        "options": [
          {
            "id": "c",
            "text": "精度完全相同，0必须删掉"
          },
          {
            "id": "a",
            "text": "数值不同"
          },
          {
            "id": "b",
            "text": "数值相等，但表示的精确位不同"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "区分数值与记录的精度。",
        "explanation": "二者数值相等。1.50精确到百分位，1.5精确到十分位，记录的精确位不同。"
      },
      {
        "id": "scientific-notation-q7",
        "prompt": "9.97按四舍五入法精确到十分位，结果应写为？",
        "options": [
          {
            "id": "a",
            "text": "9.9"
          },
          {
            "id": "c",
            "text": "10.0"
          },
          {
            "id": "b",
            "text": "10"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "向十分位进1后，要保留显示精确位所需的0。",
        "explanation": "百分位为7，需要向十分位进1，9.97近似为10.0；写成10.0可明确精确到十分位。"
      },
      {
        "id": "scientific-notation-q8",
        "prompt": "两颗微粒直径分别为2×10⁻⁵米和7×10⁻⁶米。哪一个更大？",
        "options": [
          {
            "id": "a",
            "text": "2×10⁻⁵米更大"
          },
          {
            "id": "b",
            "text": "7×10⁻⁶米更大"
          },
          {
            "id": "c",
            "text": "只看2和7，无法比较"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "把两个数写成相同的10的乘方。",
        "explanation": "2×10⁻⁵=20×10⁻⁶，20大于7，所以第一颗直径更大。"
      }
    ],
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "sourceScope": "原创通用教学；上册目录已与项目导入教材关联，本文件未逐页校对整册教材，不冒充教材逐页讲解。",
    "coverageTopics": [
      "大数与小数的科学记数法",
      "负整数指数的定义",
      "标准形式",
      "数量级比较",
      "四舍五入",
      "近似数精确位"
    ],
    "methods": {
      "explainPrompt": "负指数为什么不意味着结果是负数？近似数中的末尾0有什么作用？",
      "cuePrompts": [
        "负指数与负数有什么不同？",
        "近似数最后一个0说明什么？"
      ],
      "reviewPrompts": [
        "负指数为什么不意味着结果是负数？近似数中的末尾0有什么作用？",
        "合上资料，给这个概念举一个自己的例子，并说明它需要哪些条件。"
      ]
    }
  },
  {
    "id": "algebra-expressions",
    "title": "代数式：把一句数量关系写成式子",
    "version": "0.1.0",
    "why": "一种数量关系可以适用于许多具体数值。用字母表示数，能把相同的计算结构留下来，但每个字母和每个运算都要有含义。",
    "steps": [
      {
        "type": "定义",
        "title": "先说字母代表什么，再列式",
        "text": "设一本练习本价格为a元，买4本共4a元。a不是一个随意的图案，而是一个数的名称。在同一问题中，同一个字母表示同一个量；不同字母可以碰巧取到相同的数。"
      },
      {
        "type": "约定",
        "title": "代数式的写法要让运算对象清楚",
        "text": "数字与字母相乘，通常把数字写在前面并省略乘号，如3×x写成3x。字母之间相乘可写成ab。除法常写成分数，如x÷5写成x/5。带分数乘字母宜写成假分数，避免误读。"
      },
      {
        "type": "定义与例子",
        "title": "用括号区分先后关系",
        "text": "“比a的3倍少2”是3a−2；“a与2的差的3倍”是3(a−2)。先把一句话分成几个计算动作，再决定括号。单独的一个数或字母也可以是代数式。"
      },
      {
        "type": "推导",
        "title": "从具体关系提炼通用结构",
        "text": "长方形长为x厘米、宽比长少3厘米，则宽是x−3厘米，周长为2[x+(x−3)]厘米。字母让同一式子适用于所有符合条件的长方形；这里宽必须大于0，因此x>3。"
      },
      {
        "type": "方法",
        "title": "求值时用括号保护负数",
        "text": "求3t²−2t在t=−2时的值，先写3×(−2)²−2×(−2)，再按运算顺序算，得12+4=16。求值是代入后计算，不是把字母擦掉随意拼数字。"
      },
      {
        "type": "边界",
        "title": "代入的数要让式子有意义，也符合情境",
        "text": "式子1/(x−2)要求x不等于2，因为分母不能为0。如果n表示人数，通常还要求n是非负整数。式子在数学上可算，不代表在实际问题中每个数都可取。"
      },
      {
        "type": "联系与反例",
        "title": "式子表达数量，等式表达相等关系",
        "text": "3x+1是一个式子；3x+1=10是一个含相等关系的句子。x=3代入后可以检查等式是否成立。不要把“求式子的值”和“求使等式成立的未知数”当成同一种任务。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "给“每张门票p元，另付固定服务费5元，买n张票”列式，并写清n、p的实际范围。再自己编两个数字例子检查式子，最后用一句不同的话描述同一数量关系。"
    },
    "reflection": "为什么列代数式前要写清字母和单位？请用带括号与不带括号的一对式子说明区别。",
    "method": "自己复述",
    "questions": [
      {
        "id": "algebra-expressions-q1",
        "prompt": "“x与5的和的2倍”应写成哪个式子？",
        "options": [
          {
            "id": "a",
            "text": "2x+5"
          },
          {
            "id": "c",
            "text": "x+10"
          },
          {
            "id": "b",
            "text": "2(x+5)"
          }
        ],
        "answer": "b",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "先得到“和”，再求它的2倍。",
        "explanation": "x与5的和是x+5，把整个和乘2，得到2(x+5)。"
      },
      {
        "id": "algebra-expressions-q2",
        "prompt": "在同一式子a+a中，两处a应怎样取值？",
        "options": [
          {
            "id": "a",
            "text": "必须代入同一个数"
          },
          {
            "id": "b",
            "text": "必须代入两个不同的数"
          },
          {
            "id": "c",
            "text": "第一处是1，第二处是2"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "一个字母在同一表达中代表同一个量。",
        "explanation": "两处a都是同一个数的名称。若a=4，应写成4+4，而不是给两处不同值。"
      },
      {
        "id": "algebra-expressions-q3",
        "prompt": "当m=−3时，2m²+1的值是？",
        "options": [
          {
            "id": "c",
            "text": "19"
          },
          {
            "id": "b",
            "text": "13"
          },
          {
            "id": "a",
            "text": "−17"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "先把负数用括号代入，再算平方。",
        "explanation": "2×(−3)²+1=2×9+1=19。"
      },
      {
        "id": "algebra-expressions-q4",
        "prompt": "某停车场每次收固定入场费6元，再按每小时h元收费。停t小时的费用是？",
        "options": [
          {
            "id": "b",
            "text": "6+ht"
          },
          {
            "id": "a",
            "text": "6ht"
          },
          {
            "id": "c",
            "text": "(6+h)t"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "固定费用只收一次，按小时的费用随t变化。",
        "explanation": "每小时h元，t小时为ht元，再加一次入场费6元，所以总费用6+ht元。"
      },
      {
        "id": "algebra-expressions-q5",
        "prompt": "边长为s厘米的正方形，其面积用哪个式子表示？",
        "options": [
          {
            "id": "a",
            "text": "4s平方厘米"
          },
          {
            "id": "b",
            "text": "s²平方厘米"
          },
          {
            "id": "c",
            "text": "2s平方厘米"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "面积是两个相互垂直方向的长度相乘。",
        "explanation": "正方形的长、宽都为s，面积s×s=s²，单位是平方厘米。4s是周长的数值。"
      },
      {
        "id": "algebra-expressions-q6",
        "prompt": "n表示班级人数，式子120/n表示每人平均分得的份量。n应满足什么？",
        "options": [
          {
            "id": "c",
            "text": "n是正整数"
          },
          {
            "id": "a",
            "text": "任意有理数都可以"
          },
          {
            "id": "b",
            "text": "只要n不等于0就符合人数含义"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "同时检查除法条件和人数条件。",
        "explanation": "分母不能为0，且一个班的人数在此情境中应为正整数，不能为负数或非整数。"
      },
      {
        "id": "algebra-expressions-q7",
        "prompt": "当u=2、v=−1时，3u−v的值是？",
        "options": [
          {
            "id": "b",
            "text": "7"
          },
          {
            "id": "a",
            "text": "5"
          },
          {
            "id": "c",
            "text": "−7"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "减去v时，整个负数要被减去。",
        "explanation": "3×2−(−1)=6+1=7。"
      },
      {
        "id": "algebra-expressions-q8",
        "prompt": "小明把“a比b多4”写成a−b=4。这与a=b+4的关系是？",
        "options": [
          {
            "id": "b",
            "text": "只有a大于0时才相同"
          },
          {
            "id": "c",
            "text": "二者永远矛盾"
          },
          {
            "id": "a",
            "text": "二者表达同一数量关系"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "从差或从较小的量增加，两种说法都可检查。",
        "explanation": "a−b=4表示a减去b后多出4；两边都加b，得到a=b+4，所以表达同一关系。"
      }
    ],
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "sourceScope": "原创通用教学；上册目录已与项目导入教材关联，本文件未逐页校对整册教材，不冒充教材逐页讲解。",
    "coverageTopics": [
      "字母与数量含义",
      "列代数式",
      "乘除简写",
      "括号与运算顺序",
      "负数代入",
      "取值范围与单位",
      "式子和等式"
    ],
    "methods": {
      "explainPrompt": "为什么列代数式前要写清字母和单位？请用带括号与不带括号的一对式子说明区别。",
      "cuePrompts": [
        "这两个括号是否表示同一个计算顺序？",
        "代入前，哪些值不能取？"
      ],
      "reviewPrompts": [
        "为什么列代数式前要写清字母和单位？请用带括号与不带括号的一对式子说明区别。",
        "合上资料，给这个概念举一个自己的例子，并说明它需要哪些条件。"
      ]
    }
  },
  {
    "id": "polynomials",
    "title": "单项式与多项式：看清每一项在做什么",
    "version": "0.1.0",
    "why": "一个复杂式子往往由几块相加组成。分清项、系数和次数，才能知道哪些部分可以合并，哪些只是看起来相像。",
    "steps": [
      {
        "type": "定义",
        "title": "单项式是数与字母的乘积",
        "text": "数与字母的乘积叫单项式，单独的数或字母也是单项式。例如−5x²y、7、z。单项式中表示字母的因子的指数是非负整数；1/x含字母作除数，不属于这里的单项式。"
      },
      {
        "type": "定义",
        "title": "系数带着符号，次数数的是指数总和",
        "text": "−5x²y的数字因数是−5，叫系数；字母指数2与1相加为3，叫次数。x的系数是1，−x的系数是−1，不是没有系数。非零常数的次数是0；本单元不约定零单项式的次数。"
      },
      {
        "type": "定义",
        "title": "多项式是几个单项式的和",
        "text": "例如2x²−3x+4有三项：2x²、−3x、4。项的符号属于这一项。没有字母的一项叫常数项。按课内常用说法，至少两个单项式的和称多项式；单项式与多项式统称整式。"
      },
      {
        "type": "定义与边界",
        "title": "多项式的次数取各项中最高的次数",
        "text": "2x²y−x+6各项次数分别是3、1、0，所以是三次多项式。不能把不同项的次数再相加。判断时先合并同类项，例如x²−x²+1化简为1，不能仍按未化简外观说二次。"
      },
      {
        "type": "定义",
        "title": "同类项必须字母和对应指数都相同",
        "text": "3ab²与−7b²a是同类项，因为乘法顺序不同不改变字母部分。3ab²与3a²b不是同类项，虽然次数都为3。所有常数项也是同类项。"
      },
      {
        "type": "推导",
        "title": "合并同类项来自分配律",
        "text": "3x²y−7x²y=(3−7)x²y=−4x²y。把相同字母部分当成共同因子，只合并系数；字母和指数不变。2x与3x²没有相同字母部分，不能合并成5x³。"
      },
      {
        "type": "方法",
        "title": "用结构检查，不靠字母的外观猜",
        "text": "先按加减分项并保留符号，再逐项写系数、字母和指数。判断同类项时可以把字母按固定顺序写好。最后用一组具体数值检查错误的合并规则，但一个数值相等不能证明两式总相等。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "在纸上给4ab²−3a²b+2b²a−7中的各项画框，圈出同类项并写每项的系数与次数。先判断哪些能合并，再用分配律解释，不只写最后结果。"
    },
    "reflection": "两个单项式次数相同，是否一定是同类项？请给出一个反例。",
    "method": "举例与反例",
    "questions": [
      {
        "id": "polynomials-q1",
        "prompt": "单项式−6a²b的系数是？",
        "options": [
          {
            "id": "a",
            "text": "6"
          },
          {
            "id": "c",
            "text": "3"
          },
          {
            "id": "b",
            "text": "−6"
          }
        ],
        "answer": "b",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "系数包括这项前面的正负号。",
        "explanation": "−6a²b的数字因数是−6，所以系数为−6；次数是2+1=3。"
      },
      {
        "id": "polynomials-q2",
        "prompt": "下面哪一对是同类项？",
        "options": [
          {
            "id": "a",
            "text": "2xy²与5x²y"
          },
          {
            "id": "b",
            "text": "2x与2x²"
          },
          {
            "id": "c",
            "text": "−3mn与4nm"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "检查字母以及每个字母的指数，不看书写次序。",
        "explanation": "mn与nm表示同一个乘积，两项字母及对应指数相同。其他两对的指数不同。"
      },
      {
        "id": "polynomials-q3",
        "prompt": "多项式7x²−4x+9的常数项是？",
        "options": [
          {
            "id": "a",
            "text": "7"
          },
          {
            "id": "c",
            "text": "9"
          },
          {
            "id": "b",
            "text": "−4"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "常数项不含字母。",
        "explanation": "三项分别是7x²、−4x、9，不含字母的是9。"
      },
      {
        "id": "polynomials-q4",
        "prompt": "3a²b与−2ab²为什么不能合并为一个同类项？",
        "options": [
          {
            "id": "b",
            "text": "因为字母a、b各自的指数不同"
          },
          {
            "id": "a",
            "text": "因为系数正负不同"
          },
          {
            "id": "c",
            "text": "因为它们次数不同"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "它们总次数其实都为3，还要检查什么？",
        "explanation": "第一项中a指数2、b指数1，第二项相反，因此不是同类项。系数正负不同不妨碍真正的同类项合并。"
      },
      {
        "id": "polynomials-q5",
        "prompt": "化简5x²−8x²，结果是？",
        "options": [
          {
            "id": "a",
            "text": "−3x²"
          },
          {
            "id": "c",
            "text": "13x²"
          },
          {
            "id": "b",
            "text": "−3x⁴"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "字母部分不变，合并系数。",
        "explanation": "由分配律，5x²−8x²=(5−8)x²=−3x²。"
      },
      {
        "id": "polynomials-q6",
        "prompt": "关于−y，哪句话正确？",
        "options": [
          {
            "id": "a",
            "text": "没有系数"
          },
          {
            "id": "b",
            "text": "系数为−1，次数为1"
          },
          {
            "id": "c",
            "text": "系数为1，次数为−1"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "−y可以写成什么乘法形式？",
        "explanation": "−y=(−1)×y，所以系数为−1，y的指数为1，因此次数为1。"
      },
      {
        "id": "polynomials-q7",
        "prompt": "4x³y²−2xy+1化简后是几次多项式？",
        "options": [
          {
            "id": "b",
            "text": "6次"
          },
          {
            "id": "a",
            "text": "3次"
          },
          {
            "id": "c",
            "text": "5次"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "先求每一项的总次数，再取最高值。",
        "explanation": "第一项次数3+2=5，第二项次数2，常数项次数0，所以多项式是5次。"
      },
      {
        "id": "polynomials-q8",
        "prompt": "小明说“只要两个式子都是三次，就能合并”。哪个例子能直接否定这句话？",
        "options": [
          {
            "id": "b",
            "text": "a²b与ab²"
          },
          {
            "id": "a",
            "text": "x³与2x³"
          },
          {
            "id": "c",
            "text": "5与7"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "找次数相同、字母对应指数却不同的一对。",
        "explanation": "a²b和ab²总次数都为3，但a和b的指数各不相同，不能作为同类项合并。"
      }
    ],
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "sourceScope": "原创通用教学；上册目录已与项目导入教材关联，本文件未逐页校对整册教材，不冒充教材逐页讲解。",
    "coverageTopics": [
      "单项式与多项式",
      "系数符号",
      "次数与常数项",
      "同类项",
      "整式",
      "分配律与合并依据"
    ],
    "methods": {
      "explainPrompt": "两个单项式次数相同，是否一定是同类项？请给出一个反例。",
      "cuePrompts": [
        "总次数相同是否足够判断同类项？",
        "负号属于系数还是写法装饰？"
      ],
      "reviewPrompts": [
        "两个单项式次数相同，是否一定是同类项？请给出一个反例。",
        "合上资料，给这个概念举一个自己的例子，并说明它需要哪些条件。"
      ]
    }
  },
  {
    "id": "polynomial-addition",
    "title": "整式加减：每一次去括号都能说明理由",
    "version": "0.1.0",
    "why": "式子之间也能相加、相减。困难往往不在最后的加法，而在于括号前的负号究竟作用到了哪些项。",
    "steps": [
      {
        "type": "联系",
        "title": "先把整式看成一个整体",
        "text": "计算两个整式的和或差，先把每个整式用括号保护。例如A=2x−1，B=x+4，那么A−B=(2x−1)−(x+4)。写清原关系后再去括号，比直接心算更容易检查符号。"
      },
      {
        "type": "推导",
        "title": "括号前是加号时为什么各项不变",
        "text": "a+(b+c)=a+b+c来自加法结合律。括号前是正号，可以直接去掉括号，括号内每一项的正负号保留。例如4x+(2x−5)=4x+2x−5。"
      },
      {
        "type": "推导",
        "title": "括号前是负号时每项都要取相反数",
        "text": "减去一个和，等于加上它的相反数。因为(b+c)+(−b−c)=0，所以−(b+c)=−b−c；也可看成−1乘括号中的每一项。因此a−(b−c)=a−b+c，不能只改变第一项。"
      },
      {
        "type": "推导",
        "title": "有数乘括号时用分配律",
        "text": "3(2x−4)=6x−12，每一项都乘3。−2(x−5)=−2x+10，每一项都乘−2。括号前的系数不论正负，都要分配给所有项。"
      },
      {
        "type": "例子",
        "title": "去括号后，再寻找同类项",
        "text": "化简2(3t−1)−(t+4)：先变为6t−2−t−4，再合并为5t−6。顺序写清楚后，可以检查每个原来的项去了哪里；不要把不同字母或不同指数的项硬合并。"
      },
      {
        "type": "边界与检查",
        "title": "化简是保持对所有允许值相同",
        "text": "去括号和合并同类项不是随便改写。若怀疑a−(b−c)=a−b−c，取a=0、b=0、c=1，左右分别为1和−1，就找到反例。代入一个数能推翻错误规则，但不能证明两个式子对所有数都相同。"
      },
      {
        "type": "方法",
        "title": "求值前先化简，减少重复运算",
        "text": "当一个表达式中同类项较多时，可以先化简再代入。例如3u−2(u−1)化简为u+2；代入负数时仍要加括号。求和与求差还要注意减的次序，A−B一般不等于B−A。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "在纸上分别展开−(a−2b+3)和−2(a−2b+3)。给每个原项连一条线指向它展开后的项，检查有没有漏乘或漏变号。再选a=1、b=−1检查两种式子的值。"
    },
    "reflection": "为什么减去一个多项式时，每一项都要变号？请用“整体的相反数”或分配律说明。",
    "method": "从定义推导",
    "questions": [
      {
        "id": "polynomial-addition-q1",
        "prompt": "−(x−4)去括号后是？",
        "options": [
          {
            "id": "b",
            "text": "−x+4"
          },
          {
            "id": "a",
            "text": "−x−4"
          },
          {
            "id": "c",
            "text": "x−4"
          }
        ],
        "answer": "b",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "把括号前的负号看成乘−1。",
        "explanation": "(−1)×x+(−1)×(−4)=−x+4，每一项都受作用。"
      },
      {
        "id": "polynomial-addition-q2",
        "prompt": "3a+2a²能否直接合并成5a³？",
        "options": [
          {
            "id": "b",
            "text": "不能，因为不是同类项"
          },
          {
            "id": "c",
            "text": "只有a>0时能"
          },
          {
            "id": "a",
            "text": "能，系数和指数都相加"
          }
        ],
        "answer": "b",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "合并同类项要求字母对应指数相同。",
        "explanation": "3a与2a²中字母a的指数分别为1和2，不是同类项，因此不能这样合并。"
      },
      {
        "id": "polynomial-addition-q3",
        "prompt": "化简4x−(x+6)，结果是？",
        "options": [
          {
            "id": "a",
            "text": "3x−6"
          },
          {
            "id": "c",
            "text": "5x−6"
          },
          {
            "id": "b",
            "text": "3x+6"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "去括号时，x和6都要取相反数。",
        "explanation": "4x−(x+6)=4x−x−6=3x−6。"
      },
      {
        "id": "polynomial-addition-q4",
        "prompt": "A=2y+3，B=5y−1。B−A应化简为？",
        "options": [
          {
            "id": "b",
            "text": "7y+2"
          },
          {
            "id": "a",
            "text": "3y+2"
          },
          {
            "id": "c",
            "text": "3y−4"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "先写(5y−1)−(2y+3)。",
        "explanation": "B−A=5y−1−2y−3=3y−4。题目问的是B减A，不能交换次序。"
      },
      {
        "id": "polynomial-addition-q5",
        "prompt": "化简−3(2m−5)，结果是？",
        "options": [
          {
            "id": "a",
            "text": "−6m−15"
          },
          {
            "id": "c",
            "text": "−6m+5"
          },
          {
            "id": "b",
            "text": "−6m+15"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "把−3分别乘括号中的两项。",
        "explanation": "−3×2m=−6m，−3×(−5)=15，所以结果为−6m+15。"
      },
      {
        "id": "polynomial-addition-q6",
        "prompt": "有人说a−(b+c)=a−b+c。取哪组值能显示这条规则错误？",
        "options": [
          {
            "id": "c",
            "text": "a=0、b=0、c=2"
          },
          {
            "id": "b",
            "text": "a=1、b=1、c=0"
          },
          {
            "id": "a",
            "text": "a=0、b=0、c=0"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "要让漏变号的那一项不为0。",
        "explanation": "取a=b=0、c=2，原式为−2，错误改写为2，二者不同。c=0会掩盖错误。"
      },
      {
        "id": "polynomial-addition-q7",
        "prompt": "先化简再求值：当z=−2时，5z−2(z+1)的值是？",
        "options": [
          {
            "id": "a",
            "text": "−8"
          },
          {
            "id": "b",
            "text": "−4"
          },
          {
            "id": "c",
            "text": "8"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "先得到3z−2，再代入。",
        "explanation": "5z−2(z+1)=5z−2z−2=3z−2。z=−2时为−6−2=−8。"
      },
      {
        "id": "polynomial-addition-q8",
        "prompt": "两个整式P、Q的差为P−Q。若交换成Q−P，二者有什么一般关系？",
        "options": [
          {
            "id": "b",
            "text": "互为相反数，可能同时为0"
          },
          {
            "id": "a",
            "text": "总相等"
          },
          {
            "id": "c",
            "text": "乘积一定为−1"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "把两种差相加试试看。",
        "explanation": "(P−Q)+(Q−P)=0，所以二者互为相反数。P=Q时两种差都为0，不能断言一定一正一负。"
      }
    ],
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "sourceScope": "原创通用教学；上册目录已与项目导入教材关联，本文件未逐页校对整册教材，不冒充教材逐页讲解。",
    "coverageTopics": [
      "整式的和差",
      "去括号依据",
      "负号作用整体",
      "分配律",
      "合并同类项",
      "化简求值",
      "代入检查与反例"
    ],
    "methods": {
      "explainPrompt": "为什么减去一个多项式时，每一项都要变号？请用“整体的相反数”或分配律说明。",
      "cuePrompts": [
        "括号前的负号怎样作用到每一项？",
        "哪个反例能暴露漏变号？"
      ],
      "reviewPrompts": [
        "为什么减去一个多项式时，每一项都要变号？请用“整体的相反数”或分配律说明。",
        "合上资料，给这个概念举一个自己的例子，并说明它需要哪些条件。"
      ]
    }
  },
  {
    "id": "equality",
    "title": "等式性质：让相等关系保持不变",
    "version": "0.1.0",
    "why": "解方程不是把符号搬来搬去。我们需要知道哪些操作会保留原来允许的答案，哪些操作可能丢掉或增加答案。",
    "steps": [
      {
        "type": "定义",
        "title": "等式表达两个量相等",
        "text": "含有等号的式子表达相等关系。若把某个数代入含未知数的等式后左右相等，这个数就是该方程的解。例如x+4=9中，5代入使等式成立，因此5是解。等号不是“开始算答案”的符号。"
      },
      {
        "type": "性质",
        "title": "两边同加同减一个数，仍然相等",
        "text": "若A=B，那么A+c=B+c，A−c=B−c。可以把两边看成两份一样多的数量，同时增加或拿走同样的量，仍一样多。这里的c也可以是同一个有意义的式子。"
      },
      {
        "type": "性质与条件",
        "title": "两边同乘一个数相等，同除非零数才有意义",
        "text": "若A=B，则Ac=Bc；若c≠0，还可得到A/c=B/c。除以0没有意义。把等式两边乘0虽然得到真等式0=0，却会丢失原来的信息，不能靠0=0反推原方程的解。"
      },
      {
        "type": "推导",
        "title": "移项是省略了两边同时加减",
        "text": "x+6=14，两边同时减6得到x=8。写成x=14−6时，看起来6移到了右边且变号，实际上依据是两边做同一个减法。符号变化不是一个单独的神奇规则。"
      },
      {
        "type": "推导",
        "title": "系数化为1也要检查非零",
        "text": "3x=12，两边同时除以3得到x=4。若a是已知非零数，ax=b可写成x=b/a；如果不知道a是否为0，就不能直接除以a，要先讨论它为0或不为0。"
      },
      {
        "type": "反例",
        "title": "不能随便除以含未知数的式子",
        "text": "方程2x=x的解是x=0，因为两边同时减x得到x=0。若直接两边除以x，会得到2=1，看起来像没有解，却把x=0这个允许的取值先排除了。每次除法都要先确认除数不为0；解一元一次方程时，通常只除以已经确认非零的数字。"
      },
      {
        "type": "方法",
        "title": "代回原式，核对两边各是多少",
        "text": "从x/4−2=3得到x=20后，代回原式：20/4−2=3，右边也为3，检验通过。检验要回到原方程，不能只检查某个已经可能写错的中间式。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "自己写一个两边相等的数字等式，分别尝试两边同加3、只给一边加3、两边乘0。说明哪些仍然相等，以及哪些变化后还能还原原来的信息。"
    },
    "reflection": "为什么“两边都乘0后仍相等”不能用来解出原方程？除以一个含字母的式子前必须检查什么？",
    "method": "代入检验",
    "questions": [
      {
        "id": "equality-q1",
        "prompt": "已知A=B，哪一步一定仍保持相等？",
        "options": [
          {
            "id": "a",
            "text": "A加5，B减5"
          },
          {
            "id": "c",
            "text": "A、B都减7"
          },
          {
            "id": "b",
            "text": "只给A乘2"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "同一种运算要作用在相等的两边。",
        "explanation": "A−7=B−7由等式性质成立。另两种操作一般不能保持相等。"
      },
      {
        "id": "equality-q2",
        "prompt": "由4x=20得到x=5，使用了什么操作？",
        "options": [
          {
            "id": "c",
            "text": "两边同时减4"
          },
          {
            "id": "a",
            "text": "两边同时除以4"
          },
          {
            "id": "b",
            "text": "只给左边除以4"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "说明左右两边实际发生的变化。",
        "explanation": "两边同时除以非零数4，得到4x/4=20/4，即x=5。"
      },
      {
        "id": "equality-q3",
        "prompt": "由x−9=2正确求出x，应进行哪一步？",
        "options": [
          {
            "id": "b",
            "text": "两边都加9，得x=11"
          },
          {
            "id": "a",
            "text": "两边都减9，得x=−7"
          },
          {
            "id": "c",
            "text": "两边都乘9，得x=18"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "用哪一个相反的变化消去左边的−9？",
        "explanation": "两边同时加9，左边x−9+9=x，右边2+9=11，所以x=11。"
      },
      {
        "id": "equality-q4",
        "prompt": "已知a不为0，ax=6的解可写成什么？",
        "options": [
          {
            "id": "c",
            "text": "x=6/a"
          },
          {
            "id": "b",
            "text": "x=a/6"
          },
          {
            "id": "a",
            "text": "x=6a"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "a不为0允许两边同时除以a。",
        "explanation": "两边除以a得到ax/a=6/a，因此x=6/a。a≠0是不可省略的条件。"
      },
      {
        "id": "equality-q5",
        "prompt": "检验x=−2是否是3x+1=−5的解，哪一步正确？",
        "options": [
          {
            "id": "b",
            "text": "只检查−2<0"
          },
          {
            "id": "a",
            "text": "左边3×(−2)+1=−5，与右边相等"
          },
          {
            "id": "c",
            "text": "把原式改成3x=−5再代入"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "代回原方程，分别算左右两边。",
        "explanation": "左边3×(−2)+1=−6+1=−5，右边也是−5，所以x=−2是原方程的解。"
      },
      {
        "id": "equality-q6",
        "prompt": "把x=3两边乘0，得到0=0。能从0=0单独推出x=3吗？",
        "options": [
          {
            "id": "a",
            "text": "能，乘法从不改变任何信息"
          },
          {
            "id": "b",
            "text": "不能，任何x都满足0=0"
          },
          {
            "id": "c",
            "text": "能，只要x是整数"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "x=4会不会也使0=0成立？",
        "explanation": "0=0对任何x都成立，已经没有保留x必须为3的信息，所以不能反推。"
      },
      {
        "id": "equality-q7",
        "prompt": "由x/5=−3得到x=−15，依据是？",
        "options": [
          {
            "id": "a",
            "text": "两边都加5"
          },
          {
            "id": "c",
            "text": "两边都乘5"
          },
          {
            "id": "b",
            "text": "两边都除以5"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "让左边的除以5被逆运算抵消。",
        "explanation": "两边同乘5，得到x=−3×5=−15。"
      },
      {
        "id": "equality-q8",
        "prompt": "有人把方程2x=x两边直接除以x，得到2=1，便说原方程没有解。问题在哪里？",
        "options": [
          {
            "id": "a",
            "text": "漏掉x=0，它代入原方程成立"
          },
          {
            "id": "c",
            "text": "2=1其实成立，没有问题"
          },
          {
            "id": "b",
            "text": "漏掉x=1，它代入原方程成立"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "除以x前，是否已经排除了一个可能的数？",
        "explanation": "原方程两边同减x可得x=0。x=0代回2x=x得到0=0，成立。直接除以x要求x不为0，因此提前丢掉了原方程的解。"
      }
    ],
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "sourceScope": "原创通用教学；上册目录已与项目导入教材关联，本文件未逐页校对整册教材，不冒充教材逐页讲解。",
    "coverageTopics": [
      "等式与方程解",
      "等式加减性质",
      "乘除性质与非零条件",
      "移项依据",
      "系数化为1",
      "等价变形与丢解",
      "代回原方程"
    ],
    "methods": {
      "explainPrompt": "为什么“两边都乘0后仍相等”不能用来解出原方程？除以一个含字母的式子前必须检查什么？",
      "cuePrompts": [
        "两边同乘0为什么可能丢信息？",
        "检验要回到哪个式子？"
      ],
      "reviewPrompts": [
        "为什么“两边都乘0后仍相等”不能用来解出原方程？除以一个含字母的式子前必须检查什么？",
        "合上资料，给这个概念举一个自己的例子，并说明它需要哪些条件。"
      ]
    }
  },
  {
    "id": "linear-models",
    "title": "一元一次方程建模：先找相等的两份量",
    "version": "0.1.0",
    "why": "实际问题里的未知数不会自己排成方程。先说清要找什么、哪些量相等，再用方程把关系写下来，最后还要检查实际意义。",
    "steps": [
      {
        "type": "方法",
        "title": "列一张量与单位的小表",
        "text": "先把已知、未知和问题目标写成完整句。设未知量时带上单位。例如设每本书的单价为x元，而不是只写“设x”。同一式子的加减项应表示同一种量，不能把小时与米直接相加。"
      },
      {
        "type": "定义与建模",
        "title": "等号两边来自同一个量的两种说法",
        "text": "买3支同价的笔，另买一个5元的本子，共付29元。设笔单价x元，则3x+5与29都表示总费用，所以3x+5=29。等号不是因为两个数字正好放在句子两边，而是它们确实描述同一总量。"
      },
      {
        "type": "推导",
        "title": "百分率要找清以谁为基准",
        "text": "原价p元，打八折后的价格为0.8p元；涨价20%后的价格为1.2p元。降20%与涨20%的基准可能不同，不能直接互相抵消。利润率若以成本为基准，应写利润/成本，而不是利润/售价。"
      },
      {
        "type": "建模与条件",
        "title": "行程问题先统一时间与速度的单位",
        "text": "路程=速度×时间。两人同地同时出发反向而行，2小时后相距18千米；一人速度4千米/时，另一人速度v千米/时，则8+2v=18。只有满足同地、同时、反向等条件，才能这样相加路程。"
      },
      {
        "type": "联系",
        "title": "用表格避免漏掉固定量或重复量",
        "text": "若包车一次固定收费60元，再按每千米4元计费，行驶d千米的总费用为60+4d。固定收费只加一次；如果往返都收费，必须先确认d代表单程还是总里程。"
      },
      {
        "type": "例子",
        "title": "列式、求解、检验和回答缺一不可",
        "text": "若一本书原价x元，九折后售36元，则0.9x=36，x=40。检验40×0.9=36，并检查40元符合正价格的范围。最后回答“原价40元”，不要只交一个没有单位的x=40。"
      },
      {
        "type": "边界",
        "title": "方程有解，不代表实际安排可行",
        "text": "如果方程算出参加人数是7.5人，要检查设量、关系或数据是否符合实际，不能直接把人数四舍五入。数量必须是整数、时间不能为负、长度要为正等限制，应在列式前写明并在最后再查。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "自己编一个含固定收费与按数量收费的情境。用一句话说等号两边分别表示什么，写出未知数的单位和范围，再交换给同伴或家长检查是否存在遗漏条件。"
    },
    "reflection": "为什么求出方程的解后，还必须回到原来的情境检查？请给出一个数字上能算、实际上不合适的例子。",
    "method": "提问与轻笔记",
    "questions": [
      {
        "id": "linear-models-q1",
        "prompt": "一支笔x元，买5支再买一个8元笔袋，共38元。方程应是？",
        "options": [
          {
            "id": "c",
            "text": "x+5+8=38"
          },
          {
            "id": "a",
            "text": "5x+8=38"
          },
          {
            "id": "b",
            "text": "5(x+8)=38"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "等号两边都表示这次购物的总费用。",
        "explanation": "5支笔共5x元，加一个8元笔袋，共5x+8元，因此方程是5x+8=38。"
      },
      {
        "id": "linear-models-q2",
        "prompt": "一件商品原价为p元，降价30%后，新价是多少元？",
        "options": [
          {
            "id": "c",
            "text": "0.7p"
          },
          {
            "id": "a",
            "text": "1.3p"
          },
          {
            "id": "b",
            "text": "0.3p"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "降去的是原价的30%，还剩多少？",
        "explanation": "降价后剩原价的1−30%=70%，所以新价为0.7p。"
      },
      {
        "id": "linear-models-q3",
        "prompt": "出租车起步费用10元，另收超出起步范围每千米2元。总付26元，超出的路程x千米是多少？",
        "options": [
          {
            "id": "b",
            "text": "8"
          },
          {
            "id": "c",
            "text": "18"
          },
          {
            "id": "a",
            "text": "13"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "先去掉固定费用，再按每千米费用算路程。",
        "explanation": "10+2x=26，得到2x=16，x=8；超出起步范围的路程是8千米。"
      },
      {
        "id": "linear-models-q4",
        "prompt": "某商品先涨价10%，再按涨后价降价10%。与原价相比怎样？",
        "options": [
          {
            "id": "c",
            "text": "变为原价的110%"
          },
          {
            "id": "a",
            "text": "回到原价"
          },
          {
            "id": "b",
            "text": "变为原价的99%"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "两次百分率的基准不同，可设原价为p。",
        "explanation": "先变为1.1p，再乘0.9，得到0.99p，所以是原价的99%，不是回到原价。"
      },
      {
        "id": "linear-models-q5",
        "prompt": "一辆车匀速行驶，速度为60千米/时。行驶150千米需要多少小时？",
        "options": [
          {
            "id": "a",
            "text": "2.5小时"
          },
          {
            "id": "c",
            "text": "9000小时"
          },
          {
            "id": "b",
            "text": "90小时"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "由路程=速度×时间列式。",
        "explanation": "设时间t小时，60t=150，所以t=150/60=2.5小时。"
      },
      {
        "id": "linear-models-q6",
        "prompt": "某题算得“每组人数x=4.5”。题目规定每组人数相同且必须为整数。应怎么办？",
        "options": [
          {
            "id": "a",
            "text": "直接四舍五入成5人"
          },
          {
            "id": "b",
            "text": "说明该结果不符合条件，检查建模和数据"
          },
          {
            "id": "c",
            "text": "写4.5人也可执行"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "实际范围不是可忽略的装饰。",
        "explanation": "人数应为整数，4.5不符合条件。应检查设量与等量关系，或说明这些数据下不存在满足要求的整数组数，不能自行四舍五入。"
      },
      {
        "id": "linear-models-q7",
        "prompt": "甲、乙从同地同时反向匀速步行，甲3千米/时，乙5千米/时。多久后相距20千米？",
        "options": [
          {
            "id": "c",
            "text": "2.5小时"
          },
          {
            "id": "b",
            "text": "6小时"
          },
          {
            "id": "a",
            "text": "4小时"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "反向路程相加，每小时拉开多少距离？",
        "explanation": "设t小时后相距20千米，3t+5t=20，8t=20，所以t=2.5小时。"
      },
      {
        "id": "linear-models-q8",
        "prompt": "利润是售价减成本。成本80元，要求按成本计算利润率25%，应售价多少元？",
        "options": [
          {
            "id": "a",
            "text": "100元"
          },
          {
            "id": "b",
            "text": "60元"
          },
          {
            "id": "c",
            "text": "106.67元"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "利润率以成本为基准。",
        "explanation": "利润=80×25%=20元，售价=80+20=100元。用售价作分母会改变题目的含义。"
      }
    ],
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "sourceScope": "原创通用教学；上册目录已与项目导入教材关联，本文件未逐页校对整册教材，不冒充教材逐页讲解。",
    "coverageTopics": [
      "设未知量与单位",
      "等量关系",
      "固定量与变量",
      "百分率基准",
      "行程与单位",
      "价格利润",
      "实际范围检验"
    ],
    "methods": {
      "explainPrompt": "为什么求出方程的解后，还必须回到原来的情境检查？请给出一个数字上能算、实际上不合适的例子。",
      "cuePrompts": [
        "等号两边分别表示什么量？",
        "结果符合人数、时间或价格的限制吗？"
      ],
      "reviewPrompts": [
        "为什么求出方程的解后，还必须回到原来的情境检查？请给出一个数字上能算、实际上不合适的例子。",
        "合上资料，给这个概念举一个自己的例子，并说明它需要哪些条件。"
      ]
    }
  },
  {
    "id": "lines-segments",
    "title": "从物体到图形：点、线、面与线段",
    "version": "0.1.0",
    "why": "观察教室里的物体，可以把颜色、材料暂时放下，只研究形状、位置与大小。抽象出来的图形帮助我们表达距离、方向和空间结构。",
    "steps": [
      {
        "type": "认识与约定",
        "title": "从物体抽象出点、线、面、体",
        "text": "一个长方体纸盒占据空间，可用几何体研究它。面围成体，面的交界可看作线，线的交会可看作点。数学里的点只表示位置，没有大小；纸上画出的圆点是它的标记，不是一个真正没有大小的实物。"
      },
      {
        "type": "观察",
        "title": "同一几何体从不同方向看，轮廓可能不同",
        "text": "正视图从正面看，左视图从左面看，俯视图从上面看；这里按视线互相平行的方式把看到的轮廓画在平面上。圆柱从上面看可能是圆，从侧面看可能是长方形。一个视图通常不能唯一确定立体，不能只凭圆就断定物体是球。"
      },
      {
        "type": "操作与边界",
        "title": "展开图保留面的连接关系",
        "text": "沿纸盒的部分棱剪开并摊平，可以得到展开图。正方体有6个正方形面，但任意6个正方形连在一起不一定能折成正方体，可能重叠或缺面。用废纸实际剪折时，应标记相邻面和可能相对的面，不凭平面外观猜。"
      },
      {
        "type": "定义",
        "title": "直线、射线、线段按端点和延伸区分",
        "text": "直线向两端无限延伸，没有端点；射线只有一个端点，向一个方向无限延伸；线段有两个端点，长度有限。纸上的图画只能表示其中一部分。直线AB与直线BA相同，射线AB的端点是A，不能随意与射线BA交换。"
      },
      {
        "type": "基本事实",
        "title": "两点确定一条直线，两点之间线段最短",
        "text": "两个不同的点确定一条直线，这是本阶段采用的基本事实，不是靠画几条线就证明的结论。连接同样两个点时，线段比任何非直线路径更短；两点间线段的长度叫两点间的距离，方向交换不改变长度。"
      },
      {
        "type": "定义与推导",
        "title": "中点让线段分成两条相等的线段",
        "text": "M在线段AB上，且AM=MB，则M是AB的中点。因为AB=AM+MB，所以AM=MB=AB/2。只说AM=MB还不够；若M不在线段上，也可能到A、B等距。"
      },
      {
        "type": "例子与条件",
        "title": "线段相加要先确认位置顺序",
        "text": "A、B、C在同一直线上，B在A、C之间时，AC=AB+BC。例如AB=4厘米、BC=6厘米，则AC=10厘米。若只知道三点共线，不知道谁在中间，就不能直接相加，也可能需要相减。"
      },
      {
        "type": "方法",
        "title": "画图时标清点的顺序和单位",
        "text": "根据题目画示意图，并注明这只是示意，不靠图上看起来相等判断。长度计算统一单位，用加减关系检查；空间图形则用不同视角和实际折叠互相核对。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "在纸上分别画直线AB、射线AB和线段AB，并标出端点。再取一个纸盒，从正面、左面、上面画轮廓，标明观察方向；可沿部分棱剪开旧纸盒，检查展开后哪些面仍相邻。这里需要纸笔或实物，没有软件拖动控件。"
    },
    "reflection": "射线AB为什么不能随便写成射线BA？一个圆形视图为什么不能唯一确定一个立体？",
    "method": "画图或操作",
    "questions": [
      {
        "id": "lines-segments-q1",
        "prompt": "哪一种图形只有一个端点？",
        "options": [
          {
            "id": "a",
            "text": "直线"
          },
          {
            "id": "b",
            "text": "射线"
          },
          {
            "id": "c",
            "text": "线段"
          }
        ],
        "answer": "b",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "比较两端是否继续延伸。",
        "explanation": "射线从一个端点出发，只向一个方向无限延伸，所以只有一个端点。"
      },
      {
        "id": "lines-segments-q2",
        "prompt": "已知M是线段AB的中点，AB=14厘米，则AM等于？",
        "options": [
          {
            "id": "a",
            "text": "14厘米"
          },
          {
            "id": "c",
            "text": "7厘米"
          },
          {
            "id": "b",
            "text": "28厘米"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "中点把整段分为两条等长线段。",
        "explanation": "AM=MB，且AM+MB=14，所以AM=14/2=7厘米。"
      },
      {
        "id": "lines-segments-q3",
        "prompt": "A、B、C共线，B在A与C之间，AB=3厘米、BC=8厘米。AC是多少？",
        "options": [
          {
            "id": "b",
            "text": "5厘米"
          },
          {
            "id": "c",
            "text": "24厘米"
          },
          {
            "id": "a",
            "text": "11厘米"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "先用位置顺序写线段相加关系。",
        "explanation": "B在A、C之间，所以AC=AB+BC=3+8=11厘米。"
      },
      {
        "id": "lines-segments-q4",
        "prompt": "只看到一个物体的俯视图是圆，能确定它一定是球吗？",
        "options": [
          {
            "id": "a",
            "text": "能，只有球从上面看是圆"
          },
          {
            "id": "c",
            "text": "不能，因为球的俯视图不是圆"
          },
          {
            "id": "b",
            "text": "不能，圆柱等物体也可能得到圆形俯视图"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "想一个与球不同但从上方看也为圆的物体。",
        "explanation": "球的俯视图可以是圆，竖直放置的圆柱的俯视图也可以是圆，所以一个视图通常不能唯一确定物体。"
      },
      {
        "id": "lines-segments-q5",
        "prompt": "射线PQ的端点是哪个点？",
        "options": [
          {
            "id": "c",
            "text": "P"
          },
          {
            "id": "b",
            "text": "P和Q"
          },
          {
            "id": "a",
            "text": "Q"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "射线记号中的第一个字母表示端点。",
        "explanation": "射线PQ从P出发并经过Q继续延伸，因此端点是P。"
      },
      {
        "id": "lines-segments-q6",
        "prompt": "只知道AM=BM，能确定M是线段AB的中点吗？",
        "options": [
          {
            "id": "b",
            "text": "能，等距就一定是中点"
          },
          {
            "id": "c",
            "text": "不能，因为中点要求AM=2BM"
          },
          {
            "id": "a",
            "text": "不能，还需要M在线段AB上"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "画一个位于线段外、到A和B等距的点检查。",
        "explanation": "M可能在线段上方且到A、B等距，因此还需确认M在线段AB上，才能按中点定义判断。"
      },
      {
        "id": "lines-segments-q7",
        "prompt": "线段AB长12厘米，C在AB上且AC=5厘米。CB是多少？",
        "options": [
          {
            "id": "c",
            "text": "60厘米"
          },
          {
            "id": "a",
            "text": "17厘米"
          },
          {
            "id": "b",
            "text": "7厘米"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "同一线段上的两小段拼成全长。",
        "explanation": "AC+CB=AB，所以CB=12−5=7厘米。"
      },
      {
        "id": "lines-segments-q8",
        "prompt": "6个相同正方形边连边组成一个平面图，就一定是正方体展开图吗？",
        "options": [
          {
            "id": "c",
            "text": "不一定，还要检查折叠后是否重叠以及能否围成6个面"
          },
          {
            "id": "a",
            "text": "一定，正方体恰好6个面"
          },
          {
            "id": "b",
            "text": "一定，只要没有空隙"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "数量相同是否保证连接方式正确？",
        "explanation": "正方体有6个面只是必要条件。6个正方形的连接方式可能使折叠后的面重叠，不能围成立体，所以必须检查连接与折叠关系。"
      }
    ],
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "sourceScope": "原创通用教学；上册目录已与项目导入教材关联，本文件未逐页校对整册教材，不冒充教材逐页讲解。",
    "coverageTopics": [
      "点线面体",
      "三视图的观察方向",
      "展开图与折叠",
      "直线射线线段",
      "两点确定直线",
      "两点间距离",
      "中点定义",
      "线段和差与顺序"
    ],
    "methods": {
      "explainPrompt": "射线AB为什么不能随便写成射线BA？一个圆形视图为什么不能唯一确定一个立体？",
      "cuePrompts": [
        "一个视图为什么不能确定唯一立体？",
        "中点除了等距还要满足什么条件？"
      ],
      "reviewPrompts": [
        "射线AB为什么不能随便写成射线BA？一个圆形视图为什么不能唯一确定一个立体？",
        "合上资料，给这个概念举一个自己的例子，并说明它需要哪些条件。"
      ]
    }
  },
  {
    "id": "angles",
    "title": "角：量张开的程度，不量边画得多长",
    "version": "0.1.0",
    "why": "门打开多少、两条道路怎样相交，都涉及方向之间的差别。角把这种张开程度变成可以表示、比较和计算的量。",
    "steps": [
      {
        "type": "定义",
        "title": "有公共端点的两条射线组成角",
        "text": "公共端点叫顶点，两条射线叫角的边。∠ABC的顶点是中间字母B，边为射线BA与BC。一个顶点有多个角时，只写∠B可能不清楚，要用三个字母或角的编号区分。"
      },
      {
        "type": "度量与约定",
        "title": "角的大小不由边画得多长决定",
        "text": "角的大小由两条射线的张开程度决定。把射线画长不会改变方向。规定周角360°、平角180°、直角90°；度量时让量角器中心对准顶点，零刻度线对准一条边，再按正确刻度读另一边。"
      },
      {
        "type": "单位",
        "title": "度、分、秒按六十进制换算",
        "text": "1°=60′，1′=60″，所以1°=3600″。例如12.5°=12°30′，不是12°5′。这里的分、秒是角度单位，记号与时间类似，但表示的量不同。"
      },
      {
        "type": "推导",
        "title": "角的加减先统一单位并注意借位",
        "text": "若OC在∠AOB内部，则∠AOB=∠AOC+∠COB。例如40°20′−15°45′，因为20′不够减，借1°化为60′，得到39°80′−15°45′=24°35′。"
      },
      {
        "type": "定义",
        "title": "角平分线要在角的内部并平分这个角",
        "text": "从角的顶点出发、位于角内部的一条射线，把角分成两个相等的角，叫角平分线。若OC平分∠AOB，则∠AOC=∠COB=∠AOB/2。只看图上像在中间不能作为依据。"
      },
      {
        "type": "定义与推导",
        "title": "互余与互补描述两个角的和",
        "text": "两个角的和是90°，它们互为余角；和是180°，互为补角。不要求两个角相邻。同角或等角的余角相等，因为都可用90°减同一个角；补角同理用180°减。"
      },
      {
        "type": "例子与边界",
        "title": "把图形条件翻译成等式再算",
        "text": "若∠AOB=76°，OC是它的角平分线，则∠AOC=38°。这个38°角的余角为52°，补角为142°。本单元讨论的非负角度下，一个120°的角没有非负的余角，不能硬写成−30°。"
      },
      {
        "type": "应用与约定",
        "title": "方位角先说明从哪个方向转起",
        "text": "可以从正北或正南方向开始，向东或西转一个锐角来描述方向。例如“北偏东30°”是从正北向东转30°，它与“东偏北60°”是同一方向，因为正北与正东之间相隔90°。先画方向标记、再画射线，不能只写30°而不说明起始方向；地图上方通常为北，但仍应检查图上的方向标。"
      },
      {
        "type": "方法",
        "title": "检查角来自哪两条射线",
        "text": "在复杂图里先指认顶点和两条边，再标清已知与未知，写出角的和差。量角器是观察和核对工具，精确关系仍来自题目条件、定义或推理，不从示意图外观直接断言。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "画一个约60°的角，把两边各延长一段，预测角度是否变化，再用量角器检查。画出它的平分线，并把12.25°化成度分表示；在纸上标清每一次换算的依据。"
    },
    "reflection": "为什么边画长，角却不变？余角与补角一定要挨在一起吗？",
    "method": "画图或操作",
    "questions": [
      {
        "id": "angles-q1",
        "prompt": "∠ABC的顶点是哪一点？",
        "options": [
          {
            "id": "a",
            "text": "A"
          },
          {
            "id": "c",
            "text": "C"
          },
          {
            "id": "b",
            "text": "B"
          }
        ],
        "answer": "b",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "三个字母表示角时，中间字母是顶点。",
        "explanation": "∠ABC由射线BA与BC组成，公共端点是B。"
      },
      {
        "id": "angles-q2",
        "prompt": "把一个角的两条边在原方向上画得更长，角的大小怎样变化？",
        "options": [
          {
            "id": "b",
            "text": "变小"
          },
          {
            "id": "c",
            "text": "不变"
          },
          {
            "id": "a",
            "text": "变大"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "比较的是方向的张开程度，而非线条长度。",
        "explanation": "两条射线方向没有改变，张开程度不变，所以角的大小不变。"
      },
      {
        "id": "angles-q3",
        "prompt": "23.5°用度、分表示是？",
        "options": [
          {
            "id": "a",
            "text": "23°30′"
          },
          {
            "id": "c",
            "text": "23°50′"
          },
          {
            "id": "b",
            "text": "23°5′"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "0.5度等于多少分？",
        "explanation": "1°=60′，所以0.5°=30′，得到23°30′。"
      },
      {
        "id": "angles-q4",
        "prompt": "一个角为115°，它的补角是多少？",
        "options": [
          {
            "id": "a",
            "text": "−25°"
          },
          {
            "id": "b",
            "text": "65°"
          },
          {
            "id": "c",
            "text": "295°"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "补角的和是180°。",
        "explanation": "180°−115°=65°。115°没有非负余角，但有65°的补角。"
      },
      {
        "id": "angles-q5",
        "prompt": "OD平分∠AOB，且∠AOB=84°。∠AOD是多少？",
        "options": [
          {
            "id": "a",
            "text": "84°"
          },
          {
            "id": "c",
            "text": "42°"
          },
          {
            "id": "b",
            "text": "168°"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "平分线把一个角分成两份相等的角。",
        "explanation": "∠AOD=84°/2=42°，另一半∠DOB也为42°。"
      },
      {
        "id": "angles-q6",
        "prompt": "两个角分别位于两张纸上，它们的和为90°。能称它们互余吗？",
        "options": [
          {
            "id": "c",
            "text": "不能，必须边挨边"
          },
          {
            "id": "b",
            "text": "不能，必须有公共顶点"
          },
          {
            "id": "a",
            "text": "能，互余只要求角度和为90°"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "定义有没有要求位置相邻？",
        "explanation": "互余描述的是两个角的数量关系，不要求相邻、同顶点或画在同一张纸上。"
      },
      {
        "id": "angles-q7",
        "prompt": "计算32°10′−18°35′，结果是？",
        "options": [
          {
            "id": "a",
            "text": "14°25′"
          },
          {
            "id": "c",
            "text": "13°75′"
          },
          {
            "id": "b",
            "text": "13°35′"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "向度位借1°，化成60′。",
        "explanation": "32°10′=31°70′，减去18°35′得到13°35′。"
      },
      {
        "id": "angles-q8",
        "prompt": "∠1与∠2互余，∠1与∠3也互余。为什么∠2=∠3？",
        "options": [
          {
            "id": "a",
            "text": "因为所有锐角都相等"
          },
          {
            "id": "c",
            "text": "因为二者都等于90°−∠1"
          },
          {
            "id": "b",
            "text": "因为它们一定是对顶角"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "把两个互余条件分别写成减法式。",
        "explanation": "∠2=90°−∠1，∠3=90°−∠1，所以∠2=∠3。这是同角的余角相等，不需要它们在同一张图中。"
      },
      {
        "id": "angles-q9",
        "prompt": "从同一位置看，南偏西40°与下面哪个方向相同？",
        "options": [
          {
            "id": "a",
            "text": "西偏南40°"
          },
          {
            "id": "c",
            "text": "北偏西50°"
          },
          {
            "id": "b",
            "text": "西偏南50°"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "先画正南与正西两条互相垂直的射线。目标方向在二者之间。",
        "explanation": "正南与正西相隔90°。从正南向西转40°后，这条方向射线与正西之间还相隔90°−40°=50°，因此等价于西偏南50°。"
      }
    ],
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "sourceScope": "原创通用教学；上册目录已与项目导入教材关联，本文件未逐页校对整册教材，不冒充教材逐页讲解。",
    "coverageTopics": [
      "角的表示",
      "角度度量",
      "度分秒换算",
      "角的和差",
      "角平分线",
      "余角与补角",
      "方位角"
    ],
    "methods": {
      "explainPrompt": "为什么边画长，角却不变？余角与补角一定要挨在一起吗？",
      "cuePrompts": [
        "角为什么不随边的长短改变？",
        "求补角与求余角的和分别是多少？"
      ],
      "reviewPrompts": [
        "为什么边画长，角却不变？余角与补角一定要挨在一起吗？",
        "合上资料，给这个概念举一个自己的例子，并说明它需要哪些条件。"
      ]
    }
  },
  {
    "id": "modeling-process",
    "title": "数学建模：把现实问题变成可以检查的关系",
    "version": "0.1.0",
    "why": "实际问题有细节，也可能缺信息。数学建模不是把所有词变成算式，而是选出影响目标的量，说明假设，用结果回头检查现实。",
    "steps": [
      {
        "type": "方法",
        "title": "先把问题变成可以回答的目标",
        "text": "“怎样安排班级阅读角”太宽。可以先问“用现有预算能买多少本同价图书”或“书架至少要多长”。目标不同，需要的量和限制不同；先确定目标，不急着列式。"
      },
      {
        "type": "信息与条件",
        "title": "区分数据、假设与待调查事项",
        "text": "已知预算300元是数据；假定每本书同价是简化假设；运费是否另收可能还要调查。假设应写在纸上，不能悄悄把不知道的量当成0，也不能用经验猜的值冒充实际测量。"
      },
      {
        "type": "表示",
        "title": "用表、图和字母保留数量关系",
        "text": "若每本书p元、固定运费r元、买n本，总费用为pn+r。表格能检查单位，示意图能帮助说明位置，字母式能让同一关系适用于多种数据。选择能帮助解释的表示，不要求每种方法都使用。"
      },
      {
        "type": "推导",
        "title": "模型中的等号和不等号各有意义",
        "text": "恰好花完预算B，写pn+r=B；不超过预算，写pn+r≤B。人数、本数通常要求整数，长度和费用要非负。不能为了只会解方程，就把“不超过”强行改成“等于”。"
      },
      {
        "type": "例子",
        "title": "求得的数量要回到限制中检查",
        "text": "预算200元，每本书18元，运费固定8元。18n+8≤200给出n≤10又2/3。n为非负整数，所以最多10本；买10本花188元，买11本花206元，超过预算。这里不用把人数或本数四舍五入。"
      },
      {
        "type": "评价与改进",
        "title": "结果对假设敏感时，比较几种情况",
        "text": "若运费可能是8元或20元，可以分别计算，看看最多本数是否改变。实际执行后比较费用与记录，发现不同应检查价格、数量、运费与假设，不只责怪计算。模型可以修改，但要说明改了什么。"
      },
      {
        "type": "方法与边界",
        "title": "说清哪些结论确定，哪些还不确定",
        "text": "一份完整说明可以很短：目标、数据来源、假设、关系、计算、限制检查和结论。对缺失信息可以给出条件性的答案，如“若免运费，则……”，不能把尚未核实的条件藏起来。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "选一个真实小问题，例如为小组购买练习本。列出已知、待调查、假设三栏；先写数量关系，再取一组自己说明为“假设”的价格计算。检查结果，指出还缺哪条真实数据才能执行。"
    },
    "reflection": "预算“不超过”与“恰好用完”为什么不能列同一个方程？你怎样知道自己的答案可以实际执行？",
    "method": "提问与轻笔记",
    "questions": [
      {
        "id": "modeling-process-q1",
        "prompt": "题目说总费用“不超过120元”，设费用为C元，关系应是？",
        "options": [
          {
            "id": "a",
            "text": "C=120"
          },
          {
            "id": "b",
            "text": "C≤120"
          },
          {
            "id": "c",
            "text": "C≥120"
          }
        ],
        "answer": "b",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "“不超过”允许少于，也允许等于。",
        "explanation": "总费用可以小于或等于120元，所以C≤120，而不一定恰好等于120。"
      },
      {
        "id": "modeling-process-q2",
        "prompt": "下面哪条是一个明确标记的假设，而不是已测数据？",
        "options": [
          {
            "id": "c",
            "text": "“用尺测得长度30厘米”"
          },
          {
            "id": "a",
            "text": "“我猜每张海报约2元，暂按2元计算，购买前核实”"
          },
          {
            "id": "b",
            "text": "“发票写明每张2元”"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "是否明确说明目前没有核实、只是计算前提？",
        "explanation": "第一条明确把2元标为临时假设，并要求执行前核实。发票和测量则属于实际来源的数据。"
      },
      {
        "id": "modeling-process-q3",
        "prompt": "预算95元，每个文件夹12元，无其他费用。最多能买多少个？",
        "options": [
          {
            "id": "a",
            "text": "8个"
          },
          {
            "id": "b",
            "text": "7个"
          },
          {
            "id": "c",
            "text": "7.92个"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "数量必须为整数，再检查多买一个是否超预算。",
        "explanation": "12×7=84≤95，12×8=96>95，所以最多7个，不能把7.92四舍五入成8。"
      },
      {
        "id": "modeling-process-q4",
        "prompt": "模型预测的费用与实际票据不同，第一步较合理的做法是？",
        "options": [
          {
            "id": "c",
            "text": "核对价格、数量、额外费用和原来假设"
          },
          {
            "id": "a",
            "text": "坚持模型正确，不看票据"
          },
          {
            "id": "b",
            "text": "只把最后答案改成票据金额"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "先找差异来自数据、关系还是计算。",
        "explanation": "应逐项核对实际数据和假设，例如漏记运费、价格改变或数量不符，再决定怎样改模型，不能只改结果掩盖原因。"
      },
      {
        "id": "modeling-process-q5",
        "prompt": "每份材料5元，固定配送费9元，买n份的总费用应是？",
        "options": [
          {
            "id": "b",
            "text": "(5+9)n"
          },
          {
            "id": "a",
            "text": "5n+9"
          },
          {
            "id": "c",
            "text": "5+9n"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "固定费用收几次？",
        "explanation": "材料共5n元，配送费只收一次9元，总费用5n+9元。"
      },
      {
        "id": "modeling-process-q6",
        "prompt": "按载重模型估算，乘客人数n须满足n≤12.6。按这个模型，最多允许多少名乘客？",
        "options": [
          {
            "id": "a",
            "text": "13人"
          },
          {
            "id": "b",
            "text": "12人"
          },
          {
            "id": "c",
            "text": "12.6人"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "上限与可执行的整数数量要同时满足。",
        "explanation": "乘客数必须为整数，且不能超过12.6，因此最多12人；四舍五入到13会超过限制。"
      },
      {
        "id": "modeling-process-q7",
        "prompt": "长方形桌面长a米、宽b米。要估计铺满桌面的纸张面积，应先求什么？",
        "options": [
          {
            "id": "c",
            "text": "a+b平方米"
          },
          {
            "id": "b",
            "text": "ab平方米"
          },
          {
            "id": "a",
            "text": "2a+2b米"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "区分围一圈的长度与覆盖表面的面积。",
        "explanation": "覆盖桌面要用面积模型，长×宽=ab平方米；2a+2b是周长，单位也不同。"
      },
      {
        "id": "modeling-process-q8",
        "prompt": "还不知道订货是否收运费，怎样给出负责的计算结论？",
        "options": [
          {
            "id": "c",
            "text": "分别说明免运费或收费时的结果，并标记需核实"
          },
          {
            "id": "a",
            "text": "直接认为免运费"
          },
          {
            "id": "b",
            "text": "把运费随便猜成实际数"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "未知条件不要隐藏在确定结论里。",
        "explanation": "可以先给条件性结果或列出运费变量，明确购买前核实。不能把未知条件默认为0并声称答案已确定。"
      }
    ],
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "sourceScope": "原创通用教学；上册目录已与项目导入教材关联，本文件未逐页校对整册教材，不冒充教材逐页讲解。",
    "coverageTopics": [
      "目标与数据",
      "事实假设与未知",
      "图表与字母表示",
      "等量和不等关系",
      "整数可行性",
      "检查改进与条件性结论"
    ],
    "methods": {
      "explainPrompt": "预算“不超过”与“恰好用完”为什么不能列同一个方程？你怎样知道自己的答案可以实际执行？",
      "cuePrompts": [
        "哪些数来自实际记录，哪些只是假设？",
        "算出的数能直接执行吗？"
      ],
      "reviewPrompts": [
        "预算“不超过”与“恰好用完”为什么不能列同一个方程？你怎样知道自己的答案可以实际执行？",
        "合上资料，给这个概念举一个自己的例子，并说明它需要哪些条件。"
      ]
    }
  },
  {
    "id": "design-project",
    "title": "场地设计：尺寸、比例、限制一起检查",
    "version": "0.1.0",
    "why": "设计一块活动场地，需要的不只是会算面积。图纸要按比例，实际尺寸要满足边界、通道与使用要求，还需要说明测量和假设的可靠程度。",
    "steps": [
      {
        "type": "目标与条件",
        "title": "先确定用途和不能越过的边界",
        "text": "先问场地供什么活动、容纳多少人、有哪些必须保留的通道。把实际可用区域、障碍物、门的位置和安全要求记录下来。课堂数学方案只是设计草稿，真正施工或活动布置还需成人现场核查。"
      },
      {
        "type": "测量与单位",
        "title": "记录实际长度，并检查测量误差",
        "text": "用合适工具测量，统一为米或厘米。记录测量方式与近似程度，例如“约12.4米”，不要把估测值写成精确无误的尺寸。涉及固定设施或安全距离时，不能仅凭本课程中的示例决定。"
      },
      {
        "type": "比例与作图",
        "title": "比例尺联系图上长度和实际长度",
        "text": "比例尺1:200表示图上1个单位对应实际200个同单位。实际16米等于1600厘米，图上应画8厘米。先统一单位，再按比例换算；面积比例不是长度比例，需要把两个方向都缩放。"
      },
      {
        "type": "分解与推导",
        "title": "把复杂区域拆成能说明的简单部分",
        "text": "可把区域拆成长方形、三角形等已知图形，分别求面积再相加；留出的通道或障碍区域需要扣除。分割要不重叠、不遗漏。若还没学某图形面积公式，可以先用方格估计并标记为近似。"
      },
      {
        "type": "建模",
        "title": "周长、面积与材料费用不是一个量",
        "text": "长方形围栏长度为2(长+宽)，铺地所需面积为长×宽。若留一个门，围栏长度应减去门宽。单位分别是米和平方米；每米费用不能直接乘平方米。"
      },
      {
        "type": "例子",
        "title": "用一份草图检查多条限制",
        "text": "一个12米×8米的长方形区域，沿一条12米长边内侧留1米宽直通道，其余矩形区域为12×7=84平方米。通道面积12平方米，与84相加为原面积96。这里只是数学示例，不能据此断言1米通道适合实际人流。"
      },
      {
        "type": "比较与评价",
        "title": "提出两案，再解释取舍",
        "text": "可以比较“可用活动面积较大”和“通行较方便”两种安排。不要只给一个面积数字；指出方案满足了哪些限制、哪些数据还待测量、哪些问题需要教师或场地管理人员确认。"
      },
      {
        "type": "复盘与迁移",
        "title": "把计划与实际对照，修正方法",
        "text": "用图纸核对现场、用估算检查精算、用单位检查公式。若设计无法摆放，检查比例、边界、固定物位置或通道条件。保留改动理由，下次设计书架、展板或小花园也能复用这些步骤。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "选择书桌上的一个小区域，用纸画1:10的平面草图。标清实际尺寸、图上尺寸和需要保留的位置。给出两种摆放方案，算可用面积并比较，不移动危险或沉重物品；用实际测量核对一条长度。"
    },
    "reflection": "图纸面积更大是否一定是更好的方案？请说明至少两条不能只靠面积判断的限制。",
    "method": "画图或操作",
    "questions": [
      {
        "id": "design-project-q1",
        "prompt": "用1:100比例尺画实际长6米的线段，图上应长多少厘米？",
        "options": [
          {
            "id": "b",
            "text": "60厘米"
          },
          {
            "id": "a",
            "text": "6厘米"
          },
          {
            "id": "c",
            "text": "0.06厘米"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "先把6米化成厘米，再除以100。",
        "explanation": "6米=600厘米，600/100=6厘米，所以图上长6厘米。"
      },
      {
        "id": "design-project-q2",
        "prompt": "需要给长方形场地铺垫子，应优先计算哪个量？",
        "options": [
          {
            "id": "c",
            "text": "长与宽之差，单位米"
          },
          {
            "id": "b",
            "text": "面积，单位平方米"
          },
          {
            "id": "a",
            "text": "周长，单位米"
          }
        ],
        "answer": "b",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "垫子覆盖的是表面而非边界。",
        "explanation": "铺垫子需要覆盖面积，应用长×宽，并以平方米计；周长用于围边等问题。"
      },
      {
        "id": "design-project-q3",
        "prompt": "一个9米×6米的区域，沿9米长边内侧留2米宽通道，其余矩形区域面积是多少？",
        "options": [
          {
            "id": "a",
            "text": "54平方米"
          },
          {
            "id": "b",
            "text": "45平方米"
          },
          {
            "id": "c",
            "text": "36平方米"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "通道从哪一个方向减少了可用宽度？",
        "explanation": "通道长9米、宽2米，剩余区域长9米、宽6−2=4米，面积9×4=36平方米。"
      },
      {
        "id": "design-project-q4",
        "prompt": "图上两条边都缩小到实际长度的1/5，矩形面积缩小到原来的多少？",
        "options": [
          {
            "id": "a",
            "text": "1/5"
          },
          {
            "id": "c",
            "text": "1/10"
          },
          {
            "id": "b",
            "text": "1/25"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "长和宽都各乘了1/5。",
        "explanation": "面积是长乘宽，所以面积比例为(1/5)×(1/5)=1/25，不能把长度比例直接当面积比例。"
      },
      {
        "id": "design-project-q5",
        "prompt": "长10米、宽4米的长方形围栏，留一个宽2米的门，实际需围栏多长？",
        "options": [
          {
            "id": "a",
            "text": "26米"
          },
          {
            "id": "b",
            "text": "28米"
          },
          {
            "id": "c",
            "text": "38米"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "先求完整周长，再扣去不用围的门宽。",
        "explanation": "完整周长2×(10+4)=28米，扣去2米门，需围栏26米。"
      },
      {
        "id": "design-project-q6",
        "prompt": "草图计算显示通道能通过，但实际门的位置与草图不同，应怎样处理？",
        "options": [
          {
            "id": "c",
            "text": "重新测量并修正位置，再核对通行条件"
          },
          {
            "id": "b",
            "text": "直接扩大所有图形到两倍"
          },
          {
            "id": "a",
            "text": "只要面积正确就不必修改"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "实际边界和位置是否属于模型条件？",
        "explanation": "门的位置影响通行，必须核实并修正草图，再检查布局。总面积相同并不能保证通道连通或摆放可行。"
      },
      {
        "id": "design-project-q7",
        "prompt": "某区域面积18平方米，每平方米材料费7元，不计其他费用，材料总费多少？",
        "options": [
          {
            "id": "c",
            "text": "18/7元"
          },
          {
            "id": "a",
            "text": "25元"
          },
          {
            "id": "b",
            "text": "126元"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "单位“元/平方米”乘哪一个量才得到元？",
        "explanation": "18平方米×7元/平方米=126元。"
      },
      {
        "id": "design-project-q8",
        "prompt": "比较两种活动场地安排，方案甲活动面积更大，能直接判定甲更好吗？",
        "options": [
          {
            "id": "c",
            "text": "不能，面积更大的必然不安全"
          },
          {
            "id": "b",
            "text": "不能，还要看通道、用途、边界等限制"
          },
          {
            "id": "a",
            "text": "能，面积是唯一标准"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "数学量是评价的一部分，实际限制还要满足。",
        "explanation": "面积较大有时是优点，但通道、用途、固定障碍和现场要求都影响可行性；不能只凭一个面积数字下结论。"
      }
    ],
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "sourceScope": "原创通用教学；上册目录已与项目导入教材关联，本文件未逐页校对整册教材，不冒充教材逐页讲解。",
    "coverageTopics": [
      "用途限制与测量",
      "比例尺",
      "面积比例",
      "分割与扣除",
      "周长面积单位",
      "材料费用",
      "方案比较与现场验证"
    ],
    "methods": {
      "explainPrompt": "图纸面积更大是否一定是更好的方案？请说明至少两条不能只靠面积判断的限制。",
      "cuePrompts": [
        "图上与实际长度有没有统一单位？",
        "除了面积，方案还要满足哪些条件？"
      ],
      "reviewPrompts": [
        "图纸面积更大是否一定是更好的方案？请说明至少两条不能只靠面积判断的限制。",
        "合上资料，给这个概念举一个自己的例子，并说明它需要哪些条件。"
      ]
    }
  },
  {
    "id": "parallel-perpendicular",
    "title": "相交、垂直与平行：从角的关系找依据",
    "version": "0.1.0",
    "why": "两条路是否平行，不能只凭画得像。我们需要先分清相交处的角，再判断哪些条件能说明平行，哪些结论要在已经平行后才能使用。",
    "steps": [
      {
        "type": "前置与画图",
        "title": "先把图和名称对应起来",
        "text": "在纸上画两条相交直线AB、CD，交点记为O。A、O、B依次在同一直线上，C、O、D依次在另一条直线上。看角时要指出它的两条射线，不能只说“图左边那个角”。"
      },
      {
        "type": "定义与推导",
        "title": "邻补角与对顶角不同",
        "text": "∠AOC和∠COB共用射线OC，另外两边OA、OB反向，组成平角，所以两角和为180°，它们是邻补角。∠AOC与∠BOD的两边分别反向，是对顶角。它们都与∠COB互补，因此相等。和为180°的两个角不一定相邻，不能都叫邻补角。"
      },
      {
        "type": "定义与基本事实",
        "title": "垂直与点到直线的距离",
        "text": "两条直线相交形成直角时，叫作互相垂直，交点叫垂足。在平面内，过一点有且只有一条直线垂直于已知直线。从直线外一点到直线上各点的连线中，垂线段最短；点到直线的距离，是这条垂线段的长度，不是任意斜线段的长度。"
      },
      {
        "type": "定义与命名",
        "title": "先确定两条线和截线",
        "text": "在同一平面内，不相交的两条直线叫平行线。画两条不同的直线a、b，再画一条截线c分别与它们相交。同位角在两个交点处占相同位置；内错角位于a、b之间且在c两侧；同旁内角位于a、b之间且在c同侧。名称只说明位置，还没有说明a与b平行。"
      },
      {
        "type": "判定与推导",
        "title": "先有角的条件，再得到平行",
        "text": "在两条直线被同一条截线所截的条件下，同位角相等可以判定两直线平行。结合对顶角相等，可以把内错角相等转成同位角相等；结合邻补角和为180°，也可以把同旁内角互补转成同位角相等。因此后两种条件也能判定平行。"
      },
      {
        "type": "性质与条件",
        "title": "已知平行，才能使用这些角关系",
        "text": "如果a∥b，那么同位角相等、内错角相等、同旁内角互补。判定从角关系出发得到平行；性质从平行出发得到角关系。平面内，过直线外一点有且只有一条直线平行于已知直线；同一平面内都与同一直线平行的两条不同直线互相平行。"
      },
      {
        "type": "例子与检查",
        "title": "每一步写清用了哪个条件",
        "text": "如果a∥b，一对同位角中一个为68°，另一个也为68°；与后者组成邻补角的角为112°。检查时先标出同位角的位置，再写“因为平行，所以同位角相等”。若题目只给某两个角相等，先查它们是否确为同位角或内错角，不能凭相等就下结论。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "本页没有可拖动的图。请用尺在纸上画两条直线和一条截线，给八个角编号。先找一对同位角，再找一对内错角和同旁内角。用量角器作一组同位角相等的线，再延长检查；测量帮助观察，不能代替判定依据。"
    },
    "reflection": "请用同一张图分别讲清：怎样从角关系判定平行，怎样从已经平行得到角关系。",
    "method": "画图或操作",
    "questions": [
      {
        "id": "parallel-perpendicular-q1",
        "prompt": "两条直线相交，一个角是47°。它的对顶角是多少？",
        "options": [
          {
            "id": "c",
            "text": "90°"
          },
          {
            "id": "a",
            "text": "47°"
          },
          {
            "id": "b",
            "text": "133°"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "对顶角的两边分别反向。",
        "explanation": "对顶角相等，所以也是47°。133°是与它相邻的邻补角。"
      },
      {
        "id": "parallel-perpendicular-q2",
        "prompt": "从直线外一点P向直线l作垂线，垂足为H。点P到l的距离指什么？",
        "options": [
          {
            "id": "c",
            "text": "线段PH的长度"
          },
          {
            "id": "b",
            "text": "P到l上任意一点的距离"
          },
          {
            "id": "a",
            "text": "直线PH"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "距离是一个长度，不是整条直线。",
        "explanation": "PH是从P到l的垂线段，它的长度叫点P到l的距离。"
      },
      {
        "id": "parallel-perpendicular-q3",
        "prompt": "a∥b，被直线c所截。一对同旁内角中一个为72°，另一个是多少？",
        "options": [
          {
            "id": "c",
            "text": "72°"
          },
          {
            "id": "b",
            "text": "108°"
          },
          {
            "id": "a",
            "text": "18°"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "先判断这类角在平行条件下是什么关系。",
        "explanation": "平行线的同旁内角互补，所以另一个为180°−72°=108°。"
      },
      {
        "id": "parallel-perpendicular-q4",
        "prompt": "两条直线被一条截线所截，一对内错角都是63°。能据此得到什么？",
        "options": [
          {
            "id": "c",
            "text": "还必须给另一对同位角才能判断"
          },
          {
            "id": "a",
            "text": "这两条直线平行"
          },
          {
            "id": "b",
            "text": "这两条直线垂直"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "这里给的是内错角相等。",
        "explanation": "内错角相等可以判定两条直线平行，不需要再重复给同位角条件。"
      },
      {
        "id": "parallel-perpendicular-q5",
        "prompt": "两条直线相交，一个角为36°，与它相邻的邻补角是多少？",
        "options": [
          {
            "id": "b",
            "text": "54°"
          },
          {
            "id": "a",
            "text": "36°"
          },
          {
            "id": "c",
            "text": "144°"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "邻补角相加形成平角。",
        "explanation": "180°−36°=144°；对顶角才与36°相等。"
      },
      {
        "id": "parallel-perpendicular-q6",
        "prompt": "同一平面内，两条不同直线都垂直于直线l。它们之间是什么关系？",
        "options": [
          {
            "id": "c",
            "text": "垂直"
          },
          {
            "id": "b",
            "text": "平行"
          },
          {
            "id": "a",
            "text": "一定相交但不垂直"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "把l作为截线，两个对应角都是直角。",
        "explanation": "两条直线被l所截，同位角都是90°，相等，所以两直线平行。"
      },
      {
        "id": "parallel-perpendicular-q7",
        "prompt": "把两根细棒放在同一平面内，看到的短段没有交点。这样能证明它们所在的直线平行吗？",
        "options": [
          {
            "id": "a",
            "text": "不能，还要考虑无限延长后的情况"
          },
          {
            "id": "b",
            "text": "能，只要短段不交就行"
          },
          {
            "id": "c",
            "text": "能，只要长度相等就行"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "直线向两边无限延长。",
        "explanation": "短线段没有交点，不代表它们所在的直线不相交。应使用平行的定义或可靠判定条件。"
      },
      {
        "id": "parallel-perpendicular-q8",
        "prompt": "平面内，点P不在直线l上。过P能作几条与l平行的直线？",
        "options": [
          {
            "id": "c",
            "text": "一条"
          },
          {
            "id": "a",
            "text": "两条"
          },
          {
            "id": "b",
            "text": "无数条"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "这是平面平行线的基本事实。",
        "explanation": "过直线外一点有且只有一条直线与已知直线平行。"
      }
    ],
    "sourceScope": "通用七下知识结构，待用户教材逐页映射",
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "coverageTopics": [
      "对顶角与邻补角",
      "垂直与点到直线距离",
      "同位角内错角同旁内角",
      "平行线判定与性质",
      "平行基本事实"
    ],
    "methods": {
      "explainPrompt": "请用同一张图分别讲清：怎样从角关系判定平行，怎样从已经平行得到角关系。",
      "cuePrompts": [
        "学习相交、垂直与平行时，最容易遗漏的条件是什么？",
        "请写一条关键关系，再举一个需要检查边界的例子。"
      ],
      "reviewPrompts": [
        "不看资料，请用同一张图分别讲清：怎样从角关系判定平行，怎样从已经平行得到角关系。",
        "请换一个例子应用，再核对条件与结果。"
      ]
    }
  },
  {
    "id": "geometric-proof",
    "title": "从猜想到证明：为什么几个例子还不够",
    "version": "0.1.0",
    "why": "画图和测量能帮助发现关系，但可能受画图误差影响。证明把已有定义、基本事实和已证结论连起来，说明结论为什么对所有满足条件的图形成立。",
    "steps": [
      {
        "type": "定义",
        "title": "先辨认能判断对错的句子",
        "text": "能够判断真假的陈述句叫命题。“请画一条线”是要求，不是命题。“两个直角相等”可以判断真假，是命题。命题为真还是假，要看完整条件，不能只看关键词。"
      },
      {
        "type": "分析",
        "title": "分清题设与结论",
        "text": "命题“若两个角都是直角，那么它们相等”中，“两个角都是直角”是题设，“它们相等”是结论。可以先用自己的话写出已知和要说明的事，避免把要证明的结论当作已知。"
      },
      {
        "type": "观察与猜想",
        "title": "图形和例子能告诉我们什么",
        "text": "在几张图上量出两个角相等，只说明这些图上的测量结果接近。图画得不准、量角有误，或换一张图，都可能影响结果。这样的发现可以形成猜想，不能单凭测量给出所有情况都成立的结论。"
      },
      {
        "type": "证明",
        "title": "让每一步有已有依据",
        "text": "证明两个直角相等：因为每个直角都是90°，所以两个角都等于90°，它们相等。这里依据的是直角的定义与等量关系，不是“看起来一样”。画图辅助表达，文字中要保留条件。"
      },
      {
        "type": "反例",
        "title": "否定“所有”只需找到一个合格反例",
        "text": "命题“所有相等的角都是对顶角”为假。两张互不相交的纸上各画一个30°角，它们相等，却不是同一交点形成的对顶角。反例必须满足题设，同时不满足结论；随便举一个不满足题设的例子没有作用。"
      },
      {
        "type": "联系与边界",
        "title": "倒过来说不一定仍对",
        "text": "“对顶角相等”是真命题；“相等的角都是对顶角”却是假命题。交换题设和结论得到的说法，需重新判断。证明中不能绕圈：不能为证明a∥b，先用“平行线同位角相等”去断定角相等。"
      },
      {
        "type": "方法与检查",
        "title": "用条件—依据—结论检查",
        "text": "先标清题设，再说准备使用的定义或性质，最后检查是否得到目标结论。若卡住，问自己还缺哪个条件。解释可以很短，但不能省略使结论成立的关键条件。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "本页没有自动证明工具。请在纸上写“两个互补的角一定相邻”。先画一个符合这句话的例子，再试画一个和为180°却不相邻的例子。给反例标明角度，说明它满足什么、否定了什么。"
    },
    "reflection": "你会怎样区分观察、猜想、证明和反例？用一个自己的几何例子说明。",
    "method": "举例与反例",
    "questions": [
      {
        "id": "geometric-proof-q1",
        "prompt": "下列哪一句是能判断真假的命题？",
        "options": [
          {
            "id": "c",
            "text": "这个角是多少度？"
          },
          {
            "id": "b",
            "text": "请画一个直角"
          },
          {
            "id": "a",
            "text": "两个直角相等"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "命题是陈述，不是命令或提问。",
        "explanation": "“两个直角相等”可判断真假；另两句分别是要求与问题。"
      },
      {
        "id": "geometric-proof-q2",
        "prompt": "“如果两条直线垂直，那么它们相交形成直角”的题设是什么？",
        "options": [
          {
            "id": "c",
            "text": "两条直线垂直"
          },
          {
            "id": "b",
            "text": "两条直线平行"
          },
          {
            "id": "a",
            "text": "形成直角"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "找“如果”后面给定的条件。",
        "explanation": "题设是两条直线垂直；结论是它们相交形成直角。"
      },
      {
        "id": "geometric-proof-q3",
        "prompt": "小雨测量了五张平行线图，同位角都近似相等。她这一步做了什么？",
        "options": [
          {
            "id": "c",
            "text": "已证明所有平行线同位角相等"
          },
          {
            "id": "b",
            "text": "观察，为猜想提供线索"
          },
          {
            "id": "a",
            "text": "已证明量角器没有误差"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "有限测量与所有情况有区别。",
        "explanation": "测量帮助发现关系，但五个例子不能替代适用于所有符合条件图形的证明。"
      },
      {
        "id": "geometric-proof-q4",
        "prompt": "要否定“两个互补的角一定相邻”，哪一个是有效反例？",
        "options": [
          {
            "id": "b",
            "text": "两个相邻的角分别为40°与140°"
          },
          {
            "id": "a",
            "text": "两个分开画的角分别为40°与140°"
          },
          {
            "id": "c",
            "text": "两个分开画的角分别为40°与130°"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "反例要既满足互补，又不相邻。",
        "explanation": "40°+140°=180°且两角分开，满足题设而否定结论。40°与130°并不互补。"
      },
      {
        "id": "geometric-proof-q5",
        "prompt": "已知∠A与∠B都是直角，说明它们相等的可靠依据是什么？",
        "options": [
          {
            "id": "a",
            "text": "图上画得一样大"
          },
          {
            "id": "c",
            "text": "直角都是90°"
          },
          {
            "id": "b",
            "text": "量角器读数看起来差不多"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "用定义，而不是画图精度。",
        "explanation": "两个角都等于90°，由等量关系得到相等。"
      },
      {
        "id": "geometric-proof-q6",
        "prompt": "“两个数的平方相等，这两个数就相等”为什么不总成立？",
        "options": [
          {
            "id": "a",
            "text": "1和1相等"
          },
          {
            "id": "b",
            "text": "2和−2的平方相等，两个数却不相等"
          },
          {
            "id": "c",
            "text": "2和3的平方不相等"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "找满足平方相等却不相等的数。",
        "explanation": "2²=(−2)²=4，而2≠−2。一个合格反例就能否定这个全称命题。"
      },
      {
        "id": "geometric-proof-q7",
        "prompt": "已知a、b被同一截线所截，某对角看起来相等。证明a∥b时能先写“因为a∥b，所以这对角相等”吗？",
        "options": [
          {
            "id": "b",
            "text": "能，因为图已经画出来了"
          },
          {
            "id": "c",
            "text": "能，只要没有量角器"
          },
          {
            "id": "a",
            "text": "不能，这会先使用尚未得到的结论"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "证明不能先把目标当成已知。",
        "explanation": "a∥b是要证明的目标，不能先拿它作依据。要从题目真正给定的条件出发。"
      },
      {
        "id": "geometric-proof-q8",
        "prompt": "在使用“同一平面内，两条不同直线都垂直于第三条直线，它们就互相平行”时，需要核对“同一平面内”吗？",
        "options": [
          {
            "id": "a",
            "text": "需要，不能脱离适用条件使用平面几何结论"
          },
          {
            "id": "b",
            "text": "不需要，只要画得像平行就行"
          },
          {
            "id": "c",
            "text": "不需要，所有垂线的方向都相同"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "结论的适用范围是条件的一部分。",
        "explanation": "需要核对。在同一平面内可由同位角都是90°判平行；空间中都垂直于同一直线的两条线，方向却可能不同，不能直接沿用这个平面结论。"
      }
    ],
    "sourceScope": "通用七下知识结构，待用户教材逐页映射",
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "coverageTopics": [
      "命题与题设结论",
      "观察猜想证明区别",
      "从定义作证明",
      "合格反例",
      "逆命题与循环论证",
      "条件范围"
    ],
    "methods": {
      "explainPrompt": "你会怎样区分观察、猜想、证明和反例？用一个自己的几何例子说明。",
      "cuePrompts": [
        "学习从猜想到证明时，最容易遗漏的条件是什么？",
        "请写一条关键关系，再举一个需要检查边界的例子。"
      ],
      "reviewPrompts": [
        "不看资料，你会怎样区分观察、猜想、证明和反例？用一个自己的几何例子说明。",
        "请换一个例子应用，再核对条件与结果。"
      ]
    }
  },
  {
    "id": "translation",
    "title": "平移：每个点都怎样移动",
    "version": "0.1.0",
    "why": "搬动一幅图而不转动、不翻面，位置变了，形状和大小却没变。用对应点的移动来描述，才能区分真正的平移和只移动一个顶点。",
    "steps": [
      {
        "type": "定义",
        "title": "所有点按同一方向移动同样距离",
        "text": "在平面内，把图形上所有点沿同一方向移动相同距离，这样的移动叫平移。原点A移到A′，A和A′叫对应点。零距离移动可看成位置不变的特殊情形，本单元操作主要看非零距离。"
      },
      {
        "type": "操作与观察",
        "title": "不要只盯一个顶点",
        "text": "在方格纸上画三角形ABC，把每个顶点都向右移4格、再向上移2格，得到A′、B′、C′。三条相同的移动路线只是在描述同一次整体平移，不是把图形拉成新的形状。"
      },
      {
        "type": "性质",
        "title": "对应线段的长度和对应角的大小不变",
        "text": "平移保持图形的形状和大小，因此AB与A′B′等长，∠ABC与∠A′B′C′相等。非零平移中，连接对应点的线段AA′、BB′、CC′互相平行或在同一直线上，并且长度相等。若某线段正好沿着移动方向，它与自己的像可能落在同一直线上，不能强说这两条直线一定不同。"
      },
      {
        "type": "推理与应用",
        "title": "只知道一个点怎样移，就能确定其他点怎样移",
        "text": "一旦给出A到A′的方向和距离，其余每个点都必须作同样移动。不能把B移得更远来“凑形状”。先用方格数出横向、纵向移动，再对每个顶点重复，能减少漏点和错方向。"
      },
      {
        "type": "反例与边界",
        "title": "转动和翻面不是平移",
        "text": "把三角形绕某点转动，通常不同点移动的方向与距离不再全部相同；翻面会改变图形的朝向。只看“形状大小没变”不足以判定平移，还要看所有对应点是否沿同一方向移动同样距离。"
      },
      {
        "type": "联系与检查",
        "title": "以后用坐标检查移动",
        "text": "在平面直角坐标系中，向右移h、向上移k，可把(x,y)写成(x+h,y+k)，h、k为正数时表示这两个指定方向。向左、向下则相应减去。检查时至少再核对另一个点，确保图形整体保持同一种移动。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "请用方格纸画一个不对称的四边形，先预测整体向左3格、向下1格后在哪。逐点画出像，再连接两对对应点，比较它们的长度与方向。这里只提供纸笔活动，没有自动移动图形的控件。"
    },
    "reflection": "怎样用对应点排除“看起来差不多”的错误平移？请说清移动方向、距离以及保持不变的量。",
    "method": "画图或操作",
    "questions": [
      {
        "id": "translation-q1",
        "prompt": "平移一个图形时，图形上的点需要满足什么？",
        "options": [
          {
            "id": "b",
            "text": "只要一个顶点移动就行"
          },
          {
            "id": "a",
            "text": "都沿同一方向移动相同距离"
          },
          {
            "id": "c",
            "text": "不同点可以朝不同方向移动"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "定义同时限制方向和距离。",
        "explanation": "每个点都要沿同一方向移动相同距离，才能保持整个图形的平移关系。"
      },
      {
        "id": "translation-q2",
        "prompt": "平移前后三角形的对应角会怎样？",
        "options": [
          {
            "id": "b",
            "text": "都变成直角"
          },
          {
            "id": "c",
            "text": "大小不变"
          },
          {
            "id": "a",
            "text": "都增大"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "平移只改变位置。",
        "explanation": "平移保持形状和大小，对应角相等。"
      },
      {
        "id": "translation-q3",
        "prompt": "图形向右平移5格，点A移到A′。线段AA′的长度是几个格长？",
        "options": [
          {
            "id": "c",
            "text": "10"
          },
          {
            "id": "a",
            "text": "不能确定"
          },
          {
            "id": "b",
            "text": "5"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "对应点移动的距离就是平移距离。",
        "explanation": "每个点向右移动5格，所以AA′长5个格长。"
      },
      {
        "id": "translation-q4",
        "prompt": "一个三角形的顶点分别向右移2格、3格、2格，纵向都不动。这一定是原三角形的平移吗？",
        "options": [
          {
            "id": "b",
            "text": "是，因为都向右"
          },
          {
            "id": "c",
            "text": "是，因为仍有三个顶点"
          },
          {
            "id": "a",
            "text": "不是，各点移动距离不一致"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "方向相同还不够。",
        "explanation": "平移还要求所有点移动相同距离；第二个顶点与另外两个不同，不符合定义。"
      },
      {
        "id": "translation-q5",
        "prompt": "在直角坐标系中，点(−2,5)向右平移7个单位，对应点是？",
        "options": [
          {
            "id": "b",
            "text": "(−9,5)"
          },
          {
            "id": "a",
            "text": "(−2,12)"
          },
          {
            "id": "c",
            "text": "(5,5)"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "向右只改变横坐标。",
        "explanation": "横坐标为−2+7=5，纵坐标仍为5，得到(5,5)。"
      },
      {
        "id": "translation-q6",
        "prompt": "把一个平面图形整体向上平移，它的面积怎样变化？",
        "options": [
          {
            "id": "a",
            "text": "可能仅因为位置高就变大"
          },
          {
            "id": "b",
            "text": "不变，平移保持大小"
          },
          {
            "id": "c",
            "text": "一定变大"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "平移不是放大。",
        "explanation": "平移保持图形大小，面积不会因为放到更高的位置而改变。"
      },
      {
        "id": "translation-q7",
        "prompt": "矩形沿它的一条边所在方向平移。这条边与它的像所在的直线可能怎样？",
        "options": [
          {
            "id": "b",
            "text": "一定是两条不同的平行线"
          },
          {
            "id": "c",
            "text": "一定互相垂直"
          },
          {
            "id": "a",
            "text": "可能是同一条直线"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "沿一条直线的方向移动，点仍可能留在这条线上。",
        "explanation": "该边上每个点沿边所在方向移动，像仍在原直线上。不能把“对应线段方向相同”误说成所在直线必不同。"
      },
      {
        "id": "translation-q8",
        "prompt": "平移后已知AB=6厘米，A′、B′分别为A、B的对应点。A′B′长多少？",
        "options": [
          {
            "id": "a",
            "text": "12厘米"
          },
          {
            "id": "b",
            "text": "由平移距离决定"
          },
          {
            "id": "c",
            "text": "6厘米"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "比较的是对应线段，而不是连接对应点的线段。",
        "explanation": "AB与A′B′是对应线段，平移保持长度，所以A′B′=6厘米。"
      }
    ],
    "sourceScope": "通用七下知识结构，待用户教材逐页映射",
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "coverageTopics": [
      "平移定义与对应点",
      "整体移动操作",
      "长度角度与对应点连线性质",
      "共线特殊情况",
      "与旋转翻折的区别",
      "坐标平移联系"
    ],
    "methods": {
      "explainPrompt": "怎样用对应点排除“看起来差不多”的错误平移？请说清移动方向、距离以及保持不变的量。",
      "cuePrompts": [
        "学习平移时，最容易遗漏的条件是什么？",
        "请写一条关键关系，再举一个需要检查边界的例子。"
      ],
      "reviewPrompts": [
        "不看资料，怎样用对应点排除“看起来差不多”的错误平移？请说清移动方向、距离以及保持不变的量。",
        "请换一个例子应用，再核对条件与结果。"
      ]
    }
  },
  {
    "id": "cube-roots",
    "title": "立方根：反过来寻找三个相同的因子",
    "version": "0.1.0",
    "why": "知道正方体的体积，怎样找边长？它会引出“哪个数的立方等于已知数”的问题。数的立方根还包括负数，不能把平方根的规则直接搬过来。",
    "steps": [
      {
        "type": "前置与定义",
        "title": "立方根在问什么",
        "text": "a³表示三个a相乘。若x³=a，那么x叫作a的立方根，记作∛a。根号左上角的3不能省掉；√a与∛a问的是不同的问题。正方体边长为3厘米时体积为27立方厘米，反过来由27求边长就是求∛27。"
      },
      {
        "type": "符号与边界",
        "title": "负数也有立方根",
        "text": "正数的立方为正，负数的立方为负，0的立方为0。例如(−4)³=−64，所以∛(−64)=−4。实数范围内每个数恰有一个立方根；正数有一个正的立方根，负数有一个负的立方根，0的立方根是0。"
      },
      {
        "type": "比较与理由",
        "title": "为什么不是一正一负两个",
        "text": "平方时相反数会得到同样结果；立方时多乘一个因子，结果的符号随原数改变。因此4和−4的立方分别为64和−64，不会同时成为64的立方根。非负数越大，其立方越大；结合负数的符号与对应关系，可以说明立方根的唯一性。"
      },
      {
        "type": "例子与检验",
        "title": "求根后用立方检验",
        "text": "∛(125/8)=5/2，因为(5/2)³=125/8。检验要把结果作为整体立方，不能只乘3。体积问题还要检查单位：体积用立方厘米，边长用厘米；负体积不适合作为普通正方体的体积，但负数的立方根在数的运算中有意义。"
      },
      {
        "type": "推导与联系",
        "title": "立方与开立方互相还原",
        "text": "对任意实数a，∛(a³)=a，因为a的立方就是被开方数，且立方根唯一。同样，(∛a)³=a。对比√(a²)=|a|，不能把它误写成√(a²)=a；两种根的非负要求不同。"
      },
      {
        "type": "估值与方法",
        "title": "不是整立方数也能估计",
        "text": "因为2³=8、3³=27，所以∛10在2与3之间。不必为了写答案就强行取整数。遇到陌生数，先检查符号，再用熟悉的整立方数夹住它；给出的近似值仍需说明精确程度。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "没有开立方计算控件。请在纸上把−3、−2、−1、0、1、2、3各自的立方写出来，预测反向找回原数的结果。再比较√((-2)²)与∛((-2)³)，解释为什么一个结果非负，另一个保留负号。"
    },
    "reflection": "给同学解释：为什么负数有立方根，却在实数范围内没有平方根？",
    "method": "从定义推导",
    "questions": [
      {
        "id": "cube-roots-q1",
        "prompt": "“∛(−8)”在问什么？",
        "options": [
          {
            "id": "c",
            "text": "把−8除以3"
          },
          {
            "id": "a",
            "text": "哪个数的立方等于−8"
          },
          {
            "id": "b",
            "text": "哪个数的平方等于−8"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "根号左上角的3表示反求立方。",
        "explanation": "∛(−8)是求x³=−8的数，不是除法也不是开平方。"
      },
      {
        "id": "cube-roots-q2",
        "prompt": "实数范围内，−1的立方根有几个？",
        "options": [
          {
            "id": "a",
            "text": "没有"
          },
          {
            "id": "c",
            "text": "一个，是−1"
          },
          {
            "id": "b",
            "text": "两个，是1和−1"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "分别算1³与(−1)³。",
        "explanation": "(−1)³=−1，1³=1。−1只有一个立方根−1。"
      },
      {
        "id": "cube-roots-q3",
        "prompt": "∛216等于多少？",
        "options": [
          {
            "id": "a",
            "text": "72"
          },
          {
            "id": "c",
            "text": "−6"
          },
          {
            "id": "b",
            "text": "6"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "想三个相同因子相乘得到216。",
        "explanation": "6×6×6=216，所以∛216=6；负数立方为负。"
      },
      {
        "id": "cube-roots-q4",
        "prompt": "若a<0，∛(a³)与√(a²)分别是什么？",
        "options": [
          {
            "id": "c",
            "text": "都是−a"
          },
          {
            "id": "a",
            "text": "a与−a"
          },
          {
            "id": "b",
            "text": "都是a"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "开立方还原原数，算术平方根必须非负。",
        "explanation": "∛(a³)=a；√(a²)=|a|，而a<0时|a|=−a。"
      },
      {
        "id": "cube-roots-q5",
        "prompt": "∛(−125)等于多少？",
        "options": [
          {
            "id": "c",
            "text": "−5"
          },
          {
            "id": "a",
            "text": "5"
          },
          {
            "id": "b",
            "text": "−25"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "把结果立方验证符号与大小。",
        "explanation": "(−5)³=−125，所以立方根为−5。"
      },
      {
        "id": "cube-roots-q6",
        "prompt": "一个正方体体积为0.008立方米，它的边长是多少米？",
        "options": [
          {
            "id": "c",
            "text": "0.02米"
          },
          {
            "id": "b",
            "text": "0.2米"
          },
          {
            "id": "a",
            "text": "0.8米"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "先检验小数的立方及单位。",
        "explanation": "0.2³=0.008，边长为0.2米；体积单位不能直接作为边长单位。"
      },
      {
        "id": "cube-roots-q7",
        "prompt": "∛0与√0相加是多少？",
        "options": [
          {
            "id": "c",
            "text": "没有意义"
          },
          {
            "id": "a",
            "text": "0"
          },
          {
            "id": "b",
            "text": "1"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "0既可以平方，也可以立方。",
        "explanation": "两者都为0，因此相加仍为0。"
      },
      {
        "id": "cube-roots-q8",
        "prompt": "不使用计算器，∛50位于哪两个相邻整数之间？",
        "options": [
          {
            "id": "b",
            "text": "2与3之间"
          },
          {
            "id": "a",
            "text": "7与8之间"
          },
          {
            "id": "c",
            "text": "3与4之间"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "用相邻整数的立方夹住50。",
        "explanation": "3³=27<50<64=4³，因此3<∛50<4。"
      }
    ],
    "sourceScope": "通用七下知识结构，待用户教材逐页映射",
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "coverageTopics": [
      "立方根定义与记号",
      "正负零立方根",
      "唯一性与平方根比较",
      "分数小数开立方",
      "立方检验与单位",
      "立方根估值"
    ],
    "methods": {
      "explainPrompt": "给同学解释：为什么负数有立方根，却在实数范围内没有平方根？",
      "cuePrompts": [
        "学习立方根时，最容易遗漏的条件是什么？",
        "请写一条关键关系，再举一个需要检查边界的例子。"
      ],
      "reviewPrompts": [
        "不看资料，给同学解释：为什么负数有立方根，却在实数范围内没有平方根？",
        "请换一个例子应用，再核对条件与结果。"
      ]
    }
  },
  {
    "id": "real-numbers",
    "title": "实数：有理数之外还有哪些数",
    "version": "0.1.0",
    "why": "面积为2的正方形，它的边长不能用有限小数或两个整数的比准确表示。把认识的数扩展，能让数轴上的点与我们讨论的数更完整地对应。",
    "steps": [
      {
        "type": "前置与分类",
        "title": "先把有理数认清",
        "text": "能写成两个整数之比p/q且q≠0的数，叫有理数。整数、有限小数和无限循环小数都是有理数。例如0.125=1/8，0.333…（3无限循环）=1/3。小数位数无限多，不一定就是无理数。"
      },
      {
        "type": "定义",
        "title": "无理数不是“没有规律的数”",
        "text": "无限不循环小数叫无理数，例如√2、∛2和π。π是精确的数，而3.14只是π的一个近似值；3.14本身是有理数。是不是无理数，不能只看写成根号，也不能只看显示了很多小数位。"
      },
      {
        "type": "联系与简短证明",
        "title": "√2为什么不能是分数",
        "text": "假设√2=p/q，其中p、q为没有公因数的正整数。由p²=2q²，p²为偶数，因此p为偶数；设p=2k，代入得q²=2k²，所以q也为偶数。这与p、q没有公因数矛盾。因此√2不能写成整数之比。这里用到“奇数的平方仍为奇数”，可展开(2m+1)²检查。"
      },
      {
        "type": "定义与关系",
        "title": "有理数与无理数合起来叫实数",
        "text": "实数可以分成有理数和无理数，也可以按正负分成正实数、0和负实数。每个实数对应数轴上的一个点，数轴上的每个点也对应一个实数。负的无理数仍是无理数，例如−√2。"
      },
      {
        "type": "估值与比较",
        "title": "先找范围，再决定需要多精确",
        "text": "因为1²<2<2²，所以1<√2<2；又因为1.4²<2<1.5²，可以进一步得到1.4<√2<1.5。比较实数大小可以看数轴位置；用平方比较时要先确保两个数都非负。近似计算不能把“≈”随意写成“=”。"
      },
      {
        "type": "运算与边界",
        "title": "实数运算仍有适用条件",
        "text": "实数的加减乘除遵循已经学过的运算法则，但除数不能为0。开平方需被开方数非负。√9=3是有理数；√2是无理数。两个无理数相加可能成为有理数，例如√2+(−√2)=0；不能只凭参与运算的数的类别猜结果。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "请在纸上画0到3的一段数轴，先预测√3落在哪里，再用1.7²与1.8²夹住3。把√3、1.73、1.333…（3无限循环）分别分类；若用1.73表示√3的近似值，说明为什么只能写√3≈1.73，而1.73这个有限小数本身仍是精确的有理数。没有数轴拖动控件。"
    },
    "reflection": "为什么“带根号”“小数位很多”都不足以判断一个数是无理数？给出两个反例。",
    "method": "举例与反例",
    "questions": [
      {
        "id": "real-numbers-q1",
        "prompt": "0.272727…中“27”无限循环。这个数属于哪类？",
        "options": [
          {
            "id": "b",
            "text": "无理数"
          },
          {
            "id": "c",
            "text": "不是实数"
          },
          {
            "id": "a",
            "text": "有理数"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "无限循环小数可以写成整数之比。",
        "explanation": "它是无限循环小数，属于有理数；无理数是无限不循环小数。"
      },
      {
        "id": "real-numbers-q2",
        "prompt": "下面哪个数是无理数？",
        "options": [
          {
            "id": "a",
            "text": "√16"
          },
          {
            "id": "c",
            "text": "√7"
          },
          {
            "id": "b",
            "text": "0.07"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "先化简能开尽的平方根。",
        "explanation": "√16=4，0.07=7/100，都是有理数；√7是无理数。"
      },
      {
        "id": "real-numbers-q3",
        "prompt": "√20位于哪两个相邻整数之间？",
        "options": [
          {
            "id": "a",
            "text": "5与6之间"
          },
          {
            "id": "b",
            "text": "4与5之间"
          },
          {
            "id": "c",
            "text": "3与4之间"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "比较相邻整数的平方。",
        "explanation": "4²=16<20<25=5²，所以4<√20<5。"
      },
      {
        "id": "real-numbers-q4",
        "prompt": "小安说：“两个无理数的和一定是无理数。”哪一项能否定他的说法？",
        "options": [
          {
            "id": "b",
            "text": "√5+0=√5"
          },
          {
            "id": "a",
            "text": "√5+(−√5)=0"
          },
          {
            "id": "c",
            "text": "1+2=3"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "反例里两个加数都必须是无理数。",
        "explanation": "√5和−√5均为无理数，而和为有理数0，满足反例要求。"
      },
      {
        "id": "real-numbers-q5",
        "prompt": "精确数π与3.1416之间，正确的说法是什么？",
        "options": [
          {
            "id": "b",
            "text": "3.1416因为小数位多所以是无理数"
          },
          {
            "id": "a",
            "text": "两者是完全相等的数"
          },
          {
            "id": "c",
            "text": "3.1416是有理数，只是π的近似值"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "有限小数可以化成分数。",
        "explanation": "3.1416是有限小数，可写成整数之比；它与π接近但不相等。"
      },
      {
        "id": "real-numbers-q6",
        "prompt": "若a为实数，√(a²)一定等于什么？",
        "options": [
          {
            "id": "c",
            "text": "a"
          },
          {
            "id": "a",
            "text": "−a"
          },
          {
            "id": "b",
            "text": "|a|"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "根号表示非负的算术平方根。",
        "explanation": "a²≥0，√(a²)是非负且平方为a²的数，因此为|a|。"
      },
      {
        "id": "real-numbers-q7",
        "prompt": "在实数范围内，√(−9)有意义吗？",
        "options": [
          {
            "id": "c",
            "text": "等于3"
          },
          {
            "id": "b",
            "text": "等于−3"
          },
          {
            "id": "a",
            "text": "没有意义"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "任意实数的平方不会为负。",
        "explanation": "没有实数的平方等于−9，所以在实数范围内不能对−9开平方。"
      },
      {
        "id": "real-numbers-q8",
        "prompt": "已知2.6²<7<2.7²，可以得到什么？",
        "options": [
          {
            "id": "b",
            "text": "−2.7<√7<−2.6"
          },
          {
            "id": "a",
            "text": "√7=2.65"
          },
          {
            "id": "c",
            "text": "2.6<√7<2.7"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "比较非负数时，平方的大小顺序保持。",
        "explanation": "√7为非负数，由两侧正数平方夹住7可得2.6<√7<2.7；不能据此确定它恰等于中点2.65。"
      }
    ],
    "sourceScope": "通用七下知识结构，待用户教材逐页映射",
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "coverageTopics": [
      "有理数含循环小数",
      "无理数定义与反例",
      "根号2无理性证明",
      "实数分类与数轴",
      "估值与近似",
      "实数运算条件"
    ],
    "methods": {
      "explainPrompt": "为什么“带根号”“小数位很多”都不足以判断一个数是无理数？给出两个反例。",
      "cuePrompts": [
        "学习实数时，最容易遗漏的条件是什么？",
        "请写一条关键关系，再举一个需要检查边界的例子。"
      ],
      "reviewPrompts": [
        "不看资料，为什么“带根号”“小数位很多”都不足以判断一个数是无理数？给出两个反例。",
        "请换一个例子应用，再核对条件与结果。"
      ]
    }
  },
  {
    "id": "coordinates",
    "title": "平面直角坐标系：用两个数确定位置",
    "version": "0.1.0",
    "why": "只说“向右三格”不能确定平面上的位置，还需要另一方向的信息。有顺序的两个数和统一的坐标轴，让我们能准确描述位置、距离与移动。",
    "steps": [
      {
        "type": "约定",
        "title": "两条互相垂直的数轴",
        "text": "在平面内画两条互相垂直、原点重合的数轴，通常横向向右为x轴正方向，纵向向上为y轴正方向。交点O为原点。每条轴都要标单位；本单元两轴使用相同单位长度，比较实际距离时不能忽略单位设置。"
      },
      {
        "type": "定义",
        "title": "有序数对先横后纵",
        "text": "点P到两条坐标轴作垂线，分别读出横坐标x和纵坐标y，记为P(x,y)。例如P(4,−3)表示从原点横向向右4、纵向向下3到达的位置。先横后纵是表示顺序，不代表走路只能沿这条路线。"
      },
      {
        "type": "分类与边界",
        "title": "四个象限不包括坐标轴",
        "text": "x、y都为正的点在第一象限，x负y正在第二象限，两者都负在第三象限，x正y负在第四象限。坐标轴上的点不属于任何象限。x轴上的点纵坐标为0，y轴上的点横坐标为0，原点为(0,0)。"
      },
      {
        "type": "推导",
        "title": "坐标变化怎样描述平移",
        "text": "若图形每点都向右移h、向上移k（h、k为正），(x,y)变为(x+h,y+k)。向左、向下则相应减去。两个坐标都改变时，要逐一检查方向，不能把横纵顺序交换。"
      },
      {
        "type": "应用",
        "title": "同轴方向的距离先检查位置",
        "text": "两点纵坐标相同，连接它们的线段水平，长度等于横坐标之差的绝对值。横坐标相同则为竖直距离。例如(−1,2)与(4,2)相距5个单位。若两个坐标都不同，不能把横向差与纵向差相加就当成直线距离；那通常只是沿方格走的路线长度。"
      },
      {
        "type": "方法与联系",
        "title": "坐标依赖参照，不能脱离坐标系",
        "text": "同一个教室位置，换原点、正方向或单位，坐标可能改变。描述位置前先讲清这些约定。画点后反向读出坐标，并检查它属于哪个象限或坐标轴，可以发现漏负号和顺序错误。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "请在方格纸上画有刻度的坐标轴，画P(−3,2)、Q(2,2)，预测两点所在位置与距离。把两点同时向下移4格，写出新坐标，再检查水平距离是否改变。这里只使用纸笔，不会自动画点。"
    },
    "reflection": "若只告诉你“点的坐标是(2,3)”，还要知道哪些坐标系约定才能找到实际位置？",
    "method": "画图或操作",
    "questions": [
      {
        "id": "coordinates-q1",
        "prompt": "点(−5,2)的横坐标与纵坐标分别是什么？",
        "options": [
          {
            "id": "c",
            "text": "横坐标5，纵坐标2"
          },
          {
            "id": "b",
            "text": "横坐标2，纵坐标−5"
          },
          {
            "id": "a",
            "text": "横坐标−5，纵坐标2"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "有序数对先横后纵。",
        "explanation": "坐标写作(x,y)，因此横坐标为−5，纵坐标为2，负号不能省略。"
      },
      {
        "id": "coordinates-q2",
        "prompt": "点(0,−6)在什么位置？",
        "options": [
          {
            "id": "b",
            "text": "在第四象限"
          },
          {
            "id": "c",
            "text": "在y轴上，不属于任何象限"
          },
          {
            "id": "a",
            "text": "在第三象限"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "横坐标为0的点在纵轴上。",
        "explanation": "x=0表明点在y轴上，坐标轴上的点不属于四个象限。"
      },
      {
        "id": "coordinates-q3",
        "prompt": "点(−4,1)向右移6个单位、向下移3个单位，得到哪个点？",
        "options": [
          {
            "id": "b",
            "text": "(2,−2)"
          },
          {
            "id": "c",
            "text": "(−10,4)"
          },
          {
            "id": "a",
            "text": "(−1,7)"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "横坐标加6，纵坐标减3。",
        "explanation": "−4+6=2，1−3=−2，所以像为(2,−2)。"
      },
      {
        "id": "coordinates-q4",
        "prompt": "在相同单位的坐标系中，A(−6,4)、B(1,4)的直线距离是多少？",
        "options": [
          {
            "id": "c",
            "text": "11个单位"
          },
          {
            "id": "a",
            "text": "7个单位"
          },
          {
            "id": "b",
            "text": "5个单位"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "先看两点是否在同一水平线上。",
        "explanation": "纵坐标相同，距离为|1−(−6)|=7个单位。"
      },
      {
        "id": "coordinates-q5",
        "prompt": "点(3,−7)在哪个象限？",
        "options": [
          {
            "id": "b",
            "text": "第三象限"
          },
          {
            "id": "c",
            "text": "第四象限"
          },
          {
            "id": "a",
            "text": "第二象限"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "横正纵负的位置在右下方。",
        "explanation": "第四象限的点横坐标为正、纵坐标为负。"
      },
      {
        "id": "coordinates-q6",
        "prompt": "把原点位置改变后，同一个实际位置的坐标一定保持不变吗？",
        "options": [
          {
            "id": "a",
            "text": "一定，因为坐标只由点名决定"
          },
          {
            "id": "c",
            "text": "一定，因为位置没动"
          },
          {
            "id": "b",
            "text": "不一定，坐标依赖参照"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "坐标描述相对原点和坐标轴的位置。",
        "explanation": "实际位置没变，但参照改变时读出的横纵距离可能改变，坐标不一定相同。"
      },
      {
        "id": "coordinates-q7",
        "prompt": "点M(a,0)一定在哪里？",
        "options": [
          {
            "id": "c",
            "text": "在y轴上且不是原点"
          },
          {
            "id": "b",
            "text": "在第一象限"
          },
          {
            "id": "a",
            "text": "在x轴上，包括可能的原点"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "所有实数a都允许，尤其要考虑a=0。",
        "explanation": "纵坐标为0说明在x轴上；若a=0，则M就是原点。"
      },
      {
        "id": "coordinates-q8",
        "prompt": "同一单位的方格纸上，A(0,0)、B(3,4)。小明走3格向右、4格向上到B，走了7个单位。他能据此说线段AB长7吗？",
        "options": [
          {
            "id": "c",
            "text": "不能，折线路线长度不等于直线距离"
          },
          {
            "id": "a",
            "text": "能，因为横纵距离必须相加"
          },
          {
            "id": "b",
            "text": "能，因为两个点不在同一条轴上"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "区分沿格子走与直接连接。",
        "explanation": "3+4是沿两段互相垂直路线走的长度，不能直接当成A、B间的直线距离。"
      }
    ],
    "sourceScope": "通用七下知识结构，待用户教材逐页映射",
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "coverageTopics": [
      "坐标系约定",
      "有序数对读画",
      "象限与坐标轴边界",
      "坐标平移",
      "水平竖直距离",
      "路线与直线距离区别"
    ],
    "methods": {
      "explainPrompt": "若只告诉你“点的坐标是(2,3)”，还要知道哪些坐标系约定才能找到实际位置？",
      "cuePrompts": [
        "学习平面直角坐标系时，最容易遗漏的条件是什么？",
        "请写一条关键关系，再举一个需要检查边界的例子。"
      ],
      "reviewPrompts": [
        "不看资料，若只告诉你“点的坐标是(2,3)”，还要知道哪些坐标系约定才能找到实际位置？",
        "请换一个例子应用，再核对条件与结果。"
      ]
    }
  },
  {
    "id": "linear-systems",
    "title": "二元一次方程组：同时满足两条关系",
    "version": "0.1.0",
    "why": "总数量和总价是对同一批物品的不同描述。一个关系可能有很多组答案，两个关系同时成立，才能进一步确定各个未知数。",
    "steps": [
      {
        "type": "定义与前置",
        "title": "一个方程可以有多个数对",
        "text": "含有两个未知数，未知数的次数都为1，且未知数的项是整式的方程，叫二元一次方程。x+y=7有(1,6)、(2,5)等不同的解。解要写出x与y各是什么，不能只写一个数。x+y=7与xy=7不是同一类方程，因为xy项中未知数次数合计为2。"
      },
      {
        "type": "定义",
        "title": "方程组要求同时成立",
        "text": "把有关同一组未知数的两个二元一次方程合在一起，形成二元一次方程组。它的解必须让两个方程都成立。分别找到第一式的一个解与第二式的另一个解，并不等于找到整个方程组的解。"
      },
      {
        "type": "推导与代入法",
        "title": "把两个未知数变成一个",
        "text": "解x+y=7、2x+y=10：由第一式y=7−x，把这个表达式代入第二式，得到2x+(7−x)=10，解得x=3，再得y=4。代入不是随意替换；两个式子都在说同一个y，所以可以用与y相等的式子替换它。"
      },
      {
        "type": "推导与加减法",
        "title": "让某个未知数的项抵消",
        "text": "同一组方程第二式减第一式，左边(2x+y)−(x+y)=x，右边10−7=3，所以x=3，再代入得到y=4。若系数不同，可以把方程两边乘同一个非零数，使某个未知数系数相同或互为相反数，再相减或相加。每次整个等式都要一起变化。"
      },
      {
        "type": "例子与建模",
        "title": "把总数量与总价分别写清",
        "text": "练习本每本3元，笔每支2元，共买8件花21元。设本子x本、笔y支，得到x+y=8、3x+2y=21。第二式减第一式的2倍，得到x=5，继而y=3。检验数量5+3=8，价钱15+6=21，并检查非负整数与单位。"
      },
      {
        "type": "边界",
        "title": "两个方程不一定给唯一答案",
        "text": "x+y=2与x+y=5不可能同时成立，没有解。x+y=2与2x+2y=4实际上说的是同一关系，有无数个实数解。列了两个方程，不保证它们提供两条独立信息；实际问题中的整数或正数要求还可能进一步限制答案。"
      },
      {
        "type": "选学联系",
        "title": "三个未知数也可以逐步减少",
        "text": "三元一次方程组可先通过代入或加减减少一个未知数，转成二元问题，再回代。例：x+y+z=6、x+y=4、y+z=5；前两式相减得z=2，再得y=3、x=1。这是选学联系，用来认识同一种减少未知数的思路，不要求提前记一套新术语。"
      },
      {
        "type": "方法与检查",
        "title": "选择让运算更简单的一步",
        "text": "某个未知数的系数为1时，代入往往方便；同一未知数的系数已相同或相反时，加减往往方便。算出的数对要代回原来的每个方程，不能只检查最后那个变形后的方程。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "请在纸上列出x、y为非负整数且x+y=9的所有数对，再用条件2x+y=13筛选。先预测能剩几组，再分别用代入和相减说明。没有自动解方程或表格控件，列式与核对由你完成。"
    },
    "reflection": "怎样说明你的数对是整个方程组的解，而不只是某一个方程的解？",
    "method": "代入检验",
    "questions": [
      {
        "id": "linear-systems-q1",
        "prompt": "数对(x,y)=(2,5)是方程x+y=7的解吗？",
        "options": [
          {
            "id": "a",
            "text": "是，因为2+5=7"
          },
          {
            "id": "c",
            "text": "不是，因为一个方程只能有一组解"
          },
          {
            "id": "b",
            "text": "不是，因为x与y不同"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "把两个数按顺序代入。",
        "explanation": "2+5=7，所以是这个二元一次方程的解；它还可以有其他解。"
      },
      {
        "id": "linear-systems-q2",
        "prompt": "方程组x+y=6、x−y=2的解需要满足什么？",
        "options": [
          {
            "id": "a",
            "text": "让第一式成立即可"
          },
          {
            "id": "c",
            "text": "同一组x、y使两式都成立"
          },
          {
            "id": "b",
            "text": "第一式用一组数，第二式换另一组数也可以"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "方程组的关键是同时。",
        "explanation": "两个方程针对相同未知数，必须由同一组数同时满足。"
      },
      {
        "id": "linear-systems-q3",
        "prompt": "解方程组x+y=11、x−y=3，x与y分别是多少？",
        "options": [
          {
            "id": "c",
            "text": "x=4，y=7"
          },
          {
            "id": "a",
            "text": "x=8，y=3"
          },
          {
            "id": "b",
            "text": "x=7，y=4"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "两式相加，y的项抵消。",
        "explanation": "相加得2x=14，所以x=7；代入得y=4，且7−4=3。"
      },
      {
        "id": "linear-systems-q4",
        "prompt": "成人票每张12元，学生票每张7元。共卖10张，收入95元。设成人票x张、学生票y张，应列哪组关系？",
        "options": [
          {
            "id": "c",
            "text": "12x+y=10，x+7y=95"
          },
          {
            "id": "b",
            "text": "x+y=95，12x+7y=10"
          },
          {
            "id": "a",
            "text": "x+y=10，12x+7y=95"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "张数与金额不能混在同一个总量里。",
        "explanation": "总张数为x+y=10，总金额为12x+7y=95。两式分别对应两个总量。"
      },
      {
        "id": "linear-systems-q5",
        "prompt": "方程组y=2x、x+y=15的解是什么？",
        "options": [
          {
            "id": "a",
            "text": "x=10，y=5"
          },
          {
            "id": "c",
            "text": "x=5，y=10"
          },
          {
            "id": "b",
            "text": "x=7，y=8"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "把2x代入第二式中的y。",
        "explanation": "x+2x=15得到x=5，再由y=2x得到y=10，两式都成立。"
      },
      {
        "id": "linear-systems-q6",
        "prompt": "方程组2x+2y=8、x+y=5在实数范围内有什么情况？",
        "options": [
          {
            "id": "a",
            "text": "任何数对都是解"
          },
          {
            "id": "c",
            "text": "只有解x=2、y=2"
          },
          {
            "id": "b",
            "text": "无解"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "先把第一式两边除以2。",
        "explanation": "第一式相当于x+y=4，与x+y=5矛盾，故没有同时满足的数对。"
      },
      {
        "id": "linear-systems-q7",
        "prompt": "方程组3x+2y=16、x+2y=8，用前式减后式会得到什么？",
        "options": [
          {
            "id": "b",
            "text": "4x=24"
          },
          {
            "id": "c",
            "text": "2y=8"
          },
          {
            "id": "a",
            "text": "2x=8"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "括号中的x项和y项分别相减。",
        "explanation": "(3x+2y)−(x+2y)=2x，16−8=8，所以2x=8。"
      },
      {
        "id": "linear-systems-q8",
        "prompt": "x+y=4与2x+2y=8这两个方程一起使用，能唯一确定一组实数x、y吗？",
        "options": [
          {
            "id": "a",
            "text": "能，因为有两个方程"
          },
          {
            "id": "c",
            "text": "不能，它们表达同一关系"
          },
          {
            "id": "b",
            "text": "能，解一定是x=2、y=2"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "第二式是否带来了新条件？",
        "explanation": "第二式是第一式两边乘2，所有满足x+y=4的实数对都满足它，因此不是唯一解。"
      }
    ],
    "sourceScope": "通用七下知识结构，待用户教材逐页映射",
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "coverageTopics": [
      "二元一次方程与解",
      "方程组同时成立",
      "代入消元",
      "加减消元",
      "实际建模与整数单位",
      "无解与无数解",
      "三元一次选学联系",
      "回代检验"
    ],
    "methods": {
      "explainPrompt": "怎样说明你的数对是整个方程组的解，而不只是某一个方程的解？",
      "cuePrompts": [
        "学习二元一次方程组时，最容易遗漏的条件是什么？",
        "请写一条关键关系，再举一个需要检查边界的例子。"
      ],
      "reviewPrompts": [
        "不看资料，怎样说明你的数对是整个方程组的解，而不只是某一个方程的解？",
        "请换一个例子应用，再核对条件与结果。"
      ]
    }
  },
  {
    "id": "inequalities",
    "title": "不等式与不等式组：条件允许哪些数",
    "version": "0.1.0",
    "why": "预算上限、最低身高和允许的温度范围，都不是只求一个恰好相等的数。不等式帮助我们描述所有符合条件的值，并检查边界是否包括在内。",
    "steps": [
      {
        "type": "定义",
        "title": "先读懂关系符号",
        "text": "用<、>、≤、≥、≠等不等号表示关系的式子叫不等式。“x不超过6”写作x≤6；“x至少为6”写作x≥6。使不等式成立的未知数的值叫它的解，全部这些值合起来就是它的解的范围。"
      },
      {
        "type": "性质与理由",
        "title": "同加同减保持方向",
        "text": "不等式两边同时加上或减去同一个数，不等号方向不变。例如a<b时，给两点都加c相当于在数轴上作相同平移，左右次序保持，所以a+c<b+c。只改一边不保证关系仍成立。"
      },
      {
        "type": "性质与推导",
        "title": "乘除负数为什么反向",
        "text": "两边同乘或同除一个正数，方向不变；同乘或同除一个负数，方向反向。a<b意味着b−a>0，乘以负数c后c(b−a)<0，即cb<ca，因此ca>cb。除数必须不为0；同乘0会丢掉原来的严格大小关系。"
      },
      {
        "type": "解法与边界",
        "title": "一步步化成x与某个数比较",
        "text": "解−3x+4≤13：两边减4得−3x≤9，再除以−3，方向反向，得到x≥−3。检验边界x=−3使两边相等，所以要保留等号；再选一个范围内和一个范围外的数检查，可以发现方向写反的问题。"
      },
      {
        "type": "表示",
        "title": "数轴上端点是否包括",
        "text": "把x≥−3表示在数轴上时，在−3处画实心点并向右表示所有允许值。x>−3用空心点，不包括端点。箭头表示范围继续延伸，不是只列几个整数；没有整数限制时，也包含分数与无理数等实数。"
      },
      {
        "type": "不等式组",
        "title": "把同时成立的部分留下",
        "text": "若要求x>−2且x≤4，那么最终保留两条件的重合部分−2<x≤4。x>5且x<1没有共同值。解不等式组不是把两段范围拼成全部，而是找交集，也就是同时满足每一条的值。"
      },
      {
        "type": "应用",
        "title": "实际问题还要检查整数与单位",
        "text": "一次活动预算不超过50元，固定材料费14元，每份小材料6元。设份数n，14+6n≤50得n≤6。实际n是非负整数，因此最多6份。若算出n≤6.5，最多也只能买6份，不能四舍五入成7份。"
      },
      {
        "type": "方法与条件",
        "title": "去分母同样要检查符号",
        "text": "解含分母为正的数字的不等式，可两边乘同一正数去分母，方向不变。若分母含未知数，符号可能不确定，不能未经分类就直接乘过去。初学先处理明确数值分母，并把乘除时的数的正负写清。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "请在纸上画数轴，分别表示x≥−1与x<3，再用不同记号找重合部分。挑一个端点、一个范围内的分数和一个范围外的数逐一代入。没有自动画数轴或判范围的控件。"
    },
    "reflection": "用一个数轴例子解释：为什么不等式组要找重合部分？再解释乘负数后为什么必须反向。",
    "method": "代入检验",
    "questions": [
      {
        "id": "inequalities-q1",
        "prompt": "“某次用时t不超过20分钟”应写作什么？",
        "options": [
          {
            "id": "a",
            "text": "t≤20"
          },
          {
            "id": "b",
            "text": "t<20"
          },
          {
            "id": "c",
            "text": "t≥20"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "“不超过”包括刚好等于。",
        "explanation": "不超过20表示小于或等于20，因此是t≤20。"
      },
      {
        "id": "inequalities-q2",
        "prompt": "已知a<b，两边同时乘−2后，正确关系是什么？",
        "options": [
          {
            "id": "b",
            "text": "−2a=−2b"
          },
          {
            "id": "c",
            "text": "−2a>−2b"
          },
          {
            "id": "a",
            "text": "−2a<−2b"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "同乘负数需要反向。",
        "explanation": "乘以负数会颠倒大小次序，所以−2a>−2b。"
      },
      {
        "id": "inequalities-q3",
        "prompt": "解不等式5−2x>11，得到什么？",
        "options": [
          {
            "id": "c",
            "text": "x>−3"
          },
          {
            "id": "b",
            "text": "x<−3"
          },
          {
            "id": "a",
            "text": "x<3"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "先减5，再除以负数。",
        "explanation": "两边减5得−2x>6，再除以−2并反向，得到x<−3。"
      },
      {
        "id": "inequalities-q4",
        "prompt": "同时满足x≥2和x<6的整数有几个？",
        "options": [
          {
            "id": "a",
            "text": "4个"
          },
          {
            "id": "b",
            "text": "5个"
          },
          {
            "id": "c",
            "text": "3个"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "先找共同范围，再列整数。",
        "explanation": "共同范围是2≤x<6，整数为2、3、4、5，共4个。"
      },
      {
        "id": "inequalities-q5",
        "prompt": "解3x−7≤8，得到什么？",
        "options": [
          {
            "id": "c",
            "text": "x≤5"
          },
          {
            "id": "a",
            "text": "x≥5"
          },
          {
            "id": "b",
            "text": "x≤1/3"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "加7后再除以正数3。",
        "explanation": "3x≤15，除以正数不反向，得x≤5。"
      },
      {
        "id": "inequalities-q6",
        "prompt": "租车一次固定收费18元，每小时4元，总费用不超过39元。按整小时计费且小时数为非负整数，最多租几小时？",
        "options": [
          {
            "id": "a",
            "text": "5.25小时"
          },
          {
            "id": "c",
            "text": "6小时"
          },
          {
            "id": "b",
            "text": "5小时"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "先解预算条件，再看整数要求。",
        "explanation": "18+4n≤39得n≤5.25。整小时要求n为非负整数，所以最多5小时。"
      },
      {
        "id": "inequalities-q7",
        "prompt": "数轴上用空心点标出1，并表示它右侧所有点，对应什么范围？",
        "options": [
          {
            "id": "b",
            "text": "x≥1"
          },
          {
            "id": "c",
            "text": "x<1"
          },
          {
            "id": "a",
            "text": "x>1"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "空心表示不包括端点，右侧表示更大。",
        "explanation": "不包括1且在1右侧，因此x>1。"
      },
      {
        "id": "inequalities-q8",
        "prompt": "不等式组x>4、x≤−1的解是什么？",
        "options": [
          {
            "id": "b",
            "text": "−1≤x<4"
          },
          {
            "id": "a",
            "text": "x>4或x≤−1"
          },
          {
            "id": "c",
            "text": "没有同时满足的实数"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "两条要求要同时满足。",
        "explanation": "大于4的数不可能同时小于或等于−1，两段没有重合，所以无解。"
      }
    ],
    "sourceScope": "通用七下知识结构，待用户教材逐页映射",
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "coverageTopics": [
      "符号与解的范围",
      "同加同减",
      "正负数乘除与反向依据",
      "一元一次不等式求解",
      "数轴空实端点",
      "不等式组交集",
      "整数实际解",
      "去分母符号条件"
    ],
    "methods": {
      "explainPrompt": "用一个数轴例子解释：为什么不等式组要找重合部分？再解释乘负数后为什么必须反向。",
      "cuePrompts": [
        "学习不等式与不等式组时，最容易遗漏的条件是什么？",
        "请写一条关键关系，再举一个需要检查边界的例子。"
      ],
      "reviewPrompts": [
        "不看资料，用一个数轴例子解释：为什么不等式组要找重合部分？再解释乘负数后为什么必须反向。",
        "请换一个例子应用，再核对条件与结果。"
      ]
    }
  },
  {
    "id": "sampling",
    "title": "收集数据：调查谁，怎样选",
    "version": "0.1.0",
    "why": "想了解全校学生的情况，不一定每次都能调查每个人。但只问身边几个熟人，也可能得到偏向某一群体的结果。调查开始前就要说清研究对象与选择方法。",
    "steps": [
      {
        "type": "目标与定义",
        "title": "总体、个体、样本分别指谁",
        "text": "若问题是“全校七年级学生每天到校方式”，总体是全校七年级学生这一群体，个体是其中每一名学生。实际调查的部分学生组成样本，样本中的人数叫样本容量。先确定对象范围，再选择记录的特征，不能把别的年级混进来又不说明。"
      },
      {
        "type": "方法",
        "title": "全面调查与抽样调查",
        "text": "调查总体中的每一个对象，叫全面调查；从总体中选取一部分对象调查，叫抽样调查。对象少、要求逐个准确掌握时可全面调查。对象很多、时间成本高，或检测会损坏物品时，可能需要抽样。抽样不等于随便挑几个人。"
      },
      {
        "type": "设计",
        "title": "让不同对象有合理的被选机会",
        "text": "从完整名单中随机抽取，可减少只选某类学生带来的偏差。若各班情况不同，可考虑各班按人数比例选取，且班内采用合理随机方式。随机抽样降低选择偏差，不保证某一次样本恰好与总体完全一样。"
      },
      {
        "type": "反例",
        "title": "样本大也可能选偏",
        "text": "只在篮球队调查身高，即使问了很多队员，也难代表全校；只让愿意参加的人回复，回复者也可能与其他人不同。选择方式偏向某类人造成的偏差，不能简单靠增加同类样本数量消除。"
      },
      {
        "type": "记录与质量",
        "title": "问题和分类要一致",
        "text": "同一问题要使用相同时间范围、单位与分类。例如“昨天怎样到校”与“平时主要怎样到校”不是同一问法；步行接公交要事先规定按主要方式还是允许多选。保留未回答数量，不把空白当成0或“没有”。"
      },
      {
        "type": "检查与边界",
        "title": "结果要连同来历一起说",
        "text": "汇总时说明总体、样本怎样选、实际回答多少、未回答多少、调查时间及可能限制。样本结果提供线索，不自动证明总体每个人都如此。涉及少量对象的活动也可以先做小规模试问，检查孩子是否理解同一问题。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "请设计一个“本班每天阅读时长”的小调查，但先不用真的收集个人信息。写清“阅读”包括什么、统计哪一天、单位是什么、如何对待没回答，再请一位同学或家人试读题目，看看有没有两种理解。本页不自动发问卷。"
    },
    "reflection": "如果样本有100人，就一定比20人的样本更能代表总体吗？说明你还要检查什么。",
    "method": "提问与轻笔记",
    "questions": [
      {
        "id": "sampling-q1",
        "prompt": "要了解全校七年级学生的睡眠情况，调查其中60名学生。样本容量是多少？",
        "options": [
          {
            "id": "a",
            "text": "60"
          },
          {
            "id": "c",
            "text": "60名学生的睡眠时长之和"
          },
          {
            "id": "b",
            "text": "全校七年级人数"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "容量数的是样本中的对象个数。",
        "explanation": "样本由60名学生组成，样本容量为60，不是时间总和。"
      },
      {
        "id": "sampling-q2",
        "prompt": "学校要给每名报名学生安排座位，必须知道每个人是否参加。优先选择什么调查？",
        "options": [
          {
            "id": "a",
            "text": "只问一个班再推断每个人"
          },
          {
            "id": "b",
            "text": "只问愿意回复的几人"
          },
          {
            "id": "c",
            "text": "对全部报名学生逐一确认"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "目标是逐个安排，不能只估计总比例。",
        "explanation": "需要了解每名对象的情况，全面逐一确认更符合这个目标。"
      },
      {
        "id": "sampling-q3",
        "prompt": "估计全校学生主要到校方式，哪个抽样方案相对合理？",
        "options": [
          {
            "id": "b",
            "text": "从全校完整学生名单中随机抽取"
          },
          {
            "id": "a",
            "text": "只问住得最近的学生"
          },
          {
            "id": "c",
            "text": "只问校门口骑车棚里的学生"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "检查是否偏向某一种到校方式。",
        "explanation": "从完整名单随机抽取可减少刻意偏向，另外两种选择会偏向骑车或近距离学生。"
      },
      {
        "id": "sampling-q4",
        "prompt": "只在美术社团问500人是否喜欢绘画，能用增加社团内人数消除代表全校时的选择偏差吗？",
        "options": [
          {
            "id": "a",
            "text": "不能，选择范围本身偏向爱好绘画的人"
          },
          {
            "id": "b",
            "text": "能，人数超过100就一定代表全校"
          },
          {
            "id": "c",
            "text": "能，全部答案相同就没有偏差"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "样本怎么来，比单纯多少人还重要。",
        "explanation": "社团成员可能本来更喜欢绘画，继续增加同类对象不解决选择范围偏差。"
      },
      {
        "id": "sampling-q5",
        "prompt": "抽查一批灯泡中的40只，检测使用寿命。为什么适合考虑抽样？",
        "options": [
          {
            "id": "c",
            "text": "完整寿命测试耗时，且会消耗被测灯泡"
          },
          {
            "id": "a",
            "text": "抽样一定得出完全准确的寿命"
          },
          {
            "id": "b",
            "text": "只要选包装最漂亮的灯泡就可靠"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "比较全面检测的成本与损耗。",
        "explanation": "寿命检测时间长并消耗样品，抽样可降低成本，但应合理选样并承认估计有误差。"
      },
      {
        "id": "sampling-q6",
        "prompt": "一份问卷有20人没有回答运动时长。汇总时应怎样处理？",
        "options": [
          {
            "id": "c",
            "text": "全部当作没有运动"
          },
          {
            "id": "b",
            "text": "单列未回答情况，不擅自把它们记为0"
          },
          {
            "id": "a",
            "text": "全部补成本班平均时长且不说明"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "不知道与确实为0不是同一件事。",
        "explanation": "未回答的真实数值未知，应记录缺失并说明统计依据，不能默默填0或平均数。"
      },
      {
        "id": "sampling-q7",
        "prompt": "随机抽到的一组学生，与全校男女比例略有不同，这一定说明抽样作弊了吗？",
        "options": [
          {
            "id": "a",
            "text": "不一定，随机样本可能有偶然差异"
          },
          {
            "id": "c",
            "text": "一定，随机不会产生任何误差"
          },
          {
            "id": "b",
            "text": "一定，随机必须完全按总体比例出现"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "随机只规定选择机制，不保证每次完全一样。",
        "explanation": "即使选择合理，具体一次样本仍可能偶然有差异；应检查过程而非仅凭比例不同认定作弊。"
      },
      {
        "id": "sampling-q8",
        "prompt": "两个班调查“阅读时间”，一班包含漫画，另一班不包含。能不说明就直接比较吗？",
        "options": [
          {
            "id": "a",
            "text": "能，因为单位都是分钟"
          },
          {
            "id": "c",
            "text": "不能，统计对象特征的定义不一致"
          },
          {
            "id": "b",
            "text": "能，只要人数相同"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "除了单位，还需统一测量的含义。",
        "explanation": "阅读范围定义不一致会影响结果，需统一口径或明确限制后再比较。"
      }
    ],
    "sourceScope": "通用七下知识结构，待用户教材逐页映射",
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "coverageTopics": [
      "总体个体样本容量",
      "全面与抽样调查",
      "合理随机抽样",
      "选择偏差与自愿回复",
      "统一问法与单位",
      "缺失记录",
      "结果范围与限制"
    ],
    "methods": {
      "explainPrompt": "如果样本有100人，就一定比20人的样本更能代表总体吗？说明你还要检查什么。",
      "cuePrompts": [
        "学习收集数据时，最容易遗漏的条件是什么？",
        "请写一条关键关系，再举一个需要检查边界的例子。"
      ],
      "reviewPrompts": [
        "不看资料，如果样本有100人，就一定比20人的样本更能代表总体吗？说明你还要检查什么。",
        "请换一个例子应用，再核对条件与结果。"
      ]
    }
  },
  {
    "id": "statistical-charts",
    "title": "统计图：让图回答合适的问题",
    "version": "0.1.0",
    "why": "同一份数据可以画成不同图，但不同图突出的关系不一样。选图、标刻度和写结论，都应服务于原来的问题，而不是只追求好看。",
    "steps": [
      {
        "type": "前置与整理",
        "title": "先有数据表，再选图",
        "text": "把记录按明确类别或时间整理成表，写清数量、单位、总数与缺失情况。类别若重叠，要说明能否多选。图不能修补调查对象选偏、单位不一致或记录缺失的问题。"
      },
      {
        "type": "条形图",
        "title": "比较各类别的数量",
        "text": "条形统计图用等宽直条的长度表示数量，适合比较不同类别。例如四种交通方式各有多少人。数量轴应标明刻度与单位，通常从0起；若截断坐标轴，应显著说明，避免小差异被画成巨大差异。"
      },
      {
        "type": "扇形图",
        "title": "比较各部分占整体多少",
        "text": "把一个整体看成100%，各类别互不重叠并且合起来覆盖整体时，可以用扇形图。某类占比=该类数量÷总数量；对应圆心角=占比×360°。一人可选多种爱好的数据，其比例和可能超过100%，不能不加处理就当成一个整体的扇形。"
      },
      {
        "type": "折线图",
        "title": "观察按顺序变化的趋势",
        "text": "折线统计图适合展示随时间等有序变量变化的量，例如一周每天的最高气温。横轴时间间隔与纵轴刻度都要清楚。把没有自然顺序的水果种类连成线，会暗示不存在的连续变化关系。"
      },
      {
        "type": "例子与推导",
        "title": "从表到角度，再反过来查",
        "text": "某次单选调查40人，其中10人选择步行，占10/40=25%，扇形圆心角为0.25×360°=90°。若另一类别为30%，对应角为108°。检查所有百分比和应为100%，所有圆心角和应为360°；四舍五入可能造成小偏差，要说明。"
      },
      {
        "type": "批判阅读",
        "title": "看标题、来源与坐标，不只看形状",
        "text": "两张图的刻度不同，柱子的视觉高度不能直接比较。折线上升不等于变化越来越快，需看相同横向间隔内的增量。比例增加也不一定表示人数增加，还要看总人数有没有改变。"
      },
      {
        "type": "方法与解释",
        "title": "一句结论配一句依据",
        "text": "先说图中明确显示的比较或趋势，再写对应数值及适用范围。例如“本次40名受访者中，步行占25%”，不能改成“全校一定四分之一人步行”。选择图形前先问：我要突出数量、部分比例，还是有序变化？"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "请用假设的单选数据“步行12人、公交18人、骑车6人、其他4人”画一张条形图，再算扇形图的四个圆心角。比较两种图分别容易看出什么。数据仅作画图练习，不冒充真实学校调查；本页没有自动制图功能。"
    },
    "reflection": "你会怎样向同学解释：为什么同一份数据不总是适合随便换成任何统计图？",
    "method": "提问与轻笔记",
    "questions": [
      {
        "id": "statistical-charts-q1",
        "prompt": "想突出一周每天气温怎样变化，通常选什么图？",
        "options": [
          {
            "id": "a",
            "text": "折线统计图"
          },
          {
            "id": "c",
            "text": "用没有刻度的装饰图"
          },
          {
            "id": "b",
            "text": "只画无时间顺序的扇形图"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "时间有顺序，关注变化趋势。",
        "explanation": "折线图能按时间顺序展示气温变化，但仍需标清时间、温度与刻度。"
      },
      {
        "id": "statistical-charts-q2",
        "prompt": "想比较三个社团各有多少成员，哪一种图最直接？",
        "options": [
          {
            "id": "c",
            "text": "条形统计图"
          },
          {
            "id": "a",
            "text": "把社团名称按字长画圆"
          },
          {
            "id": "b",
            "text": "不标人数的折线"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "目标是比较分类数量。",
        "explanation": "条形图通过同一数量刻度比较各类别人数。"
      },
      {
        "id": "statistical-charts-q3",
        "prompt": "一个扇形表示总数的15%，它的圆心角是多少？",
        "options": [
          {
            "id": "a",
            "text": "24°"
          },
          {
            "id": "b",
            "text": "54°"
          },
          {
            "id": "c",
            "text": "15°"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "把百分比乘完整一周的角度。",
        "explanation": "0.15×360°=54°，不能把百分数直接当角度。"
      },
      {
        "id": "statistical-charts-q4",
        "prompt": "一次可多选的兴趣调查中，选择三种兴趣的人数占比分别为70%、50%、40%。能直接把这三项画成完整圆的三个扇形吗？",
        "options": [
          {
            "id": "b",
            "text": "能，只要每项都小于100%"
          },
          {
            "id": "c",
            "text": "能，把同一个人重复画在圆里即可"
          },
          {
            "id": "a",
            "text": "不能，类别重叠，合计160%不是互不重叠的整体划分"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "完整扇形图需要各部分合成一个整体。",
        "explanation": "多人可重复选择使类别重叠，三个比例之和160%，不能直接当作同一个圆的互斥部分。"
      },
      {
        "id": "statistical-charts-q5",
        "prompt": "某扇形圆心角为72°，占整体百分之几？",
        "options": [
          {
            "id": "c",
            "text": "20%"
          },
          {
            "id": "b",
            "text": "5%"
          },
          {
            "id": "a",
            "text": "72%"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "用部分角度除以360°。",
        "explanation": "72÷360=0.2，即20%。"
      },
      {
        "id": "statistical-charts-q6",
        "prompt": "甲班去年步行比例20%，今年25%。能只据此断言今年步行人数更多吗？",
        "options": [
          {
            "id": "a",
            "text": "能，因为25−20=5人"
          },
          {
            "id": "c",
            "text": "能，因为百分比增大"
          },
          {
            "id": "b",
            "text": "不能，还需要两年的总人数"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "比例要乘总数才得到人数。",
        "explanation": "总人数可能改变。比例提高并不能单独确定人数增加，且百分点差不是人数。"
      },
      {
        "id": "statistical-charts-q7",
        "prompt": "两张条形图中，柱子看起来一样高，但纵轴每格分别表示2人和10人。能说人数一样吗？",
        "options": [
          {
            "id": "b",
            "text": "能，柱子高度相同即可"
          },
          {
            "id": "a",
            "text": "不能，要看刻度与数据"
          },
          {
            "id": "c",
            "text": "能，只要颜色相同"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "图的视觉高度必须与刻度一起读。",
        "explanation": "不同刻度下同样高度可能代表不同数量，不能脱离坐标刻度比较。"
      },
      {
        "id": "statistical-charts-q8",
        "prompt": "某折线图在相等的时间间隔内都上升3个单位，正确的描述是什么？",
        "options": [
          {
            "id": "c",
            "text": "每个相等时间间隔增加量相同"
          },
          {
            "id": "b",
            "text": "一定说明总体人数翻倍"
          },
          {
            "id": "a",
            "text": "每次增加都越来越多"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "比较的是每段增量，不只是都在上升。",
        "explanation": "每个相等时间间隔内都增加3个单位，这些间隔内的平均增加量相同；不能据此推断间隔内部每一刻的变化速度。仅上升也不表示增加量越来越多。"
      }
    ],
    "sourceScope": "通用七下知识结构，待用户教材逐页映射",
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "coverageTopics": [
      "数据表与选择图形",
      "条形图数量比较",
      "扇形图比例与角度",
      "折线图趋势",
      "多选重叠限制",
      "刻度与截断",
      "比例人数区别"
    ],
    "methods": {
      "explainPrompt": "你会怎样向同学解释：为什么同一份数据不总是适合随便换成任何统计图？",
      "cuePrompts": [
        "学习统计图时，最容易遗漏的条件是什么？",
        "请写一条关键关系，再举一个需要检查边界的例子。"
      ],
      "reviewPrompts": [
        "不看资料，你会怎样向同学解释：为什么同一份数据不总是适合随便换成任何统计图？",
        "请换一个例子应用，再核对条件与结果。"
      ]
    }
  },
  {
    "id": "histograms",
    "title": "频数与直方图：数据集中在哪一段",
    "version": "0.1.0",
    "why": "身高、用时等数值很多时，逐个列出不容易看出分布。分组可以看出哪里集中，但分组边界和组距也会影响我们读到的信息。",
    "steps": [
      {
        "type": "定义",
        "title": "频数与频率分别数什么",
        "text": "把数据按规则分组，落入某组的数据个数叫这一组的频数。频率=这一组频数÷全部有效数据个数。频数是个数，频率是比例。各组不重叠、不遗漏时，频数和等于有效数据总数，频率和等于1。"
      },
      {
        "type": "准备",
        "title": "看最大值与最小值，再选组距",
        "text": "先列明数据、单位和有效个数，找出最大值与最小值，它们的差叫极差。组距是每组区间的宽度。初学先用相等组距，选取覆盖所有数据的分组；不能把极差小于一组宽就当作没有数据。"
      },
      {
        "type": "边界与约定",
        "title": "临界值只能记在一组",
        "text": "例如分为5≤x<10、10≤x<15，数10只归第二组。用“左端包括、右端不包括”的一致规则，可避免重复。若最后一组特别包含右端点，需要明确写出。分组应覆盖全部数据，不能让最大值落在未包含的边界外。"
      },
      {
        "type": "表示",
        "title": "等组距直方图怎样读",
        "text": "横轴表示数值区间，纵轴标频数时，等宽矩形的高度表示每组个数，相邻区间的矩形通常紧挨着。它与用分离直条表示不同类别的条形图不同。本单元只画等组距、纵轴为频数的直方图；组距不等时不能照搬“高度就是频数”的读法。"
      },
      {
        "type": "例子与核对",
        "title": "先划记，再检查总数",
        "text": "数据为6、7、9、10、12、14，分为5≤x<10与10≤x<15时，两组频数分别为3、3，频率各为3/6=0.5。逐个划记可减少漏数，最后检查3+3=6与0.5+0.5=1。数据10应在第二组。"
      },
      {
        "type": "解释与限制",
        "title": "直方图会丢掉组内细节",
        "text": "频数最高的一组说明这段包含的数据最多，不保证组中点就是每个数据的值。只看分组图通常不能恢复原始每个数，也不能确定准确平均数。改变组距可能让分布看起来更细或更粗，要根据问题合理选择并公开规则。"
      },
      {
        "type": "方法",
        "title": "把分布结论限定在观察范围",
        "text": "可以说“本次样本的多数用时落在这一组”，再附频数与样本量。不能把一个样本的最高柱直接当作全校唯一的典型数值。极端值与漏报也要回到原始记录核对。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "请用练习数据2、4、5、5、7、8、9、11，在纸上按0≤x<4、4≤x<8、8≤x<12分组。先预测哪组最高，再逐个划记并画等宽矩形。检查4、8等边界只被数一次。没有自动生成直方图的控件。"
    },
    "reflection": "为什么直方图里的最高一组，不能告诉你每个同学的准确数值？分组边界又为什么必须写清？",
    "method": "画图或操作",
    "questions": [
      {
        "id": "histograms-q1",
        "prompt": "一组共有30个有效数据，某区间有6个数据。这个区间的频率是多少？",
        "options": [
          {
            "id": "a",
            "text": "0.2"
          },
          {
            "id": "c",
            "text": "5"
          },
          {
            "id": "b",
            "text": "6"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "频率是该组个数除以总个数。",
        "explanation": "6÷30=0.2；6是频数，频率是比例。"
      },
      {
        "id": "histograms-q2",
        "prompt": "数据按10≤x<20、20≤x<30分组，数值20应放在哪里？",
        "options": [
          {
            "id": "c",
            "text": "第二组"
          },
          {
            "id": "b",
            "text": "两组都放"
          },
          {
            "id": "a",
            "text": "第一组"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "检查哪组包括左端，哪组不包括右端。",
        "explanation": "第一组要求x<20，不包括20；第二组包括20，所以只归第二组。"
      },
      {
        "id": "histograms-q3",
        "prompt": "数据为1、3、4、4、6、9，分为0≤x<5与5≤x<10。第一组频数为多少？",
        "options": [
          {
            "id": "b",
            "text": "4"
          },
          {
            "id": "c",
            "text": "3"
          },
          {
            "id": "a",
            "text": "5"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "逐个划记，重复出现的4要分别计数。",
        "explanation": "第一组有1、3、4、4，共4个；每个数据记录都计一次。"
      },
      {
        "id": "histograms-q4",
        "prompt": "某等组距频数直方图最高的一组是160≤身高<165厘米。能确定样本中每个人都高162.5厘米吗？",
        "options": [
          {
            "id": "b",
            "text": "能，组中点就等于所有身高"
          },
          {
            "id": "c",
            "text": "能，只要最高柱为这一组"
          },
          {
            "id": "a",
            "text": "不能，这一组只限定范围，不是每人都等于中点"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "分组会隐藏组内具体数值。",
        "explanation": "该组可能含160、161、164等不同值，组中点不是每人的真实身高，更不是整个样本每人的身高。"
      },
      {
        "id": "histograms-q5",
        "prompt": "10个有效数据分成三组，前两组频数是2与5，第三组频数是多少？",
        "options": [
          {
            "id": "b",
            "text": "10"
          },
          {
            "id": "a",
            "text": "7"
          },
          {
            "id": "c",
            "text": "3"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "完整且互不重叠的分组频数和等于总数。",
        "explanation": "10−2−5=3，三组频数相加应为10。"
      },
      {
        "id": "histograms-q6",
        "prompt": "画等组距、纵轴为频数的直方图时，某组柱高为8。这里的8表示什么？",
        "options": [
          {
            "id": "a",
            "text": "该区间宽度一定是8"
          },
          {
            "id": "c",
            "text": "该组每个数据都等于8"
          },
          {
            "id": "b",
            "text": "该区间有8个数据"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "分清横轴区间与纵轴个数。",
        "explanation": "本图约定纵轴是频数，所以柱高8表示该组包含8个数据。"
      },
      {
        "id": "histograms-q7",
        "prompt": "样本数据最小值为12，最大值为37，极差是多少？",
        "options": [
          {
            "id": "b",
            "text": "49"
          },
          {
            "id": "a",
            "text": "25"
          },
          {
            "id": "c",
            "text": "12"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "极差用最大值减最小值。",
        "explanation": "37−12=25，极差描述整体数据的跨度。"
      },
      {
        "id": "histograms-q8",
        "prompt": "统计结果各组频数合计比原始有效数据数多1，首先应检查什么？",
        "options": [
          {
            "id": "b",
            "text": "把样本总数改大1且不核对"
          },
          {
            "id": "a",
            "text": "直接把最高组减1就行"
          },
          {
            "id": "c",
            "text": "分组边界是否重复计数，或划记是否重复"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "先回到记录找原因，不随意修数字。",
        "explanation": "多1可能来自边界数据进了两组或重复划记，应逐项核对，不能任意修改来凑总数。"
      }
    ],
    "sourceScope": "通用七下知识结构，待用户教材逐页映射",
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "coverageTopics": [
      "频数频率",
      "极差组距",
      "分组边界",
      "等组距频数直方图",
      "划记与总数检查",
      "组内细节丢失",
      "样本分布的解释范围"
    ],
    "methods": {
      "explainPrompt": "为什么直方图里的最高一组，不能告诉你每个同学的准确数值？分组边界又为什么必须写清？",
      "cuePrompts": [
        "学习频数与直方图时，最容易遗漏的条件是什么？",
        "请写一条关键关系，再举一个需要检查边界的例子。"
      ],
      "reviewPrompts": [
        "不看资料，为什么直方图里的最高一组，不能告诉你每个同学的准确数值？分组边界又为什么必须写清？",
        "请换一个例子应用，再核对条件与结果。"
      ]
    }
  },
  {
    "id": "sample-estimation",
    "title": "用样本估计总体：怎么算，也要怎样说",
    "version": "0.1.0",
    "why": "合理抽样能让我们用一部分数据了解更大群体。但估计不是逐个查明，计算方法与不确定性都需要说明，不能把近似值说成确定事实。",
    "steps": [
      {
        "type": "前置与范围",
        "title": "估计先依赖合理样本",
        "text": "先说明总体是谁、抽了谁、怎样抽、实际有多少有效数据。样本的选择方式与问题相关时，比例可能偏向某一类。随机抽样可减少人为选择偏差，但一次样本仍可能有偶然差异，不能先假定完全代表总体。"
      },
      {
        "type": "计算与条件",
        "title": "用样本频率估计总体比例",
        "text": "当样本选择合理、数量合适时，可用样本某类频率，估计总体中这类的比例。样本频率=样本中该类数量÷有效样本量。例如随机抽取50人，其中18人步行，样本步行频率为18/50=0.36，可把36%作为总体比例的一个估计。"
      },
      {
        "type": "应用",
        "title": "用估计比例求估计人数",
        "text": "若总体有800人，用前面36%估计步行人数，得800×0.36=288人。应写“大约288人”，并注明采用这次样本比例估计。整数结果不代表逐人确认，不能因为算出了整数就把“大约”删掉。"
      },
      {
        "type": "解释与边界",
        "title": "估计的变化不一定是总体变化",
        "text": "重新抽一组样本，估计比例可能略有不同。差异可能来自抽样偶然性、选择方式变化、调查时间变化或总体变化；只看两个样本比例，不能马上断言某种原因。不要随意填上没有计算依据的误差范围。"
      },
      {
        "type": "检查与反例",
        "title": "大样本不一定纠正偏差",
        "text": "只调查经常在食堂吃饭的人，估计全校食堂满意度，即使人数很多，也可能漏掉不愿去食堂的人。应检查被遗漏的群体，以及未回复者是否有共同特点。更大的偏样本不自动变成更可靠的总体估计。"
      },
      {
        "type": "方法与报告",
        "title": "结论附上依据与限制",
        "text": "报告可写“本次从完整名单随机选取50人，18人步行；据此估计全体步行比例约36%，实际比例可能不同”。把来源、样本量、计算与限制连起来。若抽样方式明显不合适，可以只描述受访者，不把结论推广到总体。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "请在纸上用“假设总体600人，随机样本40人，其中14人选择步行”的练习数据算估计比例和人数。然后把“随机样本”改成“只在步行入口询问”，再判断是否仍适合推广。数据只供推理，不是真实校内结论。"
    },
    "reflection": "什么时候你愿意用样本比例估计全校情况？什么时候只报告受访者情况更稳妥？",
    "method": "提问与轻笔记",
    "questions": [
      {
        "id": "sample-estimation-q1",
        "prompt": "用样本估计总体前，先要检查什么？",
        "options": [
          {
            "id": "c",
            "text": "能否把答案算成整数"
          },
          {
            "id": "b",
            "text": "数字是否好看"
          },
          {
            "id": "a",
            "text": "样本是否来自目标总体且选择方式合理"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "计算正确不能修复选样偏差。",
        "explanation": "先核查总体范围、抽样与缺失情况；只有这些合适时，推广才有合理依据。"
      },
      {
        "id": "sample-estimation-q2",
        "prompt": "用样本比例估计出的全校人数，应怎样表达？",
        "options": [
          {
            "id": "b",
            "text": "只要乘法没错就保证精确"
          },
          {
            "id": "a",
            "text": "写“已经逐一确认”"
          },
          {
            "id": "c",
            "text": "写“大约”，并说明样本与方法"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "估计与全面点数不是同一过程。",
        "explanation": "样本估计有不确定性，应说明依据并用近似表达，不能冒充逐个确认。"
      },
      {
        "id": "sample-estimation-q3",
        "prompt": "合理随机样本中，80人里有28人骑车。样本骑车比例为多少？",
        "options": [
          {
            "id": "c",
            "text": "28%"
          },
          {
            "id": "a",
            "text": "80%"
          },
          {
            "id": "b",
            "text": "35%"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "用该类人数除以样本总人数。",
        "explanation": "28÷80=0.35，即35%。"
      },
      {
        "id": "sample-estimation-q4",
        "prompt": "全校1000人，合理样本中25%步行。按此比例估计，步行人数约多少？",
        "options": [
          {
            "id": "b",
            "text": "25人"
          },
          {
            "id": "c",
            "text": "750人"
          },
          {
            "id": "a",
            "text": "250人"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "总体数乘样本频率。",
        "explanation": "1000×25%=250，因此估计约250人，实际人数可能不同。"
      },
      {
        "id": "sample-estimation-q5",
        "prompt": "从一批产品合理抽取120件，发现6件不合格。样本不合格频率为多少？",
        "options": [
          {
            "id": "b",
            "text": "20%"
          },
          {
            "id": "c",
            "text": "5%"
          },
          {
            "id": "a",
            "text": "6%"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "频率分母是有效样本量120。",
        "explanation": "6÷120=0.05，即5%，不是直接把6人或6件写成6%。"
      },
      {
        "id": "sample-estimation-q6",
        "prompt": "两次独立随机样本得到步行比例30%与32%，能仅凭这两数认定全校步行比例提高了2个百分点吗？",
        "options": [
          {
            "id": "c",
            "text": "能，两个样本就等于全面调查"
          },
          {
            "id": "a",
            "text": "能，因为两个比例都小于一半"
          },
          {
            "id": "b",
            "text": "不能，差异也可能来自抽样偶然性"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "区分样本变化与总体变化。",
        "explanation": "样本结果可能有偶然差异，还要考虑抽样方式、样本量和调查时间，不能只凭两数断言总体变化。"
      },
      {
        "id": "sample-estimation-q7",
        "prompt": "一次合理抽样估计某校800人中约有120人参加晨跑，估计比例是多少？",
        "options": [
          {
            "id": "c",
            "text": "6.67%"
          },
          {
            "id": "b",
            "text": "12%"
          },
          {
            "id": "a",
            "text": "15%"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "估计人数除以总体人数。",
        "explanation": "120÷800=0.15，即15%；这里人数本身是估计值，相应比例也不是逐人核实。"
      },
      {
        "id": "sample-estimation-q8",
        "prompt": "只调查校篮球队队员的运动时长，最稳妥的报告是哪一种？",
        "options": [
          {
            "id": "a",
            "text": "全校每个学生都与队员一样"
          },
          {
            "id": "c",
            "text": "先描述这次受访队员，说明不宜直接代表全校"
          },
          {
            "id": "b",
            "text": "把队员人数扩大十倍就能代表全校"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "队员与其他学生的运动习惯可能不同。",
        "explanation": "这个样本选择偏向篮球队，应限定结论范围，不能直接推广到全校。"
      }
    ],
    "sourceScope": "通用七下知识结构，待用户教材逐页映射",
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "coverageTopics": [
      "样本代表性前提",
      "样本频率估计比例",
      "比例估计人数",
      "抽样偶然性",
      "偏样本与缺失",
      "依据与不确定性报告"
    ],
    "methods": {
      "explainPrompt": "什么时候你愿意用样本比例估计全校情况？什么时候只报告受访者情况更稳妥？",
      "cuePrompts": [
        "学习用样本估计总体时，最容易遗漏的条件是什么？",
        "请写一条关键关系，再举一个需要检查边界的例子。"
      ],
      "reviewPrompts": [
        "不看资料，什么时候你愿意用样本比例估计全校情况？什么时候只报告受访者情况更稳妥？",
        "请换一个例子应用，再核对条件与结果。"
      ]
    }
  },
  {
    "id": "data-project",
    "title": "数据小项目：从一个问题走到有依据的结论",
    "version": "0.1.0",
    "why": "真正的数据探究不只是画图。我们要先提出可以调查的问题，实际收集和整理，再检查结论有没有超出数据支持的范围。",
    "steps": [
      {
        "type": "目标与问题",
        "title": "把大问题缩小到能记录",
        "text": "“怎样改善学习”太宽泛，可先改成“本周我每次独立学习前，是否先写出一个具体目标”。先明确对象、时间、要记录的动作与单位。探究可以从自己的记录开始，不需要收集别人的姓名或敏感信息。"
      },
      {
        "type": "设计与预测",
        "title": "先写方法，再接触结果",
        "text": "在纸上设计记录表：日期、计划任务、是否先写目标、是否完成、遇到的困难。先预测哪种做法可能有帮助，并写下依据；这只是猜想。不要看完结果后把猜想改成自己一开始就知道。"
      },
      {
        "type": "实施",
        "title": "用统一规则留下原始记录",
        "text": "按事先约定记录真实情况，不记得的标“不清楚”，漏记的标“缺失”，不能为了好看编造。比如“完成”可以定义为已做完约定的小任务，不能每天改变标准。计时器运行不等于专注，任务完成也不等于知识掌握。"
      },
      {
        "type": "整理与表示",
        "title": "根据问题选择表与图",
        "text": "先保留原表，再统计有效记录数和各类别数量。比较不同类别可用条形图，观察连续几天的变化可用折线图。一次记录可含多个困难，若分类重叠，不应直接画成各部分合100%的扇形图。"
      },
      {
        "type": "解释与限制",
        "title": "同时变化不等于一个导致另一个",
        "text": "如果“先写目标”的几天完成任务更多，可以说这次记录中两者同时出现；不能直接断定写目标是唯一原因。当天任务难度、休息和是否有人帮助也可能不同。样本小、时间短时，先保留不确定，继续改进记录。"
      },
      {
        "type": "报告与反思",
        "title": "结论要能回到原始数据",
        "text": "简短报告按“问题—方法—结果—限制—下一步”组织。写清有效记录与缺失，不只选支持自己想法的几天。下一步可以调整一个因素再观察，或改进不清楚的定义；不能承诺短期记录证明成绩提高或习惯养成。"
      },
      {
        "type": "实践任务",
        "title": "做一份能被复查的小报告",
        "text": "选择一周内可执行的小问题，先计划再记录，至少保留原始表、一个合适图表和一段有依据的解释。可以先与家长商量可行性。这里没有自动收集或自动证明效果的功能，纸笔记录后可把关键发现写进学习笔记，仍待核对。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "选一个只涉及自己的、三到七天能记录的小问题。先写问题与记录规则，再画空表；实际记录后用图表说明发现。若暂时没有真实数据，就保留空表并标“尚未收集”，不要用练习数据当作已发生的学习进步。"
    },
    "reflection": "你的小项目中，哪一句是数据直接支持的，哪一句仍只是猜想？下一次怎样收集更有用的记录？",
    "method": "提问与轻笔记",
    "questions": [
      {
        "id": "data-project-q1",
        "prompt": "“本周我有几次学习前写出具体目标？”与“怎样成为优秀的人？”相比，哪个更适合这次小数据项目？",
        "options": [
          {
            "id": "a",
            "text": "前者，范围与可记录动作更明确"
          },
          {
            "id": "b",
            "text": "后者，因为越大越容易统计"
          },
          {
            "id": "c",
            "text": "两者都只需画一条线就能回答"
          }
        ],
        "answer": "a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "可调查的问题要明确对象、时间与可记录量。",
        "explanation": "前者有明确时间与行为，能设计记录表；后者范围过大且评价含义不清。"
      },
      {
        "id": "data-project-q2",
        "prompt": "一天忘记记录任务是否完成，应怎样填写？",
        "options": [
          {
            "id": "c",
            "text": "标记缺失或不清楚"
          },
          {
            "id": "a",
            "text": "随便填完成"
          },
          {
            "id": "b",
            "text": "自动填未完成且当成确定事实"
          }
        ],
        "answer": "c",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "不知道不能冒充知道。",
        "explanation": "漏记时真实情况未知，应保留缺失，不能编造成完成或确定未完成。"
      },
      {
        "id": "data-project-q3",
        "prompt": "一周7次计划中有6次留下有效完成情况，3次完成。有效记录中的完成比例是多少？",
        "options": [
          {
            "id": "a",
            "text": "100%"
          },
          {
            "id": "b",
            "text": "50%"
          },
          {
            "id": "c",
            "text": "约42.9%，并假装没有缺失"
          }
        ],
        "answer": "b",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "题目明确分母是有效记录数。",
        "explanation": "3÷6=50%。报告还要写明另1次缺失，不能默默把它当作未完成。"
      },
      {
        "id": "data-project-q4",
        "prompt": "先写目标的两天完成更多任务，能由此断言“写目标一定让每个孩子成绩提高”吗？",
        "options": [
          {
            "id": "a",
            "text": "不能，记录小且可能有任务难度等其他因素"
          },
          {
            "id": "b",
            "text": "能，因为有两个例子"
          },
          {
            "id": "c",
            "text": "能，只要画成折线图"
          }
        ],
        "answer": "a",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "同时出现与普遍因果结论有距离。",
        "explanation": "两天记录不能说明唯一原因，更不能推广到所有孩子的成绩变化；需保留限制与继续观察。"
      },
      {
        "id": "data-project-q5",
        "prompt": "按日期记录每天做了多少次自我检查，想看一周的变化，应优先选择什么表示？",
        "options": [
          {
            "id": "c",
            "text": "标明日期与次数的折线图或按日表格"
          },
          {
            "id": "a",
            "text": "把日期当成无关类别且不标顺序"
          },
          {
            "id": "b",
            "text": "只写最终一天，不保留其他天"
          }
        ],
        "answer": "c",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "保留时间顺序才能讨论变化。",
        "explanation": "按日表或折线图可展示有序变化，仍需说明记录定义和缺失情况。"
      },
      {
        "id": "data-project-q6",
        "prompt": "项目结果不支持原先猜想，应该怎样做？",
        "options": [
          {
            "id": "a",
            "text": "改写原始数据直到支持猜想"
          },
          {
            "id": "c",
            "text": "删掉不支持的日子"
          },
          {
            "id": "b",
            "text": "保留结果，检查方法并调整解释"
          }
        ],
        "answer": "b",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "探究目的在于了解，而不是维护预设答案。",
        "explanation": "真实记录与不同结果都有价值，应核对方法和限制，不能删改事实以凑结论。"
      },
      {
        "id": "data-project-q7",
        "prompt": "一份报告只写“这个方法很好”，没有数据与过程，主要缺什么？",
        "options": [
          {
            "id": "a",
            "text": "能回到原始记录的依据与适用限制"
          },
          {
            "id": "c",
            "text": "更鲜艳的背景色"
          },
          {
            "id": "b",
            "text": "更多夸奖的话"
          }
        ],
        "answer": "a",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "结论要说清据什么得来。",
        "explanation": "应补充问题、方法、有效数据、观察结果与限制，才能让别人复查结论。"
      },
      {
        "id": "data-project-q8",
        "prompt": "七天内每次学习都开着计时器，能仅据此证明已经形成良好习惯并掌握知识吗？",
        "options": [
          {
            "id": "a",
            "text": "能，七天是统一标准"
          },
          {
            "id": "c",
            "text": "不能，计时和短期记录不足以证明这两件事"
          },
          {
            "id": "b",
            "text": "能，只要计时总数超过一小时"
          }
        ],
        "answer": "c",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "记录行为、理解与长期习惯需要不同证据。",
        "explanation": "计时器只作提醒，运行不等于专注；知识需解释与应用核查，习惯也不能靠七天记录直接认证。"
      }
    ],
    "sourceScope": "通用七下知识结构，待用户教材逐页映射",
    "review": {
      "independent": true,
      "report": "docs/grade7-new-content-review.md",
      "note": "由主Agent独立于课程作者逐单元检查定义、条件、活动和题目，修订见grade7-new-content-review；未做教师审校或学生效果验证。"
    },
    "coverageTopics": [
      "可调查问题",
      "记录规则与预测",
      "真实实施与缺失",
      "表格图形选择",
      "相关与因果区别",
      "报告与复查",
      "自主小项目与效果边界"
    ],
    "methods": {
      "explainPrompt": "你的小项目中，哪一句是数据直接支持的，哪一句仍只是猜想？下一次怎样收集更有用的记录？",
      "cuePrompts": [
        "学习数据小项目时，最容易遗漏的条件是什么？",
        "请写一条关键关系，再举一个需要检查边界的例子。"
      ],
      "reviewPrompts": [
        "不看资料，你的小项目中，哪一句是数据直接支持的，哪一句仍只是猜想？下一次怎样收集更有用的记录？",
        "请换一个例子应用，再核对条件与结果。"
      ]
    }
  },
  {
    "id": "number-line",
    "title": "数轴：用点的位置表示数",
    "version": "0.2.0",
    "why": "温度有零上和零下，收支有收入和支出。数轴可以表示正数、负数和0，还能帮助我们比较两个数、看出它们相差多少。",
    "steps": [
      {
        "type": "约定",
        "title": "画数轴前，先规定三件事",
        "text": "在一条直线上规定原点、正方向和单位长度，就得到一条数轴。原点表示0；这里规定向右为正；每一小格表示1个单位。各小格必须一样长。原点不一定画在纸的正中间。"
      },
      {
        "type": "定义",
        "title": "位置与距离分开说",
        "text": "表示−3的点在原点左侧，离原点3个单位。−3是这个点表示的数，3是它到原点的距离。点可以在原点左侧，但距离不能是负数。"
      },
      {
        "type": "观察与联系",
        "title": "先数格子，再看两点间的距离",
        "text": "例如，表示−3和2的点之间有5个单位长度，所以相距5个单位。学过有理数减法后，也可以计算2−(−3)=5。一般地，两点间的距离等于较大的数减去较小的数。若暂时不会负数减法，可以先在数轴上数单位长度。"
      },
      {
        "type": "边界",
        "title": "零与相同的位置",
        "text": "0 既不是正数也不是负数。两个点重合时，距离为0。向左移动可能到达表示负数的位置，但移动的距离仍不是负数。"
      },
      {
        "type": "推导",
        "title": "为什么右边表示的数更大",
        "text": "规定向右为正之后，沿数轴向右走正的距离，表示的数增加。因此两个不同的数，右边的数比左边的大。比较两个负数时，靠近0的点在右边，所以−2>−7。不要把到原点的距离当成数本身。"
      },
      {
        "type": "操作与检查",
        "title": "分数也能找到自己的位置",
        "text": "在0与1之间平均分成4份，每份是1/4。3/4在0右边第3份；−3/4在0左边第3份。一个单位内有许多位置，不只整数能画在数轴上。若把单位画得更长，纸上的间隔变长，数之间的大小关系不会改变。"
      },
      {
        "type": "联系",
        "title": "把大小关系接到距离",
        "text": "比较−5/2与−2，先在−3与−2之间找出−5/2=−2.5，它在−2左边，因而更小。两点之间相距0.5个单位。比较的结果带有大小方向，距离则是非负的长度。"
      }
    ],
    "explore": {
      "type": "axis",
      "prompt": "先预测：把点从 −3 移到 2，它离原点的距离会一直增加吗？移动后解释变化。"
    },
    "reflection": "描述一个位置为负、距离为正的例子，并说明原点和单位是什么。",
    "questions": [
      {
        "id": "axis-d1",
        "prompt": "数轴上，表示−3和2的两个点相距多少个单位？",
        "options": [
          {
            "id": "0",
            "text": "−5"
          },
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "5"
          }
        ],
        "answer": "2",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "可以沿数轴数单位，也可以用较大数减较小数。",
        "explanation": "从−3到0有3个单位，从0到2有2个单位，所以一共相距3+2=5个单位。学过有理数减法后，也可以算2−(−3)=5。"
      },
      {
        "id": "axis-a1",
        "prompt": "从表示−6的点出发向右走9个单位，终点表示什么数？",
        "options": [
          {
            "id": "0",
            "text": "−15"
          },
          {
            "id": "1",
            "text": "3"
          },
          {
            "id": "2",
            "text": "15"
          }
        ],
        "answer": "1",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "把到0和从0继续走的距离分开。",
        "explanation": "先走6个单位到0，再走3个单位到3，因此终点是3。"
      },
      {
        "id": "axis-t1",
        "prompt": "电梯从地下2层到地上4层，每相邻两层间距相同，楼层编号没有0层。它经过几个层间高度？",
        "options": [
          {
            "id": "0",
            "text": "6"
          },
          {
            "id": "1",
            "text": "5"
          },
          {
            "id": "2",
            "text": "2"
          }
        ],
        "answer": "1",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "先列出经过的楼层，不把缺少的0层补进去。",
        "explanation": "经过−2、−1、1、2、3、4，共5个层间高度。实际楼层编号不是连续整数数轴，必须先核对模型的约定。"
      },
      {
        "id": "axis-r1",
        "prompt": "温度从 −6℃ 到 1℃，上升多少摄氏度？",
        "options": [
          {
            "id": "0",
            "text": "5"
          },
          {
            "id": "1",
            "text": "−7"
          },
          {
            "id": "2",
            "text": "7"
          }
        ],
        "answer": "2",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "比较终点与起点。",
        "explanation": "从−6℃升到0℃，升高6℃；再从0℃升到1℃，升高1℃。一共升高7℃。"
      },
      {
        "id": "axis-r2",
        "prompt": "数轴上两个重合的点，相距多少？",
        "options": [
          {
            "id": "0",
            "text": "0"
          },
          {
            "id": "1",
            "text": "无法确定"
          },
          {
            "id": "2",
            "text": "取决于正方向"
          }
        ],
        "answer": "0",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "重合后还有间隔吗？",
        "explanation": "相同位置之差为 0，方向约定不改变这个结论。"
      },
      {
        "id": "axis-d2",
        "prompt": "点 −3 到原点的距离，与原点到 −3 的距离分别是？",
        "options": [
          {
            "id": "0",
            "text": "3 和 3"
          },
          {
            "id": "1",
            "text": "−3 和 3"
          },
          {
            "id": "2",
            "text": "3 和 −3"
          }
        ],
        "answer": "0",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "交换起点终点会改变长度吗？",
        "explanation": "两个距离都是 3，方向相反不改变长度。"
      },
      {
        "id": "axis-scale",
        "prompt": "同一条数轴上，0到1画成2厘米。表示−1/2和1的点相距多少厘米？",
        "options": [
          {
            "id": "0",
            "text": "1.5厘米"
          },
          {
            "id": "1",
            "text": "3厘米"
          },
          {
            "id": "2",
            "text": "2厘米"
          }
        ],
        "answer": "1",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "先求相隔几个单位，再按单位长度换算。",
        "explanation": "两数相距1.5个单位，每单位2厘米，因此相距3厘米。"
      },
      {
        "id": "number-line-review-extra",
        "prompt": "数轴上A与B都在原点右边，A到原点的距离小于B到原点的距离。哪个结论一定成立？",
        "options": [
          {
            "id": "0",
            "text": "A表示的数更大"
          },
          {
            "id": "1",
            "text": "A表示的数更小"
          },
          {
            "id": "2",
            "text": "两数相反"
          }
        ],
        "answer": "1",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "先说明使用的定义和题目限制，再判断。",
        "explanation": "正数都在原点右侧，A更靠近0，因而在B左侧，表示的数更小。"
      }
    ],
    "method": "画图或操作",
    "review": {
      "independent": true,
      "report": "docs/grade7-enhancements-review.md",
      "note": "由另一Agent独立审查并修正（见grade7-enhancements-review）；未做教师审校或学生效果验证。"
    },
    "sourceScope": "初一通用核心课程；上册依已导入教材目录关联，下册待提供教材逐页映射；原创讲解与变式。",
    "coverageTopics": [
      "原点/正方向/单位长度",
      "有理数的表示和比较",
      "分数小数定位",
      "两点距离与单位换算",
      "模型与实际编号差别"
    ],
    "methods": {
      "explainPrompt": "描述一个位置为负、距离为正的例子，并说明原点和单位是什么。",
      "cuePrompts": [
        "描述一个位置为负、距离为正的例子，并说明原点和单位是什么。",
        "用这条关系前，需要检查哪些条件？"
      ],
      "reviewPrompts": [
        "合上讲解，说清一个定义和它的条件。",
        "举一个适用的例子，再举一个容易误用的情况。"
      ]
    }
  },
  {
    "id": "opposite-number",
    "title": "相反数：同一原点下的另一边",
    "version": "0.2.0",
    "why": "数轴上有些点离原点一样远，却在原点两侧。它们表示的数有什么关系？学会相反数，还能帮助我们看懂−a：字母前有负号，结果就一定是负数吗？",
    "steps": [
      {
        "type": "前置回忆",
        "title": "先固定同一条数轴",
        "text": "先确认数轴上的原点、正方向和单位长度。试着找到表示正数、负数和0的点，再数一数它们离原点多远。如果位置的正负和距离的长短还容易混淆，可以先回看“数轴”。"
      },
      {
        "type": "预测与观察",
        "title": "等距还要看在哪一侧",
        "text": "在纸上画数轴，先找出4，再预测另一个距原点4个单位的点在哪里。它在原点左侧，表示−4。换成距原点1.25个单位，可以找到1.25和−1.25。观察提示我们关注“同一原点、相同距离、相反方向”；这几个例子还不是一般结论的证明。"
      },
      {
        "type": "定义",
        "title": "相反数是一种成对关系",
        "text": "对一个非零有理数，在原点另一侧找与它到原点距离相同的点，新点表示的数叫原数的相反数。原数也正是新数的相反数，所以说它们互为相反数。例如2与−2互为相反数。0的点就在原点，我们约定0的相反数是0。每个有理数都有且只有一个相反数。"
      },
      {
        "type": "符号约定",
        "title": "−a表示取a的相反数",
        "text": "用a表示一个有理数，它的相反数记作−a。这里的负号表示“取相反数”，不保证写出的结果为负：若a=6，则−a=−6；若a=−6，则−a=6；若a=0，则−a=0。因此，在不知道a的正负时，不能只看字母前有负号就断定结果的正负。"
      },
      {
        "type": "推导",
        "title": "为什么再取一次会回到原数",
        "text": "若原数不为0，取相反数会到原点另一侧的等距位置，再做一次就回到最初的位置；若原数是0，两次都仍为0。所以，a是任意一个有理数时，都有−(−a)=a。这是根据数轴上两次取相反数的位置变化得到的，不需要先用乘法口诀。"
      },
      {
        "type": "反例与边界",
        "title": "符号不同还不够",
        "text": "2和−7一正一负，但它们到原点的距离不同，不能互为相反数。说“相反数”时，要说清是谁的相反数。例如，可以说“−2是2的相反数”，不能只因为一个数是负数，就说它是相反数。相反数也不一定比原数小：正数的相反数较小，负数的相反数较大，0取相反数后不变。"
      },
      {
        "type": "回到条件",
        "title": "原点变了，就要重新判断",
        "text": "用数轴说明相反数时，两个数必须在同一原点、方向和单位长度的约定下比较。纸上把同一数轴的两个对称点一起画清楚，再用“等距且异侧；0单独说明”检查。只看图形左右分开，或只看书写符号不同，都不足以作出判断。"
      },
      {
        "type": "学过加法后再看",
        "title": "为什么相反数相加为0",
        "text": "这一段可以在学过有理数加法后再看，不是初次认识相反数的前提。数a与−a到原点的距离相同，方向相反。按有理数加法，把向右和同样长的向左移动合起来，净移动为0，因此a+(−a)=0。反过来，若a+b=0，两数相互抵消，b就是a的相反数。"
      },
      {
        "type": "约定与应用",
        "title": "连续负号要逐层处理",
        "text": "负号作用在后面那个整体上。−(−(−5))先从最里面算：−5的相反数是5，再取5的相反数得−5。不能看到两个负号就随意删掉；先分清每个负号作用的范围。"
      },
      {
        "type": "边界",
        "title": "含字母时不能凭外观判断符号",
        "text": "−a表示a的相反数。a<0时−a>0，a=0时−a=0，a>0时−a<0。学过整式去括号后，再看这个联系：括号里若是a−b，它的相反数写作−(a−b)=b−a；这要用到去括号的分配律，暂时不熟时可以先代一个具体数检查。"
      }
    ],
    "explore": {
      "type": "none",
      "prompt": "当前没有专门的双点相反数互动。可在纸上画数轴：任选一个非零点，先预测它的相反数在哪里，再按到原点的距离核对；把原点也试一次。能画图或简短说明即可，不要求抄完整段讲解。"
    },
    "reflection": "一个同学说：“−a前面有负号，所以它一定是负数。”你同意吗？让a取一个负数，算出−a，再用数轴解释。最后想一想：a=0时呢？",
    "method": "画图或操作",
    "questions": [
      {
        "id": "opp-d1",
        "prompt": "在同一条数轴上，下面哪一组数互为相反数？",
        "options": [
          {
            "id": "equal-distance",
            "text": "1.25与−1.25"
          },
          {
            "id": "same-side",
            "text": "−1.25与−1.25"
          },
          {
            "id": "different-distance",
            "text": "1.25与−2.5"
          }
        ],
        "answer": "equal-distance",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "同时检查方向与到原点的距离；两个条件都要满足。",
        "explanation": "1.25和−1.25在原点两侧，到原点的距离都为1.25。两个−1.25在同一个位置；1.25和−2.5的距离不同。做错了也没关系，可以分别检查方向和距离这两个条件。"
      },
      {
        "id": "opp-d2",
        "prompt": "a表示任意一个有理数。只看符号−a，能断定它一定是负数吗？",
        "options": [
          {
            "id": "always-negative",
            "text": "能，有负号就一定为负"
          },
          {
            "id": "never-positive",
            "text": "不能，但它最多只能是0"
          },
          {
            "id": "depends-on-a",
            "text": "不能，要看a；结果可以是正数、负数或0"
          }
        ],
        "answer": "depends-on-a",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "分别让a取一个正数、一个负数和0，比较结果。",
        "explanation": "−a表示a的相反数。a为正数时结果为负，a为负数时结果为正，a=0时结果为0。先让a取不同的数，算出结果，就能检查自己的判断。"
      },
      {
        "id": "opp-a1",
        "prompt": "−(−2.8)等于多少？",
        "options": [
          {
            "id": "negative",
            "text": "−2.8"
          },
          {
            "id": "zero",
            "text": "0"
          },
          {
            "id": "positive",
            "text": "2.8"
          }
        ],
        "answer": "positive",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "先读成“−2.8的相反数”，再想它在数轴上的对应位置。",
        "explanation": "−2.8在原点左侧2.8个单位处，其相反数在右侧2.8个单位处，表示2.8。这里不是对2.8做两次减法。"
      },
      {
        "id": "opp-t1",
        "prompt": "数轴上，A、B在原点两侧，到原点的距离相等。现在让这两个点留在原处，把A定为新的原点，正方向和单位长度不变，再重新标数。A、B现在表示的两个数还互为相反数吗？",
        "options": [
          {
            "id": "still-pair",
            "text": "是，因为A、B都没有移动"
          },
          {
            "id": "new-origin",
            "text": "不是，A现在表示0，B现在表示的数不是0"
          },
          {
            "id": "opposite-sides",
            "text": "是，因为原来它们在原点两侧"
          }
        ],
        "answer": "new-origin",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "A成为新的原点后，它表示哪个数？这个数的相反数是什么？",
        "explanation": "把A定为新的原点后，A表示0；B与A不是同一个点，所以B表示的数不是0。0的相反数只有0，因此重新标数后，这两个点表示的数不再互为相反数。改变的是点表示的数；原来的两个数仍然互为相反数，例如2和−2的相反数关系并没有改变。"
      },
      {
        "id": "opp-r1",
        "prompt": "先不看讲解：−9/5的相反数是什么？",
        "options": [
          {
            "id": "same",
            "text": "−9/5"
          },
          {
            "id": "opposite",
            "text": "9/5"
          },
          {
            "id": "reciprocal",
            "text": "−5/9"
          }
        ],
        "answer": "opposite",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "回忆相反数保留的是到原点的距离，改变的是哪一种关系。",
        "explanation": "−9/5到原点的距离为9/5，它的相反数在原点另一侧，表示9/5。−5/9改变了数值大小，不是求相反数；也不要把相反数与倒数混淆。"
      },
      {
        "id": "opp-r2",
        "prompt": "小青说：“任取一个有理数a，数轴上总有两个不同的点分别表示a和它的相反数。”下面哪个取值可以作为反例？",
        "options": [
          {
            "id": "zero-case",
            "text": "a=0"
          },
          {
            "id": "negative-case",
            "text": "a=−8"
          },
          {
            "id": "positive-case",
            "text": "a=8"
          }
        ],
        "answer": "zero-case",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "要推翻“总有两个不同的点”，应找取相反数后位置不变的情况。",
        "explanation": "a=0时，相反数仍是0，两个数都对应原点这同一个点，并不是两个不同的点。a=8或−8时，确实对应两个不同的点，不能用它们反驳小青。只要找出一个不符合“总是这样”的例子，就能说明这句话不总成立。"
      },
      {
        "id": "opp-sum",
        "prompt": "a与b满足a+b=0，a=−9，则b是多少？",
        "options": [
          {
            "id": "0",
            "text": "−9"
          },
          {
            "id": "1",
            "text": "0"
          },
          {
            "id": "2",
            "text": "9"
          }
        ],
        "answer": "2",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "两数相加抵消，b是a的相反数。",
        "explanation": "b=9，因为−9+9=0。"
      },
      {
        "id": "opp-transfer",
        "prompt": "一条直线改用向左为正；同一原点两侧等距的两个点，表示的数之间有什么关系？",
        "options": [
          {
            "id": "0",
            "text": "仍互为相反数"
          },
          {
            "id": "1",
            "text": "变成相等的数"
          },
          {
            "id": "2",
            "text": "一定都是正数"
          }
        ],
        "answer": "0",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "改变正方向是否改变等距与位于两侧？",
        "explanation": "两点仍位于原点两侧且等距，所以对应数仍互为相反数。"
      }
    ],
    "sourceScope": "初一通用核心课程；上册依已导入教材目录关联，下册待提供教材逐页映射；原创讲解与变式。",
    "review": {
      "independent": true,
      "report": "docs/grade7-enhancements-review.md",
      "note": "由另一Agent独立审查并修正（见grade7-enhancements-review）；未做教师审校或学生效果验证。"
    },
    "coverageTopics": [
      "相反数及0",
      "符号−a的意义",
      "双重/多重负号",
      "相反数与数轴对称",
      "相加为0及字母整体"
    ],
    "methods": {
      "explainPrompt": "一个同学说：“−a前面有负号，所以它一定是负数。”你同意吗？让a取一个负数，算出−a，再用数轴解释。最后想一想：a=0时呢？",
      "cuePrompts": [
        "一个同学说：“−a前面有负号，所以它一定是负数。”你同意吗？让a取一个负数，算出−a，再用数轴解释。最后想一想：a=0时呢？",
        "用这条关系前，需要检查哪些条件？"
      ],
      "reviewPrompts": [
        "合上讲解，说清一个定义和它的条件。",
        "举一个适用的例子，再举一个容易误用的情况。"
      ]
    }
  },
  {
    "id": "absolute-value",
    "title": "绝对值：一个数对应的点离原点多远",
    "version": "0.2.0",
    "why": "数轴上，表示3和−3的点在原点两侧，却都离原点3个单位。怎样用一个数表示它们到原点的距离？这就要用到绝对值。",
    "steps": [
      {
        "type": "定义",
        "title": "绝对值表示到原点的距离",
        "text": "数 a 的绝对值 |a| 是它在数轴上对应的点到原点的距离。因此 |a|≥0。"
      },
      {
        "type": "推导",
        "title": "根据正负，分情况写出绝对值",
        "text": "当a≥0时，表示a的点到原点的距离是a，所以|a|=a。当a<0时，这个距离等于a的相反数−a，所以|a|=−a。例如a=−4时，−a=4。字母前有负号，并不说明计算结果一定是负数。"
      },
      {
        "type": "反例",
        "title": "外面的符号仍要运算",
        "text": "|−3|=3，但 −|−3|=−3。先求绝对值，再处理外面的负号。|a+b| 不总等于 |a|+|b|：取 a=2、b=−2 就得到 0 与 4。"
      },
      {
        "type": "联系",
        "title": "距离相同，点的位置可能不同",
        "text": "|a|=3时，a可以是3或−3，因为这两个数对应的点都离原点3个单位。|a|=0时，只有a=0。绝对值不能是负数，例如|a|=−3没有实数解。"
      },
      {
        "type": "推导与比较",
        "title": "怎样用绝对值比较两个负数",
        "text": "两个负数都在原点左侧，绝对值越大，离原点越远，位置越靠左。因此−8<−3，虽然8>3。异号数比较时应先判断正负；不能对所有数都使用“绝对值越大，数越小”。"
      },
      {
        "type": "应用",
        "title": "运算前先看清绝对值的整体",
        "text": "求|−7+2|−|−3|时，先算内部−7+2=−5，得到5−3=2。不要把加号两侧分开取绝对值，因为|−7+2|不是7+2。对含字母的式子，先根据条件判断内部的正负，再按定义去掉绝对值符号。"
      },
      {
        "type": "反例与检查",
        "title": "相等的绝对值意味着什么",
        "text": "|a|=|b|表示两点到原点等距，因此a=b或a=−b；其中a=b=0时，两种描述指向同一个数。例如|a|=5有a=5与a=−5两种可能，不能只写正数。检查一个结论时，要试正数、负数与0。"
      }
    ],
    "explore": {
      "type": "axis",
      "prompt": "先找一个距离为 4 的点，再找另一个。距离为 0 时还能找到两个不同的点吗？"
    },
    "reflection": "为什么 a<0 时 |a|=−a？用一个负数举例，再解释一般的理由。",
    "questions": [
      {
        "id": "abs-d1",
        "prompt": "当a=−4时，−a和|a|的值分别是多少？",
        "options": [
          {
            "id": "0",
            "text": "−4 和 4"
          },
          {
            "id": "1",
            "text": "4 和 4"
          },
          {
            "id": "2",
            "text": "−4 和 −4"
          }
        ],
        "answer": "1",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "字母前的负号表示取相反数。",
        "explanation": "−(−4)=4，|−4|=4。"
      },
      {
        "id": "abs-a1",
        "prompt": "求−|4−10|+2的值。",
        "options": [
          {
            "id": "0",
            "text": "−4"
          },
          {
            "id": "1",
            "text": "8"
          },
          {
            "id": "2",
            "text": "−8"
          }
        ],
        "answer": "0",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "先处理内部，再处理绝对值外的负号。",
        "explanation": "4−10=−6，绝对值为6，再算−6+2=−4。"
      },
      {
        "id": "abs-t1",
        "prompt": "一台仪器的读数误差e满足|e|≤2。哪种解释符合条件？",
        "options": [
          {
            "id": "0",
            "text": "误差只能是2"
          },
          {
            "id": "1",
            "text": "误差一定不为负"
          },
          {
            "id": "2",
            "text": "误差可以是−1，也可以是0"
          }
        ],
        "answer": "2",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "绝对值限制离0的距离，没有规定误差方向。",
        "explanation": "|−1|=1≤2，|0|=0≤2，两者都允许；正负方向都可能，误差也不必达到2。"
      },
      {
        "id": "abs-r1",
        "prompt": "−|−7| 等于？",
        "options": [
          {
            "id": "0",
            "text": "7"
          },
          {
            "id": "1",
            "text": "−7"
          },
          {
            "id": "2",
            "text": "0"
          }
        ],
        "answer": "1",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "先算绝对值，再取所得数的相反数。",
        "explanation": "|−7|=7，再取相反数是 −7。"
      },
      {
        "id": "abs-r2",
        "prompt": "|a|=0 时 a 有几个实数取值？",
        "options": [
          {
            "id": "0",
            "text": "没有"
          },
          {
            "id": "1",
            "text": "两个"
          },
          {
            "id": "2",
            "text": "一个：0"
          }
        ],
        "answer": "2",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "到原点距离为零的点在哪里？",
        "explanation": "只有原点到自身距离为零，所以 a=0。"
      },
      {
        "id": "abs-d2",
        "prompt": "已知 a<0，−a 的符号是什么？",
        "options": [
          {
            "id": "0",
            "text": "负数"
          },
          {
            "id": "1",
            "text": "正数"
          },
          {
            "id": "2",
            "text": "一定为 0"
          }
        ],
        "answer": "1",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "想一想负数的相反数。",
        "explanation": "a 严格小于 0，它的相反数 −a 严格大于 0。负号表示取相反数，并非保证结果为负。"
      },
      {
        "id": "abs-compare",
        "prompt": "下面哪一个比较正确？",
        "options": [
          {
            "id": "0",
            "text": "−2<−9"
          },
          {
            "id": "1",
            "text": "−9<−2"
          },
          {
            "id": "2",
            "text": "−9=−2"
          }
        ],
        "answer": "1",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "两个负数中，数轴上更靠左的更小。",
        "explanation": "−9比−2更靠左，因此−9<−2。"
      },
      {
        "id": "absolute-value-review-extra",
        "prompt": "若|a|=|b|且a、b都是负数，下面哪个结论一定成立？",
        "options": [
          {
            "id": "0",
            "text": "a与b互为相反数"
          },
          {
            "id": "1",
            "text": "a+b=0"
          },
          {
            "id": "2",
            "text": "a=b"
          }
        ],
        "answer": "2",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "先说明使用的定义和题目限制，再判断。",
        "explanation": "两个负数都在0左侧，距离又相同，只能是同一个位置，因此a=b。"
      }
    ],
    "method": "举例与反例",
    "review": {
      "independent": true,
      "report": "docs/grade7-enhancements-review.md",
      "note": "由另一Agent独立审查并修正（见grade7-enhancements-review）；未做教师审校或学生效果验证。"
    },
    "sourceScope": "初一通用核心课程；上册依已导入教材目录关联，下册待提供教材逐页映射；原创讲解与变式。",
    "coverageTopics": [
      "距离定义与非负性",
      "分情况表达",
      "负数大小比较",
      "含绝对值运算",
      "绝对值方程与边界",
      "举反例"
    ],
    "methods": {
      "explainPrompt": "为什么 a<0 时 |a|=−a？用一个负数举例，再解释一般的理由。",
      "cuePrompts": [
        "为什么 a<0 时 |a|=−a？用一个负数举例，再解释一般的理由。",
        "用这条关系前，需要检查哪些条件？"
      ],
      "reviewPrompts": [
        "合上讲解，说清一个定义和它的条件。",
        "举一个适用的例子，再举一个容易误用的情况。"
      ]
    }
  },
  {
    "id": "powers",
    "title": "乘方：相同因子的简写",
    "version": "0.2.0",
    "why": "重复乘法很长，乘方让它更紧凑。简写之后，括号和符号的作用更需要分清。",
    "steps": [
      {
        "type": "定义",
        "title": "底数与指数各管什么",
        "text": "当n是正整数时，aⁿ表示n个a相乘；n=1时，a¹就是a本身。a 是底数，n 是指数。a²表示a×a，不表示把a乘2。有时两种运算的结果碰巧相同，例如a=2时都是4，但它们的含义不同。"
      },
      {
        "type": "推导",
        "title": "同底数相乘为什么加指数",
        "text": "对正整数 m、n，aᵐaⁿ 合起来有 m+n 个因子 a，因此等于 aᵐ⁺ⁿ。这一说明先限于正整数指数，其他指数需另作定义和验证。"
      },
      {
        "type": "边界",
        "title": "括号决定底数",
        "text": "(−3)²=(−3)×(−3)=9；−3²=−(3×3)=−9。前者底数为 −3，后者是 3 的平方前有一个负号。"
      },
      {
        "type": "反例",
        "title": "平方不能直接分到加法两项",
        "text": "(a+b)²=(a+b)(a+b)=a²+2ab+b²，不总等于 a²+b²。取 a=b=1 就可否定错误的等式。"
      },
      {
        "type": "推导",
        "title": "负底数的正负由因子个数决定",
        "text": "两个负数相乘为正。把负因子两两配对，偶数个负因子可以全部配成正积；奇数个还剩一个负因子，结果为负。因此(−2)⁴=16，(−2)⁵=−32。这一说明要求指数是正整数。"
      },
      {
        "type": "运算顺序",
        "title": "混合运算先确定每一步的范围",
        "text": "算−2³+6÷(−3)时，先乘方得−8，再算除法得−2，最后−8+(−2)=−10。同一级乘除或加减通常从左到右，有括号先算括号。把中间结果连同符号写出，能减少漏负号。"
      },
      {
        "type": "探索",
        "title": "进位制中的位置为什么重要",
        "text": "十进制从右到左的权重为1、10、100，也就是10⁰、10¹、10²，其中10⁰=1是把相邻位权保持10倍关系向右延伸的约定。二进制每位只能填0或1，权重为1、2、4、8；例如二进制101表示1×4+0×2+1=5。这里不是把数字直接读作十进制的一百零一。"
      }
    ],
    "explore": {
      "type": "power",
      "prompt": "先预测 (−a)² 和 −a² 的符号，再改变 a。a=0 时有什么特殊之处？"
    },
    "reflection": "不用背口诀，解释为什么 (−3)² 与 −3² 不同。",
    "questions": [
      {
        "id": "power-d1",
        "prompt": "2³ 表示什么？",
        "options": [
          {
            "id": "0",
            "text": "2×3"
          },
          {
            "id": "1",
            "text": "2×2×2"
          },
          {
            "id": "2",
            "text": "3×3"
          }
        ],
        "answer": "1",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "指数说明因子的个数。",
        "explanation": "2³=2×2×2，表示3个2相乘。注意：3个因子之间只有两个乘号。"
      },
      {
        "id": "power-a1",
        "prompt": "求−2⁴+3的值。",
        "options": [
          {
            "id": "0",
            "text": "19"
          },
          {
            "id": "1",
            "text": "−13"
          },
          {
            "id": "2",
            "text": "−5"
          }
        ],
        "answer": "1",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "没有括号时，负号在乘方外面。",
        "explanation": "2⁴=16，因此−2⁴+3=−16+3=−13。"
      },
      {
        "id": "power-t1",
        "prompt": "一种装置每次把数量翻倍，开始有3个，连续翻倍4次后有多少个？",
        "options": [
          {
            "id": "0",
            "text": "24"
          },
          {
            "id": "1",
            "text": "81"
          },
          {
            "id": "2",
            "text": "48"
          }
        ],
        "answer": "2",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "把每次翻倍都写成乘2。",
        "explanation": "3×2×2×2×2=3×2⁴=48；底数2表示变化倍数，起始数量3不一起乘方。"
      },
      {
        "id": "power-r1",
        "prompt": "(−2)³ 等于？",
        "options": [
          {
            "id": "0",
            "text": "8"
          },
          {
            "id": "1",
            "text": "−8"
          },
          {
            "id": "2",
            "text": "−6"
          }
        ],
        "answer": "1",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "写成三个负因子相乘。",
        "explanation": "(−2)(−2)(−2)=4×(−2)=−8。"
      },
      {
        "id": "power-r2",
        "prompt": "(1+2)² 与 1²+2² 相等吗？",
        "options": [
          {
            "id": "0",
            "text": "相等"
          },
          {
            "id": "1",
            "text": "无法比较"
          },
          {
            "id": "2",
            "text": "不相等，分别是 9 和 5"
          }
        ],
        "answer": "2",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "分别计算，检查遗漏的乘积。",
        "explanation": "展开 (1+2)(1+2)，还包含两项 1×2。"
      },
      {
        "id": "power-d2",
        "prompt": "(−2)² 与 −2² 分别是？",
        "options": [
          {
            "id": "0",
            "text": "4 和 −4"
          },
          {
            "id": "1",
            "text": "−4 和 4"
          },
          {
            "id": "2",
            "text": "都是 4"
          }
        ],
        "answer": "0",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "分别指出两个表达式的底数。",
        "explanation": "括号中的 −2 整体平方为 4；−2² 是 2² 的相反数，为 −4。"
      },
      {
        "id": "power-mixed",
        "prompt": "求(−2)³−12÷(−4)的值。",
        "options": [
          {
            "id": "0",
            "text": "−11"
          },
          {
            "id": "1",
            "text": "11"
          },
          {
            "id": "2",
            "text": "−5"
          }
        ],
        "answer": "2",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "先乘方和除法，再做减法。",
        "explanation": "(−2)³=−8，12÷(−4)=−3，因此−8−(−3)=−5。"
      },
      {
        "id": "powers-review-extra",
        "prompt": "一人说“任意数的平方都比原数大”。下面哪个反例足以否定他？",
        "options": [
          {
            "id": "0",
            "text": "3²=9"
          },
          {
            "id": "1",
            "text": "(1/2)²=1/4"
          },
          {
            "id": "2",
            "text": "(−2)²=4"
          }
        ],
        "answer": "1",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "先说明使用的定义和题目限制，再判断。",
        "explanation": "1/2的平方为1/4，反而小于1/2。一个满足条件而结论不成立的例子，就能否定“任意”的说法。"
      }
    ],
    "method": "举例与反例",
    "review": {
      "independent": true,
      "report": "docs/grade7-enhancements-review.md",
      "note": "由另一Agent独立审查并修正（见grade7-enhancements-review）；未做教师审校或学生效果验证。"
    },
    "sourceScope": "初一通用核心课程；上册依已导入教材目录关联，下册待提供教材逐页映射；原创讲解与变式。",
    "coverageTopics": [
      "正整数乘方",
      "括号与符号",
      "奇偶指数",
      "混合运算",
      "同底数正整数乘法联系",
      "进位制探索"
    ],
    "methods": {
      "explainPrompt": "不用背口诀，解释为什么 (−3)² 与 −3² 不同。",
      "cuePrompts": [
        "不用背口诀，解释为什么 (−3)² 与 −3² 不同。",
        "用这条关系前，需要检查哪些条件？"
      ],
      "reviewPrompts": [
        "合上讲解，说清一个定义和它的条件。",
        "举一个适用的例子，再举一个容易误用的情况。"
      ]
    }
  },
  {
    "id": "linear-equation",
    "title": "方程：保留相等，逐步找到未知数",
    "version": "0.2.0",
    "why": "用方程表示已知数和未知数的关系，就能一步一步求出未知数，再把结果代回去检查。",
    "steps": [
      {
        "type": "定义",
        "title": "等式、未知数与解",
        "text": "含未知数的等式叫方程。让等式成立的未知数的值叫解。等号表示两边相等，不表示“接下来写答案”。"
      },
      {
        "type": "推导",
        "title": "两边为什么能同时减同一个数",
        "text": "若 A=B，那么 A+c=B+c，A−c=B−c。乘同一个数仍相等；解方程时，我们还要保证变形前后允许的解完全相同。为此，两边同乘或同除的数必须是同一个已知的不为0的数，这样才能用相反的操作还原。"
      },
      {
        "type": "推导",
        "title": "移项是省略了中间步骤",
        "text": "2x+3=11，两边都减 3，得到 2x=8；两边都除以 2，得到 x=4。“移过去变号”来自两边同减同加，不能当成符号任意搬家。"
      },
      {
        "type": "检查",
        "title": "把求出的数代回原方程检查",
        "text": "将 x=4 代回：2×4+3=11。应用情境还需检查单位和范围。两边都乘 0 虽仍相等，却可能丢失原方程的信息，不能用来保证等价变形。"
      },
      {
        "type": "定义与边界",
        "title": "怎样辨认一元一次方程",
        "text": "整理后能写成ax=b，只有一个未知数且a≠0，就是这里的一元一次方程。x出现在分母或出现x²，一般不属于这个形式。0x=0对所有x都成立，0x=3没有解，两者都不是a≠0的一元一次方程。"
      },
      {
        "type": "推导",
        "title": "去分母时为什么每一项都要乘",
        "text": "解x/3−1=(x+2)/6，分母是常数3和6，可在两边同乘非零数6，得到2x−6=x+2，再解得x=8。左边的−1也必须乘6；不能只处理看起来像分数的项。代入原式：8/3−1=5/3，(8+2)/6=5/3，检查通过。"
      },
      {
        "type": "推导与检查",
        "title": "去括号、移项与系数化1",
        "text": "解3(x−2)=x+4，先用分配律得3x−6=x+4，两边同减x再同加6，得2x=10，两边同除以2得x=5。所谓移项，是把两边同加减相同的式子压缩来写；不是字母跨过等号自己改变了。"
      },
      {
        "type": "方法",
        "title": "把解代回最开始的关系",
        "text": "变形中可能抄错符号，所以检验应代回原方程，而不是只看最后一行。若来自实际问题，还要检查单位、是否能为负、是否必须取整数。算出一个数并不是解释实际问题的全部。"
      }
    ],
    "explore": {
      "type": "balance",
      "prompt": "移动滑杆寻找 2x+3 与 11 相等的位置。先预测如何在两边做同一步来保留相等。"
    },
    "reflection": "解释“移项变号”背后实际做了什么；再举一个例子，说明哪种操作可能改变方程的解。",
    "questions": [
      {
        "id": "equation-d1",
        "prompt": "从 x+3=7 得到 x=4，实际上做了什么？",
        "options": [
          {
            "id": "0",
            "text": "只改左边"
          },
          {
            "id": "1",
            "text": "两边同时减 3"
          },
          {
            "id": "2",
            "text": "两边同时除以 3"
          }
        ],
        "answer": "1",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "原来的相等关系要保留。",
        "explanation": "两边都减 3：x+3−3=7−3。"
      },
      {
        "id": "equation-a1",
        "prompt": "解方程4x−5=23，x是多少？",
        "options": [
          {
            "id": "0",
            "text": "7"
          },
          {
            "id": "1",
            "text": "4.5"
          },
          {
            "id": "2",
            "text": "−7"
          }
        ],
        "answer": "0",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "两边同加5，再同除以4。",
        "explanation": "4x=28，所以x=7。代回4×7−5=23，成立。"
      },
      {
        "id": "equation-t1",
        "prompt": "小安解2(x+3)=x+11，写成2x+3=x+11。他最先哪一步出了问题？",
        "options": [
          {
            "id": "0",
            "text": "两边不能同时减x"
          },
          {
            "id": "1",
            "text": "去括号时漏把括号内的3乘以2"
          },
          {
            "id": "2",
            "text": "这个方程不能有解"
          }
        ],
        "answer": "1",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "分配律要求括号内每一项都乘外面的数。",
        "explanation": "应为2x+6=x+11，随后解得x=5。这里先定位变形错误，而不只比较最后答案。"
      },
      {
        "id": "equation-r1",
        "prompt": "3x−2=10 的解是？",
        "options": [
          {
            "id": "0",
            "text": "−4"
          },
          {
            "id": "1",
            "text": "4"
          },
          {
            "id": "2",
            "text": "8/3"
          }
        ],
        "answer": "1",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "先在两边加 2。",
        "explanation": "3x=12，所以 x=4。"
      },
      {
        "id": "equation-r2",
        "prompt": "把 x=1 两边平方得到 x²=1，新方程会怎样？",
        "options": [
          {
            "id": "0",
            "text": "仍只有 x=1"
          },
          {
            "id": "1",
            "text": "无解"
          },
          {
            "id": "2",
            "text": "还允许 x=−1，变形前后的解不完全相同"
          }
        ],
        "answer": "2",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "试着将 −1 代入两个方程。",
        "explanation": "(−1)²=1，但 −1≠1，平方后的方程多允许了x=−1，两个方程允许的答案不完全相同。"
      },
      {
        "id": "equation-d2",
        "prompt": "已知 A=B，下面哪一步一定还相等？",
        "options": [
          {
            "id": "0",
            "text": "只给 A 加 2"
          },
          {
            "id": "1",
            "text": "A 加 2 而 B 减 2"
          },
          {
            "id": "2",
            "text": "A、B 都加 2"
          }
        ],
        "answer": "2",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "相等的两边要做相同的加减。",
        "explanation": "A+2=B+2；另外两个操作一般不能保留相等关系。"
      },
      {
        "id": "eq-fractions",
        "prompt": "方程x/4−2=(x+2)/6两边同乘12，哪一行正确？",
        "options": [
          {
            "id": "0",
            "text": "3x−24=2x+4"
          },
          {
            "id": "1",
            "text": "3x−2=2x+2"
          },
          {
            "id": "2",
            "text": "3x−24=x+2"
          }
        ],
        "answer": "0",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "两边所有项都乘12。",
        "explanation": "12×x/4=3x，12×(−2)=−24，12×(x+2)/6=2(x+2)=2x+4。"
      },
      {
        "id": "linear-equation-review-extra",
        "prompt": "有人解2x=x，把两边都除以x后得到2=1，于是说原方程没有解。哪里出了问题？",
        "options": [
          {
            "id": "0",
            "text": "x可能为0，同除以x排除了原来的解"
          },
          {
            "id": "1",
            "text": "除法永远不能用于方程"
          },
          {
            "id": "2",
            "text": "等号两边不能同时做运算"
          }
        ],
        "answer": "0",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "先说明使用的定义和题目限制，再判断。",
        "explanation": "原方程的解为x=0，代回0=0成立。不能除以0；直接同除以x，恰好排除了需要保留的解。安全的做法是两边同减x，得到x=0。"
      }
    ],
    "method": "代入检验",
    "review": {
      "independent": true,
      "report": "docs/grade7-enhancements-review.md",
      "note": "由另一Agent独立审查并修正（见grade7-enhancements-review）；未做教师审校或学生效果验证。"
    },
    "sourceScope": "初一通用核心课程；上册依已导入教材目录关联，下册待提供教材逐页映射；原创讲解与变式。",
    "coverageTopics": [
      "解的含义与类型",
      "等式变形",
      "去括号/移项/系数化1",
      "去分母",
      "无解/恒等式边界",
      "代回检验"
    ],
    "methods": {
      "explainPrompt": "解释“移项变号”背后实际做了什么；再举一个例子，说明哪种操作可能改变方程的解。",
      "cuePrompts": [
        "解释“移项变号”背后实际做了什么；再举一个例子，说明哪种操作可能改变方程的解。",
        "用这条关系前，需要检查哪些条件？"
      ],
      "reviewPrompts": [
        "合上讲解，说清一个定义和它的条件。",
        "举一个适用的例子，再举一个容易误用的情况。"
      ]
    }
  },
  {
    "id": "square-roots",
    "title": "平方根：哪些数的平方等于这个数",
    "version": "0.2.0",
    "why": "知道正方形面积，怎样找边长？这时需要反过来想：哪个数的平方等于已知面积？学习时还要分清“一个数的平方根”和“它的算术平方根”。",
    "steps": [
      {
        "type": "定义",
        "title": "平方根与算术平方根",
        "text": "若 x²=a，x 是 a 的平方根。a>0 时有两个平方根 ±√a；√a 专指非负的算术平方根。0 的平方根是 0；负数在实数范围没有平方根。"
      },
      {
        "type": "推导",
        "title": "√(x²) 为什么是 |x|",
        "text": "x² 非负，x 和 −x 平方相同。√(x²)表示非负的算术平方根，所以结果是x和−x中非负的那个数，也就是|x|。例如x=−4时，√(x²)=4，不能写成−4。x=0时，结果也是0。"
      },
      {
        "type": "条件",
        "title": "乘除开方要检查范围",
        "text": "实数范围内，a≥0、b≥0 时 √(ab)=√a·√b；a≥0、b>0 时 √(a/b)=√a/√b。为什么成立？例如第一条：√a和√b都非负，它们的乘积也非负；这个乘积的平方为(√a·√b)²=(√a)²·(√b)²=ab，因此它就是ab的算术平方根。第二条同样检查“非负”和“平方后等于a/b”，并且分母必须大于0。"
      },
      {
        "type": "反例",
        "title": "加法通常不能拆根号",
        "text": "√(9+16)=5，而 √9+√16=7，所以 √(a+b) 一般不能拆成 √a+√b。规则有适用条件，不能看到符号就照搬。"
      },
      {
        "type": "估计",
        "title": "不恰好是整数时怎样找范围",
        "text": "因为5²=25、6²=36，且非负数越大平方越大，所以25<30<36给出5<√30<6。若需要更精细的近似，可以继续比较5.4²和5.5²。近似结果要用≈，不能把截取的小数写成精确相等。"
      },
      {
        "type": "联系",
        "title": "从面积回到长度要检查单位",
        "text": "正方形面积为49平方厘米，边长是√49=7厘米，不写±7厘米。数49的平方根有±7，但这个情境求的是非负长度。由x²=49解数值与由面积求边长，回答的对象不同。"
      },
      {
        "type": "反例",
        "title": "和的平方根不能分别开方相加",
        "text": "√(9+16)=√25=5，但√9+√16=3+4=7。根号里的加法不能直接拆开。乘除的开方法则也必须带上非负与分母非零的条件，不能只记外形。"
      }
    ],
    "explore": {
      "type": "root",
      "prompt": "改变 x，比较 x、x² 和 √(x²)。x为负数时，√(x²)还等于x吗？试着说明理由。"
    },
    "reflection": "说明“9 的平方根”和“√9”的区别，并解释 √(x²)=|x| 的原因。",
    "questions": [
      {
        "id": "root-d1",
        "prompt": "√9 等于？",
        "options": [
          {
            "id": "0",
            "text": "±3"
          },
          {
            "id": "1",
            "text": "3"
          },
          {
            "id": "2",
            "text": "−3"
          }
        ],
        "answer": "1",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "根号符号专指非负的算术平方根。",
        "explanation": "√9=3；9 的平方根才是 ±3。"
      },
      {
        "id": "root-a1",
        "prompt": "x=−8时，√(x²)等于多少？",
        "options": [
          {
            "id": "0",
            "text": "−8"
          },
          {
            "id": "1",
            "text": "64"
          },
          {
            "id": "2",
            "text": "8"
          }
        ],
        "answer": "2",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "根号表示非负的算术平方根。",
        "explanation": "x²=64，√64=8；也就是|x|而不是直接写x。"
      },
      {
        "id": "root-t1",
        "prompt": "直角三角形两条直角边分别长1厘米和2厘米，已知斜边长c满足c²=5。c在哪个范围？",
        "options": [
          {
            "id": "0",
            "text": "2<c<3"
          },
          {
            "id": "1",
            "text": "1<c<2"
          },
          {
            "id": "2",
            "text": "5<c<6"
          }
        ],
        "answer": "0",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "边长取非负值，再用相邻整数的平方比较。",
        "explanation": "2²=4<5<9=3²，且长度为正，因此2<√5=c<3。题目已给出平方关系，不要求先学习勾股定理。"
      },
      {
        "id": "root-r1",
        "prompt": "16 的平方根有哪些？",
        "options": [
          {
            "id": "0",
            "text": "只有 4"
          },
          {
            "id": "1",
            "text": "4 和 −4"
          },
          {
            "id": "2",
            "text": "只有 −4"
          }
        ],
        "answer": "1",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "哪些数平方后都等于 16？",
        "explanation": "4²=(−4)²=16，所以有两个平方根。"
      },
      {
        "id": "root-r2",
        "prompt": "已知a<0，√(a²)+a等于多少？",
        "options": [
          {
            "id": "0",
            "text": "0"
          },
          {
            "id": "1",
            "text": "2a"
          },
          {
            "id": "2",
            "text": "−2a"
          }
        ],
        "answer": "0",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "先判断√(a²)是a还是a的相反数。",
        "explanation": "√(a²)=|a|。a<0时|a|=−a，因此√(a²)+a=−a+a=0。这里用到非负平方根和字母范围，而不是把a直接拿出来。"
      },
      {
        "id": "root-d2",
        "prompt": "4 的平方根有哪些？",
        "options": [
          {
            "id": "0",
            "text": "只有 2"
          },
          {
            "id": "1",
            "text": "2 和 −2"
          },
          {
            "id": "2",
            "text": "只有 −2"
          }
        ],
        "answer": "1",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "两个互为相反数的非零数，平方是否相同？",
        "explanation": "2²=(−2)²=4，所以 4 的平方根是 ±2；√4 才专指 2。"
      },
      {
        "id": "root-approx",
        "prompt": "√70在哪两个相邻整数之间？",
        "options": [
          {
            "id": "0",
            "text": "7和8"
          },
          {
            "id": "1",
            "text": "8和9"
          },
          {
            "id": "2",
            "text": "9和10"
          }
        ],
        "answer": "1",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "比较相邻整数的平方。",
        "explanation": "8²=64<70<81=9²，因此8<√70<9。"
      },
      {
        "id": "square-roots-review-extra",
        "prompt": "正方形面积从9平方厘米增加到36平方厘米，边长变为原来的几倍？",
        "options": [
          {
            "id": "0",
            "text": "4倍"
          },
          {
            "id": "1",
            "text": "2倍"
          },
          {
            "id": "2",
            "text": "6倍"
          }
        ],
        "answer": "1",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "先说明使用的定义和题目限制，再判断。",
        "explanation": "原边长3厘米，新边长6厘米，所以边长变为2倍。面积倍数与边长倍数不同。"
      }
    ],
    "method": "从定义推导",
    "review": {
      "independent": true,
      "report": "docs/grade7-enhancements-review.md",
      "note": "由另一Agent独立审查并修正（见grade7-enhancements-review）；未做教师审校或学生效果验证。"
    },
    "sourceScope": "初一通用核心课程；上册依已导入教材目录关联，下册待提供教材逐页映射；原创讲解与变式。",
    "coverageTopics": [
      "平方根与算术平方根",
      "非负范围",
      "平方与绝对值",
      "根式乘除条件",
      "估值/近似",
      "长度单位与反例"
    ],
    "methods": {
      "explainPrompt": "说明“9 的平方根”和“√9”的区别，并解释 √(x²)=|x| 的原因。",
      "cuePrompts": [
        "说明“9 的平方根”和“√9”的区别，并解释 √(x²)=|x| 的原因。",
        "用这条关系前，需要检查哪些条件？"
      ],
      "reviewPrompts": [
        "合上讲解，说清一个定义和它的条件。",
        "举一个适用的例子，再举一个容易误用的情况。"
      ]
    }
  },
  {
    "id": "distance-sum",
    "title": "距离和：为什么最小值不只在中点取得",
    "version": "0.2.0",
    "why": "|x−2|表示数轴上x与2之间的距离，|x+5|表示x与−5之间的距离。把两段距离加起来，怎样判断这个和最小是多少？",
    "steps": [
      {
        "type": "推导",
        "title": "从原点距离到两点距离",
        "text": "|x−a| 表示 x 与 a 的距离：x≥a 时是 x−a，x<a 时是 a−x。两种情况都等于较大数减较小数。"
      },
      {
        "type": "观察",
        "title": "在两个端点之间移动",
        "text": "先在数轴上固定表示a和b的两个点，并规定a<b。若 a≤x≤b，从 a 到 x 的长度加从 x 到 b 的长度，恰好拼成从 a 到 b 的长度。移动 x，一段增加多少，另一段就减少多少。"
      },
      {
        "type": "推导",
        "title": "把x在中间、左边、右边的情况分别算清楚",
        "text": "当a≤x≤b，也就是x在两个端点之间（包括端点）时：|x−a|+|x−b|=(x−a)+(b−x)=b−a。若 x<a，总和=(a−x)+(b−x)=(b−a)+2(a−x)>b−a。若 x>b，总和=(x−a)+(x−b)=(b−a)+2(x−b)>b−a。"
      },
      {
        "type": "结论与条件",
        "title": "最小值是多少？哪些x能使它最小？",
        "text": "因此，这两个距离的和最小是b−a。只要a≤x≤b（包括两个端点），距离和都等于这个最小值。对于|x−2|+|x+5|，端点是−5和2，所以最小值是7，所有满足−5≤x≤2的x都可以。如果x可以取任意实数，距离和没有最大值：把x移得足够远，距离和就能更大。如果题目限制了x的范围，必须按新范围重新判断。"
      },
      {
        "type": "检验条件",
        "title": "固定范围时，先看能否走到端点之间",
        "text": "若要求x≥8，原来[−5,2]中的位置全都不能选。对这个新范围，两段距离和为2x+3，x越大结果越大，最小在8取得，等于19。不能把不受限制时的最小值7照搬过来。"
      },
      {
        "type": "联系",
        "title": "从图形理由到分段计算",
        "text": "先画出两个端点和移动点，判断路线是否折返，再按x在左侧、中间、右侧写出绝对值。图帮助确定情况，代数式说明每种情况的一般结果；只试几个点还不能保证其他所有点都一样。"
      }
    ],
    "explore": {
      "type": "distance",
      "prompt": "先预测最小值在哪里取得。移动 x，分别观察区间内、左侧和右侧；再用式子解释。"
    },
    "reflection": "为什么取到最小值的可以是整个区间，而不只是中点？区间外为什么变大？",
    "questions": [
      {
        "id": "distance-d1",
        "prompt": "|x+5| 可以表示 x 到哪个点的距离？",
        "options": [
          {
            "id": "0",
            "text": "5"
          },
          {
            "id": "1",
            "text": "−5"
          },
          {
            "id": "2",
            "text": "0"
          }
        ],
        "answer": "1",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "把 x+5 写成 x−(−5)。",
        "explanation": "|x+5|=|x−(−5)|，表示 x 到 −5 的距离。"
      },
      {
        "id": "distance-a1",
        "prompt": "x为任意实数，|x−6|+|x+2|最小是多少？",
        "options": [
          {
            "id": "0",
            "text": "4"
          },
          {
            "id": "1",
            "text": "8"
          },
          {
            "id": "2",
            "text": "0"
          }
        ],
        "answer": "1",
        "dimension": "apply",
        "modes": [
          "practice"
        ],
        "hint": "辨认两个端点的间隔。",
        "explanation": "端点−2和6相距8，x在两端点之间时路线无折返，最小值为8。"
      },
      {
        "id": "distance-t1",
        "prompt": "数轴上服务点A表示−1，B表示5。补给点x必须选在x≤−3的范围，路线从A经过x再到B。路线最短有多长？",
        "options": [
          {
            "id": "0",
            "text": "6"
          },
          {
            "id": "1",
            "text": "8"
          },
          {
            "id": "2",
            "text": "10"
          }
        ],
        "answer": "2",
        "dimension": "transfer",
        "modes": [
          "practice"
        ],
        "hint": "最短位置是否允许落在A与B之间？",
        "explanation": "允许范围都在A左侧，最靠近A的位置是−3。路线长|−3+1|+|−3−5|=2+8=10。"
      },
      {
        "id": "distance-r1",
        "prompt": "|x−4|+|x+1| 的最小值是多少？",
        "options": [
          {
            "id": "0",
            "text": "3"
          },
          {
            "id": "1",
            "text": "5"
          },
          {
            "id": "2",
            "text": "没有最小值"
          }
        ],
        "answer": "1",
        "dimension": "apply",
        "modes": [
          "review"
        ],
        "hint": "先辨认两个端点。",
        "explanation": "端点 −1 和 4 相距 5，只要−1≤x≤4，距离和都等于5。"
      },
      {
        "id": "distance-r2",
        "prompt": "若额外规定 x≥6，|x−2|+|x+5| 的最小值是？",
        "options": [
          {
            "id": "0",
            "text": "7"
          },
          {
            "id": "1",
            "text": "没有"
          },
          {
            "id": "2",
            "text": "15"
          }
        ],
        "answer": "2",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "现在 x 还能进入原来的最小值区间吗？",
        "explanation": "x≥6 时原式=2x+3，最小在 x=6 取得，为 15。"
      },
      {
        "id": "distance-d2",
        "prompt": "哪一个 x 使 |x−2|=0？",
        "options": [
          {
            "id": "0",
            "text": "−2"
          },
          {
            "id": "1",
            "text": "0"
          },
          {
            "id": "2",
            "text": "2"
          }
        ],
        "answer": "2",
        "dimension": "concept",
        "modes": [
          "diagnose"
        ],
        "hint": "到哪个位置的距离为零？",
        "explanation": "x=2 时与点 2 重合，|2−2|=0。"
      },
      {
        "id": "distance-interval",
        "prompt": "|x−1|+|x−9|=8时，x可以取哪些实数？",
        "options": [
          {
            "id": "0",
            "text": "只能取5"
          },
          {
            "id": "1",
            "text": "只能取1或9"
          },
          {
            "id": "2",
            "text": "所有1≤x≤9的数"
          }
        ],
        "answer": "2",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "什么位置没有额外折返？",
        "explanation": "x在两端点之间包含端点时，两段拼成长为8的整段，所以1≤x≤9的所有实数均可。"
      },
      {
        "id": "distance-sum-review-extra",
        "prompt": "|x+4|+|x−3|的最小值为7。若x只能取整数，有几个x能达到最小值？",
        "options": [
          {
            "id": "0",
            "text": "7个"
          },
          {
            "id": "1",
            "text": "2个"
          },
          {
            "id": "2",
            "text": "8个"
          }
        ],
        "answer": "2",
        "dimension": "transfer",
        "modes": [
          "review"
        ],
        "hint": "先说明使用的定义和题目限制，再判断。",
        "explanation": "达到最小值要求−4≤x≤3，整数为−4、−3、−2、−1、0、1、2、3，共8个。要同时检查区间和整数条件。"
      }
    ],
    "method": "从定义推导",
    "review": {
      "independent": true,
      "report": "docs/grade7-enhancements-review.md",
      "note": "由另一Agent独立审查并修正（见grade7-enhancements-review）；未做教师审校或学生效果验证。"
    },
    "sourceScope": "初一通用核心课程；上册依已导入教材目录关联，下册待提供教材逐页映射；原创讲解与变式。",
    "coverageTopics": [
      "两点距离",
      "三段位置一般推导",
      "最小值与全部达到位置",
      "限制范围",
      "整数条件",
      "整体平移"
    ],
    "methods": {
      "explainPrompt": "为什么取到最小值的可以是整个区间，而不只是中点？区间外为什么变大？",
      "cuePrompts": [
        "为什么取到最小值的可以是整个区间，而不只是中点？区间外为什么变大？",
        "用这条关系前，需要检查哪些条件？"
      ],
      "reviewPrompts": [
        "合上讲解，说清一个定义和它的条件。",
        "举一个适用的例子，再举一个容易误用的情况。"
      ]
    }
  }
];
