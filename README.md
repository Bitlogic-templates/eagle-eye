# Eclypsium E2E starter project with Playwright 

A foundational repository designed for creating end-to-end (E2E) tests using Cucumber(7) alongside Playwright and implemented in Typescript.

## The Why
[Read](https://tally-b.medium.com/e2e-testing-with-cucumber-and-playwright-9584d3ef3360) or [watch](https://www.youtube.com/watch?v=PUVFmhYJNJA&list=PLwwCtx3xQxlVMZzS4oi2TafVRngQ1wF_0&index=2). 


## Kudos

This repository is based on the [Cucumber-typescript-starter](https://github.com/hdorgeval/cucumber7-ts-starter/) repo.

## Contents

- TypeScript configuration for creating steps with eslint/typescript and prettier
- Initialization of Playwright browser before executing tests
- Creation of new context and page for each scenario
- Execution of features with the option for video recording
- Report generation with the last successful image included
- Allure reports (TDB)
- Utility functions to aid in step writing (TBD)
- VScode setup for debugging a single feature or a specific scenario (activated when located in the feature file)

## Usage

Create a repo based on this template and start writing your tests.

## To run your tests

`npm run test` or `npx cucumber-js` runs all tests
`npm run test <feature name>` or `npx cucumber-js <feature name>` run the single feature

## Browser selection

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
