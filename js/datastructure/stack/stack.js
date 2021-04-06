module.exports = class Stack {

	constructor() {
		this.data = [];
	}

	seek() {
		if(this.empty()){
			return null;
		}
		return this.data[this.data.length - 1];
	}

	pop() {
		return this.data.pop();
	}

	add(value) {
		this.data.push(value);
	}

	size() {
		return this.data.length;
	}

	empty() {
		return this.data.length == 0;
	}
}