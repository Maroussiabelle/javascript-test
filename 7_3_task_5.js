/*
Напишите программу, которая запрашивает у пользователя ввести строку и символ.
Программа должна подсчитать, сколько раз данный символ встречается в введенной строке, а затем вывести это количество.

Sample Input 1:
Главное быть самими сабими
а

Sample Output 1:
Символ "а" встречается 3 раз(-а)

Sample Input 3:
паприка
г

Sample Output 3:
Символ "г" встречается 0 раз(-а)
*/


//const sentence = prompt();
//const symbol = prompt();


const sentence = "паприка";
const symbol = "а";
let counter = 0;

for (let i = 0; i < sentence.length; i++) {
    if(sentence[i].includes(symbol)){
        counter++;
    }

}
console.log(`Символ "${symbol}" встречается ${counter} раз(-а)`);