const courses = [
  { id: 1, name: "HTML" },
  { id: 2, name: "JS" },
  { id: 3, name: "TypeScript" },
  { id: 4, name: "React" },
];

// find method
console.log(
  courses.find((course) => {
    return course.id === 1; // return object { id: 1, name: 'HTML' }
  })
);

console.log(
  courses.find((course) => {
    return course.id === 10; // Undefined
  })
);

// findIndex method
console.log(
  courses.findIndex((course) => {
    return course.id === 2; // return 1 (index)
  })
);

console.log(
  courses.findIndex((course) => {
    return course.id === 10; // -1
  })
);
