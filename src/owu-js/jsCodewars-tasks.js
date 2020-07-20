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

// Return true if none the letters in the `blacklist`
// * are present in the `phrase`. If at least one letter from
// * `blacklist` is present in the `phrase` return false;

// function findSomeLetter(word1, word2) {
//     let arr1 = [];
//     let arr2 = [];
//     for (let i = 0; i < word1.length; i++) {
//         arr1.push(word1[i]);
//     }
//     for (let i = 0; i < word2.length; i++) {
//         arr2.push(word2[i]);
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 console.log("Знайшов " + arr1[i])
//             } else {
//                 console.log("Порівняв " + arr1[i] + " та " + arr2[j] + " - не рівні")
//             }
//         }
//     }
// }
// findSomeLetter("blacklist", "pharase");

// Count chars of strings placed in the odd positions in the given array.
// * For example
// function foundInOdd(arrStr) {
//     let lng = 0;
//     for (let i = 0; i < arrStr.length; i+=2) {
//             lng+= arrStr[i].length;
//     }
//     return lng;
// }
// let inOdd = foundInOdd(["Hello", "world", "from", "array,", "Macdonalds"]);
// console.log(inOdd);

// Count chars of strings placed in the odd positions in the given array.
// * For example
// function foundInOdd(arrStr) {
//     let lng = 0;
//     for (let i = 1; i < arrStr.length; i+=2) {
//         lng+= arrStr[i].length;
//     }
//     return lng;
// }
// let inOdd = foundInOdd(["Hello", "world", "from", "array,", "Macdonalds"]);
// console.log(inOdd);

// визначаємо першу не послідовну цифру в масиві (якщо послідовність +1)
// function notConcecutiveValue(arrFull) {
//     for (let i = 0; i < arrFull.length; i++) {
//         if (arrFull[i] + 1 !== arrFull[i+1]) {
//         return arrFull[i + 1]
//         }
//     }
// }
// let notConcV = notConcecutiveValue([1, 2, 8, 3, 5]);
// console.log(notConcV);

// визначаємо першу не послідовну цифру в масиві (послідовність визначити)
// function notConcecutiveValue(arrFull) {
//     let poslidovn = arrFull[1] - arrFull[0];
//     for (let i = 0; i < arrFull.length; i++) {
//         if (arrFull[i] + poslidovn !== arrFull[i+1]) {
//             return arrFull[i + 1]
//         }
//     }
// }
// let notConcV = notConcecutiveValue([1, 6, 11, 12, 18]);
// console.log(notConcV);

//знайти найдовше значення масиву str і вивести кількість значень в int
// function longerValueinArr(someString) {
//     let splittedArr = someString.split(" ");
//     splittedArr.sort((a, b) => {
//         if (a.length < b.length) {
//             return 1;
//         } return -1
//     });
//     return splittedArr[0].length;
// }
// let longerValueinArr1 = longerValueinArr("Take me to tinseltown with you");
// console.log(longerValueinArr1);

/*
function someFromVB(a, b, callback) {
let c = a + b;
    callback(c);
}
someFromVB(2, 5, function (rlst1) {
    console.log(rlst1)
});
*/

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// let userWithID = users.map((value, index) => {
//     return {
//         name1: value.name,
//         age1: "Мені " + value.age,
//         newIndex: index,
//         toWeeding: (value.status===true && value.age>30),
//           id: index*115, newID: index*5 + "s" + 5 + "df" + Math.random()
//     }
// });
// console.log(userWithID);

// let array1 = [
//     {name: "Messi", club: "Barcelona", goals: 15},
//     {name: "Konoplianka", club: "Shakhtar", goals: 12},
//     {name: "Rebrov", club: "Dynamo", goals: 7}
// ];

// let arr2 = [12, 15, 7];
// let filtArr2 = arr2.filter((value) => {
//     return value>10;
// });
// console.log(filtArr2);
// let map1 = array1.map((value, index) => {
//     if (value.name.length > 7) {
//         let name = value.name;
//         return  name;
//     }
// });

// console.log(map1);

// function addition(a,b) {
//     if (a > b) {
//      return a + b;
//     }
//     return "dfsdf";
// }
// let x = addition(15, 72);
// console.log(x);


// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number
// const quarterOf = (month) => {
//     if (month <= 3) {
//         return 1
//     } else if (month > 3 && month <= 6) {
//         return 2
//     } else if (month > 6 && month <= 9) {
//         return 3
//     } else if (month > 9 && month <= 12) {
//         return 4
//     }
// }
// let a = quarterOf(10);
// console.log(a);

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle.
// If your holiday cost £500, the answer you should return would be 500.

// function dutyFree(normPrice, discount, hol){
//     let endSumm = hol/(normPrice*discount/100);
//     return Math.floor(endSumm);
// }
// let answ =  dutyFree(12, 50, 1000);
// console.log(answ);


// Therefore you need a method, which returns the smallest unused ID for your next new data item...
// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have
// to find or remove them!
// function nextId(ids) {
//
//     let sortedIDS = ids.sort((a, b) => {
//         if (a < b) {
//             return -1;
//         }
//         return 1;
//     });
//     for (let i = 0; i < sortedIDS.length; i++) {
//         if (sortedIDS[i + 1] - sortedIDS[i] > 1) {
//                 return sortedIDS[i+1]-1;
//         }
//     } let l = sortedIDS.length;
//     return sortedIDS[l-1]+1;
// }
//
//
// let needID = nextId([0,1,2,3,5]);
// console.log(needID);