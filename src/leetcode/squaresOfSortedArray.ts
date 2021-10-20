// https://leetcode.com/problems/squares-of-a-sorted-array/

const sortedSquares = (nums: number[]): number[] => {
  const result = new Array(nums.length);

  let start = 0;
  let end = nums.length - 1;
  let length = nums.length - 1;

  while (length >= 0) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      result[length--] = Math.pow(nums[start], 2);
      start++;
    } else {
      result[length--] = Math.pow(nums[end], 2);
      end--;
    }
  }

  return result;
};

// console.log(sortedSquares([-4, -1, 0, 3, 10]));
// 0, 1, 9, 16, 100,
