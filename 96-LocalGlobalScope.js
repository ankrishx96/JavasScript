const color = "red"; // Global Scope

function start() {
  const message = "h1"; // Local Scope
}

console.log(message); // Error

function stop() {
  const message = "hi";
  const color = "blue";
  console.log(color); // Blue
}
