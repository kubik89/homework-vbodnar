// создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
//
// let people1 = {name: "Vova", age: 18, married: true};
// // let people2 = {name: "Vasya", age: 33, married: false};
// let people3 = {name: "Vitja", age: 40, married: true};

// создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и
// внутренний объект. Опишите что угодно, машину, картину, болт...
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let people1 = {name: "Vova", age: 18, married: true, wife: {name: "Svitlana"}, childsName: ["Oksana", "Iryna"]};

// При помощи for in вывести все ключи всех объектов из задания 1 и 2
// let people2 = {name: "Vova", age: 18, married: true, wife: {name: "Svitlana"}, childsName: ["Oksana", "Iryna"]};
// console.log(Object.keys(people1));
// console.log(Object.keys(people2));
// console.log(Object.keys(people3));

// Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
// let cities = [
//     {name: "Kyiv", population: 10000000, country: "Ukraine", region: "center"},
//     {name: "Lviv", population: 2000000, country: "Ukraine", region: "west"},
//     {name: "Uzhorod", population: 500000, country: "Ukraine", region: "west"},
//     {name: "Rivne", population: 100000, country: "Ukraine", region: "center"},
// ];

// проитерировать каждый массив из задания 5,6,7 при помощи while.
// let counter = 0;
// while (counter <= cities.length+1) {
//     console.log(cities[counter]);
//     counter++;
// }

// - - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }

// проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const citieslement1 of cities) {
//     console.log(citieslement1);
// }

// взять объекты из задания 1 и превратить каждый в json.
// let stringifyCities = JSON.stringify(cities);
// console.log(stringifyCities);

// взять json из задания 11 и превратить их обратно в объекты.
// let parseCities = JSON.parse(stringifyCities);
// console.log(parseCities);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let i = 0; i < cities.length; i++) {
//     let s = JSON.stringify(cities[i]);
//     console.log(s);
// }

// взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newArr = [];
// for (let i = 0; i < cities.length; i++) {
//     let s = JSON.stringify(cities[i]);
//     newArr.push(s);
// }
//     console.log(newArr);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является
// массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
// let users1 = [
//     {name : "Vova", skills: ["html", "CSS"]},
//     {name : "Vasya", skills: ["html1", "CSS1"]},
//     {name : "Vanya", skills: ["JS", "DB"]}
// ];
// for (let i = 0; i < users1.length; i++) {
//     console.log(users1[i].skills);
// }

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users2 = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//  {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//  {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//  {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//  {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
// for (let i = 0; i < users2.length; i++) {
//     console.log(Object.keys(users2[i]));
//     console.log(Object.values(users2[i].skills));
// }

let usersss = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let address = [];
// for (let i = 0; i < usersss.length; i++) {
//     address.push(usersss[i].address);
// }
// console.log(address);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement. Всі данні в одному блоці.
// console.log(usersss.length);
// for (let i = 0; i < usersss.length; i++) {
//     let div = document.createElement("div");
//         div.innerText = `Користувач ${usersss[i].name}`;
//         document.body.appendChild(div); // додаю вище створений div в body, бо div в html ще нестворений
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за
// допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

let container = document.getElementById("container");
for (let i = 0; i < usersss.length; i++) {
    let externalDiv = document.createElement("div");
//     div.innerText = `Користувач ${usersss[i].name}`;
//
    for (const someField in i) { // перебираю внутрішні обєкти чи масиви
        let innerDiv = document.createElement("div");
        externalDiv.appendChild(innerDiv);
    }
container.appendChild(externalDiv); // додаю вище створені div в документ
}
