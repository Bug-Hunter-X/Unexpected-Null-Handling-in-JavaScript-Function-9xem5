function foo(a, b) {
  a = a !== null ? a : 0; // Coalesce a to 0 if null
  b = b !== null ? b : 0; // Coalesce b to 0 if null
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0