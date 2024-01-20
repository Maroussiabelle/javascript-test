//Перед вами программа, которая принимает название товара,
// цену товара за штуку и количество товара и выводит
// сообщение в определенном формате с помощью функции calculateTotal
// с тремя параметрами. Напишите функцию calculateTotal.
// Используйте интерполяцию.

const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());

function calculateTotal(itemName, itemPrice, quantity){
    return itemPrice * quantity;
}

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(`Вы выбрали ${quantity} товаров "${itemName}" по цене ${itemPrice} рублей за штуку. Итого: ${message} рублей.`);