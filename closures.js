// ********************************* add ******************************
const add = function (x) {
  return function (y) {
    return x + y;
  };
};

// ********************************** counter *************************
const counter = function (x) {
  let value = 0;

  return function () {
    value += x;

    return value;
  };
};

// ********************************* repeat ****************************
const repeat = function (x) {
  return function (times) {
    return x.repeat(times);
  };
};

// ********************************* cycle *****************************
const cycle = function (offset) {
  let count = -1;

  return function () {
    if (count === offset) {
      count = -1;
    }

    return ++count;
  };
};

// ********************************* distribute ************************
const cycle = function (fruits) {
  let count = -1;

  return function (person) {
    if (count === fruits.length - 1) {
      count = -1;
    }
    count += 1;

    return person + " " + fruits[count];
  };
};

const distribute = cycle(['apple', 'orange', 'strawberry']);
const persons = ['hima', 'sui', 'jay', 'aka'];
console.log(persons.map(distribute));

// ********************************* areStringsOFSameSize ****************
const areOfSameSize = function (firstStringLength) {
  return function (string) {
    return string.length === firstStringLength;
  };
};

const listOfStirngs = ['helo', 'this', 'name', 'what', 'hell'];
const sameSize = areOfSameSize(listOfStirngs[0].length);
listOfStirngs.every(sameSize);
