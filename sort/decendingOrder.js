const array = [12, 65, 9, 76];

array.sort(function (a, b) {
  return b - a;
});

console.log(array);

// *******************************************************************

const array1 = [-5, 10, 5, -97, 97, -10];

array1.sort(function (a, b) {
  return b - a;
});

console.log(array1);

// *******************************************************************

const array2 = [-5, 10, 5, -97, 97, -10];

array2.sort(function (a, b) {
  if (Math.abs(a) === Math.abs(b)) {
    return a - b;
  }

  return Math.abs(a) - Math.abs(b);
});

console.log(array2);

// *******************************************************************