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

