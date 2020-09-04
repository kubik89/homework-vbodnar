// let myName = "Vova";
// console.log(myName);
// //
// let age:number = 18;
// console.log(age);

function changeNumb(myNumber: number | string): string {
    if (typeof myNumber === "number") {
        return myNumber.toFixed(2)
    }
    return myNumber
}

let a = changeNumb("sdsds");
console.log(a);

class Car {
    year: number;
    producer: string;

    constructor(year: number, producer: string) {
        this.year = year;
        this.producer = producer
    }
}

let car1 = new Car(2012, "BMW");
console.log(car1);

class User {
    private password: string;
    email: string;
    name: string;

    constructor(pass: string, mail: string, userName?: string) {
        this.password = pass;
        this.email = mail;
        this.name = userName

    }

    loginUser(pass: string, email: string) {
        if (pass === this.password && email === this.email) {
            return true
        }
        return false
    }
}

let Vova = new User("4555", "vb@gmail.com");
let isLogged = Vova.loginUser("1222", "vb@gmail.com");
console.log(isLogged);

let names: string[] = ["Vova", "11", "Olena"];
let names1: string[] = ["Vova", "Ira", "Olena"];
let names2: Array<string> = ["Vova", "Ira", "Olena"];

interface IUser {
    name: string;
    age?: number;
    phone: {
        model: string;
        price: number;
        isNew: boolean
    }
}
let user1: IUser = {name: "Volodymyr", age: 20, phone: {model: "A8", price: 10000, isNew: true}};

function getSomeUserData(someValue: keyof IUser) {
    return user1[someValue] + "Я тут"
}
let someUserData = getSomeUserData("age");
console.log(someUserData);


enum EColors {
    RED= 'red',
    WHITE='white',
    BLUE='blue'
}

function setNewColor(color: EColors) {
    console.log(color);
}
setNewColor(EColors.BLUE);

abstract class AbsCar {
    power: number;
    wheels: number;

    constructor(wheel:number = 4, power:number) {
        this.power = power;
        this.wheels = wheel;
    }
    goMethod () {
        console.log("goooooooo")
    }
}

class Gazel extends AbsCar{
    windows: number;
    color: EColors;

    constructor(wheel:number, power:number, color: EColors, window) {
        super(power,wheel);
        this.windows = window;
        this.color = color
    }
}
let gaz1 = new Gazel(12, 4, EColors.WHITE, 6);
gaz1.goMethod();
console.log(gaz1);