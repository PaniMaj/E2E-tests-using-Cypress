# Cypress E2E tests boilerplate
Cypress E2E tests boilerplate is a starter kit to start work on E2E tests.

# Table of contents
1. [Getting started](#installation)
    * [Installing Node.js](#node)
    * [Installing Yarn](#yarn)
    * [Working with the repo locally](#locally)
    * [Run the example app dedicated for this boilerplate](#app)
    * [Run E2E tests](#tests)
2. [Working with environmental variables](#variables)
## Getting started<a name="installation"></a>
### Installing Node.js<a name="node"></a>
Node.js can be downloaded [here](https://nodejs.org/en/).
Please be sure you have Node.js and npm (node package manager that comes along with Node) in your OS environment path to run from the command-line interface.
### Installing Yarn<a name="yarn"></a>
To manage dependencies, please use Yarn that can be downloaded [here](https://yarnpkg.com/).

### Working with the repo locally<a name="locally"></a>

- navigate to the directory in which you want to clone the repository with SSH

~~~
git clone git@gitlab.com:merixstudio/pts/cypress-e2e-tests-boilerplate.git
~~~

- install all dependencies from the project root (where the `package.json` file is located). It will install all the required modules in the `node_modules` folder. This folder is not versioned and has to be installed manually by everyone working on the project.
~~~
yarn
~~~

- copy the `/cypress.env.example.json` and create a new file - name it as `/cypress.env.json` file. For more information, check this [section](#variables)

### Run the example conduit app <a name="app"></a>
- this is the app dedicated for E2E boilerplate tests: https://gitlab.com/merixstudio/conduit-app-for-cypress-e2e-tests-boilerplate 
- open this repo and go through steps described there in README.md file

### Run E2E tests<a name="tests"></a>
- run tests from the root directory
~~~
yarn cypress run
~~~

or execute
~~~
yarn cypress open
~~~
to open the Test Runner in an interactive mode.

## Working with environmental variables <a name="variables"></a>
If you want to have a separate file for the environment variables that might be different on each machine or don't want them to be revealed in the repo, you should create a `cypress.env.json` file. Instead of the default configuration file (`cypress.json`), the `cypress.env.json` file will overwrite the default configuration file’s conflicting environment variables. Remember, you shouldn't add `cypress.env.json` to your repo; it should be added to the `.gitignore` file instead. Then, the `cypress.env.example.json` file should be created and pushed to the repo, but the values should remain empty strings.
