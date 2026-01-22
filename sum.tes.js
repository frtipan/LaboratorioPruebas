const sum = require("./sum");

test("suma 2 + 3 debe ser 5", () => {
  expect(sum(2, 3)).toBe(5);
});

// funciones matemáticas
const { factorial, fibonacci } = require("./math");

test("factorial de 5 debe ser 120", () => {
  expect(factorial(5)).toBe(120);
});

test("fibonacci de 6 debe ser 8", () => {
  expect(fibonacci(6)).toBe(8);
});