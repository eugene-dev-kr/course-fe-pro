'use strict';

function fetchUserData(userId) {
    const api = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.4) {
                resolve({id: userId, name: `User ${userId}`});
            }else {
                reject('User not found!');
            }
        }, 2000);
    });

    return api;
}

const userIds = [1, 2, 3, 4, 5];

function getUsersData(userIds) {
    const fullDataUsers = Promise.allSettled(userIds.map((userId) => {
        return fetchUserData(userId);
    }))

    return fullDataUsers
        .then((response) => {
            return response;
        })
        .then((arr) => {
            const success= [];
            const errors  = [];
            arr.forEach((user) => {
                if(user.status === 'fulfilled') success.push(user);
                if(user.status === 'rejected') errors.push(user);
            })
            return {success, errors}
        })
}

getUsersData(userIds).then((result) => {
    console.log("✅ Success:", result.success);
    console.log("❌ Errors:", result.errors);
});