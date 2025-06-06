'use strict';

//The function checks whether the value is a number.
function getValidNumber(inputNum) {
    if (inputNum === null || inputNum.trim() === '') {
        return null;
    }
    const num = Number(inputNum);
    return Number.isNaN(num) ? null : num;
}

function checkEmptyString(inputValue) {
    return inputValue.trim() === '';
}

//Main function user portrait
function userPortrait() {

    // User year born
    const userBornYearInput = prompt('Введіть свій рік народження:');
    let userBornYearOutput = 'Ви не ввели свій рік народження';
    if (userBornYearInput === null) {
        alert('Шкода що ви не захотіли вводити ваш рік народження!');
    } else {
        const userBornYearNum = getValidNumber(userBornYearInput);
        userBornYearNum ? userBornYearOutput = userBornYearNum : userBornYearOutput;
    }


    // User city
    let userCity = prompt('Введіть своє місто:'); // Input city name
    let outputCityStateMain = null; // Main output city or state for main alert
    const outputMessageCity = 'Ви живете у місті '; // Output city
    const outputMessageState = 'Ви живете у столиці ';  // Output state

    if (userCity === null) { // if entered cancel in prompt
        alert('Шкода що ви не захотіли вводити своє місто!');
        outputCityStateMain = 'Ви не ввели своє місто!';
    } else if (checkEmptyString(userCity)) { // if was not be entered anything
        outputCityStateMain = 'Ви не ввели своє місто!';
    } else if (userCity === 'Київ' || userCity === 'Вашингтон' || userCity === 'Лондон') {
        switch (userCity) {
            case 'Київ':
                outputCityStateMain = outputMessageState + 'України';
                break;
            case 'Вашингтон':
                outputCityStateMain = outputMessageState + 'США';
                break;
            case 'Лондон':
                outputCityStateMain = outputMessageState + 'Лондон';
                break;
        }
    } else outputCityStateMain = outputMessageCity + userCity;

    //user favorite sport
    const userSport = prompt('Введіть ваш улюблений спорт [Футбол | Баскетбол | Бокс]:');
    let playersSport = null;
    let outputSport = `Круто! Хочеш стати `;
    const sportPlayers = {
        football: 'Cristiano Ronaldo',
        basketBall: 'LeBron',
        boxing: 'Oleksandr Usyk'
    }

    if (userSport === null) {
        alert('Шкода що ви не захотіли вводити свій улюблений вид спорту!');
        outputSport = 'Ви не вибрали ніякого спорту';
    }else if (checkEmptyString(userSport)) {
        outputSport = 'Ви не вибрали ніякого спорту';
    } else if (userSport === 'Футбол' || userSport === 'Баскетбол' || userSport === 'Бокс') {
        switch (userSport) {
            case 'Футбол':
                playersSport = sportPlayers.football;
                break;
            case 'Баскетбол':
                playersSport = sportPlayers.basketBall;
                break;
            case 'Бокс':
                playersSport = sportPlayers.boxing;
                break;
        }
    }
    alert(`Рік народження: ${userBornYearOutput}\nМісце проживання: ${outputCityStateMain}\nСпорт: ${outputSport}${playersSport || ''}`);
}

userPortrait();