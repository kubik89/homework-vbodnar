// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)

// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

function Attributes(titleOfTag, action) {
    this.titleOfTag = titleOfTag;
    this.action = action;
}
let attrB = new Attributes("class", "Для встановлення класів. ");
let attrH1 = new Attributes("id","Для використання ID");
let attrBR = new Attributes("style", "для прописання стилів");
//
// let tagA = {
//     titleOfTag: "a",
//     action: "предназначен для создания ссылок",
//     attrs: attrB, attrH1
// };
//
// let tagDiv = {
//     titleOfTag: "div",
//     action: "предназначен для выделения фрагмента документа",
//     attrs: attrB, attrBR
// };
//
// let tagH1 = {
//     titleOfTag: "h1",
//     action: "отображается самым крупным шрифтом жирного начертания",
//     attrs: attrB, attrBR
// };

class TagInfo {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}
let tagA = new TagInfo("a", "предназначен для создания ссылок", attrH1);
let tagDiv = new TagInfo("div", "предназначен для выделения фрагмента документа", attrBR);
let tagH1 = new TagInfo("h1", "отображается самым крупным шрифтом жирного начертания", attrB);


// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і добавляет його в поточний об'єкт car

// class Car {
//     constructor(model, producer, mYear, maxSpeed, newSpeed, engine, newValue) {
//         this.model = model;
//         this.producer = producer;
//         this.mYear = mYear;
//         this.newValue = newValue;
//         this.maxSpeed = maxSpeed;
//         this.newSpeed = newSpeed;
//         this.engine = engine;
//         this.driver = null;
//     }
//     drive() {
//         console.log(`We're going with speed ${this.maxSpeed} km/h`);
//     }
//     info () {
//         // console.log(`Модель ${this.model}, Виробник ${this.producer}, Рік виробництва ${this.mYear}, Двигун ${this.engine}`);
//        // або всі значення КЛАСУ як this, на рівень вище цього методу
//         console.log(this);
//     }
//     activeNewSpeed () {
//         this.maxSpeed+=this.newSpeed
//     }
//     setNewValue () {
//         this.mYear+=this.newValue;
//     }
//     addDriver(driver) {
//         this.driver = driver
//     }
// }
// let car = new Car("Octavia", "Skoda", 2012, 240,60, 1.8, 8);
// let driver = {name: "Vova", experience: 200000, startDrive: 2007};
// car.drive();
// car.info();
// car.activeNewSpeed();
// console.log(car.maxSpeed);
// car.setNewValue();
// console.log(car.mYear);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model,producer, name, manufYear, maxSpeed, engine, newSpeed, newValue, driver) {
    this.model = model;
    this.producer = producer;
    this.manufYear = manufYear;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.newSpeed = newSpeed;
    // this.newValue = newValue;
    // this.increaseMaxSpeed = null;
    // this.changeYear = null;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}`)
    };
    this.info = function () {
        console.log(this);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed+=newSpeed
    };
    this.changeYear = function (newValue) {
        this.manufYear+=newValue;
    };
    this.addDriver = function() {
        this.driver = driver
    }
}
let car = new Car("Octavia", "Skoda", 2012, 240,60, 1.8, 65);
// car.info();
car.increaseMaxSpeed();
console.log(car.maxSpeed);
car.increaseMaxSpeed(222);