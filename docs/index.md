# Fabrico

`Fabrico` is a tool compliant to the `Fabrico Manifest for Enterprise Applications Development`.
This manifest intends to outline a methodology for enterprise applications development based on enhanced Proof of Concepts and code generation.

All `fabrico` projects contain a file in the project root called `.fabrico.yml` that holds metadata required by the fabrico runtime.

```yml
version: 1.0
name: corporate-gateway
description: Corporate Gateway
author: Code Architects
- targets:
    - name: bff-api
      path: ./bff-api
      seed:
        name: 'ca-netcore-microservices'
        version: ^3.2.5
        type: npm
        language: nodejs
    - name: ms-notification
      path: ./ms-notification
      seed:
        name: '@ca-foundation/microservices'
        version: ^3.2.5
        type: npm
        language: netcore
```
