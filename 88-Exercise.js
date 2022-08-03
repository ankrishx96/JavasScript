const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2017, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2018, rating: 4.5 },
];

// Get all the movie in 2018 with rating > 4
// sort them by their rating
// Decending order
// Pick their title

let res = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  })
  .reverse()
  .map((m) => m.title);

console.log(res); // [ 'd', 'a' ]
