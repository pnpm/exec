import spawn = require('cross-spawn')
import fs = require('fs')
import got = require('got')
import path = require('path')

const installFile = require.resolve('@pnpm/self-installer')

export default async () => {
  await new Promise((resolve, reject) => {
    const proc = spawn('node', [installFile], {
      stdio: 'inherit',
    })

    proc.on('error', reject)

    proc.on('close', (code: number) => {
      if (code > 0) {
        return reject(new Error(`Exit code: ${code}`))
      }
      return resolve()
    })
  })
}
