'use strict';

import Model from './Model.js';
import View from './View.js';

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.view.render(this.model.getDataTasks());
        this.formTodo = document.querySelector('[data-form-todo]');
        this.delBtnTask = document.querySelectorAll('[data-action-btn="delete"]');
        this.inputTitle = document.querySelector('[data-input-title]');

        this.formTodo.addEventListener('submit', (event) => {
            event.preventDefault();
            const inputTitleValue = this.inputTitle.value.trim();
            if (inputTitleValue.length === 0) {
                alert('This field must not be empty');
                return;
            }

            const newTask = this.model.addTask(inputTitleValue);
            this.view.renderTask(newTask); // додаємо тільки нову таску
            this.formTodo.reset();
        });
        this.view.itemsTasks.addEventListener('click', (event) => {
            if (event.target.dataset.actionBtn === 'delete') {
                const id = parseInt(event.target.dataset.id);
                this.model.deleteTask(id);
                this.view.render(this.model.getDataTasks());
            }
        });
    }
}

const controller = new Controller();