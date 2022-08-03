let countOccurrences = (arr, searchEle) => {
  if (!Array.isArray(arr)) throw new Error("Invalid array");
  return arr.reduce((acc, curr) => {
    let count = curr == searchEle ? 1 : 0;
    return acc + curr;
  }, 0);
};

try {
  let result = countOccurrences(true, 1);
  console.log(result); //3
} catch (e) {
  console.log(e.message);
}
