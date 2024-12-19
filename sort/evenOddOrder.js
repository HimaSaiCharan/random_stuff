const array = [2, 54, 65, 7, 4, 9, 10, 64];

const isEven = function (number) {
  return (number & 1) === 0;
};

array.sort(function (a, b) {
  if (isEven(a) && !isEven(b)) {
    return a - b;
  }

  if (!isEven(a) && isEven(b)) {
    return b - a;
  }

  return a - b;
});

console.log(array);