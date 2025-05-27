'use strict';

function userInterection () {
    let userName = prompt('Enter your name');
    userName = userName.trim();
    const userChoice = confirm('Show Greeting?');
    if (userChoice && userName) {
        alert(`Hello, ${userName}! How are you?`);
    } else if (userChoice) {
        alert('You did not enter a name.');
    }
}

userInterection ();