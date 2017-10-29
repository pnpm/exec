# @pnpm/exec

> Executes pnpm. If pnpm is not installed, installs it first

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/@pnpm/exec.svg)](https://www.npmjs.com/package/@pnpm/exec) [![Build Status](https://img.shields.io/travis/pnpm/exec/master.svg)](https://travis-ci.org/pnpm/exec)
<!--/@-->

## Installation

```sh
npm i -S @pnpm/exec
```

## Usage

```ts
const pnpm = require('./lib').default

pnpm(['install'])
  .then(() => console.log('Done'))
  .catch(console.error.bind(console))
```

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io/)
