#!/usr/bin/env node

const file_system = require('fs');
const testTemplate_data = `/**\n* @name first_case.test.js\n* @desc A Flask testing file.\n*/\n\nfunction run() {\nreturn true;\n}\n\nexports.run = run;\n`

module.exports = {

    /**
        * This function generates a new flask test. 
        * @param {string} name - The name for the new test. 
        * @param {string} folder - The folder to generate the test in.
    */
   generateTest: function(name, folder) {
        file_system.writeFileSync(`${folder}/${name}.test.js`, testTemplate_data, 'utf-8');
   }
}