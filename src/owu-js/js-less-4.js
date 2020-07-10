// Методи string

let str1 = "Hello Mr.Bodnar";
str1.indexOf("o"); // повертає індекс такого значення як в дужках
console.log(str1);

str1.lastIndexOf("Mr."); // показує індекс значення беручи ост.символ

str1.charAt(7);

let replace = str1.replace("o", "a"); // замінює символ на інший,
// але тільки першмй

//RegExp(/o/g) - замінить ВСІ літери О, тут g - це глобально, на всій стрічці
//RegExp(/o/g) - замінить ВСІ літери О, тут i - це іггнорує регістр, тому перевірить всі великі й малі

//str1.slice(10, 15) - обріже із 10го символу до 15 не включаючи для якоїсь змінної str1
//str1.slice(10) - обріже із 10го символу до кінця
//str1.slice(-3) - обріже із 3го символу з кінця

str1.split("o"); // рядок розрізає на  масиви порізавши їх в місці де ця буква

let names = ["Vova, Vira", "Nastja"];
let s = names.join("..."); // якийсь масив обєднається в один стрінг цим сепаратором

// toLowerCase
// toUpperCase - стрічка до нижнього
// trim - обрізає всі пробіли зліва і справа
// names.includes("test") - чи є даний текст чи символ в string чи в масиві names

// Функції - наюір команд чи функцій щоб потім використовувати
function writer(test11) { // в дужках вказуємо параметри, навіть багато
    // тут що вона буде робити
    document.write("Hello");
    document.write('<br>');
}
writer(); // так виконую те що в тілі вище
writer("Hello");
writer(12122);

function calc(a, b) {
    console.log(a+b);
}
calc(2, 7); // для функції передаємо значення, як тут, щоб рахувала функція

// DEFAULT VALUE
// якщо одне значення не вказане, то НЕ ВИЗНАЧЕНО
function calc(a, b=2) { // якщо b аргумент не вказаний внизу, тоді бере це значення 2
    console.log(a+b);
}
calc(2);

// Arguments -
function myFunc() {
    console.log(22);
}
myFunc();
myFunc(2, true, "Hello", [7,9,4]); // можна в функцію все передавати

function myFunc() {
    console.log(arguments); // це змінна (обєкт) яка приймає всі параметри прийнятої ф-ції,
    // що були передані їй
    // їх пишуть коли невідомо скільки аргументів у функції
}

// SELF INVOKE - функція яка сама себе оголошує і ВІДРАЗУ викликає
// і більше ніколи не перевикористається, немає змісту придумувати якусь назву
// ()() - так оголошується () й викликається()
(function () {
    console.log("I'm ssdsd");
}) ();
// так пишиться як верху


// HOISTING - підняття чи всплиття до гори
// можна користуватись (викликати) функцією до того, як вони оголошуються
// з такою назвою тільки один раз може бути
function hosted() {
    console.log("I'm hoisted");
}
hosted()

// Function expression & Function declarations
// expression не вспливають, її не можна викликати швидше ніж вона ініціалізована
// declar - можна швидше оголошувати

//declaration
function declar() {

}
declar();

//expression - коли змінна = функції
let expres1 = function () {

}
expres1();


// RETURN - щоб потім обробити ці дані в подальщому, винести щось ОДНЕ, але все що завгодно
// 2 return не може бути -спрацює тільки перший
// повернеться тільки останнє значення
// повернути функцію
function summat1(a, b) {
let sum = a + b;
return sum
// return sum{name: a, age: b} - тут повернеться обєкт із значеннями
}
let sumOfNumbs =  summat1(10, 15); // тепер sum пропишиться в sumOfNumbs


// Arrow functions - стрілочні функції, або лямбди
// працюються лише із function expression
// немає аргументів (arguments)


// let arrow = ("тут пишимо аргумент") =>
{ // так описується
    let arrow1 = (a, b) => a + b // якщо один аргумент, тоді return не пишимо
    // але це те саме, що let arrow1 = (a, b); return a + b; - так вже не пишуть
}
let arrow2 = arrow(a, b); // тут вже два аршументи - console і return - тому пишимо return
{
console.log("I'm arrow");
// return a+b;
    }

