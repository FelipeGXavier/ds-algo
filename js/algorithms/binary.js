

const find = (arr, find) => {
	while(true) {
		if(arr.length == 0) break;
		let middle = Math.floor(arr.length/2);
		if(arr[middle] == find) {
			return arr[middle];
		}else if(find > arr[middle]) {
			arr = arr.slice(middle + 1);
		}else {
			arr = arr.slice(0, middle);
		}
	}
}

const _find = (arr, find) => {
	if(arr.length == 0) return;
	let middle = Math.floor(arr.length/2);
	if(arr[middle] == find) {
		return arr[middle];
	}else if(find > arr[middle]) {
		return _fn(arr.slice(middle + 1), find);
	}else if(find < arr[middle]){
		return _fn(arr.slice(0, middle), find);
	}
}

let arr = [7,2,1,9,6,4,22,3].sort((a , b) => a - b);

console.log(find(arr, 7));
console.log(_find(arr, 7));
