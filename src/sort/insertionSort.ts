export function sort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
    console.log(JSON.stringify(arr));
  }

  return arr;
}
