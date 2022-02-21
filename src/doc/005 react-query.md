# 5. React Query

Date: 15 Feb 2022

## Status

Proposed

## Context

This app makes various calls to an API endpoint based on user interaction. We are also focused on making sure the user experience is as polished as possible so long wait times aren't satisfactory.

## Decision

We will use [ReactQuery](https://react-query.tanstack.com/) as our query and caching mechanism.

## Consequences

All calls to the API will be wrapped in ReactQuery hooks. We will pre-fetch any data we can and cache anything useful on the front end to make sure the user interactions is slick. We will write our queries into custom hooks as per ReactQuery best practice.
