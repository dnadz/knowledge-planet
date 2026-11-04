// Original supplemental lessons; textbook-page alignment and teacher review pending.
export const EXTRA_LESSONS = [
  {
    "id": "solid-views",
    "title": "立体图形与从不同方向看",
    "version": "0.1.0",
    "why": "观察方向改变时，同一个物体的轮廓可能改变。先说清看哪个物体、从哪个方向看。",
    "steps": [
      {
        "type": "讲解",
        "title": "平面与立体",
        "text": "三角形、圆等平面图形在一个平面内；正方体、圆柱、球等立体图形占有空间。物体的一个面与整个物体不是同一对象。"
      },
      {
        "type": "讲解",
        "title": "先固定观察方向",
        "text": "从正面、上面、左面观察物体时，都要先约定正面。这里用平行的视线观察，忽略透视造成的近大远小。"
      },
      {
        "type": "讲解",
        "title": "同一物体可以有不同轮廓",
        "text": "直立圆柱从正上方看是圆，从正面看是长方形。正方体沿垂直于面的方向看是正方形，球从任意方向看外轮廓都是圆。"
      },
      {
        "type": "讲解",
        "title": "视图不能随意反推唯一物体",
        "text": "一个圆形轮廓可能来自球，也可能来自正上方观察直立圆柱。仅凭一个方向的轮廓，通常不能唯一确定物体。"
      },
      {
        "type": "讲解",
        "title": "展开图要保留连接关系",
        "text": "正方体展开后有六个正方形面，但任意六个正方形拼成的图不一定能折成正方体，折叠时不能重叠。"
      }
    ],
    "questions": [
      {
        "id": "views-1",
        "prompt": "沿垂直于正方体某一个面的方向看，轮廓是什么？",
        "options": [
          {
            "id": "0",
            "text": "正方形"
          },
          {
            "id": "1",
            "text": "圆"
          },
          {
            "id": "2",
            "text": "三角形"
          }
        ],
        "answer": "0",
        "hint": "正方体的每个面是什么形状？",
        "explanation": "这个方向正对一个正方形面，轮廓是正方形。",
        "dimension": "concept",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      },
      {
        "id": "views-2",
        "prompt": "从正上方看一个直立圆柱，轮廓是什么？",
        "options": [
          {
            "id": "0",
            "text": "长方形"
          },
          {
            "id": "1",
            "text": "圆"
          },
          {
            "id": "2",
            "text": "三角形"
          }
        ],
        "answer": "1",
        "hint": "观察它的上底面。",
        "explanation": "直立圆柱上底面是圆，正上方看到圆形轮廓。",
        "dimension": "apply",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      },
      {
        "id": "views-3",
        "prompt": "从水平方向正面看直立圆柱，在平行视线下轮廓是什么？",
        "options": [
          {
            "id": "0",
            "text": "圆"
          },
          {
            "id": "1",
            "text": "三角形"
          },
          {
            "id": "2",
            "text": "长方形"
          }
        ],
        "answer": "2",
        "hint": "同时考虑圆柱的高度和宽度。",
        "explanation": "平行视线下正面轮廓为长方形。",
        "dimension": "apply",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      },
      {
        "id": "views-4",
        "prompt": "从任意方向看一个球，它的外轮廓是什么？",
        "options": [
          {
            "id": "0",
            "text": "圆"
          },
          {
            "id": "1",
            "text": "正方形"
          },
          {
            "id": "2",
            "text": "长方形"
          }
        ],
        "answer": "0",
        "hint": "球的外形没有特定朝向。",
        "explanation": "球在平行视线下的外轮廓总是圆。",
        "dimension": "apply",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      },
      {
        "id": "views-5",
        "prompt": "只知道某物体一个方向的轮廓是圆，能确定物体一定是球吗？",
        "options": [
          {
            "id": "0",
            "text": "能"
          },
          {
            "id": "1",
            "text": "不能"
          },
          {
            "id": "2",
            "text": "一定是圆柱"
          }
        ],
        "answer": "1",
        "hint": "直立圆柱从上方看是什么轮廓？",
        "explanation": "球与圆柱都可能出现圆轮廓，一个视图不能唯一确定物体。",
        "dimension": "transfer",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      },
      {
        "id": "views-6",
        "prompt": "正方体有几个面？",
        "options": [
          {
            "id": "0",
            "text": "4"
          },
          {
            "id": "1",
            "text": "6"
          },
          {
            "id": "2",
            "text": "8"
          }
        ],
        "answer": "1",
        "hint": "区分面、棱和顶点。",
        "explanation": "正方体有6个面、12条棱、8个顶点。",
        "dimension": "apply",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      },
      {
        "id": "views-7",
        "prompt": "六个相同正方形随意拼接，就一定能折成正方体吗？",
        "options": [
          {
            "id": "0",
            "text": "一定能"
          },
          {
            "id": "1",
            "text": "只要面积相同就能"
          },
          {
            "id": "2",
            "text": "不一定，要检查连接及重叠"
          }
        ],
        "answer": "2",
        "hint": "折起来时不同面能重叠吗？",
        "explanation": "面数正确只是必要条件，还要检查折叠后是否重叠。",
        "dimension": "transfer",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      },
      {
        "id": "views-8",
        "prompt": "关于圆柱的上底面与圆柱整体，哪句话正确？",
        "options": [
          {
            "id": "0",
            "text": "上底面是平面图形，圆柱是立体图形"
          },
          {
            "id": "1",
            "text": "二者都是平面图形"
          },
          {
            "id": "2",
            "text": "二者都是圆"
          }
        ],
        "answer": "0",
        "hint": "区分一个面和整个物体。",
        "explanation": "圆形底面是平面图形，圆柱整体是立体图形。",
        "dimension": "concept",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      }
    ],
    "sourceScope": "按七上目录补充的原创基础内容，未与原教材逐页校对；未经教师审校",
    "coverageTopics": [
      "平面与立体",
      "先固定观察方向",
      "同一物体可以有不同轮廓",
      "视图不能随意反推唯一物体",
      "展开图要保留连接关系"
    ]
  },
  {
    "id": "projection",
    "title": "投影：光线、物体与影子",
    "version": "0.1.0",
    "why": "影子由光源、物体和承接影子的面共同决定，不能仅凭物体名称猜影子。",
    "steps": [
      {
        "type": "讲解",
        "title": "影子需要哪些条件",
        "text": "物体遮挡光线，在后面的屏幕或地面形成影子。讨论时要同时说明光线方向、物体位置和承接影子的平面。"
      },
      {
        "type": "讲解",
        "title": "点光源与平行光线",
        "text": "点光源发出的光向不同方向传播。太阳很远，在较小范围内可以把太阳光近似看成平行光线，这是模型近似。"
      },
      {
        "type": "讲解",
        "title": "点光源下的大小关系",
        "text": "用固定点光源照射与屏幕平行的平面薄片，薄片位于光源和屏幕之间。保持平行姿态，沿光源到屏幕的方向移动薄片：靠近光源时，屏幕上的影子变大；靠近屏幕时变小。"
      },
      {
        "type": "讲解",
        "title": "影子不一定与原图形相同",
        "text": "正方形薄片与屏幕平行、光线垂直屏幕时，轮廓仍为正方形。改变薄片姿态后，投影可能改变。"
      },
      {
        "type": "讲解",
        "title": "不要混淆不同观察",
        "text": "投影由光线与承接面决定，视图由观察方向决定。研究影子时用实物操作核对条件，不能把某一次影子当成所有情况下的结论。"
      }
    ],
    "questions": [
      {
        "id": "proj-1",
        "prompt": "形成物体影子时，下列哪组条件最完整？",
        "options": [
          {
            "id": "0",
            "text": "光源、遮光物体、承接影子的面"
          },
          {
            "id": "1",
            "text": "只有物体"
          },
          {
            "id": "2",
            "text": "只有地面"
          }
        ],
        "answer": "0",
        "hint": "影子是光被物体挡住后的结果。",
        "explanation": "需要光、遮挡物以及承接影子的面。",
        "dimension": "concept",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      },
      {
        "id": "proj-2",
        "prompt": "在较小地面范围内，通常怎样近似描述太阳光线？",
        "options": [
          {
            "id": "0",
            "text": "所有光线从地面同一点出发"
          },
          {
            "id": "1",
            "text": "近似平行"
          },
          {
            "id": "2",
            "text": "完全没有方向"
          }
        ],
        "answer": "1",
        "hint": "太阳离地球很远。",
        "explanation": "小范围内常把太阳光线近似为平行光线。",
        "dimension": "apply",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      },
      {
        "id": "proj-3",
        "prompt": "固定点光源和屏幕，平面薄片位于两者之间且与屏幕平行。保持姿态，沿光源到屏幕的方向将薄片移向光源，影子怎样变化？",
        "options": [
          {
            "id": "0",
            "text": "变小"
          },
          {
            "id": "1",
            "text": "不变"
          },
          {
            "id": "2",
            "text": "变大"
          }
        ],
        "answer": "2",
        "hint": "物体离屏幕更远、离点光源更近。",
        "explanation": "在这些条件下，影子通常变大。",
        "dimension": "apply",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      },
      {
        "id": "proj-4",
        "prompt": "固定点光源和屏幕，平面薄片位于两者之间且与屏幕平行。保持姿态，沿光源到屏幕的方向将薄片移向屏幕，影子怎样变化？",
        "options": [
          {
            "id": "0",
            "text": "变小"
          },
          {
            "id": "1",
            "text": "变大"
          },
          {
            "id": "2",
            "text": "一定消失"
          }
        ],
        "answer": "0",
        "hint": "同时检查光源和屏幕是否固定。",
        "explanation": "物体靠近屏幕时，其放大的影子通常变小。",
        "dimension": "apply",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      },
      {
        "id": "proj-5",
        "prompt": "一个物体不改变形状，影子形状就一定不变吗？",
        "options": [
          {
            "id": "0",
            "text": "一定不变"
          },
          {
            "id": "1",
            "text": "不一定，光线方向或物体姿态可能改变"
          },
          {
            "id": "2",
            "text": "影子总是圆"
          }
        ],
        "answer": "1",
        "hint": "遮光方向和姿态会影响轮廓。",
        "explanation": "物体姿态或光线方向变化，影子形状可能变化。",
        "dimension": "transfer",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      },
      {
        "id": "proj-6",
        "prompt": "正方形薄片与屏幕平行，平行光线垂直屏幕，薄片投影是什么形状？",
        "options": [
          {
            "id": "0",
            "text": "三角形"
          },
          {
            "id": "1",
            "text": "圆"
          },
          {
            "id": "2",
            "text": "正方形"
          }
        ],
        "answer": "2",
        "hint": "这些条件排除了倾斜投影。",
        "explanation": "在给定条件下轮廓保持正方形。",
        "dimension": "apply",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      },
      {
        "id": "proj-7",
        "prompt": "研究影子大小时，哪种记录更有用？",
        "options": [
          {
            "id": "0",
            "text": "只写物体名称"
          },
          {
            "id": "1",
            "text": "记录光源、屏幕、物体位置及姿态"
          },
          {
            "id": "2",
            "text": "只记当天日期"
          }
        ],
        "answer": "1",
        "hint": "哪些条件直接影响投影？",
        "explanation": "应记录光线与位置、姿态等影响影子的条件。",
        "dimension": "transfer",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      },
      {
        "id": "proj-8",
        "prompt": "“太阳光近似平行”中的“近似”说明什么？",
        "options": [
          {
            "id": "0",
            "text": "模型有适用范围，不是说真实光线绝对平行"
          },
          {
            "id": "1",
            "text": "任何场景都完全平行"
          },
          {
            "id": "2",
            "text": "光没有传播方向"
          }
        ],
        "answer": "0",
        "hint": "模型和真实情形完全一样吗？",
        "explanation": "小范围研究可使用平行光模型，但要保留适用范围。",
        "dimension": "concept",
        "modes": [
          "diagnose",
          "practice",
          "review"
        ]
      }
    ],
    "sourceScope": "按七上目录补充的原创基础内容，未与原教材逐页校对；未经教师审校",
    "coverageTopics": [
      "影子需要哪些条件",
      "点光源与平行光线",
      "点光源下的大小关系",
      "影子不一定与原图形相同",
      "不要混淆不同观察"
    ]
  }
];

