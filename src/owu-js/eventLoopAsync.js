// console.log(1);
//
// setTimeout(() => {
//     console.log(2)
// }, 1000);
//
// console.log(3);

// function clearHouse(isJobDone, callB) {
//     setTimeout(() => {
//         if (isJobDone) {
//             console.log("I'm cleaning yet");
//         callB(500);
//         } else {
//             callB("Грошей немає, нічого не заробив")
//         }
//     }, 100)
// }
// clearHouse(false, (reward) => {
//     console.log("________");
//     console.log(reward);
//     console.log("________");
// });

// function clearHouse(isJobDone, callB) {
//     setTimeout(() => {
//         if (isJobDone) {
//             console.log("I'm cleaning yet");
//         callB(null, 500); // спочатку передаю помилку, а потім дані
//         } else {
//             callB("Грошей немає, нічого не заробив", null) // в else навпаки - спочатку дані, а потім помилку
//         }
//     }, 100)
// }
// clearHouse(true, (err, reward) => { // ПРАВИЛО "Error first, data last"
//     if (err) {
//         console.error(err)
//     } else {
//     console.log("________");
//     console.log(err);
//     console.log(reward);
//     console.log("________");
//     }
// });

// function goToTurkey(isCovidPresent, cb) {
//     setTimeout(() => {
//         if (isCovidPresent) {
//             cb("Covid в країні", null)
//         } else {
//             cb(null, "Я їду у відпустку")
//         }
//     }, 1500)
// }
// goToTurkey(true, (err, result) => {
//     console.log(err);
//     console.log(result)
// });
// goToTurkey(false, (err, result) => {
//     if (err) {
//         console.error("Мінус відпустка");
//         console.error(err)
//     } else
//     console.log("Давай збирати валізи");
//     console.log(result)
// });

// Колбек в колбеці
function clearHouse(isJobDone, callB) {
    setTimeout(() => {
        if (isJobDone) {
            console.log("I'm cleaning yet");
        callB(null, 100); // спочатку передаю помилку, а потім дані
        } else {
            callB("Грошей немає, нічого не заробив", null) // в else навпаки - спочатку дані, а потім помилку
        }
    }, 100)
}

function buyClothes(money, cb) {
    setTimeout(() => {
        if (money > 200) {
            console.log("It's enough to buy good jeans");
            money-=200; // Тобто потратив 200грн на покупку джинсів

            cb(null, money)

        } else {
            cb("Errrror, no enough money... ", null) // одяг не купив, тому null як дані - нічого.
        }
    }, 1000)
}
clearHouse(true, (err, reward) => { // ПРАВИЛО "Error first, data last"
    if (err) {
        console.error(err)
    } else {
    console.log("________");
    console.log(err);
    console.log(reward);
    console.log("________");
    buyClothes(reward, (err, rest) => {  // запускаю тут свою функцію buyClothes, бо вона залажна від clearHouse, оскільки
                                    // якщо немає грошей (reward) за прибирання, то немає за що купити одяг
        if (err) {
            console.log(err)
        } else {
            console.log("Після покупки одягу залишилось " + rest)
        }
    })
    }
});


// PROMISE

