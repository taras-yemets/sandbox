function factorialRecursive(nmb: number): number {
  if (nmb < 0) throw Error("Can't get factorial of negative number");
  if (nmb === 0) return 1;

  return nmb * factorialRecursive(nmb - 1);
}

function factorialIterative(nmb: number): number {
  if (nmb < 0) throw Error("Can't get factorial of negative number");
  if (nmb === 0) return 1;

  let value = 1;
  for (let i = value; i <= nmb; i++) {
    value *= i;
  }

  return value;
}
