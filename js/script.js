'use strict';

// 1. function arrShift() > method shift()
const arrInput = [1, 2, 3];

const arrShift = (arr) => {
    const delElement = arr[0];
    for(let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.length -= 1;
    return delElement;
}

const deletedElement = arrShift(arrInput);

console.log(deletedElement);
console.log(arrInput);

