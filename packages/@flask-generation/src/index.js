#!/usr/bin/env node

const file_system = require('fs');

const testTemplate_data = `function run() {\n    return true;\n}\n\nexports.run = run;\n`
const configTemplate_data = `/**\n    *This is your very own flask.config.js file, here you can edit specific attributes about your test suite.\n    * For more information about how to use this file, please see the GitHub repository for more advice.\n*/\n\nmodule.exports = {\n    tests_location: "./tests"\n}`

module.exports = {

    /**
        * This function generates a new flask test. 
        * @param {string} name - The name for the new test. 
        * @param {string} folder - The folder to generate the test in.
    */
   generateTest: function(folder, name) {
       file_system.writeFileSync(`${folder}/tests/${name}.test.js`, testTemplate_data, 'utf-8');
    },
    
    /**
        * This fucntion generates a fresh configuration file.
        * @param {string} folder - The folder to generate the config in.
   */
   generateConfig: function(folder) {
        file_system.writeFileSync(`${folder}/flask.config.js`, configTemplate_data, 'utf-8');
   }
}