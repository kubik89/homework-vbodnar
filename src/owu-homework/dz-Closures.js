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
        // return cardOptions.balance+= money;
        getCardOptions().balance += money;
    }

    function setTransactionLimit(money) {
        if (money > 100) {
            console.error("Перевищений максимум")
        } else {
            transactionLimit = money;
        }
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

    return {
        getCardOptions,
        putCredits,
        setTransactionLimit,
        takeCredits,
    }
}

// let user = userCard(3);
// console.log(user.getCardOptions());
//
//
class UserAccount {

    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    getCardByKey(cardNumber) {
        if (cardNumber > 0 && cardNumber <= 3){
            return userCard(cardNumber)
        } else console.log("Така кількість карт не можлива")
    }

    addCard(nameOfCard) {
        if (this.cards.length < 3) {
            // for (let i = this.cards.length+1; i < this.cards.length; i++) {
            //     userCard([i])
            // }
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
let card1 = vova.getCardByKey(2)
card1.putCredits(280)
console.log(card1.getCardOptions());
// vova.addCard("Idea");
// console.log(vova.cards);
// console.log(userCard(2).getCardOptions());
// userCard(2).putCredits(200);
// console.log(userCard(2).getCardOptions());
// vova.


// for (let i = 0; i < this.cards.length; i++) {
    // if (this.cards.length === 0 ) {
    //     this.cards.push(1);
    //     console.log("Нічого не пушнув - 0");
    //     return;
//     if ((this.cards[i] === 1 || this.cards[i] === 2) && (this.cards[i + 1] !== 3)) {
//         this.cards.push(3);
//         console.log("пушнув - 3");
//         return;
//     } else if ((this.cards[i] === 2 || this.cards[i] === 3) && (this.cards[i + 1] !== 1)) {
//         this.cards.push(1);
//         console.log("пушнув - 1");
//         return;
//     } else if ((this.cards[i] === 1 || this.cards[i] === 3) && (this.cards[i + 1] !== 2)) {
//         this.cards.push(2);
//         console.log("пушнув - 2");
//         return;
//     } else if (this.cards[0] === undefined ) {
//         this.cards.push(1);
//     } else console.log("Нічого не пушнув")
// }