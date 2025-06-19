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



