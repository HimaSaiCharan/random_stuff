const createFrequencyTable = function (table, element) {
  const rowOrUndefined = table.find(function (row) {
    return row[0] === element;
  });

  const row = rowOrUndefined || [element, 0];

  if (row[1] === 0) {
    table.push(row);
  }

  row[1] += 1;
  return table;
};

const frequency = function (list) {
  return [...list].reduce(createFrequencyTable, []);
};

console.table(frequency('hello'));
console.table(frequency([1,2,3,3,1));
