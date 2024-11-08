let num = 81;
let sum = 0;
while (num <= 131) {
  if (num % 2 !== 0) {
    sum = sum + num;
    console.log(num);
  }

  num++;
}

console.log("The sum of all odd numbers from 81 to 131 is:", sum);
