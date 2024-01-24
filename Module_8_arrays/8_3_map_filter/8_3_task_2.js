/*


Запросите у пользователя ввод названий столиц через пробел и поместите их в массив.
 Если массив содержит элемент "Андорра-Ла-Велла", выведите массив со столицами,
 которые заканчиваются на букву "а". Если не содержит - выведите массив со столицами, которые заканчиваются на букву "н".

Sample Input 1:

Пекин Берлин Бишкек Алжир Канберра Вашингтон Махачкала

Sample Output 1:

[ 'Пекин', 'Берлин', 'Вашингтон' ]

Sample Input 2:

Пекин Берлин Якутск Алжир Андорра-Ла-Велла Вашингтон Махачкала

Sample Output 2:

[ 'Андорра-Ла-Велла', 'Махачкала' ]


 */

//const capitalsString = prompt("Введите столицы через пробел:");
/*
const capitalsString = "Пекин Берлин Бишкек Алжир Канберра Вашингтон Махачкала";
const capitalsArray = capitalsString.split(", ");

     if (capitalsArray.includes('Андорра-Ла-Велла'){
         for (let k = 0; k < capitalsArray.length; k++) {
             const capitalsA = capitalsArray.filter((capital) => {
                 return capital[capitalsArray.length] === 'а';
                 console.log(capitalsA);
             });
         }


     } else {
         for (let k = 0; k < capitalsArray.length; k++) {
             const capitalsN = capitalsArray.filter((capital) => {
                 return capital[capitalsArray.length] === 'н';
                 console.log(capitalsN);
             });
         }
     }

 */

const capitalsString = prompt("Введите столицы через пробел:");
const capitalsArray = capitalsString.split(" ");

if (capitalsArray.includes('Андорра-Ла-Велла')) {
    const capitalsA = capitalsArray.filter((capital) => {
        return capital[capital.length - 1].toLowerCase() === 'а';
    });
    console.log(capitalsA);
} else {
    const capitalsN = capitalsArray.filter((capital) => {
        return capital[capital.length - 1].toLowerCase() === 'н';
    });
    console.log(capitalsN);
}
