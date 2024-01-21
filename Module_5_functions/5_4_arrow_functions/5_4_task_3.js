
/*


Напишите программу, которая запрашивает у пользователя число и объявляет стрелочную функцию, которая принимает число в качестве параметра и возвращает куб этого числа.

Sample Input 1:

5

Sample Output 1:

125

Sample Input 2:

3

Sample Output 2:

27

Sample Input 3:

2

Sample Output 3:

8


*/


/*let a = Number(prompt()); */
let b = 2;
let cube = num => Math.pow(num, 3);
console.log(cube(b));