/*

Создайте массив users, запросите у пользователя ввод трех имен и добавьте их в массив.
Затем выведите 1-й и 3-й элемент массива в заявленном формате.

Sample Input 1:

Костя
Димон
Петя

Sample Output 1:

Костя и Петя

Sample Input 2:

Спанч Боб
Патрик
Сэнди

Sample Output 2:

Спанч Боб и Сэнди

Sample Input 3:

user1
user2
user3

Sample Output 3:

user1 и user3


 */

let users = [];
let name1 = prompt('Введите ипя первого пользователя');
let name2 = prompt('Введите ипя второго пользователя');
let name3 = prompt('Введите ипя третьего пользователя');
users.unshift(name1, name2, name3);
console.log(`${users[0]} и ${users[2]}`);