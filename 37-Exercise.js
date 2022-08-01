// Divisible by 3 gives Fizz | Divisible by 5 gives Buzz | Divisible by 3 & 5 gives FizzBuzz

let fizzBuzzLogic = (num) => {
  return num % 3 == 0
    ? num % 5 == 0
      ? "FizzBuzz"
      : "Fizz"
    : num % 5 == 0
    ? "Buzz"
    : num;
};

let fizzbuzz = fizzBuzzLogic(2);

console.log(fizzbuzz);
