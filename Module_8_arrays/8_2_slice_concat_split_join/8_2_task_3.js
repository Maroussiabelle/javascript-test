/*
Запросите у пользователя произвольные значения через запятую с пробелом.
 Поместите их в массив и переведите в числовой тип данных. Выведите массив.

Sample Input 1:

1, 2, три, 4, пять

Sample Output 1:

[ 1, 2, 'три', 4, 'пять' ]

 */


//const userInput = prompt("Введите произвольные значения через запятую с пробелом:");
const userInput = "1, 2, три, пять, 9";
const valuesArray = userInput.split(', ');

for (let i = 0; i < valuesArray.length; i++) {
    valuesArray[i] = isNaN(valuesArray[i]) ? valuesArray[i] : +valuesArray[i];
}

console.log(valuesArray);


