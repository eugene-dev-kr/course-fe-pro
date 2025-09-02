'use strict';

class View {
    constructor() {
        this.itemsTasks = document.querySelector('[data-items]');
        this.counter = document.querySelector('[data-counter]');
        this.filterBtns = document.querySelectorAll('[data-filter]');
    }

    render(tasks) {
        this.itemsTasks.innerHTML = ''; // очищаємо список
        tasks.forEach(task => this.renderTask(task));
        this.updateCounter(tasks);
    }

    renderTask(task) {
        const li = document.createElement('li');
        li.className = 'todo-list__item';
        li.dataset.id = task.titleID;   // 🔥 важливо!

        const span = document.createElement('span');
        span.textContent = task.titleTask;
        li.append(span);

        const taskBtnContainer = document.createElement('div');
        li.append(taskBtnContainer);

        const delBtn = document.createElement('button');
        delBtn.className = "todo-list__btn-delete";
        delBtn.textContent = 'Delete';
        delBtn.dataset.actionBtn = 'delete';
        delBtn.dataset.id = task.titleID;
        taskBtnContainer.append(delBtn);

        const doneBtn = document.createElement('button');
        doneBtn.className = "todo-list__btn-done";
        doneBtn.textContent = 'Done';
        doneBtn.dataset.actionBtn = 'done';
        doneBtn.dataset.id = task.titleID;
        taskBtnContainer.append(doneBtn);

        // Якщо задача вже виконана → додаємо стиль completed
        if (task.isCompleted) {
            li.classList.add('completed');
        }

        this.itemsTasks.append(li);
    }

    removeTaskFromDOM(id) {
        const taskEl = this.itemsTasks.querySelector(`[data-id="${id}"]`);
        if (taskEl) {
            taskEl.remove();
        }
    }

    toggleTaskView(id, isCompleted) {
        const li = this.itemsTasks.querySelector(`li[data-id="${id}"]`);
        if (li) {
            if (isCompleted) li.classList.add('completed');
            else li.classList.remove('completed');
        }
    }

    updateCounter(tasks) {
        const completed = tasks.filter(t => t.isCompleted).length;
        const active = tasks.length - completed;
        this.counter.textContent = `Active: ${active}, Completed: ${completed}`;
    }

}

export default View;