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