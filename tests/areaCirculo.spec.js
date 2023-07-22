import AreaCirculo from "../src/AreaCirculo";

test('3.1416 por area al cuadrado es igual a 78.53', () => {
  expect(AreaCirculo(5,5)).toBe(31.416);
});