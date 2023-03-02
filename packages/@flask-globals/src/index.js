/**
    * Assertion function.
    * @param {boolean} condition 
*/
function assert(condition) {
    if (!condition) {
        throw new Error();
    }
}


module.exports = {
    /**
        * Provides an interface for comparing two numbers.
        * @param {float} number - What is the number we are comparing?
        * @param {float} minimum - What is the minimum amount?
        * @param {float} maximum - What is the max amount?
        * @returns {boolean} - The result of the assertion.
    */
    assertNumberBetween: function(number, minimum, maximum) {
        assert(number >= minimum && number <= maximum);
    },

    /**
        * Provides an interface for comparing two numbers.
        * @param {int} number - What is the number we are comparing?
        * @param {int} minimum - What is the minimum amount?
        * @param {int} maximum - What is the max amount?
        * @returns {boolean} - The result of the assertion.
     */
    assertIntegerBetween: function(integer, minimum, maximum) {
        integer = parseInt(integer);
        assert(integer >= minimum && integer <= maximum);
    },
    
    /**
        * This function matches an integer to a weight using a 'proximity' parameter.
        * @param {int} target 
        * @param {int} match 
        * @param {float} proximity 
        * @returns {boolean} - The result of the assertion.
     */
    assertIntegerCloseTo: function(target, match, proximity) {
        integer = parseInt(target);
        result = integer - match;

        //* Compare leftover number tally to proximity:
        assert(result < (proximity || 0) && result > 0);
    }
}