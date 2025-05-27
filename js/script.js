'use strict';


function helloUser () {
    let userName = prompt('What is your name?');
    userName = userName.trim();
    if(userName) {
        alert(`Hello, ${userName}! How are you?`);
    }else {
        alert('You did not enter a name!');
    }
}

helloUser();