const base = require('../index');

//add
test('add 1 + 2 to equal 3', () => {
    expect(base.add([1,2])).toBe(3);
})

test('add 0 + 4 to equal 4', () => {
    expect(base.add([0,4])).toBe(4);
})
test('add 0 + 4 + 3 to equal 7', () => {
    expect(base.add([0,4,3])).toBe(7);
})
test('add 0 to equal 0', () => {
    expect(base.add([0])).toBe(0);
})
test('add empty array to return undefined', () => {
    expect(base.add([])).toBe(undefined);
})
test('add a string to return error', () => {
    expect(base.add(['a', 'b'])).toBe("error not finite");
})


//subtract
test('subtract 1 - 2 to equal -1', () => {
    expect(base.subtract([1,2])).toBe(-1);
})

test('sub 0 - 4 to equal -4', () => {
    expect(base.subtract([0,4])).toBe(-4);
})
test('sub 0 - 4 - 3 to equal 7', () => {
    expect(base.subtract([0,4,3])).toBe(-7);
})
test('sub 0 to equal 0', () => {
    expect(base.subtract([0])).toBe(0);
})
test('pass empty array to return undefined', () => {
    expect(base.subtract([])).toBe(undefined);
})
test('sub a string to return error', () => {
    expect(base.subtract(['b', 100])).toBe("error not finite");
})
test('sub a string bill from parrot to return a nah', () => {
    expect(base.subtract(['bill', 'parrot'])).toBe("error not finite");
})

//multiple
test('multiple 3 * 2 to equal 6', () => {
    expect(base.multiple([3, 2])).toBe(6);
})
test('multiple 3 * 4 * 0 to equal 0', () => {
    expect(base.multiple([3, 4, 0])).toBe(0);
})

test("multiple 3 * 'a' to equal error", () => {
    expect(base.multiple([3,"a"])).toBe("error not finite");
})
test("multiple empty array to equal error", () => {
    expect(base.multiple([])).toBe(undefined);
})

//divide
test('divide 1 / 1 to equal 1', () => {
    expect(base.divide([1,0])).toBe("error not finite");
})
test('divide 1 / 0 / 1 to equal error', () => {
    expect(base.divide([1,0,1])).toBe("error not finite");
})

test("divide 1 / '0' / 1 to equal error", () => {
    expect(base.divide([1,"0",1])).toBe("error not finite");
})
test("divide 3 / 'a' to equal error", () => {
    expect(base.divide([3,"a"])).toBe("error not finite");
})
test("divide empty array to equal error", () => {
    expect(base.divide([])).toBe(undefined);
})

//modulus
test('modulus 13 % 4 to equal 1', () => {
    expect(base.modulus([13, 4])).toBe(1);
})
test('modulus 25 % 7 % 3 to equal 1', () => {
    expect(base.modulus([25, 7, 3])).toBe(1);
})

test("modulus 1 % 0 to equal error", () => {
    expect(base.modulus([1, 0])).toBe("error not finite");
})
test("modulus 3 % 'a' to equal error", () => {
    expect(base.modulus([3,"a"])).toBe("error not finite");
})
test("modulus empty array to equal error", () => {
    expect(base.modulus([])).toBe(undefined);
})

//exponential
test('exponential 2 ^ 4 to equal 16', () => {
    expect(base.exponential([2, 4])).toBe(16);
})
test('exponential 2 ^ 2 ^ 1 ^ 2 to equal 16', () => {
    expect(base.exponential([2, 2, 1, 2])).toBe(16);
})
test("exponential 3 ^ 0 to equal 1", () => {
    expect(base.exponential([3, 0])).toBe(1);
})
test("exponential 'b' ^ 'a' to equal NaN", () => {
    expect(base.exponential(['b', 'a'])).toBe(NaN);
})
test("exponential 'b' ^ 3 to equal NaN", () => {
    expect(base.exponential(['b', 3])).toBe(NaN);
})
test("exponential empty array to equal error", () => {
    expect(base.exponential([])).toBe(undefined);
})

test('stub .toBeCalled()', () => {
  const stub = jest.fn();
  stub();
  expect(stub).toBeCalled();
});
test('spyOn .toBeCalled()', () => {
  const sthSpy = jest.spyOn(base, 'operation');
  base.operation([]);
  expect(sthSpy).toBeCalled();
});