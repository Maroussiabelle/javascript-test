/*
Создайте программу для оценки скидки на товар в зависимости от его цены и статуса покупателя.
Получите от пользователя сначала цену товара а затем статус покупателя (обычный или VIP).
Используя вложенные условные операторы, выведите какую скидку получает покупатель:

    Если цена товара больше 1000 рублей:
        Если статус покупателя VIP, выводится итоговая стоимость со скидкой 10%
        Если статус покупателя не VIP, выводится итоговая стоимость со скидкой 5%.
    Если цена товара 1000 рублей или меньше, выводится цена товара без изменений, независимо от его статуса.



Sample Input 1:

1100
VIP

Sample Output 1:

990

Sample Input 2:

450
VIP

Sample Output 2:

450

Sample Input 3:
2000
standard

Sample Output 3:
1900
 */



let price = 1700;
let customerStatus = "VIP";

//let price = Number(prompt("Введите цену товара"));
//let customerStatus = prompt("Введите статус - обычный или VIP");

if ( price > 1000) {
    if (customerStatus == "VIP") {
        console.log(0.9 * price);
    } else {
        console.log(0.95 * price);
    }
} else if (price <= 1000) {

    console.log(price);
}

