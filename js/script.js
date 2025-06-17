'use strict';

const arrInput = [1,2,3,4,5,6,7];


const removeElement = (arr, delNum) => {

    if(delNum > arr.length) {
        return `Такого елементу не існує! Довжина массиву: ${arr.length}.`;
    }else {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] === delNum) {
                arrInput.splice(i, 1);
            }
        }
    }
    return arrInput;
}

console.log(removeElement(arrInput,5));
console.log(removeElement(arrInput,10));
