import { api } from '@/lib/axios'
import { CustomerProps } from '@/types/customer'
import { OrderItemProps } from '@/types/order-item'
import { OrderStatusProps } from '@/types/order-status'

export interface PatchDeliverOrderParams {
  orderId: string
}

interface PatchDeliverOrderResponse {
  id: string
  createdAt: string
  status: OrderStatusProps
  totalInCents: number
  customer: CustomerProps
  orderItems: OrderItemProps[]
}

export async function patchDeliverOrder({ orderId }: PatchDeliverOrderParams) {
  await api.patch<PatchDeliverOrderResponse>(`/orders/${orderId}/deliver`)
}
