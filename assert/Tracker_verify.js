const assert = require('node:assert');

//Create calls tracker 

const tracker = new assert.CallTracker();

function func() {}



// Returns a function that wraps func() that must be called exact times
// before tracker.verify().
const callsfunc = tracker.calls(func, 2);

callsfunc();

// Will throw an error since callsfunc() was only called once.
tracker.verify();