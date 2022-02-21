# 7. Project Structure

Date: 15 Feb 2022

## Status

Proposed

## Context

We want a well defined and easy to navigate project structure. Specifically we want to avoid lots of folder diving as we work.

## Decision

We use the following struture:

- cypress
    - integration
       TestA.js
- src
    - components
        - componentA
            - ComponentA.tsx
            - ComponentA.test.tsx
    - doc
        ADR1.md
    - entities
        EntityA.ts
    - hooks
        HookA.ts
    - pages
        NextPageA.tsx
    - repositories
        - RespositoryFactory.ts
        - Respository.interfaces.ts
        - RepositoryA.ts
        - TestRepos
            - TestRepositoryA.ts
    - utils
        UtilsA.ts

## Consequences

Everything realting to a component is held near the component for efficient access. We have a well laid out project structure which anyone can understand and work in.
