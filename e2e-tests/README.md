# Cypress E2E tests boilerplate

Cypress E2E tests boilerplate is a starter kit to start work on E2E tests.

## Table of contents

- [Cypress E2E tests boilerplate](#cypress-e2e-tests-boilerplate)
  - [Table of contents](#table-of-contents)
  - [Getting started](#getting-started)
    - [Installing Node.js](#installing-nodejs)
    - [Installing Yarn](#installing-yarn)
    - [Working with the repo locally](#working-with-the-repo-locally)
    - [Run the npm server with below command](#run-the-npm-server-with-below-command)
    - [Run E2E tests](#run-e2e-tests)
  - [Working with environmental variables](#working-with-environmental-variables)

## Getting started

### Installing Node.js

Node.js can be downloaded [here](https://nodejs.org/en/).
Please be sure you have Node.js and npm (node package manager that comes along with Node) in your OS environment path to run from the command-line interface.

### Installing Yarn

To manage dependencies, please use Yarn that can be downloaded [here](https://yarnpkg.com/).

### Working with the repo locally

- navigate to the directory in which you want to clone the repository with SSH

`
git clone git@gitlab.com:merixstudio/pts/cypress-e2e-tests-boilerplate/e2e-tests.git
`

- install all dependencies from the project root (where the `package.json` file is located). It will install all the required modules in the `node_modules` folder. This folder is not versioned and has to be installed manually by everyone working on the project.

```
yarn
```

- copy the `/cypress.env.example.json` and create a new file - name it as `/cypress.env.json` file. Fulfill email, password & username in cypress.env.json e.g.

```

{
  "email": "test@merixstudio.com",
  "password": "test123!",
  "username": "TestUser"
}

```

### Run the npm server with below command

-clone & navigate to the second repository <https://gitlab.com/merixstudio/pts/cypress-e2e-tests-boilerplate/code>

- Run example applicaiton with command (Docker running required):

```

docker compose up --build
```

### Run E2E tests

- run tests from the root directory (E2E Boilerplate repository). Example application running from code repository required.

```
yarn cypress run
```

or execute

```
yarn cypress open
```

to open the Test Runner in an interactive mode.

## Working with environmental variables

If you want to have a separate file for the environment variables that might be different on each machine or don't want them to be revealed in the repo, you should create a `cypress.env.json` file. Instead of the default configuration file (`cypress.json`), the `cypress.env.json` file will overwrite the default configuration file’s conflicting environment variables. Remember, you shouldn't add `cypress.env.json` to your repo; it should be added to the `.gitignore` file instead. Then, the `cypress.env.example.json` file should be created and pushed to the repo, but the values should remain empty strings.
