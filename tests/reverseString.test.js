import reverseMod from '../javascript/reverseString'

test('reverses the given string', () => {
  expect(reverseMod.reverseString('this is a test string')).toBe('gnirts tset a si siht');
})