const array = [1, 36, 82, 5, 9, 12];

const isEven = function (number) {
  return (number & 1) === 0;
};


array.sort(function (a, b) {
  if (isEven(a) && !isEven(b)) {
    return -1;
  }

  if (!isEven(a) && isEven(b)) {
    return 1;
  }

  return a - b;
});

console.log(array);