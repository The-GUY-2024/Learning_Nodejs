const assert = require('node:assert');


//Defining the Tracker for the function call
const tracker = new assert.CallTracker();

//function being define as func
function func() {}

//DEFINING THE FUCTION CALL 
// Callsfunc must be called exacly 1 time before tracker.verify()
const Callsfunc = tracker.calls(func,1);

Callsfunc();

//Calls tracker.verify() and verifies if all tracker.calls()
//Been called exact times.

process.on('exit', () => {
    tracker.verify();
});