/*

    Запросите у пользователя произвольные значения через запятую с пробелом и поместите их в массив
    Далее, запросите у пользователя начальный и конечный индексы (включительно) поочерёдно для среза массива.
    Используя метод slice, создайте новый массив, содержащий элементы, указанные пользователем, и выведите элементы массива через запятую с пробелом.

Sample Input 1:

я, ты, мы, он
1
2

Sample Output 1:

ты, мы

Sample Input 2:

Бразилия, Россия, Индия, Китай, Южная Африка
2
3

Sample Output 2:

Индия, Китай
 */

//const userInput = prompt("Введите произвольные значения через запятую с пробелом:");
//const indexes = prompt("Введите начальный и конечный индексы для среза массива:");
/*
const userInput = prompt("Введите любые значения через запятую, с пробелом");
const userInputArrow = userInput.split(", ");

const index1 = Number(prompt("Укажите начальный индекс массива"));
const index2 = Number(prompt("Укажите конечный индекс массива"));

const newArrow = userInputArrow.slice(index1, index2 + 1);
const sentence = newArrow.join(", ");

console.log(sentence);
 */

const userInput = prompt();
const inputArray = userInput.split(", ");
const start = parseInt(prompt());
const end = parseInt(prompt());

const slicedArray = inputArray.slice(start, end + 1);
const result = slicedArray.join(", ");

console.log(result);


