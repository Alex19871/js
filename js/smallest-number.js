/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[6];

for (const number of numbers) {
  if (number > smallestNumber) {
    smallestNumber = number;
  }
}

console.log('smallestNumber: ', smallestNumber);


// для наибольшего числа

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let biggerNumber = numbers[6];

// for (const number of numbers) {
//   if (number > biggerNumber) {
//     biggerNumber = number;
//   }
// }

// console.log('biggerNumber: ', biggerNumber);