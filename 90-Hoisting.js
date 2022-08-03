walk(); // hoisting

function walk() {
  console.log("Walk");
}

// -----------------

run(); // Produce error because hoisting will not apply in variables

const run = function () {
  console.log("Run");
};
