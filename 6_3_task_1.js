
/*
Перед вами объект catalogue, в котором содержится свойство magazine: 5.
 Измените значение этого свойства на вводимое пользователем числовое значение
  и выведите его, но только если оно не меньше 10 и не больше 50.
  Если введенное значение находится вне данного диапазона,
  сообщите об этом пользователю в заявленном формате.

Sample Input 1:

50

Sample Output 1:

50

Sample Input 2:

9

Sample Output 2:

Введите число в диапазоне от 10 до 50 включительно


 */


const catalogue = {
    magazine: 5,
};

//catalogue.magazine = Number(prompt("Введите значение для свойства magazine (число в диапазоне от 10 до 50 включительно):"));
catalogue.magazine = 9;
if (catalogue.magazine >= 10 && catalogue.magazine <= 50){
    console.log(catalogue.magazine);
} else{
    console.log("Введите число в диапазоне от 10 до 50 включительно");
}



//let newspaper = Number(prompt());


/*
const catalogue = {
    magazine: 5,
}

delete catalogue.magazine;

catalogue.newspaper = Number(prompt("Введите значение для свойства newspaper:"));

console.log(catalogue.newspaper);

*/

