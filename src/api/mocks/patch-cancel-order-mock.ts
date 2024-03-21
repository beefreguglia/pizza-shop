import { http, HttpResponse } from 'msw'

import { PatchCancelOrderParams } from '../patch-cancel-order'

export const patchCancelOrderMock = http.patch<
  PatchCancelOrderParams,
  never,
  never
>('orders/:orderId/cancel', async ({ params }) => {
  if (params.orderId === 'error-order-id') {
    return new HttpResponse(null, { status: 400 })
  } else {
    return new HttpResponse(null, { status: 204 })
  }
})
