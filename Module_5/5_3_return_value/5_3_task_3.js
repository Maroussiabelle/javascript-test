/*
Напишите программу, которая запрашивает у пользователя два набора
из двух чисел и объявляет две функции: calculateAverage и compareAverages.
Функция calculateAverage принимает два числа как параметры
 и возвращает их среднее арифметическое.
 Функция compareAverages принимает результаты средних значений
  из двух наборов чисел как параметры и выводит сообщение о том,
   какое среднее значение больше.

Sample Input 1:
7
5
9
3

Sample Output 1:
Средние значения наборов равны
 */

function calculateAverage(a, b, c, d) {
    const n1 = (a+b)/2;
    const n2 = (c+d)/2;

    return [n1, n2];
}

function compareAverages([a, b]) {
    if (a > b) {
        console.log("Среднее значение первого набора больше");
    } else if (b > a) {
        console.log("Среднее значение второго набора больше");
    } else if (a === b) {
        console.log("Средние значения наборов равны");
    }
}

/*
let A = Number(prompt());
let B = Number(prompt());
let C = Number(prompt());
let D = Number(prompt());
*/

let A = 7;
let B = 5;
let C = 9;
let D = 3;

compareAverages(calculateAverage(A, B, C, D));


