//
// let name = ["Vova", "Ira", "Svitlana", "Oleg"]
// console.log(name.length)
// for (let i = 0; i < name.length; i++) {
//     let div = document.createElement("div")
//     div.innerText = name[i]
//     document.body.appendChild(div)
// }
//
// let input1 = document.createElement("span")
// input1.innerText = "test text1"
// document.body.appendChild(input1)
//
// let butt1 = document.createElement("button")
// butt1.innerText = "Cl1"
// document.body.appendChild(butt1)
//
// butt1.onclick = (event) => {
//     input1.innerHTML = "111 New"
// }
// let input2 = document.createElement("input")
// document.body.appendChild(input2)
// input2.defaultValue = "sdsd";
//
// let butt2 = document.createElement("button")
// butt2.innerText = "CreateDiv1"
// document.body.appendChild(butt2)
// butt2.onclick = (event) => {
//     let p = document.createElement("p")
//     p.innerText = "1"
//     document.body.appendChild(p)
//     let b1 = document.createElement("button")
//     b1.innerText = "Del"
//     document.body.appendChild(b1)
// }
let one = "Verhovna Rada"
let two = "Fraction"
let three = "Deputat"

let menu1 = document.createElement("p")
menu1.innerText = "Введіть 1 - Верховна рада; 2 - Фракція; 3 - Депутат"
document.body.appendChild(menu1)

let inputMain = document.createElement("input")
let x = inputMain.value = "Enter your value"
document.body.appendChild(inputMain)

let b2 = document.createElement("button")
b2.innerText = "ForInput"
document.body.appendChild(b2)
b2.onclick = (event => {
    let p = document.createElement("p")
    p.innerText = inputMain.value
    if (p.innerText === "1") {
        let div1 = document.createElement("div")
        div1.innerText = `Ви вибрали - ${one}`
        document.body.appendChild(div1)
        inputMain.value = ""
            let menu1a = document.createElement("p")
            menu1a.innerText = "Оберіть дію далі: "
            document.body.appendChild(menu1a)
            let menu1b = document.createElement("p")
            menu1b.innerText = "1-додати фракцію; 2-вивести всі фракції; 3-вивести найбільшого хабарника"
            document.body.appendChild(menu1b)
                let inputSecond = document.createElement("input")
                let x = inputSecond.value = "Enter your value"
                document.body.appendChild(inputSecond)
                let b2 = document.createElement("button")
                b2.innerText = "GetDeps"
                document.body.appendChild(b2)
                b2.onclick = (event) => {
                 getAllDeps1()
                }
    }
    if (p.innerText === "2") {
        let div1 = document.createElement("div")
        div1.innerText = `Ви вибрали - ${two}`
        document.body.appendChild(div1)
    }
    if (p.innerText === "3") {
        let div1 = document.createElement("div")
        div1.innerText = `Ви вибрали - ${three}`
        document.body.appendChild(div1)
    }
    // else if {
    //     let div1 = document.createElement("div")
    //     div1.innerText = `Ви вибрали невірне значення`
    //     document.body.appendChild(div1)
    // }
})




// switch (menu) {
//     case 1: {
//         let mess = "Верховна рада"
//         console.log(mess)
//         break;
//     }
//     case 2: {
//         console.log("Фракція")
//         break;
//     }
//     case 3: {
//         console.log("Депутат")
//         break;
//     }
//     default: {
//         console.log(`Такий пункт ${menu} меню не існує`)
//     }
// }
// }

let allDeps = [
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

function getAllDeps1() {
    for (let i = 0; i < allDeps.length; i++) {
        let s = document.createElement("p")
        s.innerText = `${allDeps[i].lastName} - ${allDeps[i].fractionName}`
        document.body.appendChild(s)
        // console.log(`${allDeps[i].lastName} - ${allDeps[i].fractionName}`);
    }
}
