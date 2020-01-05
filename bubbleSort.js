// https://repl.it/repls/YellowishConventionalHypotenuse

const input = [3, 100, 6, 7, 4, 6, 10, 7, 1, 2, 0];

const result = bubbbleSort(input);

console.log("RESULT ", result)

function bubbbleSort(array) {
  let times = 0;

  while(times < input.length - 1) {
    for(let i = 0; i < array.length - 1 - times; i++) {
      const a = array[i];
      const b = array[i + 1];
      if (a > b) {
        swap(array, i, i + 1)
      }
    }
    times++;
  }

  return array;
}

function swap(array, index1, index2) {
  const val1 = array[index1];
  array[index1] = array[index2];
  array[index2] = val1;
}
