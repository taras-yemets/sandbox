// https://leetcode.com/problems/two-sum/

const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const idx = map.get(target - nums[i]);

    if (typeof idx === "number") {
      return [idx, i];
    }

    map.set(nums[i], i);
  }

  return [];
};

console.log("result:", twoSum([2, 11, 15, 7], 9));
