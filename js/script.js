'use strict';

const user = {
    name: 'Eugene',
    age: 31,
    isOnline: true,
    friends: ['Vlad', 'Dima', 'Leon'],
    settings: {
        theme: 'light',
        notifications: true
    }
}

const firstFriendName = user.friends[0];
const notificationsEnabled = user.settings.notifications;

console.log(`Ім'я користувача: ${user.name}\nКількість друзів: ${user.friends.length}\nІм'я першого друга: ${firstFriendName}\nТема: ${user.settings.theme}\nСповіщення: ${notificationsEnabled ? 'Увімкнені' : 'Вимкнені'}`);