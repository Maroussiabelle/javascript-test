/*
Напишите программу, которая проверяет, является ли введенное
пользователем число четным, и выводит сообщение "Число четное",
если число четное или "Число нечетное", если число нечетное.

Sample Input 1:
1
Sample Output 1:
Число нечетное

Sample Input 2:
0
Sample Output 2:
 */

//let a = Number(prompt());
let a = 10;
let b = a%2;
if(b===0){
    console.log("Число четное");
}
else {
    console.log("Число нечетное");

}

