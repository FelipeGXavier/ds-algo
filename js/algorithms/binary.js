const find = (arr, find) => {
  let middle = 0;
  let result = [...arr];
  while (true) {
    if (arr.length == 0) break;
    middle = Math.floor(arr.length / 2);
    if (arr[middle] == find) {
      break;
    } else if (find > arr[middle]) {
      arr = arr.slice(middle + 1);
    } else {
      arr = arr.slice(0, middle);
    }
  }
  if (find > arr[middle]) {
    result.splice(middle + 1, 0, find);
  } else {
    result.splice(middle - 1, 0, find);
  }
  return result;
};

var binarySearch = function (array, value) {
  var guess,
    min = 0,
    max = array.length - 1;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (array[guess] === value) return guess;
    else if (array[guess] < value) min = guess + 1;
    else max = guess - 1;
  }
  if (value > array[guess]) {
    array.splice(guess + 1, 0, value);
  } else {
    array.splice(guess - 1, 0, value);
  }
  return array;
};

let arr = [7, 2, 1, 9, 6, 4, 22, 3].sort((a, b) => a - b);

console.log(binarySearch(arr, 23));
