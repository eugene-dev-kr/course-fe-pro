'use strict';

class View {
    constructor() {
        this.itemsTasks = document.querySelector('[data-items]');
    }

    render(tasks) {
        this.itemsTasks.innerHTML = ''; // очищаємо список
        tasks.forEach(task => this.renderTask(task));
    }

    renderTask(task) {
        const li = document.createElement('li');
        li.className = 'todo-list__item';

        const span = document.createElement('span');
        span.textContent = task.titleTask;
        li.append(span);

        const delBtn = document.createElement('button');
        delBtn.className = "todo-list__btn-delete";
        delBtn.textContent = 'Delete';
        delBtn.dataset.actionBtn = 'delete';
        delBtn.dataset.id = task.titleID; // привʼязуємо id для видалення
        li.append(delBtn);

        this.itemsTasks.append(li);
    }
}

export default View;