'use strict';

const arrayEx1 = [1, 2, 3, -1, -2, -3];
const arrayEx2 = [-1, -2, -3];
const arrayEx3 = [];

const isPositiveNumber = (arr) => {
    const arrResult = [];

    if(arr.length === 0) return 'Ви передали пустий масив!'

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) arrResult.push(arr[i]);
    }

    return arrResult.length > 0 ? arrResult : null;
}


console.log(isPositiveNumber(arrayEx1)); // [1, 2, 3]
console.log(isPositiveNumber(arrayEx2)); // null
console.log(isPositiveNumber(arrayEx3)); // Ви передали пустий масив!