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

function Car(model,producer, name, manufYear, maxSpeed, engine, newSpeed) {
    this.model = model;
    this.producer = producer;
    this.manufYear = manufYear;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.newSpeed = newSpeed;
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
        this.manufYear=newValue;
    };
    this.addDriver = function(driver) {
        Object.assign(this, driver); // обєдную два обєкти (this(Car) та driver)  в один this
    }
}
let driver = {name: "Vova", experience: 200000, startDrive: 2007};
let car = new Car("Octavia", "Skoda", 2012, 240,60, 1.8, 65);
// car.increaseMaxSpeed();
// console.log(car.maxSpeed);
// car.increaseMaxSpeed(222);
// car.changeYear(2014);
// car.info();
// car.addDriver(driver);
// console.log(car);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let cinderella1 = new Cinderella("Настя1", 20, 34);
// let cinderella2 = new Cinderella("Настя2", 21, 35);
// let cinderella3 = new Cinderella("Настя3", 22, 36);
// let cinderella4 = new Cinderella("Настя4", 23, 37);
// let cinderella5 = new Cinderella("Настя5", 24, 38);
//
// let  allCinderellas = [];
// allCinderellas.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5);

// class Prince {
//     constructor(name, age, shoesSize) {
//         this.name = name;
//         this.age = age;
//         this.shoesSize = shoesSize;
//     }
// }
// let prince = new Prince("Oskar", 25, 36);

// for (let i = 0; i < allCinderellas.length; i++) {
//     if (allCinderellas[i].footSize === prince.shoesSize) {
//         console.log(`Моя принцеса ${allCinderellas[i].name}`)
//     }
// }

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Cinderella(name1, age, footSize) {
    this.name1 = name1;
    this.age = age;
    this.footSize = footSize;
    }

// function Prince (name, age, shoesSize) {
//     this.name = name;
//     this.age = age;
//     this.shoesSize = shoesSize;
//     this.myCind = function (arrCinds) {
//     };
// }

let cinderella1 = new Cinderella("Настя1", 20, 34);
let cinderella2 = new Cinderella("Настя2", 21, 35);
let cinderella3 = new Cinderella("Настя3", 22, 36);
let cinderella4 = new Cinderella("Настя4", 23, 37);
let cinderella5 = new Cinderella("Настя5", 24, 38);

let  allCinderellas = [];
allCinderellas.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5);

let prince = {
    name: "Oskar", age: 25, shoesSize: 36,
    myCind: function (allCinds) {
        for (let i = 0; i < allCinds.length; i++) {
            if (this.shoesSize === allCinds[i].footSize) {
                console.log(`my princess is ${allCinds[i].name1}`)
            }
        }
    }
};
prince.myCind(allCinderellas);
prince.myCind();
console.log(prince.myCind);

