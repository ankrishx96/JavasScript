const person = {
  fname: "Ankrish",
  lname: "Kandpal",
  get fullname() {
    return `${person.fname} ${person.lname}`;
  },
  set fullname(value) {
    if (typeof value != string) throw new Error("Not a string");

    const part = value.split(" ");
    if (value.length > 2) throw new Error("Enter fname & last name");
    this.fname = part[0];
    this.lname = part[1];
  },
};
try {
  person.fullname = true;
} catch (e) {
  console.log(e);
}

console.log(person.fullname);
