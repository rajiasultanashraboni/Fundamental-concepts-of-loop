/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */

let sum = 0;
for (let i = 91; i <= 129; i += 2) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of all the odd numbers from 91 to 129:", sum);
