'use strict';

//apply
const obj = {
    name: 'Eugene'
}

const tmpFunc1 = function(...args) {
    console.log(this.name, ...args);
}

const apply = function (tmpFunc, context, args) {
    context.tmp = tmpFunc;
    const result = context.tmp(...args);
    delete context.tmp;
    return result;
}

apply(tmpFunc1, obj, [1,2]);

// //bind
const obj2 = {
    name: 'Eugene'
}

const tmpFunc2 = function(...args) {
    return this.name + ' ' + args;
}

const bind = function(tmpFunc, context, ...bindArgs) {
    return function(...callArgs) {
        context.tmp = tmpFunc;
        const result = context.tmp(...bindArgs, ...callArgs);
        delete context.tmp;
        return result;
    }
};

const binded = bind(tmpFunc2, obj2, [1,2])
console.log(binded([5, 6]));

