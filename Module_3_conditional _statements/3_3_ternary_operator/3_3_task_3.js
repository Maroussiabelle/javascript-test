/*
Создайте программу для определения, является ли день недели выходным.
Получите от пользователя номер дня недели
(целое число от 1 до 7, где 1 - понедельник, 7 - воскресенье).
Используя тернарный оператор, определите, является ли этот день выходным, и выведите соответствующее сообщение:

Если номер дня равен 6 или 7, результат - "Выходной".
В противном случае, результат - "Рабочий день".

Sample Input 1:
2

Sample Output 1:
Рабочий день

Sample Input 2:
7

Sample Output 2:
Выходной
 */

//let day = Number(prompt("Введите целое число от 1 до 7:"));
let day = 6;
let we =
    day >5 && day <=7
        ? "Выходной"
        :"Рабочий день";

console.log(we);










