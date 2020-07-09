// // створити об'єкт (не меньше 5ти властивостей) який описує
// let animal = {name: "Bars", age: 3, color: "black", type: "dog"};
// let people1 = {name: "Vova", age: 30, married: true, type: "man"};
// let car = {model: "Skoda", age: 5, engine: 2, color: "green"};
//
// // Створити масив та вивести його в консоль:
// let dogs = ["dog1", "dog2", "dog3", "dog4", "dog5"];
// let people = [
//     {name: "Vova", age: 30, married: true, type: "man"},
//     {name: "Svitlana", age: 30, married: false, type: "woman"},
//     {name: "Max", age: 22, married: false, type: "man"},
//     {name: "Rostuslav", age: 40, married: true, type: "man"}
//     ];
// console.log(dogs);
// console.log(people);
//
// let employee = {name: "Vova", age: 30, married: true, type: "man", job: ["Dev", "Builder"]};
// // employee.job = ["Dev"];
// // employee.job.push("Builder");
// console.log(employee);


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
    {name: 'max', age: 31, status: false}
];
// - статус Андрія
// console.log(users[7].status);

// - статус Максима
// for (let i = 0; i < users.length; i++) {
//     if (users[i].name === 'max') {
//         console.log(users[i].status)
//     }
// }

// ім'я передостаннього об'єкту
// console.log(users[users.length-2].name);

// ім'я третього об'єкта
// console.log(users[2].name);

// вік Олега
// for (let i = 0; i < users.length; i++) {
//     if (users[i].name === 'oleg') {
//         console.log(users[i].age)
//     }
// }

// вік Олі
// for (let i = 0; i < users.length; i++) {
//     if (users[i].name === 'olya') {
//         console.log(users[i].age)
//     }
// }

// вік + ім'я 5го об'єкта
// console.log(users[5].name, users[5].age);

// вік + сатус Анни
// for (let i = 0; i < users.length; i++) {
//     if (users[i].name === 'anya') {
//         console.log(users[i].age, users[i].status);
//     }
// }

    // -- Напишіть код,  який за допомоги
    // document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// - - отримує текст з параграфа з id "content"
// console.log(document.getElementById("content"));

// - отримує текст з блоку з id "rules"
// console.log(document.getElementById("rules"));

// - замініть текст параграфа з id 'content' на будь-який інший
// let idContent = document.getElementById("content");
// idContent.innerHTML = "Книга не про правила й орфографію, а про те, як словами збудувати місток довіри між автором " +
//     "і читачем. Авторка дає слушні поради щодо використання «правильних» слів, які найкращим чином висловлюють " +
//     "почуття та емоції.";

// - - замініть текст параграфа з id 'rules' на будь-який інший
// let idRules = document.getElementById("rules");
// console.log(idRules);
// idRules.innerHTML = "Книга не про правила й орфографію, а про те, як словами збудувати місток довіри між автором " +
//     "і читачем. Авторка дає слушні поради щодо використання «правильних» слів, які найкращим чином висловлюють " +
//     "почуття та емоції.";

// - змініть кожному елементу колір фону на червоний
// idRules.style.backgroundColor = "red";
// idContent.style.backgroundColor = "red";

// - - змініть кожному елементу колір тексту на синій
// idRules.style.color = "cyan";
// idContent.style.color = "cyan";

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let getAllfromIdRules = document.getElementById("rules");
// let classesAllElId = getAllfromIdRules.classList;
// console.log(classesAllElId);

// - отримати всі елементи з класом fc_rules
// let allClassesforFcRules = document.getElementsByClassName("fc_rules");
// console.log(allClassesforFcRules);

// - поміняти колір тексту у всіх елементів fc_rules на червоний
// let allClassesforFcRules1 = document.getElementsByClassName("fc_rules");
// for (let i = 0; i < allClassesforFcRules1.length; i++) {
//     allClassesforFcRules1[i].style.color = "green";
// }

    // Class //
// Взяти файл template_2.html та працювати в ньому
// Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let elementById = document.getElementById("main_header");
elementById.style.color = "pink";

// робить шириниу елементу ul 400 пікселів
let elementsByTagName = document.getElementsByTagName("ul");
for (let i = 0; i < elementsByTagName.length; i++) {
elementsByTagName[i].style.width = "400px";
}

// робить шириниу всіх елементів з класом linkList шириною 50%
let elementsByClassName = document.getElementsByClassName("linkList");
for (let i = 0; i < elementsByClassName.length; i++) {
    elementsByClassName[i].style.width = "50%";
}

// - отримує текст який зберігається в елементі з класом listElement2
let elementsByClassName1 = document.getElementsByClassName("listElement2");
for (let i = 0; i < elementsByClassName1.length; i++) {
    elementsByClassName1[i].innerHTML = "New text by vb";
}

// отримує всі елементи li та змінює ім колір фону на сірий
let elementsByTagName1 = document.getElementsByTagName("li");
for (let i = 0; i < elementsByTagName1.length; i++) {
    elementsByTagName1[i].style.backgroundColor = "red";
}

// отримує всі елементи 'a' та додає їм клас anchor
let elementsByTagName2 = document.getElementsByTagName("a");
for (let i = 0; i < elementsByTagName2.length; i++) {
    elementsByTagName2[i].classList.add("anchor");
}

// отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
let elementsByTagName3 = document.getElementsByTagName("a");
for (let i = 0; i < elementsByTagName3.length; i++) {
    if (elementsByTagName3[i].innerText === "link3") {
        elementsByTagName3[i].style.fontSize = "40px";
    }
}

// отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let elementsByTagName4 = document.getElementsByTagName("a");
for (let i = 0; i < elementsByTagName4.length; i++) {
    let innerText1 = elementsByTagName4[i].innerText;
    elementsByTagName4[i].classList.add("element_" + innerText1);
}

// отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let elementsByClassName2 = document.getElementsByClassName("sub-header");
// for (let i = 0; i < elementsByClassName2.length; i++) {
//     let s = prompt("Enter your color");
//     elementsByClassName2[i].style.backgroundColor = s;
// }

// отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
// let elementsByClassName3 = document.getElementsByClassName("sub-header");
// for (let i = 0; i < elementsByClassName3.length; i++) {
//     if (elementsByClassName3[i].innerHTML === "content 2 segment") {
//         let c = prompt("Enter your color");
//         elementsByClassName3[i].style.backgroundColor = c;
//     }
// }

// - отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let elementsByClassName2 = document.getElementsByClassName("content_1");
// for (let i = 0; i < elementsByClassName2.length; i++) {
//     let d = prompt("Enter your text");
//     elementsByClassName2[i].innerHTML = d;
// }

// отримати елементи p та змінити їм padding на довільне значення
// let elementsByTagName5 = document.getElementsByTagName("p");
// for (let i = 0; i < elementsByTagName5.length; i++) {
//     elementsByTagName5[i].style.padding = "30px";
// }

// отримати елементи з класом text2 та змінити їм текст на довільне значення
// let elementsByClassName2 = document.getElementsByClassName("text2");
// for (let i = 0; i < elementsByClassName2.length; i++) {
//     elementsByClassName2[i].innerHTML = "This is my individual text";
// }
