import spawn = require('cross-spawn')
import fs = require('fs')
import got = require('got')
import path = require('path')
import tempy = require('tempy')

export default async () => {
  const tempDir = await tempy.directoryAsync()
  const installFile = path.join(tempDir, 'install.js')

  return new Promise((resolve, reject) => {
    got.stream('todomvc.com')
      .pipe(fs.createWriteStream(installFile))
      .on('error', reject)
      .on('close', () => {
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
  })
}
