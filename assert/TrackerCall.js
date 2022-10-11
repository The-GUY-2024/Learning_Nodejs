const assert = require('node:assert');

//Create call tracket.

const tracker = new assert.CallTracker();

function func() {}

//Return a function that wraps func() that must be called exact times
//Before tracker.verify()

const Callsfunc = tracker.calls(func);