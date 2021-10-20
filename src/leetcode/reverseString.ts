// https://leetcode.com/problems/reverse-string/

function reverseString(s: string[]): void {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let tmp = s[end];
    s[end] = s[start];
    s[start] = tmp;
    start++;
    end--;
  }
}

const str = "hello".split("");
reverseString(str);
console.log(str);
