/*
Напишите программу, которая запрашивает у пользователя ввод числа и проверяет,
является ли введенное значение числом. Если введенное значение не является числом,
программа должна вывести сообщение "Вы ввели не число".
В противном случае программа должна вывести сообщение "Вы ввели число".

Sample Input 1:
rear delts

Sample Output 1:
Вы ввели не число

Sample Input 2:
45

Sample Output 2:
Вы ввели число
 */


//const sentence = prompt();
const sentence = "паприка";
isNaN(sentence) ? console.log("Вы ввели не число"): console.log("Вы ввели число");