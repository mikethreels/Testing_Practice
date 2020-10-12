import cesarMod from '../src/cesarcipher';

test('string to cipher with key of 3', () => {
  expect(cesarMod.cipher("abcd", 3)).toBe("defg");
});

test('string to cipher with empty key', () => {
    expect(cesarMod.cipher("abcd")).toBe("abcd");
});

test('string to cipher with mixed cases', () => {
    expect(cesarMod.cipher("aAbBcCdD",1)).toBe("bBcCdDeE");
});

test('string to cipher with special characters', () => {
    expect(cesarMod.cipher("abcd.efg !",1)).toBe("bcde.fgh !");
});

test('string to cipher with only numbers', () => {
    expect(cesarMod.cipher("1234",1)).toBe("1234");
});



