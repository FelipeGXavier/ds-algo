const Stack = require('./stack');

describe('Stack test', () => {

	it('Should add', () => {
		const stack = new Stack();
		expect(stack.empty()).toBeTruthy();
		stack.add(1);
		expect(stack.seek()).toBe(1);
		expect(stack.empty()).not.toBeTruthy();
		expect(stack.size()).toBe(1);
	});

	it('Should pop', () => {
		const stack = new Stack();
		stack.add(1);
		expect(stack.pop()).toBe(1);
		expect(stack.seek()).toEqual(null);
		expect(stack.empty()).toBeTruthy();
	});
});