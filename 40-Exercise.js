let countTruthy = (arr) => {
  let count = 0;
  for (let i of arr) {
    if (i) {
      count++;
    }
  }
  console.log(count);
};

let res = countTruthy([null, undefined, "", 1, "Ankrish", 2]);
