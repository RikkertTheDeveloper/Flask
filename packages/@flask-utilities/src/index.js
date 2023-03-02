module.exports = {
    /**
        * Assertion function.
        * @param {boolean} condition 
    */
    assert(condition) {
        if (!condition) {
            throw new Error();
        }
    },

    /**
        * This function wraps another function in a try-catch, and returns false on an error. Or the output of the function itself.
        * @param {Function} callback 
        * @returns {any}
    */
    wrap_function(callback) {
        try {
            return callback()
        } catch (_) {
            return false
        }
    }
}