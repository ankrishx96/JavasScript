let sum = (...args) => {
  if (args.length === 1 && Array.isArray(args[0])) {
    args = [...args[0]];
  }
  return args.reduce((a, b) => a + b);
};

let array = sum([1, 2, 3, 4, 5, 6, 7]);
console.log(res); // 28

let val = sum(1, 2, 3, 4, 5, 6, 7);
console.log(val); // 28
