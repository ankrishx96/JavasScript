let sum = (value) => {
  let i = 0;
  let res = 0;

  while (i <= value) {
    if (i % 3 === 0 || i % 5 === 0) {
      res += i;
    }
    i++;
  }
  return res;
};

let result = sum(10);

console.log(result);
