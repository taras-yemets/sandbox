function fibonacciRecursive(index: number): number {
  if (index < 0) throw Error("Index should be >= 0");
  if (index < 2) return index;

  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

function fibonacciIterative(index: number): number {
  if (index < 0) throw Error("Index should be >= 0");
  if (index < 2) return index;

  let first = 0;
  let second = 1;

  for (let i = 2; i <= index; i++) {
    const current = first + second;
    first = second;
    second = current;
  }

  return second;
}
