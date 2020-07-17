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

// перебрать (проитерировать) массив при помощи foreach()
// numb.forEach((value) => {
//     console.log(value)
//   });

// перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let mapX3 = numb.map(x => x * 3);
// console.log(mapX3);

// - создать массив со словами на 15-20 элементов.
let str = ["Vova", "Vasya", "Vasylyna", "Ira", "Andrew", "Macdonalds", "Restoran", "Apple", "Juice", "Coca", "Microsoft"];

// -- отсортировать его по алфавиту в восходящем порядке.
// str.sort((a, b) => {
//     if (a < b) {
//         return -1
//     } return 1
// });
// console.log(str);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// str.sort((a, b) => {
//     if (a < b) {
//         return 1
//     } return -1
// });
// console.log(str);

// отфильтровать слова длиной менее 4х символов
// str.filter(value => {
//     for (let i = 0; i < str.length; i++) {
//         const strElement = str[i];
//         if (strElement.length < 4) {
//             console.log(strElement);
//         }
// }
// отфильтровать слова длиной менее 4х символов
// let filt1 = str.filter((value) => {
//    return value.length < 4;
// });
// console.log(filt1);

// перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let newStr = str.map(value => value+"!");
//     console.log(newStr);

// Все робити через функції масивів (foreach, map ...тд)
// Дано масив :

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

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((a, b) => {
//    if (a.age < b.age) {
//        return -1;
//    } return 1;
// });
// console.log(users);

//
// users.sort((a, b) => {
//     if (a.age < b.age) {
//         return 1;
//     } return -1;
// });
// console.log(users);

// відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a, b) => {
//     if (a.name.length < b.name.length) {
//         return -1;
//     } return 1;
// });
// console.log(users);

// пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

let userWithID = users.map((value, index) => {
    return {
        name: value, id: index*115, newID: index*5 + "s" + 5 + "df" + Math.random()
    }
});
console.log(userWithID);