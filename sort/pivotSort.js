const pivotBasedSort = function (numbers, pivotValue) {
  return numbers.sort(function (value1, value2) {
    if (value1 > pivotValue && value2 > pivotValue) {
      return value2 - value1;
    }

    return value1 - value2;
  });
};

console.log(pivotBasedSort([55, 87, 99, 34, 12, 7, 65], 50));