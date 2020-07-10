let bArr = [];
let a = 10;
let b = 7;
let c = 11;

// створити функцію яка виводить масив
function createNewArr () {
    return [bArr];
}

// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати
// попвередню функцію.
function addRandomToCreateNewArrFunc() {
for (let i = 0; i < 10; i++) {
    bArr.push(Math.floor(Math.random() * 10));
    }
    return createNewArr();
}

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function smallerElement() {
if (a<b && a<c) {
    return a;
}
else if (b<a && b<c) {
    return b;
}
else return c;
}
