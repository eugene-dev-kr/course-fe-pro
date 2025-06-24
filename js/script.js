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

// 3 function funcFind > method find
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

//4 function funcFindIndex > method findIndex
// const arrInput = ['dog', 'cat', 'horse', 'dog', 'elephant'];
//
// const funcFindIndex = (arr, callBack) => {
//     for(let i = 0; i < arr.length; i++) {
//         if(callBack(arr[i], i, arr)) return i;
//     }
//     return -1;
// }
//
// const resultFindIndex1 = funcFindIndex(arrInput, (item) => item === "dog");
// const resultFindIndex2 = funcFindIndex(arrInput, (item) => item === "cow");
//
// console.log(`${resultFindIndex1}\n${resultFindIndex2}\n`);

// 5 function funcIncludes > method includes
// const arrInput = ['dog', 'cat', 'horse', 'dog', 'elephant'];
//
// const funcIncludes = (arrInput, findEl, startIndex) => {
//     if(startIndex === undefined) startIndex = 0;
//     if(startIndex < 0) {
//         startIndex += arrInput.length;
//         if(startIndex < 0) startIndex = 0;
//     }
//     if(startIndex >= arrInput.length) return false;
//     for(let i = startIndex; i < arrInput.length; i++) {
//         if (findEl === arrInput[i]) return true;
//     }
//     return false;
// }
//
// console.log(funcIncludes(arrInput, 'dog'));
// console.log(funcIncludes(arrInput, 'dog', 1));
// console.log(funcIncludes(arrInput, 'dog', -1));