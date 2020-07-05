let userMax = {name: "Max",
    age: 30,
    isMarried: true};

let listOfusers = [
    {name: "vova", age: 25, isMarried: false},
    userMax,
    {name: "sveta", age: 33, hasband: {name: "Vovan", age: 40}
    }
];
console.log(listOfusers[1]);
console.log(listOfusers[2]);
console.log(listOfusers[2].hasband.age);

let point = document.getElementById("point1");
console.log(point);
point.style.background = "cyan";
point.style.textAlign = "center";
point.innerText = "Тепер текст який я захотів, а не попередній зазначений в змінній";
// point.innerText = prompt("Введіть Ваш текст для заміни");

let listOfTargets = document.getElementsByClassName("main1");
console.log(listOfTargets);
listOfTargets[0].style.backgroundColor = "silver";
listOfTargets[1].style.backgroundColor = "red";

let users = [
    {name: "Orest", age: 50},
    {name: "Olya", age: 19},
    {name: "Max", age: 16},
    {name: "Rostyslav", age: 33}
];

let lis = document.getElementsByTagName("li");
console.log(lis);

lis[0].innerText = "Hello, my name is " + users[0].name + ". Мені " + users[0].age + " років.";
    if (users[0].age>10 && users[0].age<20) {
        lis[0].style.backgroundColor = "#bbbbbb";
    }
    else if
        (users[0].age>20 && users[0].age<31) {
        lis[0].style.backgroundColor = "#BB721C";
    }
    else {
        lis[0].style.backgroundColor = "#10bb56";
    }

lis[1].innerText = `Hello, my name is ${users[1].name}. Мені ${users[1].age} років. `;
lis[2].innerText = `Hello, my name is ${users[2].name}. Мені ${users[2].age} років. `;
lis[3].innerText = `Hello, my name is ${users[3].name}. Мені ${users[3].age} років. `;


