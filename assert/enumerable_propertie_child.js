const assert = require('node:assert');


const obj1= {
    a: {
        b: 1
    }
};

const obj2 = {
    a: {
        b: 2
    }
};

const obj3 = {
    a: {
        b:1
    }
};

const obj4 = Object.create(obj1);


assert.deepEqual(obj1, obj1);
//ok

//Values of b are different:
assert.deepEqual(obj1, obj2);
//AssertionError: {a: {b:1 } } deepEqual {a: { b:2 } }


assert.deepEqual(obj1, obj3);
//ok

//Prototypes are ignored:

assert.deepEqual(obj1, obj4);

//AssertionError {a: {b:1 } } deepEqual {}