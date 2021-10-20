// https://leetcode.com/problems/rotate-array/

function rotate(nums: number[], k: number): void {
  function reverse(arr: number[], start: number, end: number) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  const i = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, i - 1);
  reverse(nums, i, nums.length - 1);
}

const arr = [-1, 2, 4, 5];
rotate(arr, 6);
// console.log(arr);
