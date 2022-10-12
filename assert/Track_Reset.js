const assert = require('node:assert');

function func() {}
const callsfunc = tracker.calls(func);
callsfunc();

//Tracker was called once
tracker.getCalls(callsfunc).length ===1;

tracker.reset(callsfunc);

tracker.getCalls(callsfunc).length === 0;