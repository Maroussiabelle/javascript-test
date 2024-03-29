/*
Запросите у пользователя ввод имен через запятую с пробелом.
 Создайте массив из этих имен и используя метод map, создайте новый массив,
  в котором каждое имя будет иметь префикс "Пока, " добавленный перед именем. Затем выведите получившийся массив.

Sample Input 1:

Миша, Вова, Маша, Гоша, Таня

Sample Output 1:

[ 'Пока, Миша', 'Пока, Вова', 'Пока, Маша', 'Пока, Гоша', 'Пока, Таня' ]


 */


const userInput = prompt("Введите имена через запятую с пробелом:");
const userInputArray = userInput.split(", ");
const prefixInput = userInputArray.map((input) => `Пока, ${(input)}`);

console.log(prefixInput);