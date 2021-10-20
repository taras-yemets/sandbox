// https://leetcode.com/problems/first-bad-version/

const solution = (isBadVersion: (version: number) => boolean) => (
  n: number
): number => {
  let pivot;
  let left = 1;
  let right = n;

  while (left < right) {
    pivot = Math.floor(left + (right - left) / 2);
    if (isBadVersion(pivot)) right = pivot;
    else left = pivot + 1;
  }

  return right;
};

const fn = (v: number) => v > 6;
const sol = solution(fn);
// console.log(sol(8));
