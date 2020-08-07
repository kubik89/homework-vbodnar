// Необхіжно реалізувати друкарську машинку.
//     У вас є інпут. Ви в нього ввожите якусь слово і тицькаєте кнопку "друкувати".
//
//     Після того як ви тикнули кнопку вам необхідно запустити функцію яка буде друкувтаи на строніці то, шо ви ввели по
// одній букві з рандомною затримкою від 0.1 до 0.5 секунд.
//     Тим самим симулюючи друкування цього тексту реальною людиною.
//     НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !

// має бути - прочитай перший символ масиву й викинь його, splice
let input = "Десь, колись, в якійсь країні";
let newArr = [];

function spliceAndPush() {
    let i = 0;
    while (i < input.length) {
        let a = input.charAt(i);
        newArr.push(a);
        i++;
    }
console.log(newArr);
}

setTimeout(spliceAndPush, 1000);
// setTimeout(showAllLetters, 1000);

// function showAllLetters() {
//        let a = newArr.splice(0, 1)
//     console.log(a)
// }

// setTimeout(showAllLetters, 2000);

// for (let i = 0; i < input.length; i++) {
    //     console.log(input.charAt(i));
    //     setInterval(input, 2000)
    // }
// druckInput();

// let counter = 0;
// while (counter <= input.length) {
//     setTimeout(function (){
//
//         // Something you want delayed.
//
//     console.log(input.charAt(counter));
//     counter++;
//     }, 10);
// }