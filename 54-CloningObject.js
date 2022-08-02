const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  },
};

const another = {};

for (let key in circle) {
  another[key] = circle[key];
}

console.log(another);

// Better way
const another1 = Object.assign({}, circle);
console.log(another1); // { radius: 1, draw: [Function: draw] }

const another2 = Object.assign({ color: "yellow" }, circle);
console.log(another2); // { color: 'yellow', radius: 1, draw: [Function: draw] }

const another3 = { ...circle };
console.log(another3); // { radius: 1, draw: [Function: draw] }
