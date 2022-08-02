let radius = 1;
let x = 1;
let y = 1;

function draw() {
  console.log("Draw");
}
function move() {
  console.log("Move");
}

// Lets convert this into a object

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw");
  },
  move: function () {
    console.log("Move");
  },
};

circle.draw();
