function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // console.log(i); // Throw error
}

// ----------------

function end() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Outside: " + i); // Doesnt throw error it will print 5
}

end();

var color = "red";
let age = 20;

console.log(window.color); // "red"
console.log(window.age); // undefined
