'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value.trim();
        const description = document.getElementById('description').value.trim();
        const price = parseFloat(document.getElementById('price').value);

        if (!title || isNaN(price)) {
            alert('Будь ласка, заповніть назву і ціну правильно.');
            return;
        }

        const product = {
            id: Date.now(),
            title,
            description,
            price
        };

        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.unshift(product);
        localStorage.setItem('products', JSON.stringify(products));
        form.reset();

        window.location.href = 'list.html';
    });
});
