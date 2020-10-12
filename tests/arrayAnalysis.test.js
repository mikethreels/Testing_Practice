import arrayAnalysis from '../src/arrayAnalysis';

test('gets an array and returns the analysis', () => {
  expect(arrayAnalysis.analyze([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});