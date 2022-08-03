const number = [1, 2, 3, 4, 5, 6, 7, 8];

for (let num of number) {
  console.log(num);
}

// Method 2

number.forEach((num, index) => console.log(`number[${index}] : ${num}`));

// Method 3

number.map((num, index) => console.log(`number[${index}] : ${num}`));
