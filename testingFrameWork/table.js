// ━
// ┃
// ┏
// ┓
// ┗
// ┛
// ┣
// ┫
// ┳
// ┻
// ╋
const getBase = function (cellWidth, numOfCells, [leftEdge, rightEdge, cellSeperator]) {
  const cell = [];
  cell.map();
  return leftEdge + rightEdge;
};

console.log(getBase(3, 10, ['┏', '┓', '┳']));
console.log(getBase(3, 10, ['┣', '┫', '╋']));
console.log(getBase(3, 10, ['┗', '┛', '┻']));
