const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach((tag) => {
      console.log(`${self.title} ${tag}`);
    });
  },
};

video.showTags();

// -----------

function playVideo() {
  console.log(this);
}

playVideo.call({ name: "Ankrish" });

playVideo.apply({ name: "Ankrish" });

playVideo.bind({ name: "Ankrish" });
