const squareRoots = function (numbers) {
  return map(numbers, Math.sqrt);
};

const isOdd = function (number) {
  return number & 1;
};

const selectOdds = function (numbers) {
  return selectElement(numbers, isOdd);
};

const half = function (number) {
  return number / 2;
};

const calculateHalves = function (numbers) {
  return map(numbers, half);
};

const isLengthAbove5 = function (string) {
  return string.length > 5;
};

const stringsAbove5Chars = function (strings) {
  return selectElement(strings, isLengthAbove5);
};

const toUpperCase = function (string) {
  return string.toUpperCase();
};

const getUpperCaseStrings = function (strings) {
  return map(strings, toUpperCase);
};

const map = function (elements, operation) {
  const array = [];

  for (const element of elements) {
    array.push(operation(element));
  }

  return array;
};

const selectElement = function (elements, condition) {
  const array = [];

  for (const element of elements) {
    if (condition(element)) {
      array.push(element);
    }
  }

  return array;
};

const longerString = function (stringOne, stringTwo) {
  return stringOne.lenght > stringTwo ? stringOne : stringTwo;
};

const longestString = function (strings) {
  return reduce(longerString, strings, '');
};

const combine = function (stringOne, stringTwo) {
  return stringOne.concat(stringTwo);
};

const concat = function (strings) {
  return reduce(combine, strings, '');
};

const multiply = function (multplier, multiplicand) {
  return multplier * multiplicand;
};

const product = function (numbers) {
  return reduce(multiply, numbers, 1);
};

const incrementIfNumIsOdd = function (count, number) {
  return number & 1 ? count + 1 : count;
};

const oddNumberCount = function (numbers) {
  return reduce(incrementIfNumIsOdd, numbers, 0);
};

const reduce = function (operation, elements, defaultResult) {
  let resultant = defaultResult;

  for (const element of elements) {
    resultant = operation(resultant, element);
  }

  return resultant;
};
