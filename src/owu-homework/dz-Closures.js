function userCard(number) {
    let card1 = {
        cardOpt:
            function getCardOptions() {
                let cardNumber = number;
                let balance = 100;
                let transactionLimit = 100;
                let historyLogs = [];
                let key = setUniqueCardNumber();

                function getBalance() {
                    console.log(balance);
                }

                function getCardNumber() {
                    return cardNumber;
                }

                function setUniqueCardNumber() {
                    let x = Math.random() * 1000;
                    let uniqueValue = new Set;
                    uniqueValue.add(key);
                    cardNumber = Math.floor(x);
                    return Math.floor(x);
                }

                function getKey() {
                    console.log(key)
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
                    } else {
                        console.error("Помилка балансу");
                    }
                }
                // function transferCredits(creditsQuantity, card1) {
                //
                // }

                return {
                    getBalance,
                    putCredits,
                    getTransactionLimit,
                    setTransactionLimit,
                    takeCredits,
                    getCardNumber,
                    setUniqueCardNumber,
                    getKey
                }
            }
    };
    return card1
}

let card3 = userCard(1).cardOpt();
console.log(card3.getCardNumber());
// card3.getKey();
