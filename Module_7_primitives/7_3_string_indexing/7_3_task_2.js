/* Перед вами программа, которая запрашивает у пользователя строку,
 а затем выводит каждый символ этой строки на отдельной строке
в нижнем регистре. Вставьте вместо многоточия верное выражение.
Sample Input 2:
Тесто

Sample Output 2:
т
е
с
т
о
 */



//const sentence = prompt();
const sentence = "testo";
for (let i = 0;i < sentence.length; i++) {
    console.log(sentence[i].toLowerCase());
}

