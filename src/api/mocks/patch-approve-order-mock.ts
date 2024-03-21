import { http, HttpResponse } from 'msw'

import { PatchApproveOrderParams } from '../patch-approve-order'

export const patchApproveOrderMock = http.patch<
  PatchApproveOrderParams,
  never,
  never
>('orders/:orderId/approve', async ({ params }) => {
  if (params.orderId === 'error-order-id') {
    return new HttpResponse(null, { status: 400 })
  } else {
    return new HttpResponse(null, { status: 204 })
  }
})
