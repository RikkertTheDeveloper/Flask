#!/usr/bin/env node

const file_system = require('fs');
const testTemplate_data = `function run() {\n    return true;\n}\n\nexports.run = run;\n`

module.exports = {

    /**
        * This function generates a new flask test. 
        * @param {string} name - The name for the new test. 
        * @param {string} folder - The folder to generate the test in.
    */
   generateTest: function(folder, name) {
        file_system.writeFileSync(`${folder}/tests/${name}.test.js`, testTemplate_data, 'utf-8');
   }
}