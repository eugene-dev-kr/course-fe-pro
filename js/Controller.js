'use strict';

import Model from './Model.js';
import View from './View.js';

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();

        this.view.render(this.model.getDataTasks());

        this.formTodo = document.querySelector('[data-form-todo]');
        this.inputTitle = document.querySelector('[data-input-title]');

        this.currentFilter = 'all';

        this.formTodo.addEventListener('submit', (event) => {
            event.preventDefault();
            const inputTitleValue = this.inputTitle.value.trim();
            if (inputTitleValue.length === 0) {
                alert('This field must not be empty');
                return;
            }

            const newTask = this.model.addTask(inputTitleValue);
            this.applyFilter();
            this.formTodo.reset();
        });

        this.view.itemsTasks.addEventListener('click', (event) => {
            const id = parseInt(event.target.dataset.id);

            if (event.target.dataset.actionBtn === 'done') {
                const updatedTask = this.model.doneTask(id);
                this.view.toggleTaskView(id, updatedTask.isCompleted);
                this.applyFilter();
            }

            if (event.target.dataset.actionBtn === 'delete') {
                this.model.deleteTask(id);
                this.view.removeTaskFromDOM(id);
                this.applyFilter();
            }
        });

        // 🔹 Слухачі на кнопки фільтра
        this.view.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentFilter = btn.dataset.filter;
                this.applyFilter();
            });
        });
    }

    applyFilter() {
        let tasks = this.model.getDataTasks();

        if (this.currentFilter === 'active') {
            tasks = tasks.filter(t => !t.isCompleted);
        } else if (this.currentFilter === 'completed') {
            tasks = tasks.filter(t => t.isCompleted);
        }

        this.view.render(tasks);
    }
}

const controller = new Controller();
