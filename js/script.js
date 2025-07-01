'use strict';

const data = {
    id: 1,
    name: "root",
    meta: {
        id: 2,
        parent: {
            id: 3,
            name: "leaf",
        },
    },
    array: [
        { id: 4 },
        { name: "node", children: [{ id: 5 }] },
    ],
};


const findValuesByKey = (obj, key) => {
    let resultArr = [];

    for(let keyInner in obj) {
        if( keyInner === key) resultArr.push(obj[keyInner]);
        if(typeof obj[keyInner] === 'object') {
            resultArr = resultArr.concat(findValuesByKey(obj[keyInner], key));
        }
    }
    return resultArr;
}

console.log(findValuesByKey(data, 'id'));