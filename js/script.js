'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (lengthKey = 8, chars = 'abcdefghijklmnopqrstuvwxyz0123456789') => {
    let result = '';
    for (let i = 1; i <= lengthKey; i++) {
        let oneRandomNum = Math.floor(Math.random() * chars.length);
        result += chars.charAt(oneRandomNum);
    }
    return result;
}

const key = generateKey();
const key2 = generateKey(5, characters);

console.log(key);
console.log(key2);