function CreateCircle(radius, length) {
  this.radius = radius;
  this.length = length;
  this.draw = function () {
    console.log("Draw");
  };
}

let circle = new CreateCircle(10);

console.log(circle);

//Function Property
console.log(CreateCircle.name); // Console the name of function   //Output- CreateCircle
console.log(CreateCircle.length); // Console the number of parameter passed in CreateCircle   //Output- 2
console.log(CreateCircle.constructor); // Refer the function that used to create an object. //Output - function

// ------------------

const Circle1 = new Function(
  "radius",
  `this.radius = radius;
this.draw = function () {
  console.log("Draw");
};`
);

const another = new Circle1(10);
console.log(another);

// ----------------

CreateCircle.call({}, 10); // this line is same as // const another = new Circle1(10);
CreateCircle.apply({}, [10]); // this line is same as // const another = new Circle1(10);
