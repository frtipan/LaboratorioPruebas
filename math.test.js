const { factorial, fibonacci } = require("./math");

test("factorial de 5 debe ser 120", () => {
  expect(factorial(5)).toBe(120);
});

test("fibonacci de 6 debe ser 8", () => {
  expect(fibonacci(6)).toBe(8);
});