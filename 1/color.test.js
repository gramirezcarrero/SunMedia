const result = require('./test');
test('prueba assing', () => {
  expect(result.colors_original).toEqual({"black": "#000000", "blue": "#0000FF", "green": "#00FF00", "red": "#FF0000", "white": "#FFFFFF"});
});
test('prueba para concatenar objetos', () => {
  expect(result.colors).toEqual({"black": "#000000", "blue": "#0000FF", "green": "#00FF00", "red": "#FF0000", "white": "#FFFFFF"});
});
test('prueba para concatenar objetos ie', () => {
  expect(result.result).toEqual({"black": "#000000", "blue": "#0000FF", "green": "#00FF00", "red": "#FF0000", "white": "#FFFFFF"});
});