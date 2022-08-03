const number = [3, 2, 6, 1, 3, 7, 9, 4, 3];

// Sorting an array
number.sort();
console.log(number); // [ 1, 2, 3, 3, 3, 4, 6, 7, 9 ]

// Reverse an array
number.reverse();
console.log(number); // [ 9, 7, 6, 4, 3, 3, 3, 2, 1 ]

// Sorting array that contain objects
const course = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "Javascript" },
];

course.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(course);
