const movie = {
  title: "EK Katha",
  releaseYear: 2022,
  rating: 4.5,
  director: "John",
  actor: "Robin",
};

let getString = (movie) => {
  for (let i in movie) {
    if (typeof movie[i] == "string") {
      console.log(`${i} : ${movie[i]}`);
    }
  }
};

let result = getString(movie);
