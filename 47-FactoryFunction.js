// Factory Functions

function createCircle(radius) {
  return (circle = {
    radius, //means radius : radius
    draw() {
      console.log(`Radius is : ${radius}`);
    },
  });
}

const circle1 = createCircle(1);
console.log(circle1.draw());
