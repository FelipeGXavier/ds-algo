const Stack = require('./js/datastructure/stack/stack');

const types = {'{': '}', '[': ']', '(': ')'};

const fn = (str) => {
	const stack = new Stack();
	for (let i = 0; i < str.length; i++) {
		const seek = stack.seek();
		if(stack.empty() || str[i] != types[seek]) {
			stack.add(str[i]);
		}else {
			stack.pop();
		}
	}
	return stack.empty();
}

console.log(fn('{[]}'));