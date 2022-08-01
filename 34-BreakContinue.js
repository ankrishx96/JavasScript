let i = 0;
while (i <= 10) {
  if (i === 5) {
    break;
  }
  console.log(i); // 0 1 2 3 4
  i++;
}
console.log("________");
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    continue;
  }
}
