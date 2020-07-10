let bArr = [1,2,8];
let a = 10;
let b = 7;
let c = 11;

// створити функцію яка виводить масив
function createNewArr () {
    return [bArr];
}

console.log(createNewArr());

// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати
// попвередню функцію.
function addRandomToCreateNewArrFunc() {
for (let i = 0; i < 10; i++) {
    bArr.push(Math.floor(Math.random() * 10));
    }
    return createNewArr();
}

console.log(addRandomToCreateNewArrFunc());

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function SmallerElement(a1=5,b1=2,c1=3) {
if (a1<b1 && a1<c1) {
    return a1;
}
else if (b1<a1 && b1<c1) {
    return b1;
}
else return c1;
}


// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function BiggerElement(myA, myB, myC) {
    if (myA > myB && myA > myC) {
        return myA;
    }
    else if (myB>myA && myB>myC) {
        return myB;
    }
    else
        return myC;
    return myA+myB+myC;
}

let biggerElement = BiggerElement(14, 10, 7);
console.log(biggerElement);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
