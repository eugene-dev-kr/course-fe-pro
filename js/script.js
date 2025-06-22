'use strict';

// 1 function funcIndexOf > method indexOf
const arrInput = ['Phone', 'Email', 'Password', 'Id', 'Name'];

const funcIndexOf = (arrInput, el, startIndex) => {

    if(startIndex === undefined) startIndex = 0;
    if(startIndex >= arrInput.length) return -1;
    if(startIndex < 0) {
        startIndex = arrInput.length + startIndex;
        if(startIndex < 0) return -1;
    }

    for(let i = startIndex; i < arrInput.length; i++) {
        if(el === arrInput[i]) return i;
    }
    return -1;
}

console.log(funcIndexOf(arrInput, 'Email'));
console.log(funcIndexOf(arrInput, 'Email',1));
console.log(funcIndexOf(arrInput, 'Email',2));
console.log(funcIndexOf(arrInput, 'Email',-3));
console.log(funcIndexOf(arrInput, 'Email',7));