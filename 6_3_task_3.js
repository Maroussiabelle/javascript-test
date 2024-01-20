// Перед вами объект, который содержит значение основания.
// Добавьте в объект метод, который принимает от пользователя число Y,
// как параметр и возводит число Y - 2 в степень Y.
// Напишите инструкции ввода числа Y и вывода результата выполнения метода.
/* Sample Input 1:
4
Sample Output 1:
16

Sample Input 2:
5
Sample Output 2:
243
_
Sample Input 3:
3
Sample Output 3:
1
*/
const calculator = {
    base: 0,

    power: function(Y) {
        // Ensure that Y is at least 2, as Y-2 should be a valid base
        if (Y < 2) {
            console.error("Y must be greater than or equal to 2");
            return;
        }

        // Calculate the result using Math.pow
        return Math.pow(this.base, Y);
    }
};

let Y = Number(prompt("Enter a number (Y):"));

if (!isNaN(Y)) {
    calculator.base = Y - 2;
    let result = calculator.power(Y);
    console.log(result);
} else {
    console.error("Invalid input. Please enter a valid number.");
}

