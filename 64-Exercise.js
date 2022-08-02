const post = {
  title: "A Lone Bird",
  body: "All about birds",
  author: "John",
  views: 1000,
  comments: [
    { author: "Spark", body: "Good" },
    { author: "Junior", body: "Must Read" },
  ],
  isLive: true,
};

function Post(title, body, author, views) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = views;
  this.isLive = false;
}

let PostObj = new Post("A Lone Bird", "All about birds", "John", 0);

console.log(PostObj);
