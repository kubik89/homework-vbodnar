// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
let elementById = document.getElementById("area1");
elementById.value = localStorage.getItem("area1");
elementById.oninput = () => {
    localStorage.setItem("area1", elementById.value)
};

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
// let name = document.getElementsByName("Name");
let name = document.getElementById("name");
name.value = localStorage.getItem("name");
name.oninput = () => {
    localStorage.setItem("Name", name.value)
};

let lastName = document.getElementsByName("LastName");
lastName.value = localStorage.getItem("LastName");
lastName.oninput = () => {
    localStorage.setItem("area1", lastName.value)
};

let age = document.getElementsByName("Age");
age.value = localStorage.getItem("age");

let date = document.getElementsByName("Date");
date.value = localStorage.getItem("date");

let check1 = document.getElementsByName("Check1");
check1.value = localStorage.getItem("check1");

let submit1 = document.getElementsByName("Submit1");
submit1.value = localStorage.getItem("submit1");

