function userCard(number) {

    let cardOptions = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number
    };

    function getCardOptions() {
        return cardOptions;
    }

    function putCredits(money) {
        cardOptions.balance += money;
        cardOptions.historyLogs.push({
            OperationType: `Received Credits`,
            credits: `${money}`,
            operationTime: `${time}, ${date}`
        })
    }

    function setTransactionLimit(money) {
        cardOptions.transactionLimit = money;
        cardOptions.historyLogs.push({
            OperationType: `transaction Limit Change`,
            credits: `${money}`,
            operationTime: `${time}, ${date}`
        })
    }

    function getTransactionLimit() {
        return cardOptions.transactionLimit;
    }

    function takeCredits(money) {
        if (cardOptions.balance > money && money < cardOptions.transactionLimit) {
            cardOptions.balance -= money;

            cardOptions.historyLogs.push({
                OperationType: `Withdrawal of credits`,
                credits: `${money}`,
                operationTime: `${time}, ${date}`
            });
            return money;
        } else {
            console.error("Недостатньо коштів на рахунку або Баланс менший за гроші");
        }
    }

    function transferCredits(money, card) {
        takeCredits(money);
        card.putCredits(money)
    }

    return {
        getCardOptions,
        putCredits,
        setTransactionLimit,
        getTransactionLimit,
        takeCredits,
        transferCredits
    }
}

let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

class UserAccount {

    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    getCardByKey(cardNumber) {
        if (cardNumber > 0 && cardNumber <= 3) {
            return userCard(cardNumber)
        } else console.log("Така кількість карт не можлива")
    }

    addCard(nameOfCard) {
        if (this.cards.length < 3) {
            this.cards.push(nameOfCard)
        } else {
            console.error('Ваш ліміт на кількість карт перевищенно!')
        }
    }
}

let vova = new UserAccount("Volodymyr");
vova.addCard("Mono");
vova.addCard("Privat");
vova.addCard("GasBank");


let card1 = vova.getCardByKey(1);
let card2 = vova.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
console.log(card1.getCardOptions());

console.log(card2.getCardOptions());
card2.takeCredits(50);
console.log(card2.getCardOptions());