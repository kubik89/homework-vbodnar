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
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class CarInfo {
    constructor(model, producer, mYear, maxSpeed, newSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.mYear = mYear;
        this.maxSpeed = maxSpeed;
        this.newSpeed = newSpeed;
        this.engine = engine;
    }
    drive() {
        console.log(`We're going with speed ${this.maxSpeed} km/h`);
    }
    info () {
        console.log(`Модель ${this.model}, Виробник ${this.producer}, Рік виробництва ${this.mYear}, Двигун ${this.engine}`);
    }
    activeNewSpeed () {
        this.maxSpeed+=this.newSpeed
    }
}
let car = new CarInfo("Octavia", "Skoda", 2012, 240,60, 1.8);
car.drive();
car.info();
car.activeNewSpeed()
console.log(car.maxSpeed);


