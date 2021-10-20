// https://leetcode.com/problems/longest-palindromic-substring

const longestPalindrome = (str: string): string => {
  let start = 0;
  let end = 0;

  const updateSliceIndexes = (first: number, last: number): void => {
    if (last - first > end - start) {
      start = first;
      end = last;
    }
  };

  for (let i = 0; i < str.length - 1; i++) {
    let j = i - 1;
    let k = i + 1;

    while (str[i] === str[k]) {
      updateSliceIndexes(i, k);

      k++;
    }

    while (j >= 0 && k < str.length && str[j] === str[k]) {
      updateSliceIndexes(j, k);

      j--;
      k++;
    }
  }

  return str.slice(start, end + 1);
};

console.log("result: ", longestPalindrome("__1sabacabas1__"));
// console.log("count: ", count);
// console.log("cbbaaaa".slice(3, 6 + 1));
