// let element = document.querySelector("#green"); // повернеться масив із першим елементом на сторінці з MyClass
// let elementMyClass = document.querySelectorAll(".MyClass"); // повернеться масив із всіма елементами MyClass
// let elementMyClass = document.querySelectorAll(".MyClass");
// let elementMyClassGreen = document.querySelectorAll("#green .MyClass"); // так через крапку заходжу в середину
// і бачу все, що в id Green та й з класом MyClass

// let elementMyClassGreenB = document.querySelector("#green b.MyClass");

// element.setAttribute("id", "customIDvb"); // так як встановив id customIDvb для element
// console.log(element);


// Forms API

// let forms = document.forms.MyForm; // в кінці назва форми, так можна побачити всі елементи форми.
// console.log(forms);
// let someText = forms.someText; // Оскільки в мене є input із назвою someText, то так легко дістатися до нього
// console.log(someText);
// console.log(someText.value); // так дістаюсь до значення в input someText
// console.log(document.forms.MyForm.someText.value); // або так повним шляхом дістаюсь до значення в input someText
// console.log(document.forms.MyForm.check1);
// let check1 = document.forms.MyForm.check1;
// for (let i = 0; i < check1.length; i++) { // проходжусь по всіх check галочках
//     console.log(check1[i].value); // виводжу його назву
//     console.log(check1[i].checked); // виводжу чи галочка встановлена (true чи false)
//     console.log("______________");
// }

// let radioBtn = document.forms.MyForm.rad;
// for (let i = 0; i < radioBtn.length; i++) { // проходжусь по всіх check галочках
//     console.log(radioBtn[i].value); // виводжу його назву
//     console.log(radioBtn[i].checked); // виводжу чи галочка встановлена (true чи false)
//     console.log("______________");
// }

// ONCLICK

// let blueDiv = document.getElementById("blue");
// console.log(blueDiv);
// blueDiv.onclick = () => { // при кліках побачу events
//     console.log("click1");
// };

// blueDiv.onclick = () => {
//     // document.forms.MyForm.someText.value = "Because clicked on Blue Div" // заповниться рядок тексту при кліку на...
//     if (blueDiv.style.backgroundColor === "cadetblue") {
//         blueDiv.style.backgroundColor = "yellow";       // при кліку змінити колір якщо він не такий як..
//     } else {
//         blueDiv.style.backgroundColor = "cadetblue"; // обовязково else Треба бо не спрацьовувало
//     }
// };

// let redDiv = document.getElementById("red");
// redDiv.onmouseover = () => {
//     console.log("you overed Red Div");
// };
// redDiv.onmouseleave = () => {
//     console.log("you LEAVE Red Div");
// };

// let blueDiv = document.getElementById("blue");
// blueDiv.oncopy = () => {
//     // console.log("Copy me - done"); // якщо хтось копійнув - повідомлення
//     return false // можна заборонити копіювати
// }

// let redDiv = document.getElementById("red");
// redDiv.onmousemove = () => { // коли рухати на кожному пікселі по елементу багато записів
//     console.log("move");
// }

// let redDiv = document.getElementById("red");
// redDiv.onmousemove = (ev1) => { // коли рухати на кожному пікселі по елементу багато записів
//     // console.log(ev1); // запис ВСІХ координат в консоль якщо задано умову MouseEvent
//     console.log(ev1.x, ev1.y) // запис координат лише по х та у в консоль якщо задано умову MouseEvent
//     // console.log("move");
//     redDiv.style.backgroundColor = `rgb(${ev1.x}, ${ev1.y}, ${ev1.x + ev1.y})`
// };

// let redDiv = document.getElementById("red");
// let blueDiv = document.getElementById("blue");
// let greenDiv = document.getElementById("green");
//
// redDiv.addEventListener("click", (ev)=> { // тип Click Той самий onclick але без On треба вказувати
//     // listener - просто поставити дужки і зявиться, якась функція що щось робить
//     ev.stopPropagation();
//     console.log(redDiv);
// }, false); // після коми ставить буйка, вона по замовчуванні false.. При true event буде вспливати вгору, при false - погружатися вниз
//
// blueDiv.addEventListener("click", (ev)=> {
//     ev.stopPropagation();
//     console.log(blueDiv);
// }, false);
//
// greenDiv.addEventListener("click", (ev)=> {
//     ev.stopPropagation();
//     console.log(greenDiv);
// }, false);

// let myForm = document.forms.MyForm;
//
// myForm.okBtn.onclick = (ev) => {
// ev.preventDefault(); // preventDefault метод зупиняє всі події із коробки, без нього при кліку сторінка перезавантажувалась
// let text1 = myForm.someText.value;
//
// let objToSend = {
//     text1
// };
// console.log(objToSend);
// myForm.someText.value = ""; // після кліку, тобто після події - онулити
//     myForm.check1[0].checked = false; // після кліку, тобто після події - онулити
//     myForm.check1[1].checked = false;
//     myForm.rad[0].checked = false; // після кліку, тобто після події - онулити
//     myForm.rad[1].checked = false;
// };

// ДЕСТРУКТУРИЗАЦІЯ обєктів

// let vovasik = {
//     name: "Vova", age: 22,
//     car: {
//         model: "Chevy",
//         year: 2020
//     },
//     girl: {
//         name: "Svitlana", age: 20
//     }
// };
//
// let work = {
//     nameCompany : "RibGazMiaxSoft",
//     payment : 500
// };
// let name1 = "V.M.";

// let {name,girl} = vovasik;
// let {name: newName,age, girl: {age : age1}} = vovasik; // name: newName - так я ОТРИМУЮ змінну name обєкта,
// перейменовую на newName, але НЕ ЗМІНЮЮ обєкт
// console.log(name1);
// console.log(newName); // Отримую нову тимчасову змінну, що не належить обєкту, але бере дані із обєкта, бо деструктуризовані
// console.log(age1);
// console.log(vovasik.name);
// ... - Три крапки - це спред оператор що деструктуризує обєкт
// let {age, name, ... otherParams} = vovasik; // в otherParams ми засовуємо все інше як ОБЄКТ, що є обєкті, але не описано в змінній
// console.log(otherParams);

// let newVovasWithWork = {... vovasik, ... work}; // так склеяв два обєкти однорівнево, але не запхав 2 обєкти, а витягнув змінні і закинув в новий обєкт
// console.log(newVovasWithWork);

// ДЕСТРУКТУРИЗАЦІЯ масивів
let arr = ["Vova", "Svitlana", "Iryna", "Max"];
let name2 = ["Vika", "Vitalik"];
// let [VM, Svieta, Irka, ... otherBoys] = arr; // так я присвоюю змінну кожному запису в масиві як індекс
// let [, , Irka, ... otherBoys] = arr; // через кому я дістаю 2 елемент... багато ком заміняють змінну яка мені не потрібна
// console.log(Svieta); // "Svitlana"
// console.log(otherBoys);
// console.log(Irka);
let newArr = [... arr, "Oleg", ... name2]; // так склеюю масиви в один новий масив
console.log(newArr);