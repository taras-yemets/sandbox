// https://leetcode.com/problems/median-of-two-sorted-arrays/

const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const totalNum = nums1.length + nums2.length;
  let first;
  let second;
  let j = 0;
  let k = 0;

  while (j + k < Math.floor(totalNum / 2)) {
    if (nums1[j] !== undefined) {
      if (nums2[k] !== undefined) {
        if (nums1[j] < nums2[k]) {
          first = nums1[j];
          j++;
        } else if (nums1[j] > nums2[k]) {
          first = nums2[k];
          k++;
        } else {
          j++;
          k++;
        }
      } else {
        first = nums1[j];
        j++;
      }
    } else {
      first = nums2[k];
      k++;
    }
  }

  console.log({ j, k, first, second });
};

console.log(findMedianSortedArrays([], [3, 4]));
