module.exports = class Node {

	constructor(value) {
		this.value = value;
		this.next = null;
	}

	setNextNode(node) {
		this.next = node;
	}

	getNext() {
		return this.next;
	}

	getValue() {
		return this.value;
	}
	
}