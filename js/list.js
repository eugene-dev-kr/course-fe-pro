'use strict';

function renderProducts() {
    const tbody = document.getElementById('product-list');
    tbody.innerHTML = '';

    let products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach(product => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${product.id || 'N/A'}</td> 
            <td>${product.title}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>
                <button class="btn btn-sm btn-warning edit-btn" data-id="${product.id}">Edit</button>
                <button class="btn btn-sm btn-danger delete-btn" data-id="${product.id}">Delete</button> </td>
        `;

        tbody.appendChild(tr);
    });

    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            localStorage.setItem('selectedProductID', id);
            window.location.href = 'edit.html';
        });
    });

    document.getElementById('product-list').addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const idToDelete = Number(e.target.getAttribute('data-id'));
            products = products.filter(product => product.id !== idToDelete);
            localStorage.setItem('products', JSON.stringify(products));
            renderProducts();
        }
    });
}

renderProducts();