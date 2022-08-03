const number = [1, -1, 2, 4];

const filtered = number.filter((value) => value >= 0);

console.log(filtered); // [ 1, 2, 4 ]

const item = filtered.map((num) => "<li>" + num + "</li>");

console.log(item); // [ '<li>1</li>', '<li>2</li>', '<li>4</li>' ]

const html = "<ul>" + item.join("") + "</ul>";

console.log(html); // <ul><li>1</li><li>2</li><li>4</li></ul>

// ---------------------------------

const item1 = filtered.map((n) => {
  return { value: n };
});

// const item1 = filtered.map((n) => ({ value: n }));
// same as above

console.log(item1);
