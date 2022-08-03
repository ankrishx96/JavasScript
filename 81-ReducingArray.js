const number = [1, -1, 2, 3];

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

let total = number.reduce((prev, current) => prev + current);

console.log(total); // 5
