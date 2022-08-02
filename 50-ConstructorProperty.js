function CreateCircle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const circle = new CreateCircle(1);
console.log(circle.constructor);

//Output on console

// ƒ CreateCircle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//       console.log("Draw");
//     };
//   }
