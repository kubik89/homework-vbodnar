// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// function isDivisible(n, x, y) {
//     if (n % x === 0 && n % y === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// isDivisible (12,3,4);
// console.log(divisible())

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
// Return the resulting string.

// function replaceDigit (numberString) {
//         let newArr = [];
//     for (let i = 0; i < numberString.length; i++) {
//         let parseInt = Number.parseInt(numberString[i]);
//         if (parseInt < 5) {
//             newArr.push(0);
//         }
//         else if
//             (parseInt >= 5) {
//                 newArr.push(1);
//             }
//     }
//     return newArr;
// }
// let numb = replaceDigit(["4", "5", "8", "1", "9", "25", "3"]);
// console.log(numb);


// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one
// contains a student's submitted answers.
// The two arrays are not empty and are the same length.
// Return the score for this array of answers,
// giving +4 for each correct answer,
// -1 for each incorrect answer, and
// +0 for each blank answer, represented as an empty string
// If the score < 0, return 0.

// function getScore(corrAnsw, studAnsw) {
//     let summScore = [];
//     for (let i = 0; i < corrAnsw.length; i++) {
//         if (studAnsw[i] === "") {
//             summScore.push(0);
//         } else if (corrAnsw[i] === studAnsw[i]) {
//             summScore.push(4);
//         } else if (corrAnsw[i] !== studAnsw[i]) {
//             summScore.push(-1);
//         }
//     }
//     let counter = 0;
//     for (let i = 0; i < summScore.length; i++) {
//         counter+= summScore[i];
//         counter[i]++;
//     }
//     if (counter < 0) {
//         return 0
//     } return counter;
// }
// let score = getScore(["b", "c", "b", "a"], ["",  "a", "a", "c"]);
// console.log(score);


// In this simple exercise, you will build a program that takes a value, integer, and returns a list of its multiples
// up to another value, limit. If limit is a multiple of integer, it should be included as well. There will only
// ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
//     For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the
//     multiples of 2 up to 6.

// function findMultiples(integer, limit) {
//     let a = Math.floor(limit / integer);
//     let newInt = [];
//     let someInt = 0;
//     for (let i = 1; i <= a; i++) {
//         someInt+=integer;
//         newInt.push(someInt);
//     }
//     return newInt;
// }
// let summ = findMultiples(11, 54);
// console.log(summ);


// Implement method that takes array of ints and returns the
// * smallest element of the array.
// function smallestArg(ints){
//     ints.sort((a, b) => {
//         if (a < b) {
//             return -1
//         } return 1
//     });
//     return ints[0];
// }
// let str = smallestArg([0]);
// console.log(str);

