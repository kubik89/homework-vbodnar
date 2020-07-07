// --створити масив та вивести його в консоль:
// з 5 числових значень
//     let arr1Int = [1, 4, 6, 11, 211];
// console.log(arr1Int);

// з 5 стрічкових значень
//     let arr2String = ["owu", "vb", "google", "microsoft", "Coca-Cola"];
//     console.log(arr2String);

// з 5 значень стрічкового, числового та булевого типу
//     let mainArr = [1, 4, 6, 11, 211, "owu", "vb", "google", "microsoft", "Coca-Cola", true, false, false, true,
//     true];
//     console.log(mainArr);

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
// let anyArr1 = [];
// anyArr1[0] = 5;
// anyArr1[1] = 15;
// anyArr1[2] = "owu";
// anyArr1[3] = 59;
// anyArr1[4] = "vb";
// console.log(anyArr1);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let divs = document.getElementsByTagName("div");
// let anytext = ["this is test text1"];
// for (const div1 in anytext) {
//     divs[0].innerText = `${anytext[div1]}`;
//     divs[1].innerText = `${anytext[div1]}`;
//     divs[2].innerText = `${anytext[div1]}`;
//     divs[3].innerText = `${anytext[div1]}`;
//     divs[4].innerText = `${anytext[div1]}`;
//     divs[5].innerText = `${anytext[div1]}`;
//     divs[6].innerText = `${anytext[div1]}`;
//     divs[7].innerText = `${anytext[div1]}`;
//     divs[8].innerText = `${anytext[div1]}`;
//     divs[9].innerText = `${anytext[div1]}`;
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let divs = document.getElementsByTagName("div");
// let anytext = ["this is test text1 for div"];
// for (const div1 in anytext) {
//     divs[0].innerText = `${div1[0]}:${anytext[div1]}`;
//     divs[1].innerText = `${div1[0]}:${anytext[div1]}`;
//     divs[2].innerText = `${div1[0]}:${anytext[div1]}`;
//     divs[3].innerText = `${div1[0]}:${anytext[div1]}`;
//     divs[4].innerText = `${div1[0]}:${anytext[div1]}`;
//     divs[5].innerText = `${div1[0]}:${anytext[div1]}`;
//     divs[6].innerText = `${div1[0]}:${anytext[div1]}`;
//     divs[7].innerText = `${div1[0]}:${anytext[div1]}`;
//     divs[8].innerText = `${div1[0]}:${anytext[div1]}`;
//     divs[9].innerText = `${div1[0]}:${anytext[div1]}`;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let h1s = document.getElementsByTagName("h1");
// let anytext = ["this is test text1 for h1"];
// for (const h11 in anytext) {
//     h1s[0].innerText = `${anytext[h11]}`;
//     h1s[1].innerText = `${anytext[h11]}`;
//     h1s[2].innerText = `${anytext[h11]}`;
//     h1s[3].innerText = `${anytext[h11]}`;
//     h1s[4].innerText = `${anytext[h11]}`;
//     h1s[5].innerText = `${anytext[h11]}`;
//     h1s[6].innerText = `${anytext[h11]}`;
//     h1s[7].innerText = `${anytext[h11]}`;
//     h1s[8].innerText = `${anytext[h11]}`;
//     h1s[9].innerText = `${anytext[h11]}`;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let h1s = document.getElementsByTagName("h1");
// let anytext = ["this is test text1 for h1"];
// for (const h11 in anytext) {
//     h1s[0].innerText = `${h11[0]}:${anytext[h11]}`;
//     h1s[1].innerText = `${h11[0]}:${anytext[h11]}`;
//     h1s[2].innerText = `${h11[0]}:${anytext[h11]}`;
//     h1s[3].innerText = `${h11[0]}:${anytext[h11]}`;
//     h1s[4].innerText = `${h11[0]}:${anytext[h11]}`;
//     h1s[5].innerText = `${h11[0]}:${anytext[h11]}`;
//     h1s[6].innerText = `${h11[0]}:${anytext[h11]}`;
//     h1s[7].innerText = `${h11[0]}:${anytext[h11]}`;
//     h1s[8].innerText = `${h11[0]}:${anytext[h11]}`;
//     h1s[9].innerText = `${h11[0]}:${anytext[h11]}`;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr1Int = [1, 4, 6, 11, 211, 21, 112, 3334, 54];
// for (let a=0; a<arr1Int.length; a++) {
//     console.log(arr1Int[a]);
// }

