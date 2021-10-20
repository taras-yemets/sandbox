// https://leetcode.com/problems/binary-search/

const search = (nums: number[], target: number): number => {
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const pivot = Math.ceil(left + (right - left) / 2);
    console.log({ left: nums[left], right: nums[right], pivot: nums[pivot] });
    if (target === nums[pivot]) return pivot;
    if (target > nums[pivot]) left = pivot + 1;
    else right = pivot - 1;
  }

  return -1;
};

// console.log(search([-1, 0, 3, 5, 9, 12], 9));
