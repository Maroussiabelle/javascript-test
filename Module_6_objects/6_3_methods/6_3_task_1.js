
/*


Создайте объект c единственным методом,
который принимает два числа, введенных пользователем,
 как параметры и выводит остаток от деления первого числа на второе.

Sample Input 1:

5
2

Sample Output 1:

1

Sample Input 2:

9
3

Sample Output 2:

0

Sample Input 3:

7
5

Sample Output 3:

2




 */

const res = {
    displayResidual(num1, num2) {
        console.log(num1 % num2);
    }
};

// let num1 = Number(prompt("Введите первое число"));
// let num2 = Number(prompt("Введите второе число"));

num1 = 5;
num2 = 2;

res.displayResidual(num1, num2);

