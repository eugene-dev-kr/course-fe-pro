'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (lengthKey, chars) => {
    let result = '';
    for (let i = 1; i <= lengthKey; i++) {
        let oneRandomNum = Math.floor(Math.random() * chars.length);
        result += chars.charAt(oneRandomNum);
    }
    return result;
}

const key = generateKey(8,characters);

console.log(key);