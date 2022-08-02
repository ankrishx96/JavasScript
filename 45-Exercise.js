let showPrime = (num) => {
  if (num < 2) {
    console.log("Not a prime");
  }
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }

    if (isPrime) console.log(i);
  }
};

let result = showPrime(20);
