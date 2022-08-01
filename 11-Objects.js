// Defining an Object
let person = {
  firstName: "Ankrish",
  lastName: "Kandpal",
};

console.log(person); // Log the complete Object

// Accessing the Object
console.log(person.firstName); // Log the specific value using dot notation.

console.log(person["lastName"]); // Log the specific value using bracket notation.

// Changing the value
person.firstName = "Ram"; // Using dot notation

person["lastname"] = "Kumar"; // using bracket notation

console.log(person.firstName + " " + person["lastname"]);

// Dynamically adding using bracket Notation
let selection = "firstName";
person[selection] = "Ravi";

console.log("Updated firstName is: " + person["firstName"]);
