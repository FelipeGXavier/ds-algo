const fn = () => {
	console.log('Returna')
	let cache = {};
	return (value) => {
		if(value in cache) {
			console.log('From cache');
			return cache[value];
		}else{
			cache[value] = value;
			return value;
		}
	}
}

const custom = () => {
	const sum = (value) => {
		return value + 10;
	}
	return {
		addFive() {
			return sum(5);
		},
		addSeven() {
			return sum(7);
		}
	}
}

const memo = fn();





