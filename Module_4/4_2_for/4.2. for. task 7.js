/* Напишите программу, которая будет запрашивать у пользователя число X.
Затем программа должна подсчитать количество четных и нечетных чисел
в диапазоне от 1 до X включительно и вывести результат.

Sample Input 1:

7

Sample Output 1:

Количество четных чисел: 3
Количество нечетных чисел: 4

*/
/* Напишите программу, которая будет запрашивать у пользователя число .
Затем программа должна вычислить и вывести сумму всех нечетных чисел от 1 до введенного числа включительно.

 Sample Input 1:
7

Sample Output 1:

Сумма нечетных чисел от 1 до 7 равна 16

 */

/*
let X = Number(prompt("Введите число:"));

*/


const X = 7;
let count1 = 0;
let count2 = 0;
for (let i = 1; i <= X; i++) {
    if ((i%2) !==0){
        count1++;
    }else if ((i%2===0)){
        count2++
    }
}
console.log("Количество четных чисел: " + count2);
console.log("Количество нечетных чисел: " + count1);