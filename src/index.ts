import commandExists = require('command-exists')
import spawn = require('cross-spawn')

export default async function (
  args: string[],
  opts?: {
    cwd?: string,
  },
) {
  opts = opts || {}
  const cwd = opts.cwd || process.cwd()
  if (!await commandExists('pnpm')) {
    // TODO: if not exists, install it using self-installer
    throw new Error('pnpm has to be installed globally!')
  }
  await pnpmExec({
    args,
    cwd,
  })
}

async function pnpmExec (
  opts: {
    args: string[],
    cwd: string,
  },
) {
  return new Promise((resolve, reject) => {
    const proc = spawn('pnpm', opts.args, {
      cwd: opts.cwd,
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
