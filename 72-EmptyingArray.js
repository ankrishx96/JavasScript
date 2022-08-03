let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Solution 1
number = []; // Emptying an array

// Solution 2
let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let another1 = number1;

number1.length = 0;
console.log(another1); // Show [ ]

// Solution 3
let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let another2 = number2;

number2.splice(0, number2.length);

number1.length = 0;
console.log(another1); // Show [ ]

// Solution 3
let number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let another3 = number3;

while (number3.length > 0) {
  number3.pop();
}

number1.length = 0;
console.log(another1); // Show [ ]
