/*
Запросите у пользователя произвольные строковые значения через запятую с пробелом
 и поместите их в массив. Выведите получившийся массив.

Sample Input 1:

с, т, ё, п, и, к

Sample Output 1:

[ 'с', 'т', 'ё', 'п', 'и', 'к' ]


 */

//const input = "с, т, ё, п, и, к";
const input = prompt();
const userArray = input.split(", ");
console.log(userArray);