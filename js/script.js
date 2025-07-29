'use strict';

import Student from './Student.js';

const student1 = new Student('Eugene', 'Martynenko', 1993, [60,70,80,77,85]);
const student2 = new Student('Vlad', 'Bondar', 1987, [100,95,90,90,95]);
const student3 = new Student('Slavic', 'Prokop', 1999, [40,55,66,70,64]);


student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.absent();

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();



console.log(student1);
console.log(`Середній оцінка: ${student1.getAverageMark()}`);
console.log(`Середня відвідуванність: ${student1.getAverageAttendances()}`);
console.log(`Вік: ${student1.getAge()}`);
console.log(student1.summary());


console.log('-----------------------------------------------');

console.log(student2);
console.log(`Середній оцінка: ${student2.getAverageMark()}`);
console.log(`Середня відвідуванність: ${student2.getAverageAttendances()}`);
console.log(`Вік: ${student2.getAge()}`);
console.log(student2.summary());

