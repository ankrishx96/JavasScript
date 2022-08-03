const person = {
  fname: "Ankrish",
  lname: "Kandpal",
  get fullname() {
    return `${person.fname} ${person.lname}`;
  },
  set fullname(value) {
    const part = value.split(" ");
    this.fname = part[0];
    this.lname = part[1];
  },
};

// getters => access properties
// setters => change (mutate) them

person.fullname = "Ram Sharma";
console.log(person.fullname); // Ram Sharma
