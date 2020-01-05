// https://repl.it/repls/PotableTemporalBraces

const input = [3, 100, 6, 7, 4, 6, 10, 7, 1, 2, 0];

const result = quickSort(input, 0, input.length - 1);

console.log("RESULT ", result)

function swap(array, index1, index2) {
  const val1 = array[index1];
  array[index1] = array[index2];
  array[index2] = val1;
}

function quickSort(array, startIndex, endIndex) {
  const index = partition(array, startIndex, endIndex);

  if (startIndex < index - 1) {
    quickSort(array, startIndex, index - 1);
  }

  if (index < endIndex) {
    quickSort(array, index, endIndex);
  }

  return array;
}

function partition(array, startIndex, endIndex) {
  const pivotIndex = Math.floor((endIndex + startIndex) / 2);
  const pivot = array[pivotIndex];
  var leftIndex = startIndex;
  var rightIndex = endIndex;

  while (leftIndex <= rightIndex) {
    if (array[leftIndex] < pivot) {
      leftIndex++;
    } else if (array[rightIndex] > pivot) {
      rightIndex--;
    } else {
      if (leftIndex <= rightIndex) {
        swap(array, leftIndex, rightIndex);
      }
      leftIndex++;
      rightIndex--;
    }
  }

  return leftIndex;
}
