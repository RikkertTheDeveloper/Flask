#!/usr/bin/env node

/**
    * Flask.js, an exensible testing suite for the JavaScript ecosystem.   
    * @author Rick Arendsen
*/

//* Define used libraries within the application.
const console = require('console');
const file_system = require('fs');

//* Register the text templates used throughout the application:
const textTemplate_startMessage = "\x1b[33m\x1b[0m\x1b[33mFlask.js -\x1b[0m \x1b[35mCommencing Tests\x1b[0m\x1b[30m - %s\n\x1b[0m"
const textTemplate_endMessage = "\n\x1b[33mTests Completed\x1b[0m\x1b[31m - ✖ %d Failed -\x1b[0m\x1b[32m ✔ %d Passed\x1b[0m\x1b[30m - %s\n\x1b[0m"
const textTemplate_errorMessage = "\x1b[29m* \x1b[0m\x1b[30m%s:\x1b[0m \x1b[31m✖ Failed\x1b[0m\x1b[28m - %dms\x1b[0m"
const textTemplate_successMessage = "\x1b[29m* \x1b[0m\x1b[30m%s:\x1b[0m \x1b[32m✔ Passed\x1b[0m\x1b[28m - %dms \x1b[0m"

//* Commence assertions before starting test suite:
const testFolderExists = file_system.existsSync('tests');

//* Read out command line input, and loop over test folder.
const currentSession_dateObject = new Date()
console.log(textTemplate_startMessage, `${currentSession_dateObject.toLocaleDateString()}: ${currentSession_dateObject.toLocaleTimeString()}`)

//* If all assertions pass, start testing the files.
if(testFolderExists) {
    file_system.readdir('tests', function(errorMessage, allTests) {
        let testFiles_failed = 0;
        let testFiles_successful = 0;

        //* Loop through all test files:
        allTests.forEach(function (test, index) {

            //* Format the correct information about the test.
            const currentTest_startTime = new Date(); 
            const currentTest_file = require(`./tests/${test}`);

            //* Execute the test function and gather the time the function took:
            const currentTest_result = currentTest_file.run();
            const currentTest_endTime = new Date() - currentTest_startTime

            //* Compute the result of the test:
            switch (currentTest_result) {
                case true:
                    console.log(textTemplate_successMessage, test, currentTest_endTime)
                    testFiles_successful++;
                    break;
            
                default:
                    console.log(textTemplate_errorMessage, test, currentTest_endTime)
                    testFiles_failed++;
                    break;
            }
        });

        //* Upon suite completion, register what the result was:
        const currentSession_dateObjectEnd = new Date()
        console.log(textTemplate_endMessage, testFiles_failed, testFiles_successful, `${currentSession_dateObjectEnd.toLocaleDateString()}: ${currentSession_dateObjectEnd.toLocaleTimeString()}`)
    }) 
} else {
    console.assert(testFolderExists, "Tests folder was not found within the root directory.")
}