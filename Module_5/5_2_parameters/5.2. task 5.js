/*

Напишите программу, которая запрашивает у пользователя
два числа и операцию (+, -, * или /). Затем объявите функцию,
которая принимает два числа и операцию как параметры
и выводит на экран результат выполнения выбранной операции.
Если пользователь ввел неверный оператор, программа выводит "Неверный оператор"

Sample Input 1:

5
2
+

Sample Output 1:

7

Sample Input 2:

7
7
/

Sample Output 2:

1

Sample Input 3:

8
5
=

Sample Output 3:

Неверный оператор

Sample Input 4:

8
9
*

Sample Output 4:

72
 */

/* let firstNum = Number(prompt("Введите первое число:"));
    let secondNum = Number(prompt("Введите второе число:"));
    let operator = prompt("Введите оператор: (+, -, * или /)"));

 */
let firstNum = 5;
let secondNum = 2;
let operator = "+";

function countResult(firstNum, secondNum, operator) {
    if (operator !== "=") {
        if (operator === "*") {
            console.log(firstNum * secondNum);
        } else if (operator === "/") {
            console.log(firstNum / secondNum);
        } else if (operator === "+") {
            console.log(firstNum + secondNum);
        } else if (operator === "-") {
            console.log(firstNum - secondNum);
        }
    } else {
        console.log("Неверный оператор");
    }

}

countResult(firstNum, secondNum, operator);