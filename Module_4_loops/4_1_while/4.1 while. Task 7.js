/* Напишите программу, которая будет запрашивать у пользователя целое число N.
Затем программа должна вычислить и вывести результат возведения числа 2 в степень N.
 Реализуйте программу с помощью цикла while.

 */

/*let userInput = Number(prompt()); */
let userInput = 3;
let result = 2;
let count = 1;
while (count<userInput){
    count=count+1;
    result=2*result;

}
console.log(result);