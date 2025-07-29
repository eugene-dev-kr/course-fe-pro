'use strict';

const form = document.getElementById('edit-form');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const priceInput = document.getElementById('price');
const cancelBtn = document.getElementById('cancel-btn');

const selectedId = localStorage.getItem('selectedProductID');
if (!selectedId) {
    alert('Не вибрано товар для редагування');
    window.location.href = 'list.html';
}

let products = JSON.parse(localStorage.getItem('products')) || [];

let product = products.find(p => p.id == selectedId);
if (!product) {
    alert('Товар не знайдено');
    window.location.href = 'list.html';
}

titleInput.value = product.title;
descriptionInput.value = product.description;
priceInput.value = product.price;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const price = parseFloat(priceInput.value);

    if (!title) {
        alert('Назва обовʼязкова');
        return;
    }
    if (price && price < 0) {
        alert('Ціна не може бути відʼємною');
        return;
    }

    product.title = title;
    product.description = description;
    product.price = isNaN(price) ? 0 : price;

    localStorage.setItem('products', JSON.stringify(products));

    window.location.href = 'list.html';
});

cancelBtn.addEventListener('click', () => {
    window.location.href = 'list.html';
});
