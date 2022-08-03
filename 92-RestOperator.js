function sum(discount, ...args) {
  console.log(args);
  let total = args.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.5, 1, 2, 3, 4, 5, 6, 7, 8));
