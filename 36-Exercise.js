let isLandscape = (width, height) => {
  //   if (width > height) {
  //     return true;
  //   }
  //   return false;

  // using ternary operator
  return width > height ? true : false;
};

let result = isLandscape(1080, 720);
console.log(result);
