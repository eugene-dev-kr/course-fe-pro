'use strict';


//EXERCISES 1
console.log('1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)');
{
    for (let i = 20; i <= 30; i += 0.5) {
        console.log(i);
    }
}
console.log('');

//EXERCISES 2
console.log('2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.');
for (let i = 10; i <= 100; i += 10) {
    const rateDollar = 27;
    console.log(`${i}$ = ${rateDollar * i} UAH`);
}
console.log('');

//EXERCISES 3
console.log('3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.');
{
    let results = [];
    for (let i = 1; i <= 100; i++) {
        const numberN = 100;
        let trueNumber = i * i;
        if (trueNumber < numberN) {
            results.push(i);
        }
    }
    for (const el in results) {
        console.log(results[el]);
    }
}
console.log('');

//EXERCISES 4
console.log('4. Дане ціле число. З\'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).');
{
    const wholeNumber = 4;
    let divisors = [];
    let notDivisors = [];
    if (wholeNumber <= 1) {
        console.log(`Число ${wholeNumber} не складне і не просте.`);
    }else {
        for (let i = wholeNumber; i >= 1; i--) {
            wholeNumber % i === 0 ? divisors.push(i) : notDivisors.push(i);
        }
        divisors.length === 2 ? console.log(`Число ${wholeNumber} просте.`) : console.log(`Число ${wholeNumber} складне`);
    }
}
console.log('');

//EXERCISES 5
console.log('5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).');
{
    let mainNumber = 3;
    let someNumber = 81;
    let result = null;
    let found = false;

    for (let i = 1; result < someNumber ; i++) {
        result = Math.pow(mainNumber, i);
        if (result === someNumber) {
            console.log(`Число ${someNumber} можна отримати від числа ${mainNumber} в степені ${i}`);
            found = true;
            break;
        }
    }
    if (!found) {
        console.log('Дане число не підходить.');
    }
}