// -  - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr1Int = ["fghjf", "dgh", "gh", "dffg", "rttt", "dfdfdf", "fdfdg", "dfgfgaa"];
// for (let a=0; a<arr1Int.length; a++) {
//     console.log(arr1Int[a]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let anyArr1 = ["string1", true, 1, 223, false, "int", "my name", 'x', 's', 123];
// for (const anyArr1new in anyArr1) {
//     console.log(anyArr1[anyArr1new]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// булеві елементи
// let anyArr1 = ["string1", true, 1, 223, false, "int", "my name", true, 'x', 's', 123];
// for (let i =0; i<anyArr1.length; i++) {
//     if (typeof anyArr1[i]=="boolean") {
//     console.log(anyArr1[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// числові елементи
// let anyArr1 = ["string1", true, 1, 223, false, "int", "my name", true, 'x', 's', 123];
// for (let i =0; i<anyArr1.length; i++) {
//     if (typeof anyArr1[i]=="number") {
//     console.log(anyArr1[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
// рядкові елементи
// let anyArr1 = ["string1", true, 1, 223, false, "int", "my name", true, 'x', 's', 123];
// for (let i =0; i<anyArr1.length; i++) {
//     if (typeof anyArr1[i]=="string") {
//         console.log(anyArr1[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let ar2 = [];
// ar2[0] = "asd";
// ar2[1] = 11;
// ar2[2] = 'f';
// ar2[3] = true;
// ar2[4] = true;
// ar2[5] = "asdfgggg";
// ar2[6] = false;
// ar2[7] = "1111asd";
// ar2[8] = "dfdff";
// ar2[9] = 11120;
// for (let i=0; i<ar2.length; i++) {
//     console.log(ar2[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<10; i++) {
//     console.log("Номер кроку - " + i);
//     document.write("Номер кроку - " + i + "<br/>");
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<100; i+=2) {
//     console.log("Номер кроку - " + i);
//     document.write("Номер кроку - " + i + "<br/>");
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=0; i<100; i++) {
//     if (i%2===0) {
//     console.log("Номер кроку - " + i);
//     document.write("Номер кроку - " + i + "<br/>");
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i=0; i<100; i++) {
//     if (i%2!==0) {
//         console.log("Номер кроку - " + i);
//         document.write("Номер кроку - " + i + "<br/>");
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let m=0; m<2; m++) {
//     console.log(m + " хвилина");
//     for (let s=0; s<60; s++){
//         console.log(m + " хвилина " + s + " секунд")
//     }
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let h=0; h<=2; h++) {
//     console.log(h + " година");
//     if (h===2) {
//         for (let m=0; m<20; m++) {
//             console.log(h + " година " + m + " хвилина");
//             for (let s=0; s<60; s++){
//                 console.log(h + " година " +m + " хвилина " + s + " секунд")
//             }
//         }
//     break;
//     }
//     for (let m=0; m<60; m++) {
//         console.log(h + " година " + m + " хвилина");
//         for (let s=0; s<60; s++){
//             console.log(h + " година " +m + " хвилина " + s + " секунд")
//         }
//     }
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr3 = [ 'a', 'b', 'c'];
// for (let i=0; i<arr3.length;i++) {
// document.write(arr3[i]);
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr3 = [ 'a', 'b', 'c'];
// let counters = 0;
// while (counters<arr3.length) {
// document.write(arr3[counters]);
// counters++;
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr3 = [ 'a', 'b', 'c'];
// for (const nerArr1 of arr3) {
//     document.write(nerArr1);
// }

// - Дано масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr3 = [ 'a', 'b', 'c'];
// for (let i=1; i<=3; i++) {
//     arr3.push(i);
// }
// document.write(arr3);

//- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let newArr1 = [];
// let arr1 = [1, 2, 3];
// for (let i=0; i<=arr1.length+1; i++) {
// let new1 = arr1.pop(i);
// newArr1.push(new1);
// }
// document.write(newArr1);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr1 = [1, 2, 3];
// for (let i=4; i<=6; i++) {
//     arr1.push(i);
// }
// document.write(arr1);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr1 = [1, 2, 3];
// for (let i=6; i>=4; i--) {
//     arr1.unshift(i);
// }
// document.write(arr1);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr1 = ['js', 'css', 'jq'];
// document.write(arr1.shift());

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr1 = ['js', 'css', 'jq'];
// document.write(arr1.pop());

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arr1 = [1, 2, 3, 4, 5];
// document.write(arr1.slice(3));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arr1 = [1, 2, 3, 4, 5];
// document.write(arr1.slice(0,2));
//

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arr1 = [1, 2, 3, 4, 5];
// arr1.splice(1, 2);
// document.write(arr1);

// - - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього
// масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = ["a", "b", "c"];
// let del45 = (arr1.splice(3));
// // console.log(arr1);
// for (let i = 0; i < arr2.length; i++) {
//     arr1.push(arr2[i]);
// }
// for (let i = 0; i < del45.length; i++) {
//     arr1.push(del45[i]);
// }
// console.log(arr1);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arr1 = [1, 2, 3, 4, 5];
let firstRemove = arr1.splice(0, 1);
console.log(arr1);
arr1.unshift('b');
arr1.unshift('a');
    for (let i = 0; i < firstRemove.length; i++) {
    arr1.unshift(firstRemove[i]);
    }
console.log(arr1);
    let valueFive = arr1.splice(6);
arr1.push("c");
for (let i = 0; i < valueFive.length; i++) {
    arr1.push(valueFive[i]);
}
arr1.push("e");
console.log(arr1);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let newArr = [12,45,78,5,11,24,65,22,42,10];
// for (i=0; i<newArr.length; i++) {
//     if (newArr[i]%2===0) {
//     console.log(newArr[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу
// та push () скопіювати значення одного масиву в інший

// let newArr = [12,45,78,5,11,24,65,22,42,10];
// let newFreeArr = [];
// for (let i=0; i<newArr.length;i++) {
//     newFreeArr.push(newArr[i]);
// }
// document.write(newFreeArr);

// ====================

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18] та:
//1. перебрати його циклом while
// let arr1 = [2,17,13,6,22,31,45,66,100,-18];
// let counter1 = 0;
// while (counter1<arr1.length) {
//     document.write(arr1[counter1]);
//     counter1++;
// }

