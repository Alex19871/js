// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

// let power = prompt('Давай число');
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result)


// const max = 20;
// const min = 10;

// const result = Math.round (Math.random() * (max - min) + min);

// console.log(result)


// const message = 'в этой строке 26 символов.';
// console.log(message.length)


// const quantity = 5;
// const orderMsg = `Вы заказываете ${quantity} холодильников`;
// console.log(orderMsg)


//  Нормализация с методом toLowerCase()

// let brand = prompt('Давай бренд');
// brand = brand.toLowerCase();

// console.log(brand);

//  Поиск в строке с методом includes()
 
// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная кампания #fatlivesmatter';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));

// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

// const x = 10 > 5;
// console.log(x)

/*
 * Приведение к булю на примере Boolean(value)
 */

// console.log(Boolean(0));

/*
 * Логическое И (оператор &&)
 * - Запинается на лжи
 * - Возвращает то, на чём запнулось или последний операнд
 */

// console.log(5 && 4 && 7 && 'mango');

/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

// console.log(false || 5 || null || 0);

/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */

// console.log(!5);

// const x1 = 10;
// const x2 = 30;
// const number = 15;
// console.log(`Число ${number} попадает в отрезок до${x1}? `, number < x1);
// console.log(`Число ${number} попадает в отрезок до${x2}? `, number > x2);

// const res = number > x1 && number < x2;
// console.log(`Число ${number} попадает в отрезок от${x1} до${x2}? `, res);

// const res2 = number < x1 || number > x2;
// console.log(`Число ${number} попадает в отрезок до${x1} или после${x2}? `, res2);


/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */

// const sub = 'pro';

// // если пользователь pro или пользователь vip тогда есть доступ

// const canAccessContent = sub === 'pro' || sub === 'vip';
// // true || false => true
// // false || true => true
// // false || false => false

// console.log('Есть доступ к контенту? ', canAccessContent);


/*
 * Оператор ветвеления if
 */

// if (5 > 30) {
//   //  тело
//   console.log('qweqwe');
// }

// console.log('дальше');
/*
 * Оператор ветвления if...else
 */

// if (5 > 30) {
//   console.log('x > y');
// } else {
//   console.log('x < y');
// }

/*
 * Оператор ветвления else...if
 */

// const salary = 2000;

// if (salary <= 500) {
//   console.log('Уровень 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Уровень 2');
// } else if (salary > 1500 && salary < 3000) {
//   console.log('Уровень 3');
// } else {
//   console.log('Уровень 4');
// }

// console.log('qweqwe');

/*
 * Тернарный оператор
 */
const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }

const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

console.log(message);

/*
 * Блочная область видимости переменных
 */

// if (true) {
//   const a = 5;
//   console.log(b);
// }

// if (true) {
//   const b = 10;

//   console.log(a);
// }