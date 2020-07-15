
let people1 = {name: "Vova",
    age: 29,
    married: true,
    hair: "black",
    greeting: function () {
    document.writeln(`Hello. My name is ${people1.name}`);
    }
};

let people2 = {name: "Max",
    age: 29,
    married: true,
    hair: "black",
    greeting: function () {
        document.writeln(`Hello. My name is ${this.name}`);
    }
};

let car1 = {
    year: 2012,
    name: "Tesla"
};
let car2 = {
    year: 2010,
    name: "VW"
};

function Car(color, name, wheels) {
this.color = color;
this.name = name;
this.wheels = wheels;
this.aboutMe = function () {
    console.log(`My name is ${this.name}`)
};
this.wheels1 = function (wheelsAfterPurchase) { // це setter - тут він призначеє змінній wheels нове значення
        this.wheels = wheelsAfterPurchase;
        if (wheelsAfterPurchase > 6) {
            console.log("I do't need more wheels ")
        } else {
            this.wheels = wheelsAfterPurchase;
        }
}
}
let car3 = new Car("Black", "Mercedes", 4);

// console.log(people1);
// people1.greeting();
// people2.greeting();
// console.log(car3);
// car3.aboutMe();
// car3.name = "BMW";
// car3.aboutMe();
// car3.wheels1(10);
//
// console.log(car3.wheels);

class Human {
constructor(age, height, color) {
    this.age = age;
    this.height = height;
    this.color = color;
    this.money = 0;
}

eat() {
    console.log("I'm eating");
}

goWork() {
    this.money+= 100;
}

goBeer() {
    if (this.money >= 200) {
        console.log("I have too much money");
        this.money-=100;
    } else {
        console.log("I have no money");
    }
}
}

class HumanSmall extends Human {
    constructor(age, height, color, skill) { // обовязково прописати super бо я повинен прийняти всі властивості від батька
        super(age, height, color); // тепер мені не треба прописувати this
        this.skill = skill; // skill моя властивість нова
    }
    goBeer() {
        console.log("Developer's beer")
    }
}

let employee = new Human(18, 180, "black");
console.log(employee);
employee.goWork();
console.log(employee.money);
employee.goWork();
console.log(employee.money);
employee.goBeer();
employee.eat();
employee.goWork();
employee.goWork();
let child1 = new HumanSmall(20, 160, "white", "Java"); // також прийдуть інші властивості від батька
console.log(child1);
child1.goBeer();
// console.log(child1);