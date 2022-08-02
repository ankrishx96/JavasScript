const circle = {
  radius: 2,
  draw: function () {
    console.log("Draw");
  },
};

for (let key in circle) {
  console.log(key, circle[key]);
}

console.log(Object.keys(circle)); // Console an array [ 'radius', 'draw' ]

console.log(Object.entries(circle)); // Console an array [ [ 'radius', 2 ], [ 'draw', [Function: draw] ] ]

for (let i of Object.keys(circle)) {
  console.log(i); // radius draw
}

for (let i of Object.entries(circle)) {
  console.log(i); // [ 'radius', 2 ]  [ 'draw', [Function: draw] ]
}

if ("radius" in circle) {
  console.log("Found"); // Log to console if found
}
