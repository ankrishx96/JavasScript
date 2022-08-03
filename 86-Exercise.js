let countOccurrences = (arr, searchEle) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == searchEle) {
      count++;
    }
  }
  return count;
};

let result = countOccurrences([1, 2, 3, 4, 1, 2, 1], 1);
console.log(result); //3
