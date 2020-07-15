
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

function Car(color, name) {
this.color = color;
this.name = name;
this.aboutMe = function () {
    console.log(`My name is ${this.name}`)
}
}

let car3 = new Car("Black", "Mercedes");


// console.log(people1);
// people1.greeting();
// people2.greeting();
console.log(car3);
car3.aboutMe();