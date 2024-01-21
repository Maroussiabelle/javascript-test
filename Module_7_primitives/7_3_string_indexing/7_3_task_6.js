/* Напишите программу, которая запрашивает у пользователя строку
и затем выводит эту строку в обратном порядке и в нижнем регистре.
Sample Input 1:
Палка
Sample Output 1:
аклап
 */

//const sentence = prompt();
const sentence = "паприка";

let reversedSentence = "";

for (let i = sentence.length - 1; i >= 0; i--) {
    reversedSentence += sentence[i].toLowerCase();
}
console.log(reversedSentence);
