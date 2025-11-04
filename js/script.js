'use strict';

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.4) {
                resolve({ id: userId, name: `User ${userId}` });
            } else {
                reject('User not found!');
            }
        }, 2000);
    });
}

const userIds = [1, 2, 3, 4, 5];

async function getUsersData(userIds) {
    const results = await Promise.allSettled(userIds.map(userId => fetchUserData(userId)));

    const success = [];
    const errors = [];

    results.forEach(user => {
        if (user.status === 'fulfilled') success.push(user);
        if (user.status === 'rejected') errors.push(user);
    });

    return { success, errors };
}

(async () => {
    const result = await getUsersData(userIds);
    console.log("✅ Success:", result.success);
    console.log("❌ Errors:", result.errors);
})();
