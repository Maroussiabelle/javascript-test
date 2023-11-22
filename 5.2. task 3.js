/* Напишите программу, которая запрашивает у пользователя два числа и сравнивает их.
Затем объявите функцию, которая принимает два числа как параметры
и выводит на экран сообщение о том, какое число больше.
 Sample Input 1:

7
6

Sample Output 1:

7 больше, чем 6

 */

/* let firstNum = Number(prompt("Введите первое число:"));
    let secondNum = Number(prompt("Введите второе число:"));
 */
let firstNum = 5;
let secondNum = 5;

function compareNumbers (firstNum, secondNum) {
if (firstNum > secondNum){
    console.log(`${firstNum} больше, чем ${secondNum}`);
} else if (secondNum > firstNum){
    console.log(`${secondNum} больше, чем ${firstNum}`);
} else{
    console.log(`${firstNum} равно ${secondNum}`);
}
}

compareNumbers (firstNum, secondNum);