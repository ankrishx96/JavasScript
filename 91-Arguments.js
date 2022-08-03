let x = 1;
x = "a";

function sum(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(sum(1, 2));

// ----------------

function sumAll() {
  let total = 0;
  for (let i of arguments) {
    total += i;
  }
  return total;
}

console.log(sumAll(1, 2, 3, 4, 5, 6));
