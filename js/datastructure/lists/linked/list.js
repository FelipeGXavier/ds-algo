const Node = require('./node');

module.exports = class List {

	constructor() {
		this.root = null;
		this.last = null;
		this.count = 0;
	}

	add(value) {
		const node = new Node(value);
		if(this.root == null) {
			this.root = node;
		}else{
			this.last.setNextNode(node);
		}
		this.last = node;
		this.count++;
	}

	get(index) {
		let current = this.root;
		let counter = 0;
		while(current != null) {
			if(counter == index)	 {
				return current.getValue();
			}
			counter++;
			current = current.getNext();
		}
		return null;
	}

	remove(index) {
		if(index < 0 || index > (this.count - 1)) {
			throw new Error("Index out bounds");
		}
		if(index == 0) {
			this.root = this.root.getNext();
			this.last = this.count == 1 ? this.root : this.last;
			this.count--;
			return;
		}
		let current = this.root; 
		let counter = 0.
		while (current != null) {
			if(counter == index - 1) {
				current.setNextNode(current.getNext().getNext());
				this.last = (index == this.count - 1) ? current : this.last;
				this.count--;
				break;
			}
			counter++;
			current = current.getNext();
		}
	}

	toArray() {
		const result = [];
		let current = this.root;
		while(current != null) {
			result.push(current.getValue())
			current = current.getNext();
		}
		return result;
	}

	size() {
		return this.count;
	}

}