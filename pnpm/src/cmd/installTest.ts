import { docsUrl } from '@pnpm/cli-utils'
import { install } from '@pnpm/plugin-commands-installation'
import { run } from '@pnpm/plugin-commands-script-runners'
import renderHelp from 'render-help'
import { type PnpmOptions } from '../types'

export const cliOptionsTypes = install.cliOptionsTypes

export const rcOptionsTypes = install.rcOptionsTypes

export const commandNames = ['install-test', 'it']

export function help (): string {
  return renderHelp({
    aliases: ['it'],
    description: 'Runs a `pnpm install` followed immediately by a `pnpm test`. It takes exactly the same arguments as `pnpm install`.',
    url: docsUrl('install-test'),
    usages: ['pnpm install-test'],
  })
}

export async function handler (opts: PnpmOptions, params: string[]): Promise<void> {
  await install.handler(opts)
  await run.handler(opts as any, ['test', ...params]) // eslint-disable-line
}
