import calculator from '../src/calculator'

test('returns the result of sum a + b', () => {
  expect(calculator.sum(4, 5)).toBe(9);
});

test('returns the result of subatracting b from a', () => {
    expect(calculator.minus(6, 3)).toBe(3);
});

test('returns the result of multiply a by b', () => {
    expect(calculator.mul(4, 5)).toBe(20);
});

test('returns the result of divide a by b', () => {
    expect(calculator.div(20, 5)).toBe(4);
  })