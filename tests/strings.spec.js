import stringTrue from "../src/stringTrue";

test('a es es diferente a b', () => { 
  expect(stringTrue(50,-50)).toBe(true);
 })