/*
Напишите программу, которая запрашивает у пользователя два набора из двух чисел
и объявляет две функции: findMax и compareMax.
Функция findMax принимает два числа как параметры и возвращает большее из них.
Функция compareMax принимает результаты нахождения максимума из двух наборов
 чисел как параметры и выводит сообщение о том, какое число больше.

Sample Input 1:
5
12
60
30
Sample Output 1:
Максимальное число второго набора больше

 */

function findMax(a, b, c, d) {
    const n1 = a > b ? a : b;
    const n2 = c > d ? c : d;

    return [n1, n2];
}

function compareMax([a, b]) {
    if (a > b) {
        console.log("Максимальное число первого набора больше");
    } else if (b > a) {
        console.log("Максимальное число второго набора больше");
    } else if (a === b) {
        console.log("Максимальные числа наборов равны");
    }
}

/*
let A = Number(prompt());
let B = Number(prompt());
let C = Number(prompt());
let D = Number(prompt());
*/


let A = 5;
let B = 60;
let C = 60;
let D = 30;

/* const l = [1, 2, 3];
console.log(l[0]);
console.log(l[1]);
console.log(l[2]);
console.log(l.length);

 */

compareMax(findMax(A, B, C, D));


