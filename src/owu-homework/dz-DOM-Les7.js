// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".
// let elementById = document.getElementById("text");
// console.log(elementById);
// elementById.onclick = () => {
//     elementById.innerText = "";
// };

// Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.getElementsByName("okBtn");
// // console.log(button);
// button[0].onclick = (event) => {
//     button[0].style.display = "none";
// };

// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let button = document.getElementsByName("okBtn");
// MyForm.okBtn.onclick = (ev) => {
//     ev.preventDefault();
//     let text1 = MyForm.age.value;
// let objToSend = {
//     text1
// };
// console.log(objToSend);
// };

// Создайте меню, которое раскрывается/сворачивается при клике
// let menuDiv = document.querySelector(".menu");
//
// menuDiv.onclick = () => {
//     let drop = document.querySelector('.drop-menu');
//     drop.classList.toggle('menu-block'); // toggle - як перемикач - включає та виключає
// };

// - Создать список комментариев , пример объекта коментария -
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [{
//     title : 'lorem1',
//     body:'lorem ipsum dolo sit ameti 1'
// }, {
//     title : 'lorem2',
//     body:'lorem ipsum dolo sit ameti 2'
// }];
// for (let i = 0; i < comments.length; i++) {
// let div = document.createElement("div");
//     div.innerHTML += `<h1>${comments[i].title}</h1> <p>${comments[i].body}</p>`;
//     document.body.appendChild(div);
// let elementB = document.createElement("button");
//     document.body.appendChild(elementB);
//     elementB.onclick = () => {
//         div.style.display = "none";
//     }
// }

// створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let elementButton1 = document.getElementsByName("okBtnForTask1a1");
// elementButton1[0].onclick = () => {
//     console.log(document.forms.forTask1a1.input1.value);
//     console.log(document.forms.forTask1a1.input2.value);
// };
// let elementButton2 = document.getElementsByName("okBtnForTask1a2");
// elementButton2[0].onclick = () => {
//     console.log(document.forms.forTask1a2.input3.value);
//     console.log(document.forms.forTask1a2.input4.value);
// };

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
// let words = ["one", "two", "three", "four"];
// let buttWords = document.getElementsByName("buttForWords");
// buttWords[0].onclick = () => {
//     for (let i = 0; i < words.length; i++) {
//     if (document.forms.forTask1a3.inputForWords.value === words[i]) {
//         alert("Це нецензурне слово");
//     }
//     }
// };

// Потрібно перевіряти чи не містить ціле речення в собі погані слова.

// let buttWords = document.getElementsByName("buttForWords");
// buttWords[0].onclick = () => {
//     let words = ["івіава", "пішіло1", "пішло"];
//     let sentence = document.forms.forTask1a3.inputForWords.value;
//     let aerr = sentence.split(" ");
//     for (let i = 0; i < aerr.length; i++) {
//         for (let j = 0; j < words.length; j++) {
//             if (aerr[i] === words[j]) {
//                 alert("знайшов " + words[j]);
//             }
//         }
//         aerr[i]++;
//     }
// };

