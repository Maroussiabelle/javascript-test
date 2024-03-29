/* Напишите программу, которая запрашивает радиус круга у пользователя
и вычисляет его площадь по формуле S = π × r2,
где r — это радиус, π — это константа.
Затем программа возводит площадь в 3-ю степень с помощью функции Math.pow()
 и выводит результат, округленный до ближайшего целого числа.

Sample Input 1:
5

Sample Output 1:
484473

Sample Input 2:
6

Sample Output 2:
1446629
 */

//const radius = Number(prompt());

const radius = 5;
let area = Math.PI * Math.pow(radius, 2);
let result = Math.round(Math.pow(area, 3));
console.log(result);