const list = [[1, 3, -6], [12, 72], [12, 9], [3], [47, 5, 6]];

const ElementLength = function (list) {
  return list.length;
};

const firstElement = function (list) {
  return list[0];
};

const getList = function (list) {
  return list;
};

const orderBy = function (getProperty) {
  return function (a, b) {
    if (getProperty(a) < getProperty(b)) {
      return -1;
    }

    if (getProperty(a) > getProperty(b)) {
      return 1;
    }

    return 0;
  };
};

const sortEleOfListsInList = function (list) {
  return list.sort(orderBy(getList));
};

console.log(list.map(sortEleOfListsInList));
console.log(list.sort(orderBy(ElementLength)));
console.log(list.sort(orderBy(firstElement)));