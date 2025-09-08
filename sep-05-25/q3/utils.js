export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function average(arr) {
  if (arr.length === 0) return 0;
  const total = arr.reduce((acc, val) => acc + val, 0);
  return total / arr.length;
}
