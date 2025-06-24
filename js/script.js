'use strict';

const nums = [16, -37 , 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

//1. Sum of positive nums
const sumPositiveNums = nums.reduce((acc, item) => {
    if(item > 0) acc += item;
    return acc;
}, 0);
console.log(`1. Сума позитивних чисел: ${sumPositiveNums}`);



//2. Minimal number in array
let minNum = nums[0];
let minNumIndex = 0;
for(let i = 1; i < nums.length; i++) {
    if(nums[i] < minNum) {
        minNum = nums[i];
        minNumIndex = i;
    }
}

console.log(`2. Мінімальний елемент: ${minNum}, Його індекс: ${minNumIndex}`);



//3. Maximal number in array
let maxNum = nums[0];
let maxNumIndex = 0;
for(let i = 1; i < nums.length; i++) {
    if(nums[i] > maxNum) {
        maxNum = nums[i];
        maxNumIndex = i;
    }
}

console.log(`3. Максимальний елемент: ${maxNum}, Його індекс: ${maxNumIndex}`);



//4. Number of negative elements.
const numNegativeEls = nums.reduce((acc, item) => {
    if (item < 0) acc++;
    return acc;
}, 0);

console.log(`4. Кількість негативних елементів: ${numNegativeEls}`);



//5. the number of odd positive elements.
const numOddPositiveEls = nums.reduce((acc, item) => {
    if(item > 0 && item % 2 !== 0) acc++;
    return acc;
}, 0);

console.log(`5. Кількість непарних позитивних елементів: ${numOddPositiveEls}`);



//6. the number of even positive elements
const numEvenPositiveEls = nums.reduce((acc, item) => {
    if(item > 0 && item % 2 == 0) acc++;
    return acc;
}, 0);

console.log(`6. Кількість парних позитивних елементів: ${numEvenPositiveEls}`);



//7. the sum of even positive elements.
const sumEvenPositiveEls = nums.reduce((acc, item) => {
    if(item > 0 && item % 2 == 0) acc += item;
    return acc;
}, 0);

console.log(`7. Cума парних позитивних елементів: ${sumEvenPositiveEls}`);



//8. the sum of odd positive elements.
const sumOddPositiveEls = nums.reduce((acc, item) => {
    if(item > 0 && item % 2 !== 0) acc += item;
    return acc;
}, 0);

console.log(`8. Cума непарних позитивних елементів: ${sumOddPositiveEls}`);


//9. product of positive elements.
const productPositiveEls = nums.reduce((acc, item) => {
    if(item > 0) acc *= item;
    return acc;
}, 1);

console.log(`9. Добуток позитивних елементів: ${productPositiveEls}`);



//10. max num in arr, other = 0
const maxNumInArr = Math.max(...nums);
const maxNum2 = nums.map(item => {
    return maxNumInArr === item ? item : 0;
});

console.log(`10. Максимальне число і обнулення: ${maxNum2}`);