localStorage.setItem("user", "pro100vova");
// console.log(localStorage);

let user = {
    name: "Vova",
    age: 23,
    married: true
};

localStorage.setItem("user", JSON.stringify(user)); // встановлюю в LocalStorage обєкт. ОСкільки LocalStorage приймає
// лише стрінги, то я використовую JSON.stringify для перетворення в стрінгу

let item = localStorage.getItem("user"); // отримую обєкт із LocalStorage. Оскільки там обєкт то я опрацьовую його
// через JSON.parse
console.log(JSON.parse(item));

// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
let elementById = document.getElementById("1");
let text1 = elementById.innerHTML = "lalala";
localStorage.setItem("text", text1);
console.log(localStorage);
