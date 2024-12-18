const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const addition = function (a, b, d, c) {
  return a + b + c + d;
};

function testEachFunction(functionReference, inputs, expected, failed) {
  const actual = functionReference(...inputs);
  if (actual !== expected) {
    failed.push([functionReference, inputs, expected, actual]);
  }

  return failed;
}

const testTestCase = function (failed, testCase) {
  const [functionReference, inputs, expectedOutput] = [...testCase];

  return testEachFunction(functionReference, inputs, expectedOutput, failed);
};

const testAll = function () {
  const failed = [];

  const testCases = [
    [add, [1, 4], 0],
    [addition, [1, 4, 4, 5], 0],
    [sub, [5, 6], 1],
    [multiply, [5, 6], 30],
    [divide, [1, 2], 0.5]
  ];

  testCases.reduce(testTestCase, failed);
  console.table(failed);
};

testAll();