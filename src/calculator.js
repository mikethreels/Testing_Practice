const calculator = (() => {
  const sum = (a, b) => a + b;

  const minus = (a, b) => a - b;

  const div = (a, b) => a / b;

  const mul = (a, b) => a * b;

  return {
    sum, minus, div, mul,
  };
})();

export default calculator;