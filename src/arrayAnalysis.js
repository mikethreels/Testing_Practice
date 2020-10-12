const arrayAnalysis = (() => {
  const analyze = (arr) => {
    const sum = arr.reduce((a, b) => a + b);
    const min = arr.reduce((a, b) => Math.min(a, b));
    const max = arr.reduce((a, b) => Math.max(a, b));

    return {
      average: sum / arr.length,
      min,
      max,
      length: arr.length,
    };
  };

  return {
    analyze,
  };
})();

export default arrayAnalysis;