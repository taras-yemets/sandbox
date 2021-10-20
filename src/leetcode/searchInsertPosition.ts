// https://leetcode.com/problems/search-insert-position/

const searchInsert = (nums: number[], target: number): number => {
  let pivot = 0;
  let left = 0;
  let right = nums.length - 1;

  while (true) {
    pivot = Math.floor(left + (right - left) / 2);
    const current = nums[pivot];
    if (current === target) return pivot;
    if (current < target) {
      left = pivot + 1;
      if (left > right) return left;
    } else {
      right = pivot - 1;
      if (right < left) return left;
    }
  }
};

// console.log(searchInsert([1, 3, 5, 6], 4));

// 1,3,5,6 <= 2
// pivot = 2, nums[2] > 2 => left = 0, right = 1
// pivot = 0, nums[0] < 2 => left = 1, right = 1
// pivot = 1, nums[1] > 2 => left = 1, right = 0
