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

let comments = [{
    title : 'lorem1',
    body:'lorem ipsum dolo sit ameti 1'
}, {
    title : 'lorem2',
    body:'lorem ipsum dolo sit ameti 2'
}];
for (let i = 0; i < comments.length; i++) {
let div = document.createElement("div");
    div.innerHTML += `<h1>${comments[i].title}</h1> <p>${comments[i].body}</p>`;
    document.body.appendChild(div);
let elementB = document.createElement("button");
    document.body.appendChild(elementB);
    elementB.onclick = () => {
        div.style.display = "none";
    }
}
