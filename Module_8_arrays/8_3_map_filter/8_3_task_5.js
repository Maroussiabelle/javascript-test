/*

 */

const cities = ["Москва", "Санкт-Петербург", "Саратов", "Магадан", "Ярославль", "Самара", "Якутск"];

const userCity = prompt("Введите название города:");

const foundCity = cities.find(city => city === userCity);

if (foundCity) {
    const filteredCities = cities.filter(city => city.startsWith(userCity[0].toUpperCase()));
    console.log(`Города, начинающиеся с буквы "${userCity[0].toUpperCase()}": ${filteredCities.join(', ')}`);
} else {
    console.log("Такого города нет в списке");
}
