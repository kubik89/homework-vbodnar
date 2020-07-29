// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.

function getUp(isStomachache, cb) { // якщо пркинувся й біль в животі
    setTimeout(() => {
        if (isStomachache) {
            cb("болить живіт", null) // оскільки в нашій умові в функції callback спочатку err а потім result, то
            // помилка на початку умови в лапках, тобто тут err = "болить живіт"
        } else {
            cb(null, "Ранок почався добре") // тут result = "Ранок почався добре", а помилки немає
        }
    }, 1000)
}

function eatBreakfast(noFood, cb) {
    setTimeout(() => {
        if (noFood) {
            cb("Need to go shop", null);
        } else {
            cb(null, "Enjoy your meal")
        }
    }, 500)
}

eatBreakfast(true, (err, result) => {
   if (err) {
       console.error("go fast to buy food", err);
   } else {
       console.log(result, "Do't eat so much ")
   }
});

// getUp(false, (err, result) => {
//    if (err) {
//        console.error(err);
//        console.error("Почуваюсь погано");
//    } else {
//        console.log("Спав добре");
//        console.log(result)
//    }
// });