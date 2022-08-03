// let except = (arr, exclude) => {
//   let i = 0;
//   let j = 0;
//   while (i < arr.length) {
//     while (j < exclude.length) {
//       if (arr[i] === arr[j]) {
//         arr.splice(i, 1);
//       }
//       j++;
//     }
//     i++;
//   }
//   return arr;
// };

let except = (arr, exclude) => {
  let array = arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < exclude.length; j++) {
      if (arr[i] === exclude[j]) {
        array.splice(i, 1);
      }
    }
  }
  return array;
};

let result = except([1, 4, 2, 5, 7], [1, 7]);
console.log(result);
