const assert =require('node:assert')


//Generate an AssertionError to compare the error message later

const {message } = new assert.AssertionError({
    actual:1,
    expected: 2,
    operator: 'strictEqual'
});


//Verify error output:

try{
    assert.strictEqual(1,2);
} catch(err){
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message);
    assert.strictEqual(err.name, 'AssertionError');
    assert.strictEqual(err.actual, 1);
    assert.strictEqual(err.expected, 2);
    assert.strictEqual(err.code, 'ERR_ASSERTION');
    assert.strictEqual(err.operator, 'strictEqual');
    assert.strictEqual(err.generatedMessage, true);
}