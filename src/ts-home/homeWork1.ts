// Клас людина:
//     поля:
//         вага,зріст
// Клас депутат(наслідується від людини):
// поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
// методи:
//     дати хабаря(зробити відповідні перевірки...
// якщо депутат не хабарник то щоб він відмовився,
//     або ж якщо сума хабаря надто велика то щоб він вагався
// чи брати чи ні)
// ______________
// Клас фракція
// поля:
//     список депутатів
// методи:
//     додати депутата (вводимо з клави)
// видалити депутата(теж з клави)
// видалити всіх негідників які брали хабаря
// вивести найбільшого хабарника
// вивести всіх депутатів
// видалити всіх депутатів
// вивести загальну суму хабарів для фракції
// клас Верховна рада
// поля:
//     мапа фракцій
// методи:
//     додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
// вивести найбільшого хабарника фракції


abstract class Human {
    weight: number;
    height: number;

    constructor(weight: number, height: number) {
        this.weight = weight;
        this.height = height
    }
}

interface IDeputat {
    lastName: string;
    firstName: string;
    age: number;
    bribeTaker?: boolean;
    sizeOfBribe: number;
    isMemberOfFraction?: boolean;
    fractionName?: string
}

let allDeps: IDeputat[] = [
    {firstName: "Andrii", lastName: "Hodowanyi", age: 25, bribeTaker: true, sizeOfBribe: 5000},
    {firstName: "Oleg", lastName: "Burmas", age: 34, bribeTaker: true, sizeOfBribe: 0},
    {firstName: "Ihor", lastName: "Kolodii", age: 48, bribeTaker: false, sizeOfBribe: 0}
];


// allDeps.push({firstName: "sd", lastName: "sdsdsd", age: 55, sizeOfBribe: 444, bribeTaker: false});

function addNewDep(firstName, lastName, age, bribeTaker, sizeOfBribe) {
    allDeps.push({firstName, lastName, age, bribeTaker, sizeOfBribe})
}
function getAllDeps() {
    for (let i = 0; i < allDeps.length; i++) {
        console.log(allDeps[i].lastName + " " + allDeps[i].fractionName)
    }
}
function getAllBrTakers(someValue: keyof IDeputat) {
    return allDeps[someValue]
}

class Deputat extends Human {
    lastName: string;
    firstName: string;
    age: number;
    bribeTaker?: boolean;
    sizeOfBribe: number;

    constructor(lName: string, fName: string, age: number, sizeBribe: number, weight: number,
                height: number, bribeTaker?: boolean) {
        super(weight, height);
        this.weight = weight;
        this.height = height;
        this.lastName = lName;
        this.firstName = fName;
        this.age = age;
        this.sizeOfBribe = sizeBribe;
        this.bribeTaker = bribeTaker;
    }

    takeBribe(money) {
        if (this.bribeTaker === false) {
            console.log("Я не хабарник");
            return
        }
        if (money > 100) {
            console.log("Сума надто велика, не беру");
            return
        } else {
            console.log("Взяв " + money);
            this.sizeOfBribe += money;
            console.log("Разом взято " + this.sizeOfBribe)
        }
    }
}




// let dep1 = new Deputat("Viktor", "Ljashko", 45, 0, 0, 80, false);
// let dep2 = new Deputat("Vitalii", "Danilov", 55, 0, 100000, 69, true);
//
// let d1 = dep2.takeBribe(50);
//
//
//
// let allBrTakers = getAllBrTakers("bribeTaker");
// console.log(allBrTakers + " Це функція getAllBrTakers");

// console.log(newD);

//
class Fraction {
    depList: string[];
    fractName: string;

    constructor(fractName) {
        fractName = this.fractName
    }

    addDeputat(lname, fractName) {
        for (let i = 0; i < allDeps.length; i++) {
            if (allDeps[i].lastName == lname) {
                allDeps[i].isMemberOfFraction = true;
                allDeps[i].fractionName = fractName;
                console.log("Депутата додано до фракції");
                return
            }
        } console.log("Такий депутат не знайдений");
    }
    delDeputat(lname) {
        for (let i = 0; i < allDeps.length; i++) {
            if (allDeps[i].lastName == lname) {
                console.log("Депутата на видалення знайдено");
                allDeps.splice(i, 1);
                console.log(lname + " видалений");
                return
            }
        } console.log("Жодного не видалено");
    }
    delAllBrTakers() {
        for (let i = 0; i < allDeps.length; i++) {
            if (allDeps[i].bribeTaker === true) {
                console.log("Хабарника " + allDeps[i].lastName + " знайдено");
                allDeps.splice(i, 1);
                return
            }
        } return ("Жодного хабарника не виявлено");
    }
}
let newD1 = addNewDep("Volod", "Bod", 30, false, 0);
let newD = addNewDep("Vova", "B", 45, false, 0);

let solidarn = new Fraction("Solidarnistj");
solidarn.addDeputat("Burmas", "UA");
// solidarn.delDeputat("Hodowanyi");

// let getAll = getAllDeps();
solidarn.delAllBrTakers();

// Клас фракція
// поля:
//     список депутатів
// методи:
//     додати депутата (вводимо з клави)
// видалити депутата(теж з клави)
// видалити всіх негідників які брали хабаря
// вивести найбільшого хабарника
// вивести всіх депутатів
// видалити всіх депутатів
// вивести загальну суму хабарів для фракції