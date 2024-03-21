import { api } from '@/lib/axios'
import { CustomerProps } from '@/types/customer'
import { OrderItemProps } from '@/types/order-item'
import { OrderStatusProps } from '@/types/order-status'

export interface PatchCancelOrderParams {
  orderId: string
}

interface PatchCancelOrderResponse {
  id: string
  createdAt: string
  status: OrderStatusProps
  totalInCents: number
  customer: CustomerProps
  orderItems: OrderItemProps[]
}

export async function patchCancelOrder({ orderId }: PatchCancelOrderParams) {
  await api.patch<PatchCancelOrderResponse>(`/orders/${orderId}/cancel`)
}
