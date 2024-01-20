/*Перед вами та же программа, но теперь формат вывода сообщения изменен.
Напишите функцию с одной инструкцией console.log(),
в которой должны быть использованы спецсимволы.


Sample Input 1:

Футболка
200
3

Sample Output 1:

Вы выбрали "Футболка" по цене 200 рублей за штуку.
Количество: 3 шт.
Итого: 600 рублей.

*/


const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());

function calculateTotal(itemName, itemPrice, quantity){
    return itemPrice * quantity;
}

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(`Вы выбрали "${itemName}" по цене ${itemPrice} рублей за штуку.\nКоличество: ${quantity} шт.\nИтого: ${message} рублей.`);