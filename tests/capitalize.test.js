import capMod from '../javascript/capitalize'

test('capitalizes the first letter of the given string', () => {
  expect(capMod.capitalize('this is a test string')).toBe('This is a test string');
})