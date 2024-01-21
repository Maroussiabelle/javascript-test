/* Напишите программу, которая запрашивает у пользователя строку,
а затем выводит на экран последние два символа этой строки.
Если строка состоит из меньше, чем 2 символов, выведите сообщение о том, что строка слишком короткая
Sample Input 1:
JavaScript

Sample Output 1:
pt

Sample Input 3:
f

Sample Output 3:
Введенная строка слишком короткая
*/



//const sentence = prompt();
//const sentence = "Javascript";

const sentence = "f";
if (sentence.length >= 2){
    console.log(sentence.slice(-2));
} else{
    console.log("Введенная строка слишком короткая");
}

