// Falsy (false)
// undefined
console.log(false || undefined); // undefined

// null
console.log(false || null); // null

// 0
console.log(false || 0); // 0

// false
console.log(false || false); // false

// ''
console.log(false || ""); // ""

// Nan
console.log(false || NaN); // Nan

// Anything that is not flasy its truthy
let useColor = undefined;
let defaultColor = "blue";
let currentColor = useColor || defaultColor;
console.log(currentColor); // blue

useColor = "red";
let currentColor1 = useColor || defaultColor;
console.log(currentColor1); // red
