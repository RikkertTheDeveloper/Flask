<h1 align="center"><b>Flask Suite</b></h1>
<p align="center">
    <strong>The extensible JavaScript testing suite.</strong><br>
    Written by <a href="https://www.github.com/rikkertthedeveloper">Rick Arendsen</a>
</p>

<h2>⚗️ What is Flask Suite?</h2>
Flask suite is a lightweight zero-overhead JavaScript testing suite, able to be set up in a matter of minutes. I wrote this package because I wanted to see what the a lightweight testing suite would look like, and how I would be able to build one.

<br>

<b>I have always been a big, big fan of test-driven development, and I would like to recommend all developers, independant or enterprise to integrate it into your workflow. I hope my suite will be of some use by bringing a very flexible yet easy to use API to the TTD field.</b>

<br>

<h2>🏗️ How do I set up Flask Suite?</h2>
<h3><b>- Setting up the package:</b></h3>
To get started, simply run <kbd>npm i flask-suite</kbd> inside of your terminal. This will install all code required to use the suite. When you have ran the command simply run: <kbd>npm exec flask</kbd>, this will run the entry point of the flask suite.

<br>

Upon first running the suite, you will most likely see a message along the lines of: <strong>Flask.js - Successfully generated flask.config.js file.</strong>. When you see this message, you are ready to start setting up your test suite.

<h3><b>- Creating and locating the tests folder.</b></h3>
Once you have set up the package, create your 'tests' folder in any directory you want. Just make sure that the path matches to your <b>flask.config.js</b> file. Otherwise the suite will throw an error. Once you have the tests folder in the right directory and it maps to the correct location from the <b>flask.config.js</b> file. you are ready to start testing.
<br><br>
Run <kbd>npm exec flask</kbd> inside of your terminal, and you will see that the test suite is functioning, now let's start making some tests!
<br><br>

<h3><b>- Making tests</b></h3>
Now that we are able to run the tests, lets start creating our own. Tests in flask-suite run in a way where the output of the test can be dictated by 'true' or 'false', or by using the bult-in assertions, using this method we are able to create some tests, here is an example of a flask-suite test:


```js
function run() {
    const myTestVariable = "Hello, world!";
    return (myTestVariable == "Hello, world!")
}

exports.default = run;
```

Upon running this code, this test will succeed. You can also make use of the built-in <b>@flask/flask-globals</b> library, this libary provides useful assertions to hopefully make your life easier. <b>Please keep in mind that any test which errors in the suite will automatically assume itself as 'failed'</b>

<br>

<h2>👷🏻 Contributing</h2>
If you would like to contribute to the project, or report any issues or bugs or you would like to request a feature you would like to see. Please see the <a href="https://github.com/RikkertTheDeveloper/Flask">GitHub repository</a> for more information.