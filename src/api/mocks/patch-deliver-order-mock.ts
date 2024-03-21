import { http, HttpResponse } from 'msw'

import { PatchDeliverOrderParams } from '../patch-deliver-order'

export const patchDeliverOrderMock = http.patch<
  PatchDeliverOrderParams,
  never,
  never
>('orders/:orderId/deliver', async ({ params }) => {
  if (params.orderId === 'error-order-id') {
    return new HttpResponse(null, { status: 400 })
  } else {
    return new HttpResponse(null, { status: 204 })
  }
})
