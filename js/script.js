'use strict';

function hoursToSec() {
    // Get string type input value
    const inputHours = prompt('Enter the number of hours:');

    // if input value empty or return null (cancel button) - exit
    if (inputHours === null || inputHours.trim() === "") {
        alert('You do not enter anything');
        return;
    }

    // if input value not empty, convert to number types
    const hours = Number(inputHours);

    // if hours not 0 or < 0 and hours not NaN, convert to seconds
    if (hours > 0 && !Number.isNaN(hours)) {
        const seconds = hours * 3600;
        alert(`${hours} hour's = ${seconds} seconds`);
    } else alert('You did not enter a number', );

}

hoursToSec();