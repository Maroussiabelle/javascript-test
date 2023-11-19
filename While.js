/*


Напишите программу, которая должна выводить каждое число по порядку
 от 1 до заданного пользователем числа (включительно).

 */

let targetNumber = Number(prompt("Введите число, до которого нужно считать:"));
let currentNumber = 1;

while (currentNumber<=targetNumber) {
    console.log(currentNumber);
    currentNumber++;
}

/*
Напишите программу, которая должна выводить каждое четное число по порядку от 0 до заданного пользователем числа (включительно).
Не используйте условные конструкции.
 */

let targetNumber = Number(prompt("Введите число, до которого нужно считать:"));
let currentNumber = 0;

while (currentNumber <= targetNumber) {
    console.log(currentNumber);
    currentNumber += 2;
}


/* Напишите программу,
которая будет запрашивать у пользователя число, а
 затем вычислять его факториал, с помощью цикла while.
 */

let userInput = Number(prompt("Введите число для вычисления факториала:"));
let factorial = 1;
let originalInput = userInput;

while (userInput > 1) {
    factorial *= userInput;
    userInput--;
}

console.log(`Факториал числа ${originalInput} равен ${factorial}`);

/*Напишите программу, которая просит у пользователя число, а затем выводит умножение этого числа на числа от 1 до 10.

 */

let userInput = Number(prompt());
count = 1;
while (count <= 10) {

    console.log(userInput + " * " + count + " = " + userInput*count);

    count = count + 1;

}


/*
Напишите программу, которая запрашивает у пользователя сначала число num1,
 а затем число num2.Если num1 больше num2, программа выводит все числа по порядку от num1 до num2
 включительно от большего к меньшему. Если num1 меньше num2, программа выводит все числа по порядку
 от num1 до num2 включительно от меньшего к большему.

 */


let num1 = Number(prompt());
let num2 = Number(prompt());

if (num1 > num2) {
    while (num1 >= num2) {
        console.log(num1);
        num1 = num1 - 1;
    }
} else {
    while (num1 <= num2) {
        console.log(num1);
        num1 = num1 + 1;
    }
}


/* Напишите программу, которая запрашивает у пользователя сначала число num1, а затем число num2. Если num1 больше num2,
программа выводит все числа, кратные 3, по порядку от num1 до num2 включительно от большего к меньшему.
 Если num1 меньше num2, программа выводит все числа, кратные 3, от num1 до num2 включительно от меньшего к большему.
 */


let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));

if (num1 > num2) {
    while (num1 >= num2) {
        if (num1 % 3 === 0) {
            console.log(num1);
        }
        num1 = num1 - 1;
    }
} else {
    while (num1 <= num2) {
        if (num1 % 3 === 0) {
            console.log(num1);
        }
        num1 = num1 + 1;
    }
}




