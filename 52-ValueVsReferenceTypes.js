let x = 10;
let y = x;

x = 20;

console.log(y); //10

let x1 = { value: 10 };
let y1 = x1;

x1.value = 20;

console.log(y1); // {value:20} // This is because of y1 is pointing the same reference as x1

// -------

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);

console.log(obj); // Log 11 in the console
