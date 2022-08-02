function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "d", "c");

function areEqual(add1, add2) {
  return (
    add1.street === add2.street &&
    add1.city === add2.city &&
    add1.zipCode === add2.zipCode
  );
}

let result = areEqual(address1, address2);
console.log(result);
