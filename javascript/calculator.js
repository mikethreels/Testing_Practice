const calculator = ( () => {
  const sum = (a, b) => {
      return a + b;
  };

  const minus = (a, b) => {
    return a - b;
  };

  const div = (a, b) => {
    return a / b;
  }; 

  const mul = (a, b) => {
    return a * b;
  };

  return {sum, minus, div, mul };
})();

export default calculator;