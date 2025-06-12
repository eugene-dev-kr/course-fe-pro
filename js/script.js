'use strict';

function greetUser(name = 'noname') {
    return `Привіт, ${name}!`;
}

console.log(greetUser());
console.log(greetUser('Євген'));