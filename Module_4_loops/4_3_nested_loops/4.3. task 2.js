/*
Напишите программу,  которая принимает количество строк X и,
используя вложенные циклы, создает пирамиду из чисел,
 в которой каждая строка содержит числа, соответствующие порядковому номеру строки.
  Sample Input 1:

5

Sample Output 1:

1
22
333
4444
55555
 */

/* let x = Number(prompt("Введите количество строк:")); */

let x = 5;
for (let i = 1; i <= x; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row);
}