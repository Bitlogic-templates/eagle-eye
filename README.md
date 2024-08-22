<table>
  <tr>
    <td>
      <img src="https://github.com/bitlogic/cucumber-playwright/assets/8054419/a9216afc-cc95-4385-9151-a7bb550fe932" alt="Logo" width="2000">
    </td>
  </tr>
</table>
<table>
  <tr>
    <td>
      <img src="https://github.com/bitlogic/cucumber-playwright/assets/8054419/fab83fdc-add3-4957-86b5-e728a2e86448" alt="Logo" width="2000">
    </td>
    <td>
      <p> A foundational repository designed for creating end-to-end (E2E) tests using Cucumber(7) alongside Playwright and implemented in TypeScript. This repository serves as a robust starting point for developers looking to implement comprehensive testing strategies. It leverages the power of Cucumber for behavior-driven development (BDD), allowing for clear and understandable test scenarios written in Gherkin. Playwright, with its powerful browser automation capabilities, ensures reliable and efficient test execution across multiple browsers. The use of TypeScript adds type safety and modern JavaScript features, making the development process more efficient and less error-prone. This setup is ideal for teams aiming to enhance their testing frameworks with scalable and maintainable solutions.</p>
    </td>
  </tr>
</table>


## The Why

[Read](https://tally-b.medium.com/e2e-testing-with-cucumber-and-playwright-9584d3ef3360) or [watch](https://www.youtube.com/watch?v=PUVFmhYJNJA&list=PLwwCtx3xQxlVMZzS4oi2TafVRngQ1wF_0&index=2).

## Kudos

This repository is based on the [Cucumber-typescript-starter](https://github.com/hdorgeval/cucumber7-ts-starter/) repo.

## Contents
- Solution diagram
- Setup development environment
- TypeScript configuration for creating steps with eslint/typescript and prettier
- Initialization of Playwright browser before executing tests
- Creation of new context and page for each scenario
- Execution of features with the option for video recording
- Report generation with the last successful image included
- Allure reports (TDB)
- Utility functions to aid in step writing (TBD)
- VScode setup for debugging a single feature or a specific scenario (activated when located in the feature file)

## Solution diagram
<table>
  <tr>
    <td>
      <img src="https://github.com/bitlogic/eagle-eye/assets/8054419/d62ea84c-c283-4c89-b4ee-c389fb00cf12" alt="Logo" width="2000">
    </td>
  </tr>
</table>

## Setup development environment
In the root directory run

```
npm install
npx playwright install
```


## Usage

Create a repo based on this template and start writing your tests.

## To run your tests

`npm run test` or `npx cucumber-js` runs all tests
`npm run only <tag>` to run the single tag

## Browser selection

By default, we will use Chromium. You can define an environment variable called `BROWSER` and set the name of the browser. Available options: chromium, firefox, webkit

On Linux and Mac, you can use:

```
BROWSER=firefox npm run test
or
BROWSER=firefox npx cucumber-js
```

to run all tests using Firefox.

On Windows, you need to use:

```
set BROWSER=firefox
npm run test

```

## Debugging Features

### From CLI

- `npm run debug` - headful mode with APIs enables both APIs and debug options
- `npm run api` - headless mode with debug apis
- `npm run video` - headless mode vith video

## In Visual Studio Code

- Open the feature
- Select the debug options in the VSCode debugger
- Set breakpoints in the code

To stop the feature, you can add the `Then debug` step inside your feature. It will stop your debugger.

## To ignore a scenario

- tag the scenario with `@ignore`

## To check for typescript, linting and gherkin errors

- run the command `npm run build`.

## To view the steps usage

- run the command `npm run steps-usage`.

## To view the html report of the last run

- run the command `npm run report`.

## Sample tests

In this template, two test cases are implemented for reference. You can find them in the features directory.

```
Feature: Login

  Background: Navigation
    Given Go to the login website

  Scenario: Success login
    Then The page title "Test Login | Practice Test Automation"
    When Enter the user name "student"
    And Enter the password "Password123"
    And Click in "Submit"
    Then We see the message "Logged In Successfully"

  Scenario: Wrong password
    Then The page title "Test Login | Practice Test Automation"
    When Enter the user name "student"
    And Enter the password "Password12"
    And Click in "Submit"
    Then We see the and error message
```

Each feature file should include the feature name (Epics or functionalities), a Background statement that sets up the application for the tests, and scenarios in Gherkin format:

- Given **The current state of the system**
- When **The user or system action**
- Then **The expected result**

The implementation of the steps is in the src/steps directory. In this folder, you'll find a file with general implementations like "Click on a button with the text..." and a file for each feature like "Enter the user name".

Support files are located in src/support and contain configurations and implementations such as before steps and before_all setups. If other support scripts not related to Cucumber or Playwright are required, add them to src/utils.

Repository folder structure:

```
.
├── cucumber.mjs -- General cucumber configurations
├── features -- Test cases declaration
│   ├── dashboard.feature
│   └── login.feature
├── reports
│   ├── cucumber-report.json
│   └── report.html
├── src
│   ├── steps -- Tests implementation
│   │   ├── dashboard.steps.ts
│   │   ├── general.steps.ts
│   │   └── login.steps.ts
│   ├── support -- General support files
│   │   ├── common-hooks.ts -- Before and after (Single and all)
│   │   ├── config.ts -- browserOptions and general tests configuration like root URL
│   │   └── custom-world.ts -- Custom context for cucumber
│   └── utils
```

## Feature and scenarios tagging strategy

Each feature should be tagged with the Jira epic ID, and each scenario should be tagged with its corresponding suite (smoke, sanity, regression), the component and the Xray jira ID. Tests in progress should be tagged with @wip and @ignore.

## Docker

The Dockerfile build the base image and add the tests to the Docker image. To build it run:

```
docker build -t e2e .
```

And to run the tests in the docker file run:

```
docker run --rm --env BASE_URL=<BASE_URL> --env EUSERNAME=<user> --env EPASSWORD=<password> -v ./reports:/e2e/reports e2e
```

Note that the tests report will be saved in ./reports folder

## Publish report to slack

Set de environment variable SLACKWH with the URL of slack WebHook and run the command below

```
npx test-results-reporter publish -c config.json
```

## Pretty report

To generate the Pretty report after run the tests run:

```
npm run new-report
```

Or run:
```
npm run report
```

To open it in the browser

## npm run commandas
```
    "api": To run the test with playwright API in debug
    "cucumber-check": To check features
    "debug": To run the test for debug
    "video": To run the test and record video
    "format": To format the files
    "lint": To check the repo with linter
    "only": To run specific tests 
    "smoke": To run smoke suite
    "report": To generate repport and open it in browser
    "test": To run all the tests
    "test:parallel": To run all the tests in parallel
    "docker": To run the tests in docker
    "new-report": To generate Pretty report
```
