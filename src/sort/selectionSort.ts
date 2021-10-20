export function sort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let min = i;
      const temp = arr[i];

      if (arr[j] < arr[min]) {
        min = j;
      }

      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}
