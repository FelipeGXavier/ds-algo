let arr = [1,6,2,5];

function fn(arr) {
	if(arr.length == 1) return arr;
	const middle = Math.floor(arr.length/2);
	return merge(fn(arr.slice(0, middle)), fn(arr.slice(middle)));
}

function merge(left, right) {
  let result = [],
      i = 0,
      j = 0

  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      result.push(left[i++])      
    } else {                       
      result.push(right[j++])
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j))

}


fn(arr);