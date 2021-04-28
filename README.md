# Elevators API [![Build Status](https://travis-ci.com/czaaru/elevators-api.svg?branch=main)](https://travis-ci.com/czaaru/elevators-api)

[Heroku preview](https://czaru-elevators-api.herokuapp.com/elevators)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Core Concepts](#core-concepts)
- [Getting started](#getting-started)
- [API](#api)
- [Continous Integration & Deployment](#continous-integration-&-deployment)

## Core Concepts

Elevators is split into three layers. Service, simulation and state.

- Service layer is a koa app with router and middlewares handling requests.

- Simulation layer handles all business logic of elevators.

  _NOTE_: Elevator algorithm is simple FIFO, but the design should make it easy to improve.

- State layer handles data. It could be replaced with database to keep the data persistent between
  server resets.

## Getting started

Clone repo and go inside it:

```sh
git clone git@github.com:czaaru/elevators-api.git
cd elevators-api
```

Make sure node is running correct version and install dependencies:

```sh
nvm use
yarn
```

Start in dev mode:

```sh
yarn start:watch
```

Run tests in watch mode:

```sh
yarn jest --watch
```

## API

All request return list of elevators following type:

```ts
enum Direction {
  UP = 1,
  DOWN = -1,
  NONE = 0,
}

interface Elevator {
  currentFloor: number;
  destinations: number[];
  direction: Direction;
}

type ResponseBody = Record<number, Elevator>;
```

- `GET /elevators` - return current state of application
- `POST /elevators` - create elevator with id posted in body
- `POST /elevators/pickup` - add floor to destination of one of the elevators
- `PUT /elevators/:id` - update elevator of id with posted body
- `POST /simiulation/step` - do a step in a simulation
- `DELETE /simulation/reset/` - reset elevators to initial state

## Continous Integration & Deployment

This repository uses travis to test and typecheck the application before deploying automatically to
Heroku.
