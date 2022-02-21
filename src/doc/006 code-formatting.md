# 6. Code Formatting

Date: 15 Feb 2022

## Status

Proposed

## Context

Code quality and readability is core to the success in any application. We want this app to be exemplary in code maintainability.

## Decision

We will use [EsLint](https://eslint.org/) and [Prettier]() to manage our code quality. We will use local configs to make sure other developers can follow the same standards. We will either use defaults or airbnb settings.

ESLint defines the code conventions
Prettier performs the auto-formatting based on the ESLint rules

## Consequences
Our code will be written with the same style throughout. The various configs will allow autoamted support in most IDEs.
