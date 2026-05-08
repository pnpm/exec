import { createRequire } from 'node:module'
import path from 'node:path'
import { test } from 'node:test'
import { ok } from 'node:assert/strict'

import { pnpmExec } from '../src/index.ts'

const fixtureDir = path.join(import.meta.dirname, 'fixture')
const require = createRequire(import.meta.url)

test('pnpmExec()', async () => {
  await pnpmExec(['install'], { cwd: fixtureDir })
  const findsDep = require(path.join(fixtureDir, 'findsDep.js')) as () => boolean
  ok(findsDep())
})
