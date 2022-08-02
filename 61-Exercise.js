let address = {
  street: "a",
  city: "b",
  zipCode: "c",
};

// Factory Function

function address1(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let factoryFunc = address1("a", "b", "c");
console.log(factoryFunc); // { street: 'a', city: 'b', zipCode: 'c' }

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let constructorFunc = new Address("a", "b", "c");
console.log(constructorFunc); // Address { street: 'a', city: 'b', zipCode: 'c' }
