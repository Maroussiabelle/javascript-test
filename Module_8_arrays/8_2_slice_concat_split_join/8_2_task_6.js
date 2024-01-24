/*

    Запросите у пользователя произвольные значения через запятую с пробелом и поместите их в массив.
    Далее, запросите у пользователя индексы элементов, которые они хотят вывести и в каком порядке через запятую.
    Выведите через пробел запрошенные элементы массива.

     Sample Input 1:

1, 2, 3
0, 2, 1

Sample Output 1:

1 3 2


 */

// const userInput = prompt("Введите произвольные значения через запятую с пробелом:");
// const indexes = prompt("Введите индексы через запятую, с пробелом ");
const userInput = "1, 2, 3";
const indexes = "0, 2, 1";

const userInputArray = userInput.split(", ");
const indexArray = indexes.split(", ");
const resultArray = [];
for (let k = 0; k < indexArray.length; k++) {
    const currentIndex = +indexArray[k];
    resultArray.push(userInputArray[currentIndex]);
   }

console.log(resultArray.join(" "));