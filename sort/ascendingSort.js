const array = [13, 86, 23];

array.sort(function (a, b) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
});

console.log(array);

// *************************************************************

const array1 = [16, 89, 76, 65];

array1.sort(function (a, b) {
  return a - b;
});

console.log(array1);

// *************************************************************

const array2 = [-5, 67, 34, -34, 100, 88, 5, 80, -10];

array2.sort(function (a, b) {
  if (Math.abs(a) === Math.abs(b)) {
    return a - b;
  }

  return Math.abs(a) - Math.abs(b);
});

console.log(array2);

// ************************************************************