const number = [-1, 1, 2, 3, 4];

const allPositive = number.every((value) => {
  return value >= 0;
});

// If negative value is in the starting than every function will not consider the other values and return false

console.log(allPositive); // Return boolean // false

// __________________

const atLeastOnePositive = number.some((value) => {
  return value >= 0;
});

console.log(atLeastOnePositive); // Return boolean // true
