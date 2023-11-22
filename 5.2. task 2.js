/*
Напишите программу, которая запрашивает у пользователя число,
а затем объявите функцию, которая принимает это число как параметр
 и выводит его факториал на экран. Вызовите функцию.

Sample Input 1:

5

Sample Output 1:

120

 */

/* let userInput = Number(prompt("Введите число для вычисления факториала:"));

 */
let userInput = 5;

function countFactorial (userInput) {


    let factorial = 1;
    while (userInput > 1) {
        factorial *= userInput;
        userInput--;
    }

    console.log(factorial);

}

countFactorial(userInput);

