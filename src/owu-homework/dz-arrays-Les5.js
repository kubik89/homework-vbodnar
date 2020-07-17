// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(`Це мій ${i}-й крок`);
//     document.write(`Це мій ${i}-й крок`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(`Це мій ${i}-й крок`);
// }

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++)
//     if (i%2 === 0) {
//     console.log(`Це мій ${i}-й крок`);
//     }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++)
//     if (i%2 !== 0) {
//     console.log(`Це мій ${i}-й крок`);
//     }

// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let i = 0; i < 2; i++) {
//     console.log(`${i} година`);
//     for (let j = 0; j < 60; j++) {
//         console.log(`${i} година ${j} секунда`)
//     }
// }

// создать массив с 20 числами.
let numb = [1,99,-800,74,550,-17,65, 98,54,5,12,-122,63,-996,74,7,10,100,-111,33];
//-- при помощи метода sort отсортировать массив.
// console.log(numb.sort());

// при помощи метода sort и колбека  отсортировать массив.
// numb.sort((a, b) => {
//    if (a < b) {
//        return -1;
//    } return 1
// });
// console.log(numb);

// при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// numb.sort((a, b) => {
//     if (a < b) {
//         return 1;
//     } return -1
// });
// console.log(numb);

// при помощи filter получить числа кратные 3
// let filtered = numb.filter((value, index) => {
//    return value%3 === 0;
// });
// console.log(filtered);

// при помощи filter получить числа кратные 10
// let filtered = numb.filter((value, index) => {
//    return value%10 === 0;
// });
// console.log(filtered);

//