let bArr = [];

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
