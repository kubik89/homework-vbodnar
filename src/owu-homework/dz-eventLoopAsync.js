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

                //Через колбеки

// getUp(true, (err, result) => {
//    if (err) {
//        console.error(err, " Почуваюсь погано. ");
//    } else {
//        console.log("Спав добре. ", result + " калорій");
//
//        eatBreakfast(false, (err, rest) => {
//             if (err) {
//                 console.error(err, "Немає що їсти. День пропав. НІчого не роблю далі. ")
//             } else {
//                 console.log("Поїв та набрав разом ", rest);
//
//                 cleaning(false, (err, rest) => {
//                     if (err) {
//                         console.error("Без води немає життя, нічого не роблю!")
//                     } else {
//                        console.log("Після миття залишилось " + rest + " калорій. ");
//
//                         lectionOverview(true, (err, rest) => {
//                             if (err) {
//                                 console.error("Помилка огляду відео.", err)
//                             } else {
//                                 console.log("Залишок калорій - " + rest);
//
//                                 haveLunch(true, (err, restAftLunch) => {
//                                     if (err) {
//                                         console.error("Немає що обідати")
//                                     } else {
//                                         console.log(restAftLunch)
//                                     }
//                                 });
//                             }
//                         });
//                     }
//                 })
//             }
//        });
//    }
// });
//
// let callor = 0;
// function getUp(isOpenEyes, cb) { // якщо пркинувся й біль в животі
//     setTimeout(() => {
//         console.log("I can eat and have " + callor + " callories");
//         if (isOpenEyes) {
//             callor+=500;
//             console.log("I have " + callor + " callories");
//             cb(null, callor)
//         } else {
//             cb("Ранок почався так собі. ", null)
//         }
//     }, 500);
// }
//
// function eatBreakfast(noFood, cb) {
//     setTimeout(() => {
//         if (noFood) {
//             cb("Need to go shop. ", null);
//         } else {
//             callor += 1000;
//             cb(null, callor + " калорій. ") // rest - callor + " калорій. "
//         }
//     }, 100)
// }
//
// function cleaning(noWater, cb) {
//     setTimeout(() => {
//         if (noWater) {
//             cb("No water for cleaning. ", null);
//         } else {
//             callor-=200;
//             cb(null, callor)
//         }
//     }, 400)
// }
//
// function lectionOverview(isVideoPresent, cb) {
//    setTimeout(() => {
//        if(isVideoPresent) {
//            console.log("Вивчаю лекцію... ");
//            cb(null, callor-=450);
//            return lectionFinish = true
//        } else {
//            cb("Віктор не залив відео, день пропав", null);
//        }
//    },700)
// }
//
// function haveLunch(isHaveFood, cb) {
//     setTimeout( () => {
//         if (isHaveFood) {
//             callor+=1000;
//             cb(null, "Після обіду залишок калорій " +  callor)
//         } else {
//             cb("No food for lunch", null)
//         }
//     }, 10)
// }

                //Через проміси

// getUp(true).then(morningCallories => { // при that - це те що приходить із Reject, тобто успішне
//     console.log(morningCallories);
//
//     return eatBreakfast (false, morningCallories)
// }).then(afterBreakfCallor => {
//     console.log(afterBreakfCallor);
//
//     return cleaning(false, afterBreakfCallor)
// }).then(afterCleaningCallor => {
//     console.log(afterCleaningCallor);
//
//     return lectionOverview (true, afterCleaningCallor)
// }).then(afterLectionCallor => {
//     console.log(afterLectionCallor);
//
//     return haveLunch(true, afterLectionCallor)
// }).then(afterLunchCallor => {
//     console.log(afterLunchCallor);
// }).catch(reason => {
//     console.error(reason)
// });
//
// let callor = 0;
// function getUp(isOpenEyes) { // якщо пркинувся й біль в животі
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("I can eat and have " + callor + " callories");
//             if (isOpenEyes) {
//                 callor+=500;
//                 console.log("I have " + callor + " callories");
//                 resolve(callor)
//             } else {
//                 reject("Ранок почався так собі. ")
//             }
//         }, 500);
//     })
// }
//
// function eatBreakfast(noFood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (noFood) {
//                 reject("Need to go shop. ");
//             } else {
//                 callor += 1000;
//                 resolve(callor + " калорій. ")
//             }
//         }, 100)
//     })
// }
//
// function cleaning(noWater) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (noWater) {
//             reject ("No water for cleaning. ");
//         } else {
//             callor-=200;
//             resolve("Після миття залишилось " + callor)
//         }
//     }, 400)
//     })
// }
//
// function lectionOverview(isVideoPresent) {
//     return new Promise((resolve, reject) => {
//    setTimeout(() => {
//        if(isVideoPresent) {
//            console.log("Вивчаю лекцію... ");
//            callor-=450;
//            resolve( "Калорій після огляду лекції " + callor);
//        } else {
//            reject("Віктор не залив відео, день пропав");
//        }
//    },700)
//     })
// }
//
// function haveLunch(isHaveFood) {
//     return new Promise((resolve, reject) => {
//     setTimeout( () => {
//         if (isHaveFood) {
//             callor+=1000;
//             resolve("Після обіду залишок калорій " +  callor)
//         } else {
//             reject("No food for lunch")
//         }
//     }, 10)
//     })
// }


                // Через асинк авейт.

async function myDailyJobs()
{
    try {
        let callor = await getUp(true); // всі чекають доки не виконається кожна функція async await
                                                    // після виконання УСПІШНОГО виконання функції getUp вертається
                                                    // якась нова змінна callor та повертає успішне виконання функції із resolve
        console.log("Це callor після сну - " + callor);

        let rest = await eatBreakfast(false, callor);
        console.log("Це rest після сніданку - " + rest);

        let callAfterCleaning = await cleaning(true, rest);
        console.log(callAfterCleaning);

        let callAfterLection = await lectionOverview(true, callAfterCleaning);
        console.log(callAfterLection);

        let callAfterLunch = await haveLunch(true, callAfterCleaning);
        console.log(callAfterLunch);

    } catch (e) {
        console.log(e)
    }
}

let callor = 0;
function getUp(isOpenEyes) { // якщо пркинувся й біль в животі
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I can eat and have " + callor + " callories");
            if (isOpenEyes) {
                callor+=500;
                console.log("I have " + callor + " callories");
                resolve(callor)
            } else {
                reject("Ранок почався так собі. ")
            }
        }, 500);
    })
}

function eatBreakfast(noFood) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (noFood) {
                reject("Need to go shop. ");
            } else {
                callor += 1000;
                resolve(callor + " калорій . ")
            }
        }, 3000)
    })
}

function cleaning(noWater) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (noWater) {
            reject ("No water for cleaning. ");
        } else {
            callor-=200;
            resolve("Після миття залишилось " + callor)
        }
    }, 400)
    })
}

function lectionOverview(isVideoPresent) {
    return new Promise((resolve, reject) => {
   setTimeout(() => {
       if(isVideoPresent) {
           console.log("Вивчаю лекцію... ");
           callor-=450;
           resolve( "Калорій після огляду лекції " + callor);
       } else {
           reject("Віктор не залив відео, день пропав");
       }
   },700)
    })
}

function haveLunch(isHaveFood) {
    return new Promise((resolve, reject) => {
    setTimeout( () => {
        if (isHaveFood) {
            callor+=1000;
            resolve("Після обіду залишок калорій " +  callor)
        } else {
            reject("No food for lunch")
        }
    }, 10)
    })
}

myDailyJobs();