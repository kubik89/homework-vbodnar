// console.log(document);
//
// console.log(window);

let pingDiv = document.getElementById("divka");
console.log(pingDiv);
pingDiv.style.backgroundColor = "yellow";

let boldClass = document.getElementsByClassName("BoldText1");
for (let i = 0; i < boldClass.length; i++) {
     boldClass[i].style.fontSize = "30px";
     boldClass[i].innerHTML = `Java-Tuesday2020, ${i} -й цикл`; // innerHTML дозволяє вставляти в себе розмітку,
     // тобто p, div. Проте innerTEXT тільки текст

}

let allDivs = document.getElementsByTagName("div");
console.log(allDivs);

let red = Math.random() * 255;
let green = Math.random() * 255;
let blue = Math.random() * 255;

allDivs[1].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
allDivs[1].style.width = "200px";
allDivs[1].style.height = "200px";
allDivs[1].style.margin = "20px";

let smallDiv = document.createElement("div"); // створюю новий елемент div чи будь який p , br
smallDiv.style.backgroundColor = "pink";
smallDiv.style.width = "50px";
smallDiv.style.height = "50px";

document.body.appendChild(smallDiv); // appendchild відповідає за вставлення будь-якого вже створеного
// елементу в body

pingDiv.appendChild(smallDiv); // вставлення одного елементу в інший. DIV може бути тільки в одному місці

boldClass[0].classList.add("myOwnClass");
// classList - щоб визначити до якого класу належить змінна
// classlist.add - Додаємо свій клас до вже існуючого, що в якомусь елементі

let allP = document.getElementsByTagName("p");
for (let i = 0; i < allP.length; i++) {
     if (i % 2 ===0) { // беру кожну 2-гу p
          allP[i].classList.add("myOwnClass"); // присвоюю інший клас кожній 2-й
     }
}

let users = [
     {name: "Orest", age: 50},
     {name: "Olya", age: 19},
     {name: "Max", age: 16},
     {name: "Rostyslav", age: 33}
];
for (let user of users) {
     let userDiv = document.createElement("div"); // для кожного user в масиві створюю div
     userDiv.style.backgroundColor = "cyan";
     userDiv.style.margin = "10px";
     userDiv.innerHTML = // додаю текст
         `Hello, my name is ${user.name}. <br> 
         I'm ${user.age} years old.`;
     document.body.appendChild(userDiv); // вставляю її в body!! Без цього не відобразиться
}



// console.log(boldClass);

