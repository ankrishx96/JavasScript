const message = "Hey This is John";

console.log(message.length); // 16
console.log(message[0]); // H
console.log(message[message.length - 1]); // n
console.log(message.includes("is")); //  true
console.log(message.includes("ankrish")); //  false

console.log(message.replace("John", "Ankrish")); // Hey This is Ankrish

console.log(message.indexOf("e")); // 1

console.log(message.toLowerCase()); // hey this is john

console.log(message.toUpperCase()); // HEY THIS IS JOHN

console.log(message.trim()); // remove whitespace from start & end

console.log(message.split(" ")); // [ 'Hey', 'This', 'is', 'John' ]
