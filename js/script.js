'use strict';

// 1. function arrShift() > method shift()
console.log(`---------------function arrShift() > method shift()----------------`);

const arrInput1 = [1, 2, 3];
console.log('Input array:', arrInput1);

const arrShift = (arr) => {
    const delElement = arr[0];
    for(let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.length -= 1;
    return delElement;
}

const deletedElement = arrShift(arrInput1);

console.log('Deleted element:', deletedElement);
console.log('Changed array:', arrInput1);
console.log('\n');

// 2. function arrReverse() > method reverse()
console.log(`-------------function arrReverse() > method reverse()--------------`);
const arrInput2 = ['Banana', 'Apple', 'Melon', 'Pineapple', 'Strawberry','Tomato', 'Cucumber'];
console.log('Input array:', arrInput2);

const arrReverse = (arr) => {

    for(let i = 0; i < arr.length / 2; i++) {

        let tmpLeftEl = arr[i];
        let tmpRightEl = arr.length - 1 - i;
        arr[i] = arr[tmpRightEl];
        arr[tmpRightEl] = tmpLeftEl;

    }
    return arr;
}

arrReverse(arrInput2);

console.log('Output array:', arrInput2);