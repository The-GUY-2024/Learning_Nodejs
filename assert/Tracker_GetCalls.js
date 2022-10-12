
const assert= require('node:assert');

//Create call tracker
const tracker = new assert.CallTracker();


function func() {}
const Callsfunc = tracker.calls(func);

Callsfunc(1,2,3);

assert.deepStrictEqual(tracker.getCalls(Callsfunc),
[{thisArg: this, arguments: [1,2,3] }]);

