
const assert = require('node:assert');

//Create call tracker 
const tracker = new assert.CallTracker();

function func() {}


//Return a function that wraps func() that must be called exact times
// Before tracker.verify()

const Callsfunc = tracker.calls(func, 2);

//Return an array containing information of callsFunction^
tracker.report();
console.log(tracker);