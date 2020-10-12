/* eslint-disable no-mixed-operators */
const cesarMod = (() => {
  const cipher = (str, key = 0) => {
    let res = '';
    for (let i = 0; i < str.length; i += 1) {
      if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() < 91) {
        res += String.fromCharCode((str[i].charCodeAt() + key - 65) % 26 + 65);
      } else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() < 123) {
        res += String.fromCharCode((str[i].charCodeAt() + key - 97) % 26 + 97);
      } else {
        res += str[i];
      }
    }
    return res;
  };
  return { cipher };
})();

export default cesarMod;