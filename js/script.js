'use strict';

// averageValue
function getValidNumber(message) {
    const promptValue = prompt(message);

    if (promptValue === null || promptValue.trim() === '') {
        console.log('Prompt is empty');
        return null;
    }

    const num = Number(promptValue);
    return Number.isNaN(num) ? null : num;
}

function averageValue() {
    const num1 = getValidNumber('Enter first number');
    const num2 = getValidNumber('Enter second number');
    const num3 = getValidNumber('Enter third number');

    if (num1 !== null && num2 !== null && num3 !== null) {
        const sum = num1 + num2 + num3;
        alert(`Average value: ${sum / 3}`);
    }else alert('Enter all three numbers');
}

averageValue();
