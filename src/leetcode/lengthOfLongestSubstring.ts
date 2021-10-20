// https://leetcode.com/problems/longest-substring-without-repeating-characters

const lengthOfLongestSubstring = (str: string): number => {
  const set = new Set();
  let result = 0;
  let i = 0;
  let j = 0;

  while (i < str.length && j < str.length) {
    if (!set.has(str[j])) {
      set.add(str[j]);
      j++;

      if (set.size > result) result = set.size;
    } else {
      set.delete(str[i]);
      i++;
    }
  }

  return result;
};

console.log(lengthOfLongestSubstring("jbpnbwwd"));
