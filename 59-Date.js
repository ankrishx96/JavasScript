const now = new Date();
console.log(now);

const date = new Date("May 11 2018 09:00");
console.log(date);

console.log(now.toDateString()); // Tue Aug 02 2022
console.log(now.toTimeString()); // 15:55:09 GMT+0530 (India Standard Time)

console.log(now.toISOString()); // 2022-08-02T10:25:48.336Z
