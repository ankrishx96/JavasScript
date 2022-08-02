let showNumber = (number) => {
  let i = 0;
  //   while (i <= number) {
  //     if (i % 2 == 0) {
  //       console.log(`${i} "EVEN"`);
  //     } else {
  //       console.log(`${i} "ODD"`);
  //     }
  //     i++;
  //   }

  // OR

  while (i <= number) {
    const res = i % 2 == 0 ? `${i} : 'EVEN'` : `${i} : 'ODD'`;
    console.log(res);
    i++;
  }
};

let Result = showNumber(10);
