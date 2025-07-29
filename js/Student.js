'use strict';

class Student {
    constructor(firstName, lastName, birthYear, mark = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.mark = mark;
        this.attendances = new Array(25).fill(null);
        this.attendancesStartIndex = 0;
    }

    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    getAverageMark() {
        if (this.mark.length == 0) return 0;
        const averageMark = this.mark.reduce((acc, mark) => {
            acc += mark;
            return acc;
        }, 0)
        return averageMark / this.mark.length;
    }

    getAverageAttendances() {
        const presentAttendances = this.attendances.filter((attendance) => attendance === true);
        const allAttendances = this.attendances.filter((attendance) => attendance !== null);
        return (presentAttendances.length / allAttendances.length).toFixed(1);
    }

    present() {
        if(this.attendances.length <= 25) {
            this.attendances[this.attendancesStartIndex] = true;
            this.attendancesStartIndex++;
        }
    }

    absent() {
        if(this.attendances.length <= 25) {
            this.attendances[this.attendancesStartIndex] = false;
            this.attendancesStartIndex++;
        }
    }

    summary() {
        const avgMark = this.getAverageMark();
        const avgAttend = this.getAverageAttendances();
        if(avgMark >= 90 && avgAttend >= 0.9) {
            return 'Молодець';
        } else if(avgMark < 90 && avgAttend < 0.9) {
            return 'Редиска';
        } else {
            return 'Добре, але можна краще';
        }
    }
}

export default Student;