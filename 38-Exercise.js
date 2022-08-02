let checkSpeed = (currSpeed) => {
  let speed = 70;
  let kmPerPoint = 5;
  if (currSpeed < speed + kmPerPoint) {
    console.log("OK");
    return;
  }

  let point = Math.floor((currSpeed - speed) / kmPerPoint);

  if (point >= 12) {
    console.log("Licence Suspended");
  } else console.log(`Point : ${point}`);
};

let result = checkSpeed(130);
