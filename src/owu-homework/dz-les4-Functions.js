let bArr = [1,2,8];
let a = 10;
let b = 7;
let c = 11;

// створити функцію яка виводить масив
// function createNewArr () {
//     let arr1 = [];
//     for (let i = 0; i < arguments.length; i++) {
//         const x1 =arguments[i];
//         arr1.push(x1);
//     }
//         return (arr1);
// }
// let newArr = createNewArr(1, 19, 1, 199, 205, -100, 19);
// console.log(newArr);

// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати
// попвередню функцію.
// function addRandomToCreateNewArrFunc() {
// for (let i = 0; i < 10; i++) {
//     bArr.push(Math.floor(Math.random() * 10));
//     }
//     return createNewArr();
// }

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function SmallerElement(a1=5,b1=2,c1=3) {
// if (a1<b1 && a1<c1) {
//     return a1;
// }
// else if (b1<a1 && b1<c1) {
//     return b1;
// }
// else return c1;
// }


// - створити функцію яка приймає три числа та виводить та повертає найбільше.
//
// function BiggerElement(myA, myB, myC) {
//     if (myA > myB && myA > myC) {
//         return myA;
//     }
//     else if (myB>myA && myB>myC) {
//         return myB;
//     }
//     else
//         return myC;
//     return myA+myB+myC;
// }
// let biggerElement = BiggerElement(14, 10, 7);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function takeGetNumber() {
// let min = arguments[0];
// let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i]<min) {
//             min = arguments[i];
//         }
//         if (arguments[i]>max) {
//             max = arguments[i];
//         }
// }
//         console.log(max + "Max");
//         return min;
//     }
// let x = takeGetNumber(19, 1, 199, 205, -100, 19); // присвоїв змінній, щоб вивести на екран
// console.log(x); // якщо у функції не буде return, то в консолі отримаю undefined

// - створити функцію яка виводить масив
// function createNewArr () {
//     let arr1 = [];
//     for (let i = 0; i < arguments.length; i++) {
//         const x1 =arguments[i];
//         arr1.push(x1);
//     }
//     return (arr1);
// }
// let newArr = createNewArr(1, 19, 1, 199, 205, -100, 19);
// console.log(newArr);

// - створити функцію яка повертає найбільше число з масиву
// function biggestElement() {
//     let biggest = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i]>biggest) {
//             biggest = arguments[i];
//         }
//     }
//             return (biggest);
// }
// let newArr1 = biggestElement(300, 19, 1, 199, 205, -100, 19);
// console.log(newArr1);

// - створити функцію яка повертає найменьше число з масиву

// function smallerElement() {
//     let smaller = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i]<smaller) {
//             smaller = arguments[i];
//         }
//     }
//     return (smaller);
// }
// let newArr1 = smallerElement(300, 19, 1, 199, 205, -100, 19);
// console.log(newArr1);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function sumOfArray() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum+= arguments[i];
//     }
//         return sum;
// }
//
// let newArr1 = sumOfArray(300, 19, 1, 199, 205, -100, 19);
// console.log(newArr1);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function sumOfArray() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum+= arguments[i];
//     }
//     return sum/arguments.length;
// }
//
// let newArr1 = sumOfArray(300, 19, 1, 199, 205, -100, 19);
// console.log(newArr1);
//

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function objLength() {
//         return Object.keys(arguments);
//     }
// let newVar = objLength = ([
//     {name: "Vova", age: 55, child: ["Veronika", "Adelina"]},
//     {name: "Oleg", age: 11, child: ["Veronika2", "Adelina1"]},
// ]);
// console.log(newVar);

// - !!!  Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function objLength() {
//         return (Object.keys(arguments).length);
// }
// objLength = (
//     {name: "Vova", age: 55},
//     {name: "Oleg", age: 11}
// );
 // Чому нижче для масиву а1 працює метод, а для ф-ції ні
// let a1 = [
//     {name: "Vova", age: 55, child: ["Veronika", "Adelina"]},
//     {name: "Oleg", age: 11, child: ["Veronika2", "Adelina1"]},
// ];
// console.log(Object.keys(a1).length);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

function summOfArrays(a1, b1) {
let summArr =[];
let count = 0;
if (a1.length > b1.length) {
    count = a1.length;
}
else {
    count = b1.length;
}
for (let i = 0; i < a1.length; i++) {
    let summElement = (a1[i] || 0) + (b1[i] || 0); // якщо один з них false або менший, тоді враховується більший
    // щоб взяти масив із більшою кількістю елементів, якщо їх довжина не однакова
    summArr.push(summElement);
    }
    return summArr;
}
let result = summOfArrays([1,2,3,4,8,1], [2,3,4,5]);
    console.log(result);
