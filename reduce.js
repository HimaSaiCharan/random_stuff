const isOdd = function (element) {
  return element & 1 === 1;
};

const isOddPresent = function (...list) {
  return isAnyElement(isOdd, list);
};

const isNegative = function (element) {
  return 0 > element;
};

const areAllPositive = function (...list) {
  areAll(isNegative, list);
};

const isElementAbove100 = function (element) {
  return element > 100;
};

const isValueAbove100Present = function (...list) {
  return isAny(isElementAbove100, list);
};

const isStringGreaterThan3 = function (element) {
  return element.length > 3;
};

const areString = function (...list) {
  return areAll(isStringGreaterThan3, list);
};

const isAny = function (condition, list) {
  for (const element of list) {
    if (condition(element)) {
      return true;
    }
  }

  return false;
};

const areAll = function (condition, list) {
  for (const element of list) {
    if (condition(element)) {
      return false;
    }
  }

  return true;
};
