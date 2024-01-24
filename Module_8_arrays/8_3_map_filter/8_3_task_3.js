/*
Запросите у пользователя строковые значения через пробел
и поместите их в массив. Используя метод map, создайте новый массив,
который будет содержать эти значения, написанные заглавными буквами.

Sample Input 1:

do a barrel roll

Sample Output 1:

[ 'DO', 'A', 'BARREL', 'ROLL' ]

 */

const userInput = prompt("Введите слова через пробел:");
const userInputArray = userInput.split(" ");
const UppercaseInput = userInputArray.map((input) => input.toUpperCase());

console.log(UppercaseInput);