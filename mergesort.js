// https://repl.it/repls/UnluckyFluffyDownloads

export function mergeSort(array) {

  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);

  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(array1, array2) {
  let index1 = 0;
  let index2 = 0;

  const array = [];

  while (index1 < array1.length && index2 < array2.length) {
    if (array1[index1] <= array2[index2]) {
      array.push(array1[index1]);
      index1++;
    } else if (array1[index1] >= array2[index2]) {
      array.push(array2[index2]);
      index2++;
    }
  }

  return [...array, ...array1.slice(index1), ...array2.slice(index2)];
}
