import AreaCuadrado from "../src/areaCuadrado";

test('lado * lado es igual al area del cuadrado', () => {
  expect(AreaCuadrado(5,5)).toBe(25);
 });