// FETCH    - розширення JSON Viewer для Chrome
// Для підтримки API даних
// response STATUS - можна глянути в Google - це код помилки якщо відповідає чи ні

// fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then(value => {
//     // console.log(value) - якщо логнути це value то побачимо response, якщо його розгорнути, то отримаємо доступний метод json
//     // тому в return ми використовуємо цей json метод щоб повернути обєкти в масиві
//     return value.json();
// }).then(jsonArr => {
//     console.log(jsonArr); // тут вже отримаємо масив обєктів що передаються в API
//     // jsonArr.forEach((kurs) => { // проганяюсь ітерацією і отримую кожен в якусь змінну kurs
//         jsonArr.forEach(({base_ccy, buy, ccy, sale}) => { // або деструктуризую кожну змінну обєкту щоб не
//                                                                         // звертатися до обєкту в цілому
//             buy = Number(buy).toFixed(2); // заокруглення до 2 чисел після коми. Number перетворює стрінг в число
//             sale = (+sale).toFixed(2); // інший метод // + перед змінною перетворює стрінг в число
//
//             document.write(`${base_ccy} to ${ccy} Купівля: ${buy} Продаж: ${sale}`);
//             document.write("<br>")
//     })
// });

// fetch("https://kuna.io/api/v2/trades?market=btcuah").then(value => {
//     return value.json();
//     // console.log(value.json())
// }).then(jsonArr1 => {
//         jsonArr1.forEach(({created_at, funds, id, price}) => { // беру кожна поле що мені треба
//             document.write(`${created_at} ${funds} ${id} ${price}`);
//             document.write("<br>")
//     });
// });

// let arr = [1, 3, 9, 19, 5];
// arr.forEach(value => {
//     if(value>5) {
//         value++;
//         console.log(value)
//     }
// });

// let people = [
//     {
//         name: "Vova",
//         age: 15
//     }, {
//         name: "Vasya",
//         age: 36,
//         married: true
//     }, {
//         name: "Petja",
//         age: 99
//     }, {
//         name: "Ira",
//         age: 30
//     }
// ];
//
// people.forEach(({name, age, married}) => {
//     if (married===true) {
//         document.write(`${name} - ${age} - Одружений: ${married}`);
//         document.write("<br>")
//     } else {
//         document.write(`${name} - ${age}`);
//         document.write("<br>")
//     }
//     });


                    // CARRING - Карирование

//     let viktor = {
//     name: "Viktor",
//     age: 20,
//     payment: 9999,
//     position: "Middle"
// };
// let vova = {
//     name: "Volodymyr",
//     age: 20,
//     payment: 99999999,
//     position: "Senior"
// };
// let dima = {
//     name: "Dmytro",
//     age: 20,
//     payment: 999,
//     position: "Junior"
// };
//
// function sayHelo() {
//     console.log(this.name + " say hello to u")
// }
//
// let a = sayHelo.call(dima); // Метод call допомагає викликати функцію із певним обєктом ЛИШЕ РАЗ, допомагають привязати this
// sayHelo.apply(vova); // Метод apply допомагає викликати функція із певним обєктом ЛИШЕ РАЗ - не можна привязати до змінної
//
// let viktorsHello = sayHelo.bind(viktor); // bind повертає нову функцію як в змінну, сам не викликається
// viktorsHello(); // тепер змінна viktorsHello стала функціює яку тепер можна викликати БАГАТО РАЗІВ, коли call і apply лише раз
//
//
// // якщо у виклику функції нижче мені не треба змінювати ЗП чи посаду, то можна залишати їх як ті що по замовчуванні
// // function changePayment(changeRate, newPosition = this.position) {
// function changePayment(changeRate, newPosition) {
//     this.payment+= changeRate;
//     this.position = newPosition;
//     // this.position = newPosition? newPosition: this.position; // Тернарка: Нова посада є? Вкажи, якщо немає - залиши ту
//                                                             // що по замовчуванні
//                                                             // можна тернарним оператором зилишити позицію без змін
//                                                             // якщо вона не передається в функції як аргументи
//     console.log(this) // показую this, бо його ми використовуємо у функції як аргумент
// }
// // call та apply - майже не відрізняються, виконанням точно ні, лише приймають аргументи, один в [] як масив, інший без []
// // bind - це виконанням той самий call та apply, але запускається ЛИШЕ ЯК ФУНКЦІЯ використовуючи ()
// changePayment.call (viktor, 100, "Owner");  // перший аргумент (viktor) відповідає за this, інші по черзі дані які
//                                             // віддаються у функцію, тобто 100=>changeRate, "Owner" => newPosition
// changePayment.apply(dima, [111, "SuperSenik"]);
//
// let paymentVovas = changePayment.bind(vova, 123000, "StrongJunior");
// paymentVovas();



// ЗАМИКАННЯ - це приклад лічильника на замикання
// ЗАМИКАННЯ - це властивість змінної бути захищеною або закритою від інших. Достукатися до неї можна через, наприклад,
// getter та setter

// function closeFunc() {
//     let x = 0;
//     return () => {
//         x++;
//         console.log(x)
//     }
// }
// closeFunc() (); // якщо я запущу дану функцію з одними дужками, то отримаю сам текст функції, якщо з двома - виконання
//                 // таким чином виконується приватність в JS, в даному випадку змінної x
//
// let closeFunc1 = closeFunc();
// closeFunc1();
// closeFunc1();
// closeFunc1();
// // Закінчилось - це приклад лічильника на замикання

function closure() {
    let name = "Vova";
    let age = 25;

    function getName() {
        console.log(name)
    }
    function getage() {
        console.log(age)
    }
    function setAge(newAge) {
        if (newAge > 30) {
            console.error("Ти старієш, чувак");
            return
        } else {
            age = newAge;
        }
    }
    return {
        getName,
        getage,
        setAge
    }
}
let aboutMe = closure();
aboutMe.getName();
aboutMe.getage();

aboutMe.setAge(31);
aboutMe.getage();


// MAP, SET
// Set - це така структура даних, яка зберігає в собі унікальні значення

// // Забрати повторні значення
// let numbers = [1,5,9,4,8,5,0,11,0,8,4,5,9];
// let uniqueValue = new Set;
//
// numbers.forEach(value => {
//     uniqueValue.add(value);
// });
// console.log(uniqueValue);
//
// // Array.from() зробить із Set масив цих чисел, що визначив SET
// let from = Array.from(uniqueValue);
// console.log(from);