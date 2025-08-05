'use strict';

//Map
const electronics = { name: 'Electronics' };
const books = { name: 'Books' };

const items = [
    { name: 'Laptop', category: electronics },
    { name: 'Phone', category: electronics },
    { name: 'Book A', category: books },
];

function groupByCategory() {
    const map = new Map();

    for (const item of items) {
        const category = item.category;

        if (!map.has(category)) {
            map.set(category, []); // створюємо порожній масив
        }

        map.get(category).push(item);
    }

    return map;
}

const result1 = groupByCategory(items);
console.log('Map:', result1);


//Set
const obj1 = { name: "a" };
const obj2 = { name: "a" };

const input = [obj1, obj1, obj2, obj2, obj1];

function filterUniqueByReference(arr) {
    return Array.from(new Set(arr));
}

const result2 = filterUniqueByReference(input);
console.log('Set:', result2);


//WeakMap
function createMetadataStorage() {
    const metadata = new WeakMap();

    return {
        getMetaData() {
            console.log(metadata);
        },
        setMetadata(obj, data) {
            metadata.set(obj, data);
        },
        getMetadata(obj) {
            return metadata.get(obj);
        },
        hasMetadata(obj) {
            return metadata.has(obj);
        },
    };
}

const storage = createMetadataStorage();

const user1 = { name: "Анна" };
const user2 = { name: "Олег" };

storage.setMetadata(user1, { role: "admin" });
storage.setMetadata(user2, { role: "user" });

storage.getMetaData();

console.log(storage.getMetadata(user1)); // { role: "admin" }
console.log(storage.hasMetadata(user2)); // true
console.log(storage.hasMetadata({ name: "Анна" })); // false — інший обʼєкт!


//WeakSet
class ObjectTracker {
    constructor() {
        this.processed = new WeakSet();
    }

    mark(obj) {
        this.processed.add(obj);
    }

    wasProcessed(obj) {
        return this.processed.has(obj);
    }
}

const tracker = new ObjectTracker();
const obj = { name: "A" };
console.log(tracker.wasProcessed(obj)); // false
tracker.mark(obj);
console.log(tracker.wasProcessed(obj)); // true