// https://repl.it/repls/GoodGrandioseDevelopments

const input = [3, 100, 6, 7, 4, 6, 10, 7, 1, 2, 0];

const result = insertionSort(input);

console.log("RESULT ", result)

function insertionSort(array) {
  let result = [];

  array.forEach(item => {
    result.push(item);

    for (let i = 0; i < result.length; i++) {
      const a = result[result.length - i];
      const b = result[result.length - i - 1];

      if (a < b) {
        swap(result, result.length - i, result.length - i - 1)
      }
    }
  });

  return result;
}

function swap(array, index1, index2) {
  const val1 = array[index1];
  array[index1] = array[index2];
  array[index2] = val1;
}
