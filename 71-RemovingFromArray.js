const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//End
number.pop();
console.log(number); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

//Beginning
number.shift(); // [ 2, 3, 4, 5, 6, 7, 8 ]
console.log(number);

//Middle
number.splice(2, 1);
console.log(number); // [ 2, 3, 5, 6, 7, 8 ]
