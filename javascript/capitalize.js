const capMod = (() => {
  const capitalize = (str) => {
    return str[0].toUpperCase() + str.substring(1)
  };

  return{
    capitalize,
  }
})();

export default capMod;