
/*


Перед вами объект catalogue, в котором содержится свойство magazine: 5.
Удалите это свойство из объекта и добавьте в объект свойство newspaper с числовым значением,
 которое пользователь вводит самостоятельно. Выведите значение свойства newspaper.

Sample Input 1:

777

Sample Output 1:

777

Sample Input 2:

123

Sample Output 2:

123

Sample Input 3:

6

Sample Output 3:

6


 */


const catalogue = {
    magazine: 5,
};

delete catalogue.magazine;
catalogue.newspaper = 3;

console.log(catalogue.newspaper);

//let newspaper = Number(prompt());


/*
const catalogue = {
    magazine: 5,
}

delete catalogue.magazine;

catalogue.newspaper = Number(prompt("Введите значение для свойства newspaper:"));

console.log(catalogue.newspaper);

*/

