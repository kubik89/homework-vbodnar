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
        }
        else {
            console.log("Взяв " + money);
            this.sizeOfBribe += money;
            console.log("Разом взяв " + this.sizeOfBribe)
        }
    }
}

let dep1 = new Deputat("Viktor", "Ljashko", 45, 0, 0, 80, false);
let dep2 = new Deputat("Vitalii", "Danilov", 55, 0, 100000, 69, true);

let d1 = dep2.takeBribe(50);