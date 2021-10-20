// https://leetcode.com/problems/integer-to-roman/

// const map = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000
// };

const intToRoman = (num: number): string => {
  let result = "";

  const reduceNumBy = (n: number): void => {
    num -= Math.floor(num / n) * n;
  };

  const fn = (romans: [string, string, string], v: number): void => {
    if (v === 0) return;

    if (v === 9) {
      result += romans[0];
      result += romans[2];
    } else if (v >= 5) {
      result += romans[1];
      for (let i = 0; i < v - 5; i++) result += romans[0];
    } else if (v === 4) {
      result += romans[0];
      result += romans[1];
    } else {
      for (let i = 0; i < v; i++) result += romans[0];
    }
  };

  if (num >= 1000) {
    for (let i = 0; i < Math.floor(num / 1000); i++) {
      result += "M";
    }
    reduceNumBy(1000);
  }

  if (num >= 100) {
    fn(["C", "D", "M"], Math.floor(num / 100));
    reduceNumBy(100);
  }

  if (num >= 10) {
    fn(["X", "L", "C"], Math.floor(num / 100));
    reduceNumBy(10);
  }

  fn(["I", "V", "X"], num);

  console.log(result);
  return result;
};

intToRoman(58);
