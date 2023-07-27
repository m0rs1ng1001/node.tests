import Porcentaje from "../src/Porcentaje";

test('el 10% de 40 es 4', () => {
  expect(Porcentaje(40)).toBe(4);
})