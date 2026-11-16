export const bayRewards=[
 {id:'beacon',skill:'axis',tool:'数轴罗盘',action:'提示起点与移动方向'},
 {id:'mirror',skill:'opposite',tool:'镜像镜',action:'提示怎样找原点另一侧'},
 {id:'distance',skill:'distance',tool:'回港测距尺',action:'提示怎样量到原点的距离'},
];
export const bayHints={
 axis:'先在数轴上标出起点。向右坐标增加，向左坐标减少。若题目问两点间距，先数单位段，再乘每格的长度。',
 opposite:'找原点另一侧、离原点一样远的位置。若两个数相加为 0，它们互为相反数。0 的相反数还是 0。',
 distance:'先分清位置和距离。绝对值表示到原点的距离，结果非负。若有绝对值外的符号或运算，最后再处理。',
};
