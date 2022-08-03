let move = (arr, index, offset) => {
  const position = index + offset;

  if (position >= arr.length) {
    console.error("Invalid offset");
    return;
  }

  const newArr = [...arr];
  let element = newArr.splice(index, 1);
  newArr.splice(index + offset, 0, element);
  return newArr;
};

let result = move([1, 2, 3, 4, 5], 1, 3);
console.log(result);
