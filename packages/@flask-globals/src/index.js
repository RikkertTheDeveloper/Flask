module.exports = {
    /**
        * Provides an interface for comparing two numbers.
        * @param {float} number - What is the number we are comparing?
        * @param {float} minimum - What is the minimum amount?
        * @param {float} maximum - What is the max amount?
        * @returns {boolean} - The result of the assertion.
    */
    assertNumberBetween: function(number, minimum, maximum) {
        return(number >= minimum && number <= maximum);
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
        return(integer >= minimum && integer <= maximum);
    }
}