// function clearHouse(isJobDone) { // в Promise не потрібно callback-ів
//     return new Promise((resolve, reject) => {   // створюю новий Promise, тут resolve - це успішне виконання,
//                                                         // а reject - не успішне виконання
//     setTimeout(() => {
//         if (isJobDone) {
//             console.log("I'm cleaning yet");
//             resolve(550); // resolve - це функція як при УСПІХУ, яка передає ЛИШЕ ОДИН параметр
//         } else {
//             reject("Грошей немає, нічого не заробив") // reject - як щось пішло не так. передаємо причину поломки
//         }
//     }, 100)
//     })
// }
//
// function buyClothes(money) { // в Promise не потрібно callback-ів
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (money > 200) {
//             console.log("It's enough to buy good jeans");
//             money-=200; // Тобто потратив 200грн на покупку джинсів
//
//             resolve (money);
//
//         } else {
//             reject ("Errrror, no enough money... ") //
//         }
//     }, 1000)
//     })
// }
// // Promise chain - коли замість цепочки then-ів повертаєш результат функції, що раніше виконалась
// clearHouse(true).
//     then(resolve => { // якщо мій resolve у clearHouse виконався, то показати його value (можна писати value або resolve)
//     console.log(resolve);
//     return buyClothes(resolve);
//
// }).then(rest => {
//     console.log("___________");
//     console.log("Після покупки одягу залишилось " + rest);  // оскільки я повернув buyClothes(resolve), то тут у якусь
//                                                             // змінну rest я отримав його результат
// });

// Хоча можна й писати як внизу, але цими цепочками важче читати
// clearHouse(true).
// then(value => { // якщо мій resolve у clearHouse виконався, то показати його value
//     console.log(value);
//     return 2222 // тут в 2222 я передаю ці дані у value наступного then, як в цепочці
// }).then(value => {
//     console.log(value) // тут виводжу ці 2222 з попереднього return як моє value зараз
// }).then(value => {
//     return "I go down";
// }).then(str => {
//     console.log(str) // тут отримаю "I go down"

// Ловимо помилки

// function clearHouse(isJobDone) { // в Promise не потрібно callback-ів
//     return new Promise((resolve, reject) => {   // створюю новий Promise, тут resolve - це успішне виконання,
//         // а reject - не успішне виконання
//         setTimeout(() => {
//             if (isJobDone) {
//                 console.log("I'm cleaning yet");
//                 resolve(550); // resolve - це функція як при УСПІХУ, яка передає ЛИШЕ ОДИН параметр
//             } else {
//                 reject("Грошей немає, нічого не заробив") // reject - як щось пішло не так. передаємо причину поломки
//             }
//         }, 100)
//     })
// }
//
// function buyClothes(money) { // в Promise не потрібно callback-ів
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 200) {
//                 console.log("It's enough to buy good jeans");
//                 money-=200; // Тобто потратив 200грн на покупку джинсів
//
//                 resolve (money);
//
//             } else {
//                 reject ("Errrror, no enough money... ") //
//             }
//         }, 1000)
//     })
// }
                            // CATCH, FINALLY, allSettled також тут
// Promise chain,  - коли замість цепочки then-ів повертаєш результат функції, що раніше виконалась
// clearHouse(true).
// then(resolve => { // якщо мій resolve у clearHouse виконався, то показати його value (можна писати value або resolve)
//     console.log(resolve);
//     return buyClothes(100);
//
// }).then(rest => {
//     console.log("___________");
//     console.log("Після покупки одягу залишилось " + rest);  // оскільки я повернув buyClothes(resolve), то тут у якусь
//                                                             // змінну rest я отримав його результат
// }).catch(reason => {
//     console.log("Це помилка, я її кетчнув")
// }).finally(() => {
//     console.log("Це Finally. Я запустився після всіх, catch не пропустив, але незнаю чи все виконалось, бо такий я є")
// });

// let one = new Promise(resolve => {
//     setTimeout(() => {
//         resolve (1);
//     }, 3000)
// });
// let two = new Promise(resolve => {
//     setTimeout(() => {
//         resolve (2);
//     }, 2000)
// });
// let three = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject (3);
//     }, 1000)
// });
// Promise.race([one, two, three]).
//     then(value => {
//     console.log(value) // за допомогою Promise.race виводиться значення, що найшвидше опрацьовується
// });

// Promise.all([one, two, three]).
// then(value => {
//     console.log(value)  // за допомогою Promise.all виводиться значення масиву, що опитується у value, та чекає стільки,
//                         // скільки виконується найдовший Promise. Порядок відображення не зміниться, навіть якщо
//                         // найшовший на початку
// }).catch(reason => {
//     console.error("В catch спрацювала помилка " + reason);
// });

// Promise.allSettled([one, two, three]).   // Отримуємо обєкти, де status кожного Promise
//                                                 // якщо успішний - тоді 'fulfilled', завалився - 'rejected'
//     then(value => {
//     console.log(value);
// });

function clearHouse(isJobDone) { // в Promise не потрібно callback-ів
    return new Promise((resolve, reject) => {   // створюю новий Promise, тут resolve - це успішне виконання,
        // а reject - не успішне виконання
        setTimeout(() => {
            if (isJobDone) {
                console.log("I'm cleaning yet");
                resolve(550); // resolve - це функція як при УСПІХУ, яка передає ЛИШЕ ОДИН параметр
            } else {
                reject("Грошей немає, нічого не заробив") // reject - як щось пішло не так. передаємо причину поломки
            }
        }, 100)
    })
}

function buyClothes(money) { // в Promise не потрібно callback-ів
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 200) {
                console.log("It's enough to buy good jeans");
                money-=200; // Тобто потратив 200грн на покупку джинсів

                resolve (money);

            } else {
                reject ("Errrror, no enough money... ") //
            }
        }, 1000)
    })
}

async function houseCleaner() { // async - Означає що в середині функції буде виконуватися асинхронна робота
    try {
        let reward = await clearHouse(true); // почекає поки виконається функція clearHouse, без цього не
        // запуститься, буде чекати
        console.log(reward); // в разі ЛИШЕ ПОЗИТИВНОГО результату я отримаю reward
        console.log("______");

        let rest = await buyClothes(reward); // також чекаю доки виконається функція buyClothes і повернеться решта
        console.log("Після покупки одягу залишилось " + rest);
    } catch (e) {
        console.log("_____");
        console.log(e);
        console.log("_____")
    }
}
    houseCleaner();
