// https://leetcode.com/problems/reverse-words-in-a-string-iii/

function reverseWords(s: string): string {
  function reverse(word: string): string {
    const letters = word.split("");
    let start = 0;
    let end = letters.length - 1;

    while (start < end) {
      const tmp = letters[end];
      letters[end] = letters[start];
      letters[start] = tmp;
      start++;
      end--;
    }

    return letters.join("");
  }

  return s.split(" ").map(reverse).join(" ");
}

// console.log(reverseWords("Let's take LeetCode contest"));
