'use strict';

import Student from './Student.js';

const student1 = new Student('Eugene', 'Martynenko', 1993);
const student2 = new Student('Vlad', 'Ivanenkо', 1995);

student1.present(); // заняття 1 — присутній
student1.present(); // заняття 2 — присутній
student1.present();  // заняття 3 — присутній

// Пробуємо поставити оцінки
student1.setMark(90); // заняття 1 — можна, бо був присутній
student1.setMark(95); // заняття 2 — можна, бо був присутній
student1.setMark(85); // заняття 3 — не можна, бо був відсутній


student2.present();  // заняття 1 — присутній
student2.absent();   // заняття 2 — відсутній
student2.present();  // заняття 3 — присутній

student2.setMark(100); // заняття 1 — можна
student2.setMark(50);  // заняття 2 — не можна
student2.setMark(80);  // заняття 3 — можна

console.log('Student 1 summary:', student1.summary());
// { avgMark: 92, avgAttd: 0.67 }

console.log('Student 2 summary:', student2.summary());
// { avgMark: 90, avgAttd: 0.67 }

console.log('Student 1 age:', student1.getAge()); // Наприклад: 2025 - 2000 = 25

console.log(student1.marks);
// [90, 95, empty × 23]

console.log(student1.attendances);
// [true, true, false, empty × 22]