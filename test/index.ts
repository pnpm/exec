import exec from '@pnpm/exec'
import path = require('path')
import test = require('tape')

const fixtureDir = path.join(__dirname, 'fixture')

test('execPnpm()', async t => {
  try {
    await exec(['install'], {cwd: fixtureDir})
    t.ok(require(`${fixtureDir}/findsDep`)())
    t.end()
  } catch (err) {
    console.error(err)
    t.fail()
  }
})
