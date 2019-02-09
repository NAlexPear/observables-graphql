# Observable GraphQL
## A view-layer agnostic state-management approach


### Motivation:

Current state-management practices, especially with regards to external data served from GraphQL servers, depend heavily on view-layer integrations at the component level. Many of these integrations eschew some of the lessons learned from Redux, whose greatest contribution to front-end development was the separation of data, action, and presentational components through enforced patterns of reduction made a against single source of truth. This repo attempts to extricate some of the latest GraphQL tooling from those pre-Redux patterns of yore through first-class support for Observables and Redux-constrained actions, reducers, and state.


### Goals:

1. Enforce a single source of truth for all data-driven actions
2. Separate the implementation of actions from presentational components (of any type or flavor)
3. Leverage Observables as first-class mechanisms for representing asynchronous actions
4. Reduce boilerplate around GraphQL-driven network requests where appropriate, while allowing for more expressive control of side-effects that may not be best represented as GraphQL queries or mutations.
5. Extend the built-in caching mechanisms of cutting-edge GraphQL clients to include more fine-grained control over cache invalidation
6. Enable explicit unit testing of every piece of action-driven state without relying on third-party mocks
7. Enforce type-correctness across the entire stack
8. Empower developers to maximize performance of GraphQL applications
7. Do all of the above in a way that's approachable enough for new developers to extend just the parts they need, while being powerful enough for experienced developers tackling edge-cases.


### Tech:

This project leverages the following tools to accomplish the above goals:

1. `apollo-client` for interacting with external data through GraphQL
2. `redux` for all state management
3. `redux-observable` for asynchronous actions
4. `rxjs` for Observable management
5. `typescript` for type support
6. `mocha`/`chai` for unit testing


### Use:

At the moment, this project is meant as a proof-of-concept. After enough dog-fooding, this stack may eventually include scripts for generating the initial boilerplate and project structure.
