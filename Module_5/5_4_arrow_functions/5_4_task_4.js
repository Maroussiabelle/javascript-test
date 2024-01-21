
/*


Напишите программу, которая запрашивает у пользователя площадь основания S и высоту h,
затем позволяет выбрать для какой фигуры найти объем:
для цилиндра или для конуса.
Затем объявляются две стрелочные функции: calculateCylinderVolume и calculateConeVolume,
 каждая из которых принимает параметры фигуры и возвращает объем.

Объем цилиндра = площадь основания * высота
Объем конуса = 1/3 * площадь основания * высота

Sample Input 1:

8
6
цилиндр

Sample Output 1:

Объем цилиндра: 48

Sample Input 2:

9
9
конус

Sample Output 2:

Объем конуса: 27

Sample Input 3:

2
3
конус

Sample Output 3:

Объем конуса: 2





*/

/*
let h = Number(prompt("Введите высоту: "));
let s = Number(prompt("Введите площадь основания: ")); */

/* let h = 8;
let s = 6;
let type = prompt("Введите тип фигуры: цилиндр или конус?");

let calculateCylinderVolume = (s, h) => (s * h);
let calculateConeVolume = (s, h) => (s/3) * h;
type === "цилиндр" ? console.log("Объем цилиндра: " + calculateCylinderVolume(s, h)) : ("Объем конуса: " + calculateConeVolume(s, h));

*/


let h = Number(prompt("Введите высоту: "));
let s = Number(prompt("Введите площадь основания: "));
let type = prompt("Введите тип фигуры: цилиндр или конус?");

let calculateCylinderVolume = (s, h) => s * h;
let calculateConeVolume = (s, h) => (s / 3) * h;

if (type === "цилиндр") {
    console.log("Объем цилиндра: " + calculateCylinderVolume(s, h));
} else if (type === "конус") {
    console.log("Объем конуса: " + calculateConeVolume(s, h));
} else {
    console.log("Некорректный тип фигуры");
}




