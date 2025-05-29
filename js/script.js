'use strict';

const userName = 'Eugene'; // User name - String
const userAge = 31; // User age - Number
let userIsVerified = true; // User is Verified - Boolean
const userRegistrationDate = '2025-05-29'; // User date registration - String
const userNumCard = 83475819834958738459334n; // User card number - BigInt
let userPromoCode = null; // User promo code - null, if value is empty
const userBackupName = undefined; // User reserved name - undefined
let userBonusValue = 450; // User bonus value - Number

console.log('---------------Користувач------------------')
console.log(`Користувач: ${userName}, Вік: ${userAge}, Бонусів на рахунку: ${userBonusValue}, Верифікація: ${userIsVerified ? 'Так' : 'Ні'}, Промокод: ${userPromoCode ? userPromoCode : 'Немає'}`);


console.log('---------------Типи змінних----------------')
const varsUserOutput = {
    userName,
    userAge,
    userIsVerified,
    userRegistrationDate,
    userNumCard,
    userPromoCode,
    userBackupName,
    userBonusValue
}

for (const key in varsUserOutput) {
    console.log(`Тип змінної ${key}: ${typeof varsUserOutput[key]}`);
}
