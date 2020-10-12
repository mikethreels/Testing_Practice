const capMod = (() => {
  const capitalize = (str) => str[0].toUpperCase() + str.substring(1);

  return {
    capitalize,
  };
})();

export default capMod;