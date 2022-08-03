let getMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

let result = getMax([10, 20, 1, 80, 90, 50]);
console.log(result);

// ----------------

arr.reduce((prev, curr) => (prev > curr ? prev : curr));
