import stringsFalse from "../src/stringsFalse";

test('a es es diferente a b', () => { 
  expect(stringsFalse(1,1)).toBe(false);
 })