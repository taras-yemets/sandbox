// https://leetcode.com/problems/move-zeroes/

function moveZeroes(nums: number[]): void {
  let i = 0;
  let count = 0;

  while (i < nums.length - count) {
    if (nums[i] === 0) {
      nums.push(...nums.splice(i, 1));
      count++;
    } else i++;
  }
}

const arr = [0, 0, 1];
moveZeroes(arr);
console.log(arr);
