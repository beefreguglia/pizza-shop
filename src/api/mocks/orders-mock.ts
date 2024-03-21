import { OrderStatusProps } from '@/types/order-status'

import { Order } from '../get-orders'

const statuses: OrderStatusProps[] = [
  'pending',
  'processing',
  'canceled',
  'delivered',
  'delivering',
]

export const orders: Order[] = Array.from({ length: 60 }).map((_, i) => {
  return {
    orderId: `order-${i + 1}`,
    customerName: `Customer ${i + 1}`,
    createdAt: new Date().toISOString(),
    total: 2400,
    status: statuses[i % 5],
  }
})
