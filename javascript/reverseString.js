const reverseMod = (() => {
  const reverseString = (str) => {
    return str.split('').reverse().join('');
  };
  return {
    reverseString,
  }
})();

export default reverseMod;