// 2. перебрати його циклом for
// let arr1 = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0; i<arr1.length; i++) {
//     document.write(arr1[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr1 = [2,17,13,6,22,31,45,66,100,-18];
// let counter1 = 0;
// while (counter1<arr1.length) {
//     if (arr1[counter1]%2!==0) {
//         document.write(arr1[counter1]);
//     }
//     counter1++;
//     }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr1 = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0; i<arr1.length; i++) {
//     if (arr1[i]%2!==0) {
//     document.write(arr1[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arr1 = [2,17,13,6,22,31,45,66,100,-18];
// let counter1 = 0;
// while (counter1<arr1.length) {
//     if (arr1[counter1]%2===0) {
//         document.write(arr1[counter1]);
//     }
//     counter1++;
//     }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arr1 = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0; i<arr1.length; i++) {
//     if (arr1[i]%2===0) {
//     document.write(arr1[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let arr1 = [2,12,13,6,27,323,45,66,99,-18];
// for (let i=0; i<arr1.length;i++) {
//     if (arr1[i]%3===0) {
//         arr1[i]="okten";
//     }
// }
// document.write(arr1 + '</br>');

// 8. вивести масив в зворотньому порядку.
// let arr1 = [2,12,13,6,27,323,45,66,99,-18];
// for (let i = arr1.length-1; i>=0; i--) {
//    document.write(arr1[i]);
// }

