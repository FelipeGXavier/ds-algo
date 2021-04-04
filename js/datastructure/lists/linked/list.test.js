const List = require('./list');

describe('Test Linked List', () => {
	it('Should add', () => {
		const list = new List();
		list.add(10);
		expect(list.get(0)).toBe(10);
		expect(list.size()).toBe(1);
	});

	it('Should transform to array', () => {
		const list = new List();
		expect(list.toArray()).toEqual([]);
		list.add(1);
		list.add(2);
		list.add(3);
		expect(list.toArray()).toEqual([1,2,3]);
	});

	it('Should remove', () => {
		const list = new List();
		list.add(1);
		list.add(2);
		list.add(3);
		list.remove(0);
		expect(list.size()).toBe(2);
		expect(list.toArray()).toEqual([2,3]);
		list.add(1);
		expect(list.size()).toBe(3);
		expect(list.toArray()).toEqual([2,3,1]);
		list.remove(2);
		expect(list.size()).toBe(2);
		expect(list.toArray()).toEqual([2,3]);
		list.add(3);
		expect(list.size()).toBe(3);
		expect(list.toArray()).toEqual([2,3,3]);
	});

	it('Should throw an error when attempting to remove index outside of range', () => {
		const list = new List();
		expect(() => list.remove(-1)).toThrow(Error);
		list.add(1);
		expect(() => list.remove(1)).toThrow(Error);
	})
});