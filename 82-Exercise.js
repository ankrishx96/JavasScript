let arrayFromRange = (min, max) => {
  if (min > max) {
    return false;
  }

  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
};

const number = arrayFromRange(10, -10);
console.log(number);
