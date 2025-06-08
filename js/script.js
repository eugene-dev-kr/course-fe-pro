'use strict';

// exercise 1
{
    let result = '';
    const outputExercise1 = document.getElementById('result1');

    for (let i = 10; i <= 20; i++) {
        result += i;
        if (i < 20) {
            result += `, `;
        }
    }
    outputExercise1.textContent = `${result}`;
}

// exercise 2
{
    let i = 10;
    let result = '';
    const outputExercise2 = document.getElementById('result2');
    let innerResult = null;

    while (i <= 20) {
        innerResult = i;
        innerResult *= i;
        result += innerResult;
        i++; // 11
        if (i <= 20) {
            result += ', ';
        }
    }
    outputExercise2.textContent = `${result}`;
}

// exercise 3
{
    let result = '';
    const outputExercise3 = document.getElementById('result3');
    for (let i = 1; i <= 10; i++) {
        const constNum = 7;
        result += (`${constNum} * ${i} = ${constNum * i}</br>`);
    }
    outputExercise3.innerHTML = `${result}`;
}
// exercise 4
{
    let i = 1;
    let result = 0;
    const outputExercise4 = document.getElementById('result4');

    while (i <= 15) {
        result += i;
        i++;
    }
    outputExercise4.innerText = `${result}`;
}

// exercise 5
{
    let i = 15;
    let result = 1;
    const outputExercise5 = document.getElementById('result5');

    while (i <= 35) {
        result *= i;
        i++;
    }
    outputExercise5.innerText = `${result}`;
}

// exercise 6
{
    let i = 1;
    let result = 0;
    let iterationCounter = 0;
    const outputExercise6 = document.getElementById('result6');

    while (i <= 500) {
        iterationCounter++;
        result += i;
        i++;
    }
    outputExercise6.innerText = `${result / iterationCounter}`;
}

// exercise 7
{
    let i = 30;
    let result = 0;
    const outputExercise7 = document.getElementById('result7');

    while (i <= 80) {
        if (i % 2 === 0) {
            result += i;
        }
        i++;
    }
    outputExercise7.innerText = `${result}`;
}

// exercise 8
{
    let i = 100;
    let result = '';
    const outputExercise8 = document.getElementById('result8');

    while (i <= 200) {
        if (i % 3 === 0) {
            result += `${i} `;
        }
        i++;
    }
    outputExercise8.innerText = `${result}`;
}

// exercise 9, 10, 11

function calcNaturalNumber() {
    // let givenNumber = 12;
    let i = 1;
    let result = '';
    let numberEvenDivisors = [];
    let sumNumberEvenDivisors = null;
    const inputNaturalNumber = document.getElementById('input-natural-number');
    const inputNaturalNumberValue = inputNaturalNumber.value;
    const btnCalcNaturalNumber = document.getElementById('btn-calc-number');
    const outputExercise9_1 = document.getElementById('result9-1');
    const outputExercise9_2 = document.getElementById('result9-2');
    const outputExercise9_3 = document.getElementById('result9-3');


    while (i <= inputNaturalNumberValue) {
        if (inputNaturalNumberValue % i === 0) {
            result += `${i} `;
            if (i % 2 === 0) {
                numberEvenDivisors.push(i);
            }
        }
        i++;
    }
    for (const elem of numberEvenDivisors) {
        sumNumberEvenDivisors += elem;
    }
    outputExercise9_1.innerText = `${result}`;
    outputExercise9_2.innerText = `[${numberEvenDivisors}] - ${numberEvenDivisors.length}`;
    outputExercise9_3.innerText = `${sumNumberEvenDivisors}`;
}

// exercise 12
{
    const outputExercise12 = document.getElementById('result12');
    const resultMultiplyItems = document.getElementsByClassName('multiplication-table__item');

    let results = [];

    for (let i = 1; i <= 10; i++) {
        let tmp = ''
        for (let j = 1; j <= 10; j++) {
            tmp += `${i} * ${j} = ${i * j}</br>`;
        }
        results.push(tmp);
    }
    for (let i = 0; i < resultMultiplyItems.length; i++) {
       resultMultiplyItems[i].innerHTML = results[i];
    }
}