// console.log(1);
//
// setTimeout(() => {
//     console.log(2)
// }, 1000);
//
// console.log(3);

function clearHouse(isJobDone, callB) {
    setTimeout(() => {
        if (isJobDone) {
            console.log("I'm cleaning yet");
        callB(500);
        } else {
            callB("Грошей немає, нічого не заробив")
        }
    }, 100)
}
clearHouse(true, (reward) => {
    console.log("________");
    console.log(reward);
    console.log("________");
});