// let arr1 = [2,12,13,6,27,323,45,66,99,-18];
// document.write(arr1.reverse());
//

// 10 - створити пустий масив та :
// 1 - заповнити його 50 парними числами за допомоги циклу.
// let newArr = [];
// for (let i=0; i<50; i++) {
//    newArr.push(i);
//    if (newArr[i] %2 ===0) {
//       document.write(newArr[i]);
//    }
// }

// 2 - заповнити його 50 непарними числами за допомоги циклу.
// let newArr = [];
// for (let i=0; i<50; i++) {
//    newArr.push(i);
//    if (newArr[i] %2 !==0) {
//       document.write(newArr[i]);
//    }
// }

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// let newArr = [];
// newArr.length=20;
// for (const newArrElement of newArr) {
// document.write(Math.floor(Math.random(newArr)*10));
// }

//  - диапазон рандома 8 до 732.



// for (const element of newArr) {
//
//
// //
// //    if (newArrElement<732 && newArrElement>8) {
// //       console.log(newArrElement);
// //    }
// }
// let newArr = [];
// const MAX_NUMBER = 732;
// const MIN_NUMBER = 8;
//
// while (newArr.length<20){
//     const randomNumber = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
//     if (randomNumber < 732 && randomNumber > 8) {
//         newArr.push(randomNumber);
//     }
// }
// console.log(newArr);


// console.log(newArr);

// 2. вывести на консоль  каждый третий елемент
// let newArr = [];
// const MAX_NUMBER = 1000;
// const MIN_NUMBER = 8;
//
// while (newArr.length<20){
//     const randomNumber = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
//     if (randomNumber < 732 && randomNumber > 8) {
//         newArr.push(randomNumber);
//     }
// }
// for (let i = 0; i < newArr.length; i++ ) {
// console.log(newArr[i]);
// i+=3;
// }

// 4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
// let newArr = [];
// let arr2 = [];
// const MAX_NUMBER = 1000;
// const MIN_NUMBER = 8;
//
// while (newArr.length<20){
//     const randomNumber = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
//     if (randomNumber < 732 && randomNumber > 8) {
//         newArr.push(randomNumber);
//     }
// }
// for (let i = 0; i < newArr.length; i++ ) {
//     if (newArr[i]%2===0) {
//     // console.log(newArr[i]);
//     arr2.push(newArr[i]);
//         console.log(arr2);
//     }
//     i+=3;
// }

// - 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let arrNumb = [12, 65, 76, 2, 88, 90, 111, 123, 12, 92];
// for (let i = 0; i < arrNumb.length; i++) {
//     // console.log(arrNumb[0]);
//     if (arrNumb[i+1]%2===0) {
//     console.log(arrNumb[i+1]);
//     }
// }

// - масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let allBills = [100,250,50,168,120,345,188];
// let summ = 0;
// for (let i = 0; i < allBills.length; i++) {
//     summ += allBills[i];
// }
//     console.log(summ/allBills.length-1);

// - створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let newArr = [];
// for (let i = 0; i < 10; i++) {
//     newArr.push(Math.floor(Math.random() * 10));
// }
// console.log(newArr);
// let newArr1 = [];
// for (let i = 0; i < newArr.length; i++) {
//     newArr1.push(newArr[i] * 5);
// }
// console.log(newArr1);

// - створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

// let someArr = ["Coca", 15, 'x', 114, "Microsoft", 190, true, 66, false];
// let someNewArr = [];
// for (let i = 0; i < someArr.length; i++) {
//     if (typeof someArr[i] === "number") {
//         someNewArr.push(someArr[i]);
//     }
// }
//     console.log(someNewArr);