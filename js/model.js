'use strict';

class Model {
    constructor() {
        this.tasks = [];
        this.loadFromLocalStorage();
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('tasks');
        this.tasks = data ? JSON.parse(data) : [];
    }

    saveLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    addTask(task) {
        this.tasks.push(task);
        this.saveLocalStorage();
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !==id)
    }

    clearAll() {
        this.tasks = [];
        localStorage.removeItem('tasks');
    }

    getTasks() {
        return this.tasks;
    }
}