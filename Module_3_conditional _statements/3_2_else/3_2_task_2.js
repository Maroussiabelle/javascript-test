/*
Напишите программу, которая проверяет, является ли введенное пользователем число
 положительным или отрицательным. Если число положительное, программа выводит
 сообщение "Положительное", если отрицательное - выводит "Отрицательное",
  если ноль - выводит "Не положительное и не отрицательное".

Sample Input 1:
9
Sample Output 1:
Положительное

Sample Input 2:
-9
Sample Output 2:
Отрицательное

Sample Input 3:
0
Sample Output 3:
Не положительное и не отрицательное
 */


//let userInput = Number(prompt());
let userInput = -67;

if (userInput > 0) {
    console.log("Положительное");
}

else if (userInput < 0){
    console.log("Отрицательное");
}

else if (userInput === 0){
    console.log("Не положительное и не отрицательное");
}