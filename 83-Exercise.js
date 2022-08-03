let includes = (arr, searchEle) => {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] == searchEle) {
      return true;
    }
    i++;
  }
  return false;
};

let result = includes([10, 40.1, 5, 3], 13);
console.log(result);
