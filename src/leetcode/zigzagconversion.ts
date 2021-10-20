const convert = (str: string, numOfRows: number): string => {
  if (numOfRows === 1 || str.length <= numOfRows) return str;

  let rows = new Array(numOfRows).fill("");
  let current = 0;
  let direction: "up" | "down" = "down";

  for (let i = 0; i < str.length; i++) {
    rows[current] += str[i];

    if (direction === "down") {
      current++;

      if (current === numOfRows - 1) direction = "up";
    } else {
      current--;
      if (current === 0) direction = "down";
    }
  }

  return rows.join("");
};

const r = convert("ABc", 1);
console.log(r);
