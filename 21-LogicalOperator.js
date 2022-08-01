// Logical AND
console.log(true && true); // true
console.log(true && false); // false

let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan); // true

// Logical OR
console.log(true || true); // true
console.log(true || false); // true

// Not Operator !
let applicationRefused = !eligibleForLoan;

console.log(applicationRefused); // false
