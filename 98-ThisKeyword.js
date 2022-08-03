const video = {
  title: "a",
  play() {
    console.log(this); // refer vidoo object
  },
};

// Explicit adding stop function in object
video.stop = function () {
  console.log(this);
};

video.play();

video.stop();

// -------------------

function playVid() {
  console.log(this);
}

playVid();

// --------------
function Video() {
  this.title = "a";
  console.log(this);
}

const v = new Video();
 