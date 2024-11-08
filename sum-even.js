let num = 206;
let sum = 0;
while (num <= 311) {
  // console.log(num)
  if (num % 2 === 0) {
    console.log(num);
    sum = sum + num;
  }
  num++;
}

console.log(" sum of all the even numbers from 206 to 311", sum);
