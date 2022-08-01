const person = {
  name: "Ankrish",
  age: 25,
};

for (let key in person) {
  console.log(person[key]); // Ankrish 25
}

//key will log name age.
//person.key will produce undefined.

const color = ["red", "yellow", "pink", "blue"];
for (let index in color) {
  console.log(index); // 0 1 2 3
}

//color[i] will give the value of each index
