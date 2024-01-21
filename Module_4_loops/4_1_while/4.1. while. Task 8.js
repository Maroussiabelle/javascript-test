/* Попросите пользователя ввести число. Затем используя цикл while,
 умножайте это число на 2 до тех пор, пока оно не превысит 1000.
 Выведите на экран итоговое число и количество итераций
 (сколько раз вы умножили исходное число на 2).
 */

/*let userInput = Number(prompt());
*/
let userInput = 2;
let count = 0;
while (userInput<=1000){
    userInput = userInput*2;
    count = count +1;
}
console.log("Итоговое число: " + userInput);
console.log("Количество итераций: " + count);