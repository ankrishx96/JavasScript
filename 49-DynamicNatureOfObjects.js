const circle = {
  radius: 1,
};

circle.color = "yellow"; // adding object properties dynamically

circle.draw = function () {
  console.log("Draw");
};

circle.colorPrimary = "dogerblue";

// Delete from object
delete circle.colorPrimary;

console.log(circle);
