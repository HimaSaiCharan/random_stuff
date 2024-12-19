const orderBy = function (list, pivot) {
  return list.sort(function (a, b) {
    if (a > pivot && b > pivot) {
      return b - a;
    }

    return a - b;
  });
};

console.log(orderBy([55, 87, 99, 34, 12, 7, 65], 50));