'use strict';

// 1
const arrInput = ['Apple', true, NaN, 0, 1, 4, 6, 3, 'Melon'];

const arithmeticMean = (arr) => {
    let resultNums = 0;
    let resultNumsCount = 0;
    for (const item of arr) {
        if (typeof item === 'number' && !Number.isNaN(item)) {
            resultNums += item;
            resultNumsCount++;
        }
    }
    return resultNumsCount > 0 ? resultNums / resultNumsCount : null;
}

console.log(arithmeticMean(arrInput))

// 2
const doMath = (x, znak, y) => {
    switch (znak) {
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return x / y;
        case '%': return x % y;
        case '^': return x ** y;
    }
}

console.log(doMath(2,'+',5));

// 3
const arrUserFill = () => {
    const arrMainSize = +prompt('Вкажіть розмір головного масиву:')
    const arrInnerSize = +prompt('Вкажіть розмір внутрішніх масивів:')
    let arrMain = [];
    let arrInnerCount = 1;
    for (let i = 0; i < arrMainSize; i++) {
        let arrInner = [];
        for(let j = 0; j < arrInnerSize; j++) {
            const arrInnerValue = +prompt(`Введіть значення для масиву ${arrInnerCount}:` );
            arrInner.push(arrInnerValue);
        }
        arrMain.push(arrInner);
        arrInnerCount++;
    }
    return arrMain;
}

console.log(arrUserFill());

// 4
const delLetter = (world, letter) => {
    const resultWorld = [];
    for(let i = 0; i < world.length; i++) {
        if(!letter.includes(world[i])) resultWorld.push(world[i]);
    }
    return resultWorld.length > 0 ? resultWorld.join('') : null;
}

console.log(delLetter('hello world',['l', 'd'])); // heo wor
console.log(delLetter('hll',['l', 'h'])); // null