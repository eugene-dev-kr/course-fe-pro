'use strict';

//apply
const obj = {
    name: 'Eugene'
}

const tmpFunc = function(...args) {
    console.log(this.name, ...args);
}

const apply = function (tmpFunc, context, args) {
    context.tmp = tmpFunc;
    const result = context.tmp(...args);
    delete context.tmp;
    return result;
}

apply(tmpFunc, obj, [1,2]);

