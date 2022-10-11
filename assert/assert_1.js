const assert = require('assert').strict;


//Function call
try{
    assert(1)
    console.log("No Error Occurred")
}catch(error){
    console.log("Error: ", error)
}