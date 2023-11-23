/*

Напишите программу, которая запрашивает у пользователя три числа и объявляет функцию,
 которая принимает три числа как параметры и возвращает их среднее арифметическое.
  Выведите удвоенное значение среднего арифметического.

Sample Input 1:

1
2
3

Sample Output 1:

4

 */

/*
let A = Number(prompt());
let B = Number(prompt());
let C = Number(prompt());

*/
let A = 1;
let B = 2;
let C = 3;

function average(A, B, C) {
    return (A + B + C) / 3;
}
let result = average(A, B, C);
console.log(result*2);
