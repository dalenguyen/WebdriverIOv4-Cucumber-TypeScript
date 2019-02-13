# WebdriverIO-v4 Cucumber BDD and TypeScript Boilerplate

This repository shows an example of how to combine WebdriverIO (v4), Cucumber and TypeScript in order to create a robust BDD test cases.

## Fetaures

+ WebdriverIO v4
+ Cucumber v5
+ Chai v4
+ TypeScript v3
+ Allure v2

## Getting Started

Install all packages

```sh
npm install
```

## How to write a test

You just need to create a *.feature file under __./features/test/__ folder. The test is written by using [Gherkin Syntax](https://docs.cucumber.io/gherkin/reference/).

```feature
// myTest.feature

Feature: Is it Friday yet?

   Everybody wants to know when it's Friday

   Scenario: Sunday isn't Friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"
```

## Run one test only

```sh
npm run dev path-to-feature-file
```

## Run all the test

```sh
npm test
```

## Show Allure report

```sh
npm run report
```

## Referece

Thanks to [Amiya Pattnaik](https://github.com/amiya-pattnaik/webdriverIO-with-cucumberBDD)

Read [Cucumber Boilerplate](https://github.com/webdriverio/cucumber-boilerplate) for more examples.