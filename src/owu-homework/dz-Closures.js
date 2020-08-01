function getCardOptions() {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = 1;

    function getBalance() {
        console.log(balance);
    }

    function getTransactionLimit() {
        console.log(transactionLimit);
    }
    function setTransactionLimit(money) {
        if (money > 100) {
            console.error("Перевищений максимум")
        } else {
            transactionLimit = money;
        }
    }
    function putCredits(money) {
        balance += money;
        console.log(balance);
    }
    function takeCredits(money) {
        if (balance > money) {
            console.log("Баланс більший за гроші");
                if (money < transactionLimit) {
                balance -= money;
                console.log("Успішно. На залишку тепер " + balance);
            } else {
                    console.error("Помилка ліміту")
                }
        }
        else {
            console.error("Помилка балансу");
        }
    }
    return {
        getBalance,
        putCredits,
        getTransactionLimit,
        setTransactionLimit,
        takeCredits
    }
}
let aboutCard = getCardOptions();
aboutCard.getBalance();
aboutCard.putCredits(200);
aboutCard.takeCredits(110);