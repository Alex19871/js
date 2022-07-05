// const stars = 3;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;

// } else if(stars === 3) {
//     price = 50;

// } else if(stars === 4) {
//     price = 70;

// } else if(stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого количества звезд нет')
// }
// console.log(price);


// лучше использовать switch (ТОЛЬКО НА РАВЕНСТВО!!! ЕСЛИ >< ТО IF ELSE!!!)
// (когда одна и та же переменная сравнивается с разными значениями)

// const stars = 3;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такого количества звезд нет')
// }
// console.log(price);


// const option = 2;
// let message = '';

// switch (option) {
//     case 1:
//         message = 'Вы можете забрать товар завтра с 12 в нашем офисе';
//         break;
//     case 2:
//         message = 'Курьер доставит заказ';
//         break;
//     case 3:
//         message = 'Посылка будет отправлена сегодня';
//         break;
    
//     default:
//         message = 'Вам перезвонит менеджер';

// }
// console.log(message);

// --------------------------------------------------------------
/*
 * Цикл for
 */

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// console.log('qweqwe');

/*
 * Pre-increment и Post-increment гадость!!! не пользовать!!!
 */

// for (let i = 9; i < 10; i++) {
//   console.log(i);
// }

// let a = 5;
// const b = ++a;

// console.log(a);
// console.log(b);


/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

//  1 сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 5;
// let totalSalary = 0;

// // // 2 перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//   // 3 сгенерить случайную зп
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );

//   console.log(`ЗП работника номер ${i} - ${salary}`);

//   // 4  прибавить к тоталу
//   totalSalary += salary;
// }

// // // 5 лог
// console.log('totalSalary: ', totalSalary);


/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// //  1 вары
const min = 0;
const max = 10;
let total = 0;

// фор от min до max с шагом в 1
for (let i = min; i <= max; i += 1) {
  // проверяем остаток от деления
  if (i % 2 !== 0) {
    // console.log('Не чётное: ', i);
    continue;
  }

  // пишем в сумму
  console.log('чётное: ', i);
  total += i;

  // аналог +=
  // total = total + i;
}

console.log('total: ', total);