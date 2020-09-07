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
    {
        firstName: "Andrii",
        lastName: "Hodowanyi",
        age: 25,
        bribeTaker: true,
        sizeOfBribe: 5000,
        isMemberOfFraction: true,
        fractionName: "Слуга народу"
    },
    {firstName: "Oleg", lastName: "Burmas", age: 34, bribeTaker: true, sizeOfBribe: 0},
    {
        firstName: "Ihor",
        lastName: "Kolodii",
        age: 48,
        bribeTaker: true,
        sizeOfBribe: 5001,
        isMemberOfFraction: true,
        fractionName: "Європейська Солідарність"
    }
];

function addNewDep(firstName, lastName, age, bribeTaker, sizeOfBribe) {
    allDeps.push({firstName, lastName, age, bribeTaker, sizeOfBribe})
}

function getAllDeps() {
    for (let i = 0; i < allDeps.length; i++) {
       console.log(`${allDeps[i].lastName} - ${allDeps[i].fractionName}`);
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

class Fraction {
    // depList: string[];
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
        }
        console.log("Такий депутат не знайдений");
    }

    delDeputat(lname) {
        for (let i = 0; i < allDeps.length; i++) {
            if (allDeps[i].lastName == lname) {
                console.log("Депутата на видалення знайдено");
                allDeps.splice(i, 1);
                console.log(lname + " видалений");
            }
        }
        console.log("Жодного не видалено");
    }

    delAllDeps() {
        for (let i = 0; i < allDeps.length; i++) {
            delete allDeps[i]
        }
    }

    showMostBrTakers() {
        let bribe = [];
        for (let i = 0; i < allDeps.length; i++) {
            bribe.push(allDeps[i].sizeOfBribe);
        }
        bribe.sort((a, b) => {
            return b - a;
        });
        let bigBribe = bribe[0];
        console.log(bribe[0] + " Найбільший хабар");
        for (let i = 0; i < allDeps.length; i++) {
            if (allDeps[i].sizeOfBribe === bribe[0]) {
                console.log(allDeps[i].lastName)
            }
        }
    }

    delAllBrTakers() {
        for (let i = 0; i < allDeps.length; i++) {
            if (allDeps[i].bribeTaker === true) {
                console.log(`Хабарника ${allDeps[i].lastName} знайдено й видалено`);
                allDeps.splice(i, 1);
            }
        }
        return ("Жодного хабарника не виявлено");
    }

    getSumOfBribe() {
        let sum = 0;
        for (let i = 0; i < allDeps.length; i++) {
            sum += allDeps[i].sizeOfBribe
        }
        console.log(sum)
    }
}

let newD1 = addNewDep("Volod", "Bod", 30, false, 0);
let newD2 = addNewDep("Vova", "B", 45, true, 500);

let solidarn = new Fraction("Solidarnistj");

// Додаю депутата у фракцію
solidarn.addDeputat("Burmas", "UA");

let all = getAllDeps();
console.log(all);

// Видаляю депутата
// solidarn.delDeputat("Hodowanyi");

// Отримую всіх
// let getAll = getAllDeps();

// видалити всіх негідників які брали хабаря
// solidarn.delAllBrTakers();

// видалити всіх депутатів
// solidarn.delAllDeps();

// вивести загальну суму хабарів для фракції
// solidarn.getSumOfBribe();

// вивести найбільшого хабарника
// solidarn.showMostBrTakers();

class VerhRada {
    allFractions: string[] = ["Слуга народу", "Європейська Солідарність", "Голос"];

    showAllFractions() {
        for (let i = 0; i < this.allFractions.length; i++) {
            console.log(this.allFractions[i])
        }
    }

    showSomeFraction(name) {
        for (let i = 0; i < this.allFractions.length; i++) {
            if (this.allFractions[i] == name) {
                console.log(this.allFractions[i]);
            }
        }
    }

    addFraction(name) {
        this.allFractions.push(name);
    }

    delFraction(name) {
        for (let i = 0; i < this.allFractions.length; i++) {
            if (this.allFractions[i] === name) {
                console.log("Знайдено " + this.allFractions[i]);
                this.allFractions.splice(i, 1)
            }
        }
    }

    addDepToFraction(frName, depName) {
        for (let i = 0; i < this.allFractions.length; i++) {
            if (this.allFractions[i] == frName) {
                for (let i = 0; i < allDeps.length; i++) {
                    if (allDeps[i].lastName === depName) {
                        allDeps[i].fractionName = frName;
                        allDeps[i].isMemberOfFraction = true;
                        console.log("Додано у фракцію депутата - " + allDeps[i].lastName);
                        return
                    }
                }
                console.log("Депутата не знайдено");
                return
            }
        }
        console.log("фракцію не знайдено");
    }

    delDepfromFraction(frName, depName) {
        for (let i = 0; i < allDeps.length; i++) {
            if (allDeps[i].lastName === depName && allDeps[i].fractionName === frName) {
                allDeps[i].fractionName = "" && allDeps[i].isMemberOfFraction === false;
                console.log("Знайдено на видалення з фракції - " + allDeps[i].lastName)
            }
        }
        return ("Депутата чи фракцію не знайдено")
    }

    showBrDepsInFraction(frName) {
        for (let i = 0; i < allDeps.length; i++) {
            if (allDeps[i].fractionName == frName &&
                allDeps[i].bribeTaker == true &&
                allDeps[i].sizeOfBribe > 0) {
                console.log("Знайдено хабарника фракції - " + allDeps[i].lastName)
            }
        }
        return ("Хабарника фракції не знайдено")
    }

    showMostBrDepsInFraction(frName) {
        let bribe1 = [];
        for (let i = 0; i < allDeps.length; i++) {
            if (allDeps[i].fractionName === frName) {
            bribe1.push(allDeps[i].sizeOfBribe);
            }
        }
        bribe1.sort((a, b) => {
            return b - a;
        });
        console.log(bribe1[0] + " Найбільший хабар");
        for (let i = 0; i < allDeps.length; i++) {
            if (allDeps[i].sizeOfBribe === bribe1[0]) {
                console.log(allDeps[i].lastName)
            }
        }
    }

    showAllDepInFraction(frName) {
        for (let i = 0; i < allDeps.length; i++) {
            if (allDeps[i].fractionName === frName) {
            console.log(allDeps[i].lastName)
            }
        }
    }
}

// let vr1 = new VerhRada();
// vr1.addFraction("Батьківщина");
// vr1.delFraction("Ukraine-2");
// vr1.showAllFractions();
// vr1.showSomeFraction("Європейська Солідарність");
// vr1.delDepfromFraction("Європейська Солідарність", "Kolodii");
// let getAll = getAllDeps();
// vr1.showBrDepsInFraction("Європейська Солідарність");
// vr1.addDepToFraction("Слуга народу", "Burmas");
// vr1.showMostBrDepsInFraction("Слуга народу");
// vr1.showAllDepInFraction("Слуга народу");