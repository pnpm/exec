import path = require('path')
import test = require('tape')
import exec from '@pnpm/exec'

const fixtureDir = path.join(__dirname, 'fixture')

test('execPnpm()', async t => {
  exec(['install'], {cwd: fixtureDir})
    .then(() => {
      t.ok(require(`${fixtureDir}/findsDep`)())
      t.end()
    })
    .catch(err => {
      console.error(err)
      t.fail()
    })
})
