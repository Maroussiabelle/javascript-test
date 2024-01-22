/*
Создайте программу для определения класса подходящего
 автомобиля на основе его длины и объема двигателя.
 Запросите у пользователя сначала длину автомобиля, а затем объем двигателя.
 Используя условные операторы, определите, к какому классу автомобиля он относится:

    Если длина меньше или равно 3.8 м и объем двигателя меньше или равно 1.2 л, результат - "Класс A".
    Если длина меньше или равно 4 м и объем двигателя меньше или равно 1.6 л, результат - "Класс B".
    Если длина меньше или равно 4.5 м и объем двигателя от 1.6 до 2 л включительно, результат - "Класс C".
    В противном случае, результат - "Выберите автомобиль другого класса".

!Названия классов (A, B, C) пишутся на английском языке.

Sample Input 1:
3.9
1.5

Sample Output 1:
Класс B

Sample Input 2:
3.5
1.1

Sample Output 2:
Класс A

Sample Input 3:
4.2
1.7

Sample Output 3:
Класс C

 */

let length = 4.2;
let vol = 1.7;
// let length = Number(prompt());
// let volume - Number(prompt());

if(length<=3.8 && vol <=1.2){
    console.log("Класс A");
} else if (length <=4.0 && vol <= 1.6){
    console.log("Класс B");
} else if (length <=4.4 && vol > 1.6 && vol <=2.0){
    console.log("Класс C");
} else{
    console.log("Выберите автомобиль другого класса");
}