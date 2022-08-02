const number = [3, 4, 5];

// number=[] gives error

//End
number.push(9, 10);
console.log(number); // [ 3, 4, 5, 9, 10 ]

//Beginning
number.unshift(1, 2); // [ 1, 2, 3, 4, 5, 9, 10]
console.log(number);

//Middle
number.splice(2, 0, 11, 12);
console.log(number); // [ 1, 2, 11, 12, 3, 4, 5,  9, 10 ]
