# E2E tests using Cypress for Conduit Application on Docker

### and beginning of performance testing in Grafana k6

## Description

This repository contains end-to-end (E2E) tests for the Conduit application using the Cypress automation testing tool. The Conduit application is a blogging platform.

The tests are configured to run within a Docker container, providing ease in managing the testing environment.

## Prerequisites

- Docker: Make sure you have Docker installed on your system.
- Cypress: The E2E tests will be performed on a web browser supported by Cypress.

## Running the Tests

1. Clone this repository to your local system:

   ```sh
   git clone https://github.com/PaniMaj/E2E-tests-using-Cypress.git
   ```

2. Navigate to the project directory

3. Start the Conduit application in a Docker container:

   ```sh
   docker-compose up -d
   ```

4. Install Cypress dependencies:

   ```sh
   npm install cypress
   ```

5. Open Cypress and run the tests:
   ```sh
   npx cypress open
   ```

## Project Structure

- `cypress/e2e`: This directory contains Cypress test files written by me.
- `cypress/support`: Contains supporting files for tests, such as custom functions that can be used within tests and page objects.
- `cypress.json`: Cypress configuration file.
- `docker-compose.yml`: Docker Compose configuration to run the Conduit application in a Docker container.

## Tips

- Make sure the Conduit application is accessible on port 3000 before running the tests.
- Check the `cypress.json` file to customize Cypress configuration as per your requirements.

## Author

This project was created by Majka Tuzimek / PaniMaj.
