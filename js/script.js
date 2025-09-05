'use strict';

// ВАЖЛИВО: emit має бути асинхронним (через setTimeout), навіть при delay=0.
function createBus() {
    const topics = Object.create(null); // { [topic]: Set<Function> }

    function on(topic, handler) {
        if(!topics[topic]) {
            topics[topic] = [];
        }
        topics[topic].push(handler);
        return () => {
            off(topic, handler);
        }
    }

    function off(topic, handler) {
        topics[topic] = topics[topic].filter(h => h !== handler);
        if(topics[topic].length === 0) delete topics[topic];
    }

    function emit(topic, payload, delay = 0) {
        setTimeout(() => {
            const handlers = topics[topic] ? [...topics[topic]] : [];
            handlers.forEach(h => h(payload));
        }, delay)
    }

    return { on, off, emit };
}

// 1) Базова асинхронність і порядок викликів

// const bus = createBus();
// bus.on('tick',(x)=> console.log('tick:', x));
// bus.emit('tick', { step: 1 }, 0);
// console.log('after schedule');

// 2) Ланцюжок подій у наступному тіку

// const bus = createBus();
// bus.on('tick', (x) => {
//     console.log('handler step:', x.step);
//     if (x.step === 1) {
//         bus.emit('tick', { step: 2 }, 0);
//     }
// });
//
// bus.emit('tick', { step: 1 }, 0);

// Другий виклик приходить пізніше, тому що в функції emit є виконання функції setTimeout, яка є асинхронною,
// тому Event loop бере перший callback → виконує хендлер step 1.
// Усередині хендлера викликається emit (другий) → callback step 2 ставиться в кінець черги.
// Event Loop бере наступний callback → виконує хендлер step 2.

// 3) Відписка між подіями

// const bus = createBus();
// const off = bus.on('news', (x) => {
//     console.log('news:', x);
//     off(); // відписка після першого спрацювання
// });
//
// bus.emit('news', 'A', 0);
// bus.emit('news', 'B', 0);

// Завдання: перевірити, що 'B' більше не доходить до хендлера.

// 4) Кілька підписників і гарантія виклику кожного
// const bus = createBus();
// bus.on('ev', (v) => console.log('h1', v));
// bus.on('ev', (v) => console.log('h2', v));
// bus.on('ev', (v) => console.log('h3', v));
//
// bus.emit('ev', 42, 0);
// Завдання: переконатися, що всі три обробники викликаються у межах одного еміту.

