const assert = require('assert');

describe('Datatype Functionality', () => {
    it('should return the correct type for a number', () => {
        assert.strictEqual(typeof 42, 'number');
    });

    it('should return the correct type for a string', () => {
        assert.strictEqual(typeof 'hello', 'string');
    });

    it('should return the correct type for a boolean', () => {
        assert.strictEqual(typeof true, 'boolean');
    });

    it('should return the correct type for an object', () => {
        assert.strictEqual(typeof {}, 'object');
    });

    it('should return the correct type for an array', () => {
        assert.strictEqual(Array.isArray([]), true);
    });
});