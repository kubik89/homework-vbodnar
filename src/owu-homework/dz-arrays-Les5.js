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

// відсортувати його за індентифікатором
// userWithID.sort((a, b) => {
//     if (a.id < b.id) {
//         return -1;
//     } return 1
// });
// or
// let userWithID1 = userWithID.sort(((a, b) => a.id - b.id));

// наисать функцию калькулятора с 2мя числами и колбеком

// function calc(a, b, myCallback) {
//  let results = a + b;
//     myCallback(results);
// }
// calc(10,11, function(rslt) {
//     console.log(rslt)
// });

// function calculator(a, b, callback){
//     const results={
//         addition: a + b,
//         substraction: a - b,
//         multiplication: a * b,
//         division: a / b
//     };
//
//     //Make the third param, callback functin optional
//     if (callback && typeof(callback) === "function") {
//         callback(results); //call the function that was passed in
//     }
// }
// calculator(10, 2);
// calculator(10, 2, function(rslt) {
//     console.log(rslt);
// });

// ?? -- наисать функцию калькулятора с 3мя числами и колбеком

let cars = [
{producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
{producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
{producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
{producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
{producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
{producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
{producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
{producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
{producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
{producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
{producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
{producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
{producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];

// Відфільтрувати масив за наступними крітеріями :

// - двигун більше 3х літрів
// let volume = cars.filter((value, index) => {
//     return value.volume > 3;
// });
// console.log(volume);

// - двигун = 2л
// let volume = cars.filter((value, index) => {
//     return value.volume = 2;
// });
// console.log(volume);

// - виробник мерс
// let producerFilt = cars.filter((value, index) => {
//     return value.producer === "mercedes";
// });
// console.log(producerFilt);

// - двигун більше 3х літрів + виробник мерседес
// let producerAndVolume = cars.filter((value, index) => {
//     return (value.producer === "mercedes") && (value.volume > 3)
// });
// console.log(producerAndVolume);

// - двигун більше 2х літрів + виробник субару
// let producerAndVolume = cars.filter((value, index) => {
//     return (value.producer === "subaru") && (value.volume > 2)
// });
// console.log(producerAndVolume);

// сили більше ніж 300
// let power= cars.filter((value, index) => {
//     return (value.power > 300)
// });
// console.log(power);

// сили більше ніж 300 + виробник субару
// let powerAndProducer= cars.filter((value, index) => {
//     return (value.power > 300 ) && (value.producer = "subaru")
// });
// console.log(powerAndProducer);

// мотор серіі ej

// let keys = Object.keys(cars);
// for (let i = 0; i < cars.length; i++) {
//     // if (cars[i].engine === "ej204x") {
//     // console.log(cars[i].)
//     let filterEngine = (arr, query) => {
//         return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);
//     };
//     console.log(filterEngine(cars[i].engine, 'ej'))
// }

// - двигун меньше 3х літрів + виробник мерседес
// let powerAndProducer= cars.filter((value, index) => {
//     return (value.volume < 3 ) && (value.producer = "mercedes")
// });
// console.log(powerAndProducer);

// двигун більше 2л + сили більше 250
// let powerAndProducer= cars.filter((value, index) => {
//     return (value.volume > 2 ) && (value.power > 250)
// });
// console.log(powerAndProducer);

// - сили більше 250  + виробник бмв
// let powerAndProducer= cars.filter((value, index) => {
//     return (value.producer === "bmw" ) && (value.power > 250)
// });
// console.log(powerAndProducer);

// - взять слдующий массив
let usersWithAddress = [
{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
{id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
{id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
{id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Ahevchenko', number: 90}},
{id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
{id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Mhevchenko', number: 2}},
{id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
{id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
{id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
{id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
{id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
];

// -- отсортировать его по id пользователей
// usersWithAddress.sort((a, b) => {
//     if (a.id < b.id) {
//         return -1;
//     } return 1
// });
// console.log(usersWithAddress);

// -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort((a, b) => {
//     if (a.id > b.id) {
//         return -1;
//     } return 1
// });
// console.log(usersWithAddress);

// -- отсортировать его по возрасту пользователей
// usersWithAddress.sort((a, b) => {
//     if (a.age < b.age) {
//         return -1;
//     } return 1
// });
// console.log(usersWithAddress);

// -- отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((a, b) => {
//     if (a.age > b.age) {
//         return -1;
//     } return 1
// });
// console.log(usersWithAddress);

// отсортировать его по имени пользователей
// usersWithAddress.sort((a, b) => {
//             if (a.name < b.name) {
//                 return -1;
//             } return 1
// });
// console.log(usersWithAddress);

// -- отсортировать его по имени пользователей в обратном порядке
// usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
//         return -1;
//     } return 1
// });
// console.log(usersWithAddress);

// -- отсортировать его по названию улицы  в алфавитном порядке
// usersWithAddress.sort((a, b) => {
//     if (a.address.street < b.address.street) {
//         return -1;
//     } return 1
// });
// console.log(usersWithAddress);

// -- отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort((a, b) => {
//     if (a.address.number < b.address.number) {
//         return -1;
//     } return 1
// });
// console.log(usersWithAddress);

// -- отфильтровать (оставить) тех кто младше 30
// let userL30 = usersWithAddress.filter((value, index) => {
//     return value.age < 30;
// });
// console.log(userL30);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let userL30 = usersWithAddress.filter((value, index) => {
//     return value.status === false;
// });
// console.log(userL30);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let userL30 = usersWithAddress.filter((value, index) => {
//     return (value.status === false) && (value.age < 30);
// });
// console.log(userL30);

// -- отфильтровать (оставить) тех у кого номер дома четный
// let userL30 = usersWithAddress.filter((value, index) => {
//     return value.address.number % 2 === 0;
// });
// console.log(userL30);

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10%
// (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// + Для початку вкладіть всі наші створені автомобілі в масив cars.
// Обрати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший
// за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let myCar1 = [
        {model: "Chevrolet", power: 2, owner: "Petrov", price: 8000, year: 2012},
        {model: "Chevy", power: 1.5, owner: "Chaplyak", price: 11000, year: 2010},
        {model: "Skoda", power: 8, owner: "Bodnar", price: 11000, year: 2015},
        {model: "Mercedes", power: 3, owner: "Buhara", price: 13000, year: 2015},
        {model: "Mclaren", power: 5, owner: "Ivasyk", price: 14000, year: 2018},
        {model: "VAZ", power: 1.2, owner: "Wiznyi", price: 2000, year: 2007},
        {model: "VW", power: 1.6, owner: "Traud", price: 4000, year: 2005}
];

// let xxx = myCar1.reduce((acc, value) =>{
//     return acc + value.power ;
// }, 0);
//
// console.log(xxx);

let owner = {name: "Renault", age: 24, experience: 4, cursesQualif: 0};
    for (let i = 0; i < myCar1.length; i+=2) {
    myCar1[i].power *= 1.1;
    myCar1[i].price *= 1.05;
    // console.log(myCar1[i].power, myCar1[i].price);
}
    if (owner.experience < 5 && owner.age > 25) {
        owner.cursesQualif+= 1;
    }

    let carPrice = [];
for (let i = 0; i < myCar1.length; i++) {
    carPrice.push(myCar1[i].price);
}
// let sumNewPrice = (previousValue, currentValue) => previousValue + currentValue;
// console.log(carPrice.reduce(sumNewPrice));

//     let sum = 0;
// for (let i = 0; i < myCar1.length; i++) {
//     sum+=myCar1[i].price
// }
// console.log(sum);
// console.log(myCar1);
// console.log(owner);

// Задача: дано отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

function getSmallInd(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            console.log(arr[0])
            console.log(arr[length-1])
            // console.log(arr[i] + " " + i);
            // console.log(arr[0] + arr.)
        }
    }
}
getSmallInd([1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14], 4);