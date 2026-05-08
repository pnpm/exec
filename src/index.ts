import { createRequire } from 'node:module'

import commandExists from 'command-exists'
import spawn from 'cross-spawn'

const require = createRequire(import.meta.url)

export type PnpmExecOptions = {
  cwd?: string
  env?: NodeJS.ProcessEnv
}

export async function pnpmExec (args: string[], opts: PnpmExecOptions = {}): Promise<void> {
  const cwd = opts.cwd ?? process.cwd()
  const env = opts.env ?? process.env
  try {
    await commandExists('pnpm')
    await spawnPnpm({ args, cwd, env })
  } catch {
    // pnpm is not on PATH — run the bundled binary instead
    await spawnPnpm({
      args: ['node', require.resolve('pnpm/bin/pnpm.cjs'), ...args],
      cwd,
      env,
    })
  }
}

function spawnPnpm (opts: { args: string[], cwd: string, env: NodeJS.ProcessEnv }): Promise<void> {
  return new Promise((resolve, reject) => {
    const proc = spawn('pnpm', opts.args, {
      cwd: opts.cwd,
      env: opts.env,
      stdio: 'inherit',
    })

    proc.on('error', reject)
    proc.on('close', (code) => {
      if (code != null && code > 0) {
        reject(new Error(`Exit code: ${code}`))
        return
      }
      resolve()
    })
  })
}
