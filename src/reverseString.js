const reverseMod = (() => {
  const reverseString = (str) => str.split('').reverse().join('');
  return {
    reverseString,
  };
})();

export default reverseMod;