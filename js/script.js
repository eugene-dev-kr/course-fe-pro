'use strict';

// 1 function funcIndexOf > method indexOf
// const arrInput = ['Phone', 'Email', 'Password', 'Id', 'Name'];
//
// const funcIndexOf = (arrInput, el, startIndex) => {
//
//     if(startIndex === undefined) startIndex = 0;
//     if(startIndex >= arrInput.length) return -1;
//     if(startIndex < 0) {
//         startIndex = arrInput.length + startIndex;
//         if(startIndex < 0) return -1;
//     }
//
//     for(let i = startIndex; i < arrInput.length; i++) {
//         if(el === arrInput[i]) return i;
//     }
//     return -1;
// }
//
// console.log(funcIndexOf(arrInput, 'Email'));
// console.log(funcIndexOf(arrInput, 'Email',1));
// console.log(funcIndexOf(arrInput, 'Email',2));
// console.log(funcIndexOf(arrInput, 'Email',-3));
// console.log(funcIndexOf(arrInput, 'Email',7));


// 2 function funcLastIndexOf > method lastIndexOf
// const arrInput = ['dog', 'cat', 'horse', 'dog', 'elephant'];
//
// const funcLastIndexOf = (arrInput, el, startIndex) => {
//     if(startIndex === undefined ) startIndex = arrInput.length - 1;
//     if(startIndex >= arrInput.length) startIndex = arrInput.length - 1;
//     if(startIndex < 0) {
//         startIndex = arrInput.length + startIndex;
//         if (startIndex < 0) return -1;
//     }
//     for(let i = startIndex; i >= 0; i--) {
//         if(el === arrInput[i]) {
//             return i;
//         }
//     }
//     return -1;
// }
//
// console.log(funcLastIndexOf(arrInput, 'dog'));
// console.log(funcLastIndexOf(arrInput, 'dog', 2));
// console.log(funcLastIndexOf(arrInput, 'dog', 6));
// console.log(funcLastIndexOf(arrInput, 'dog', -15));

// 3 function funcLastIndexOf > method lastIndexOf
// const animals = ['dog', 'cat', 'horse', 'elephant'];
//
// const funcFind = (arr, callBack) => {
//     for(let i = 0; i < arr.length; i++) {
//         if(callBack(arr[i], i, arr)) return arr[i];
//     }
//     return undefined;
// }
//
// const resultFind1 = funcFind(animals, (item) => item === "dog");
// const resultFind2 = funcFind(animals, (item, index) => index === 2);
// const resultFind3 = funcFind(animals, (item) => item === "cow");
//
// console.log(`${resultFind1}\n${resultFind2}\n${resultFind3}\n`);