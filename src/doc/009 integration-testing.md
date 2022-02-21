# 9. Integration Testing

Date: 15 Feb 2022

## Status

Proposed

## Context

As part of our QA process we want not only unit testing but system wide end to end testing too. This allows us to make sure that the users are able to achieve what they require in the system.

## Decision

We use [Cypress](https://www.cypress.io/) as our integration testing tool. We aim to have every sunny day scenario tested in our application.

These tests are part of the CI/CD system such that a failing tests fails the builds and cannot make it to production.

## Consequences

Our scenarios cover all of the sunny day paths through the applicaiton. This process is autoamted on CI/CD so failures cannot make it to production. We make the manual testers jobs easier as they can focus on exploratory testing instead of confirmation testing.
