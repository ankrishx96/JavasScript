// Constructor Functions

function CreateCircle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const circle1 = new CreateCircle(1);
console.log(circle1);
