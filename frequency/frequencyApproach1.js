const elementOccurances = function ([match, occured], char) {
  if (char === match) {
    occured += 1;
  }

  return [match, occured];
};

const occurences = function (list, char) {
  return [...list].reduce(elementOccurances, [char, 0]);
};

const getUniqueElements = function (uniqueElements, element) {
  if (!uniqueElements.includes(element)) {
    uniqueElements.push(element);
  }

  return uniqueElements;
};

const removeDuplicates = function (list) {
  return [...list].reduce(getUniqueElements, []);
};

const getAllOccurences = function ([occurencesList, list], element) {
  occurencesList.push((occurences(list, element)));
  return [occurencesList, list];
};

const occurencesOfAll = function (list) {
  const uniqueElements = removeDuplicates(list);

  // return uniqueElements.reduce(function (array, char) {
  //   array.push(occurences(list, char));
  //   return array;
  // }, []);

  return uniqueElements.reduce(getAllOccurences, [[], list])[0];
};

const string = 'this is a string';
console.log(occurencesOfAll(string));

