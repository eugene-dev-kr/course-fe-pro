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
        }
        this.tasks.push(newTask);
        this.taskId++;
        this.saveTask();
        return newTask;
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