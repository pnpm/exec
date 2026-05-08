# @pnpm/exec

> Executes pnpm. If pnpm is not installed, installs it first

[![npm version](https://img.shields.io/npm/v/@pnpm/exec.svg)](https://www.npmjs.com/package/@pnpm/exec)

## Installation

```sh
pnpm add @pnpm/exec
```

## Usage

```ts
import { pnpmExec } from '@pnpm/exec'

await pnpmExec(['install'])
console.log('Done')
```

## API

### `pnpmExec(args, [opts])`

Executes pnpm. If pnpm is not available, installs it first.

- `args` - _string\[]_ - list of string arguments.
- `[opts]` - _object_
  - `cwd` - _string_ - current working directory of the child process.
  - `env` - _object_ - environment key-value pairs. By default the value of the current `process.env`.

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io/)
