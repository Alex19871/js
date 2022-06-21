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
 
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlivesmatter';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));

const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));