let countGrade = (arr) => {
  let subjects = arr.length;
  let totalResult = 0;
  for (let i = 0; i < arr.length; i++) {
    totalResult += arr[i];
  }

  let averageGrades = totalResult / subjects;

  if (averageGrades === 0) {
    console.log("Failed");
  }

  if (averageGrades >= 1 && 59 >= averageGrades) {
    console.log("Grade F");
  } else if (averageGrades >= 60 && 69 >= averageGrades) {
    console.log("Grade D");
  } else if (averageGrades >= 70 && 79 >= averageGrades) {
    console.log("Grade C");
  } else if (averageGrades >= 80 && 89 >= averageGrades) {
    console.log("Grade B");
  } else {
    console.log("Grade A");
  }
};

let result = countGrade([30, 40, 80, 50]);

// New Approach

function calculateGrade(marks) {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  let avg = sum / marks.length;

  if (avg < 60) return "F";
  if (avg < 70) return "D";
  if (avg < 80) return "C";
  if (avg < 90) return "B";

  return "A";
}
