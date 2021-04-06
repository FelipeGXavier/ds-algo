

const _map = (fn, data, result) => {
	if (data.length == 0) return result;
	result.push(fn(data.shift()));
	return _map(fn, data, result);
}

const result = _map(function(el) {
	return el * 2;
}, [1,2,3], []);


const map = ([ head, ...tail ], func) => {
	if(tail.length === 0) {
		return func(head)
	}else{
		return [ func(head) ].concat(map(tail, func))
	}
}

map([1,2,3], (el) => el * 2);

const _sum = (value) => {
	let total = 0;
	if(value == 1) {
		total = 1;
	}else{
		total = value + _sum(value - 1);
	}
	return total;
}

const add = (n) => (n + 1);

const memoize = (fn) => {
  let cache = {};
	console.log('start');
  return (...args) => {
    let n = args[0];  
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}
const memoizedAdd = memoize(add);

memoizedAdd(1);
memoizedAdd(1);
memoizedAdd(1);
memoizedAdd(1);