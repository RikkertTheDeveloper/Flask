<br>

<h2 align="center">Flask Testing Suite</h2>

<p>
    An extensible testing suite for the JavaScript ecosystem.
</p>

<hr>
<br>

## What is Flask?
Flask is an extensible, lightweight and modular test suite written in JavaScript. It can be used for any project within the JavaScript language.

## How do I use flask?
To use flask, simply create a folder inside of your project named 'tests', and create a .test.js file within this directory.

### The test file should look something like this:
```js 
/**
    * @name first_case.test.js
    * @desc A Flask testing file. 
*/

function run() {
    return true;
}

exports.run = run;
```

## Please note:
If a test case returns as **true**, the test will pass, otherwise it will fail if returned as **undefined or false**