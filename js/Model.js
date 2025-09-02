'use strict';

class Model {

    constructor() {
        // Зчитуємо tasks із localStorage, якщо нічого немає – ставимо пустий масив
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        console.log(this.tasks);
        // Визначаємо наступний id
        if (this.tasks.length > 0) {
            const allIds = this.tasks.map(t => t.titleID);
            const maxId = Math.max(...allIds);
            this.taskId = maxId + 1;
        } else {
            this.taskId = 1;
        }
    }

    addTask(task) {
        const newTask = {
            titleID: this.taskId,
            titleTask: task,
            isCompleted: false,
        }
        this.tasks.push(newTask);
        this.taskId++;
        this.saveTask();
        return newTask;
    }

    doneTask(id) {
        const task = this.tasks.find(t => t.titleID === id);
        if (task) task.isCompleted = !task.isCompleted; // перемикаємо true/false
        this.saveTask(); // зберігаємо масив у localStorage
        return task; // повертаємо оновлений об'єкт
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.titleID !== id);
        this.deleteTaskFromStorage(id);
    }

    getDataTasks() {
        return this.tasks;
    }

    saveTask() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    deleteTaskFromStorage(id) {
        let getDataStorage = JSON.parse(localStorage.getItem('tasks'));
        getDataStorage = getDataStorage.filter(task => task.titleID !== id);
        localStorage.setItem('tasks', JSON.stringify(getDataStorage));
    }

}

export default Model;