/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */

// let sum = 0;
for (let i = 91; i <= 129; i += 2) {
  //   console.log(i);
  //   sum = sum + i;
}
// console.log("sum of all the odd numbers from 91 to 129:", sum);

// Subtask-2:

// Display sum of all the even numbers from 51 to 85.

//  */

let sum = 0;

for (let num = 51; num <= 85; num++) {
  if (num % 2 === 0) {
    console.log(num);
    sum += num;
  }
}
console.log("The sum of all even numbers from 51 to 85 is:", sum);
