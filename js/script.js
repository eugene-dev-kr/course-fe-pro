'use strict';

const select = document.getElementById('filter');
const cards = document.querySelectorAll('.card');

select.addEventListener('change', (event) => {
    const selectedValue = event.target.value;

    cards.forEach(card => {
        const category = card.dataset.category;

        if (selectedValue === 'all' || category === selectedValue) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});