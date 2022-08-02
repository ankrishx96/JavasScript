// Factory Functions

function createCircle(radius) {
  return (circle = {
    radius, //means radius : radius
    draw() {
      console.log("Draw");
    },
  });
}

const circle1 = createCircle(1);
console.log(circle1);
