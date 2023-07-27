import numeroTrue from "../src/numero";

test('si 50 es verdadero retorna true', () => {
  expect(numeroTrue(50,-50)).toBe(true);
 })