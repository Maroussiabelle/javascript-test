//Напишите программу, которая запрашивает ввод строки. Если эта строка содержит символ "д" или символ "н",
// то программа выводит всю строку в верхнем регистре, а иначе выводится строка в нижнем регистре.


const input = prompt();
if (input.includes("д") || input.includes("н")) {
    console.log(input.toUpperCase());
} else {
    console.log(input.toLowerCase());
}