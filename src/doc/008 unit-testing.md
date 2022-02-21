# 8. Unit Testing

Date: 15 Feb 2022

## Status

Proposed

## Context

We want our code to be of the highest standard and be free from bugs. Part of our QA process is to write unit tests for every component in the application.

## Decision

We use [ReactTestingLibrary](https://testing-library.com/docs/react-testing-library/intro/) as a lightweight method to unit test our components. At a minimum we test a component to ensure it has the required UI rendered on screen for it's various possible states. Ideally we want exhaustive tests for every permutation of the component.

Where ReactQuery and respoitories are required we create test versions of the repositories with hard coded data and inject those into the application (via the RespoitoryFactory).


## Consequences

Our components each have adequate test coverage so we know all of the 'sunny day' scenarios are covered for it's usage.
