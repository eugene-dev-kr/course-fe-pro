'use strict';

function userRegistration() {
    const userName = String(prompt(`Введіть своє ім'я:`)).trim();
    const userAge = Number(prompt(`Скільки вам років?`));
    const userId = 4759384574302583457028345348905n;
    let userBonusCode = null;
    const userSecondName = undefined;
    if (userAge <= 0 || Number.isNaN(userAge)) {
        alert('Ваш вік некоректний!');
        return;
    }
    let userParticipation = confirm('Ви хочете прийняти участь в акції?');
    console.log(`Ім'я: ${userName}, тип: ${typeof userName}`);
    console.log(`Вік: ${userAge}, тип: ${typeof userAge}`);
    console.log(`Участь: ${userParticipation}, тип: ${typeof userParticipation}`);
    console.log(`ID: ${userId}, тип: ${typeof userId}`);
    console.log(`Бонуси: ${userBonusCode}, тип: ${typeof userBonusCode}`);
    console.log(`Резервне ім'я: ${userSecondName}, тип: ${typeof userSecondName}`);
    return alert(`Привіт, ${userName ? userName : userSecondName}!\nТвій вік: ${userAge}\nТвій статус: ${userParticipation ? 'участь підтверджено' : 'відмовився'}`);
}

userRegistration();