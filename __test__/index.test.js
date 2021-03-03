const base = require('../index');

// test('add 1 + 2 to equal 3', () => {
//     expect(base.add([1,2])).toBe(3);
// })

// test('add 0 + 4 to equal 4', () => {
//     expect(base.add([0,4])).toBe(4);
// })
// test('add 0 + 4 + 3 to equal 7', () => {
//     expect(base.add([0,4,3])).toBe(7);
// })
// test('add 0 to equal 0', () => {
//     expect(base.add([0])).toBe(0);
// })
// test('pass empty array to return undefined', () => {
//     expect(base.add([])).toBe(undefined);
// })
// test('add a string to return a 0', () => {
//     expect(base.add(['0', '100'])).toBe('0100');
// })


//subtract
// test('subtract 1 + 2 to equal -1', () => {
//     expect(base.subtract([1,2])).toBe(-1);
// })

// test('sub 0 + 4 to equal -4', () => {
//     expect(base.subtract([0,4])).toBe(-4);
// })
// test('sub 0 + 4 + 3 to equal 7', () => {
//     expect(base.subtract([0,4,3])).toBe(-7);
// })
// test('sub 0 to equal 0', () => {
//     expect(base.subtract([0])).toBe(0);
// })
// test('pass empty array to return undefined', () => {
//     expect(base.subtract([])).toBe(undefined);
// })
// test('sub a string to return a -100', () => {
//     expect(base.subtract(['0', '100'])).toBe(-100);
// })
// test('sub a string bill from parrot to return a nah', () => {
//     expect(base.subtract(['bill', 'parrot'])).toBe(NaN);
// })

//divide
/*
test('divide 1 / 1 to equal 1', () => {
    expect(base.divide([1, 0])).toBe("error not finite");
})
test('divide 1 / 0 / 1 to equal error', () => {
    expect(base.divide([1, 0, 1])).toBe("error not finite");
})

test("divide 1 / '0' / 1 to equal error", () => {
    expect(base.divide([1, "0", 1])).toBe("error not finite");
})
test("divide empty array to equal error", () => {
    expect(base.divide([])).toBe(undefined);
})
*/

//multiply --Test for presence of strings, infinity, 1, and 0
test('multiply 1 * 2 to equal 2', () => {
    expect(base.multiply([1, 2])).toBe(2);
})
test('multiply 100 * 0 to equal 0', () => {
    expect(base.multiply([100, 0])).toBe(0);
})
test("multiply 'test' * 0 to equal 'Error - operands need to be numeric'", () => {
    expect(base.multiply(['test', 0])).toBe("Error - operands need to be numeric");
})

/*
test("multiply empty array to equal error", () => {
    expect(base.multiply([])).toBe("Error - operands need to be numeric");
})*/

test("multiply empty array to equal error", () => {
    expect(base.multiply([])).toBe(undefined);
})

 test('multiply a string bill with parrot to return a nah', () => {
     expect(base.multiply(['bill', 'parrot'])).toBe("Error - operands need to be numeric");
 })

 //exponents
 test('power 2 * 2 to equal 4', () => {
    expect(base.pow([2, 2])).toBe(4);
})
test('power 100 * 0 to equal 0', () => {
    expect(base.pow([100, 0])).toBe(1);
})
test("power 'test' * 0 to equal 'Error - operands need to be numeric'", () => {
    expect(base.pow(['test', 0])).toBe("Error - operands need to be numeric");
})

/*
test("multiply empty array to equal error", () => {
    expect(base.multiply([])).toBe("Error - operands need to be numeric");
})*/

test("power empty array to equal error", () => {
    expect(base.pow([])).toBe(undefined);
})

 test('power a string bill with parrot to return a nah', () => {
     expect(base.pow(['bill', 'parrot'])).toBe("Error - operands need to be numeric");
 })