/*
Напишите программу, которая запрашивает у пользователя четыре числа и объявляет функцию compareAndPrintMax.
Эта функция принимает четыре числа как параметры и сравнивает их, затем выводит сообщение о том, какое число больше.
 Sample Input 1:

4
5
6
2

Sample Output 1:

6

let maxNumber = Math.max(1, 5, 3, 8);
console.log(maxNumber); // Выведет 8

 */

/* let firstNum = Number(prompt("Введите первое число:"));
    let secondNum = Number(prompt("Введите второе число:"));
    let thirdNum = Number(prompt("Введите третье число:"));
    let fourthNum = Number(prompt("Введите четвертое число:"));
 */
let firstNum = 4;
let secondNum = 5;
let thirdNum = 6;
let fourthNum = 2;

function compareAndPrintMax (firstNum, secondNum, thirdNum, fourthNum) {
    let maxNumber = Math.max(firstNum, secondNum, thirdNum, fourthNum);
    console.log(maxNumber);
}

compareAndPrintMax (firstNum, secondNum, thirdNum, fourthNum);