// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) помився
// 4) огляд лекції
// 5) обід
// 6) домашка
// 7) вечеря

//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.
let callor = 0;
function getUp(isOpenEyes, cb) { // якщо пркинувся й біль в животі
    setTimeout(() => {
        console.log("I can eat and have " + callor + " callories");
        if (isOpenEyes) {
            callor+=500;
            console.log("I have " + callor + " callories");
            cb(null, callor)
        } else {
            cb("Ранок почався так собі. ", null)
        }
    }, 500);
}
getUp(true, (err, result) => {
   if (err) {
       console.error(err, " Почуваюсь погано. ");
   } else {
       console.log("Спав добре. ", result + " калорій");

       eatBreakfast(false, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Поїв та набрав разом " + callor + " калорій. ")
            }
        });

       // cleaning(false, (err, ) => {
       //
       // })
   }
});

function eatBreakfast(noFood, cb) {
    setTimeout(() => {
        if (noFood) {
            cb("Need to go shop. ", null);
        } else {
            callor += 1000;
            cb(null, "Enjoy your meal. You have got " + callor)
        }
    }, 600)
}

function cleaning(noWater, cb) {
    setTimeout(() => {
        if (noWater) {
            cb("No water for cleaning. ", null);
        } else {
            callor-=200;
            cb(null, "Enjoy your cleaning. " + callor)
        }
    }, 700)
}

cleaning(false, (err, result)=> {
    if (err) {
        console.error("Call to water service. ", err)
    } else {
        console.log(result, "Do not remind to save water ))) ")
    }
});

// eatBreakfast(true, (err, result) => {
//    if (err) {
//        console.error("go fast to buy food. ", err);
//    } else {
//        console.log(result, "Do't eat so much. ")
//    }
// });

