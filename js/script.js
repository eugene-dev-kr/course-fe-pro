'use strict';

const btnToggleTheme = document.getElementById('toggle-theme');
const bodyElement = document.querySelector('body');

btnToggleTheme.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme');
})