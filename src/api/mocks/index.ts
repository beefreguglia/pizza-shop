import { setupWorker } from 'msw/browser'

import { env } from '@/env'

export const mswWorker = setupWorker()

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await mswWorker.start()
}
