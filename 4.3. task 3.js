/*
Напишите программу, которая будет принимать от пользователя количество строк Y
и выводить обратную пирамиду из чисел,
где каждая строка содержит числа от номера текущей строки до 1.

Sample Input 1:

4

Sample Output 1:

4 3 2 1
3 2 1
2 1
1

 */

/*let Y = Number(prompt("Введите количество строк:"));

 */

let Y = 4;

for (let i = Y; i >=1; i--) {
    let row = "";
    for (let j = i; j >= 1; j--) {
    row = row + j + ' ';
    }
    console.log(row);
}




