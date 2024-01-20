let bankAccount = {
    balance: 500,

    deposit: function(amount) {
       this.balance += amount;
    },

    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Недостаточно средств на счете");
        }
    },
};

//const amount = Number(prompt());
// const choice = prompt();

//const amount = 200;
///const choice = "снять";


const amount = 600;
const choice = "снять";
if (choice === "внести") {
    bankAccount.deposit(amount);
    console.log(bankAccount.balance);
} else if (choice === "снять") {
    if (amount <= bankAccount.balance) {
       bankAccount.withdraw(amount);
        console.log(bankAccount.balance);
    } else {
        console.log("Недостаточно средств на счете");

    }
}
