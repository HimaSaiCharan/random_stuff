const list1 = ['apple', 'mango', 'banana', 'grapes'];
list1.sort();

console.log(list1);

// ************************************************************

const list2 = ['apple', 'mango', 'banana', 'grapes'];
list2.sort(function (a, b) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
});

console.log(list2);

// ************************************************************

const list3 = ['apple', 'mango', 'banana', 'grapes'];
list3.sort(function (a, b) {
  if (a > b) {
    return -1;
  }

  if (a < b) {
    return 1;
  }

  return 0;
});

console.log(list3); 