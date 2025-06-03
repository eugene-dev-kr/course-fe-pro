'use strict';


const user = {
    name: prompt('Enter your name'),
    age: userVerifiedAge(),
    enabledNotif: confirm('Do you want to enable notifications?'),
    Id: 3823873847298374982374238n,
    lastLogin: null,
    nickName: undefined,
    favoriteTech: [
        'React',
        'SCSS',
        'Vue'
    ],
    settings: {
        theme: 'dark',
        autologin: false
    }

}

//Verified user age
function userVerifiedAge() {
    const userAge = Number(prompt('Enter your age'));
    if (userAge > 0 && !Number.isNaN(userAge)) {
        return userAge;
    } else return null;
}

alert(`Привіт, ${user.name}! Ваш ID: ${user.Id}`);
console.log(user);
for (const userKey in user) {
    console.log(`Тип ${userKey}: ${typeof user[userKey]}`);
}
