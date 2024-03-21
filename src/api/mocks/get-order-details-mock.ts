import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    createdAt: new Date().toISOString(),
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '99 99999-9999',
    },
    status: 'pending',
    totalInCents: 5578,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 2344,
        product: {
          name: 'Pizza Frango Catupiri',
        },
        quantity: 2,
      },
      {
        id: 'order-item-2',
        priceInCents: 3234,
        product: {
          name: 'Pizza Calamel',
        },
        quantity: 4,
      },
    ],
  })
})
