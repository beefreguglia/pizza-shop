import { api } from '@/lib/axios'
import { CustomerProps } from '@/types/customer'
import { OrderItemProps } from '@/types/order-item'
import { OrderStatusProps } from '@/types/order-status'

export interface PatchDispatchOrderParams {
  orderId: string
}

interface PatchDispatchOrderResponse {
  id: string
  createdAt: string
  status: OrderStatusProps
  totalInCents: number
  customer: CustomerProps
  orderItems: OrderItemProps[]
}

export async function patchDispatchOrder({
  orderId,
}: PatchDispatchOrderParams) {
  await api.patch<PatchDispatchOrderResponse>(`/orders/${orderId}/dispatch`)
}
