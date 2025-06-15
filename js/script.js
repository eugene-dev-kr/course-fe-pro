'use strict';

const padString = (...args) => {
    let isFullArgs = true;
    let result = '';
    let notArgsNums = [];

    for (let i = 0; i <= 2; i++) {
        if (args[i] === undefined) {
            result += `Ви не вказали аргумент: ${i}\n`;
            isFullArgs = false;
        }
    }

    if(isFullArgs) {
        const world = args[0];
        const worldLength = args[1];
        const setSymbol = args[2];
        const leftOrRightSymbol = args[3] !== undefined ? args[3] : true;

        if(world.length === worldLength) {
            result = world;
        } else if(worldLength < world.length) {
            result += world.substring(0, worldLength);
        } else if (worldLength  > world.length) {
            if(leftOrRightSymbol === true) {
                result = world.padEnd(worldLength, setSymbol)
            }
            if(leftOrRightSymbol === false) {
                result = world.padStart(worldLength, setSymbol)
            }
        }
    }

    return result;

}

console.log(padString('Hello',12,'*'));
