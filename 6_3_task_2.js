//Перед вами программа, которая должна запрашивать баланс банковского счета у пользователя
// и выводить сообщение о балансе в заявленном формате.
// Вставьте вместо многоточия объявление метода для объекта.

const balance = Number(prompt())
let bankAccount = {
    balance,
    checkBalance(){
        console.log(`Ваш текущий баланс: ${balance} долларов`);
    }
};
bankAccount.checkBalance();