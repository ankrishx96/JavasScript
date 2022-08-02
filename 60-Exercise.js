const address = {
  street: "Dilshad Garden Main Road",
  city: "Delhi",
  zipCode: 110095,
};

function showAddress(address) {
  for (let i in address) {
    console.log(`${i} : ${address[i]}`);
  }
}

showAddress(address);
