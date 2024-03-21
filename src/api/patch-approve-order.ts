import { api } from '@/lib/axios'
import { CustomerProps } from '@/types/customer'
import { OrderItemProps } from '@/types/order-item'
import { OrderStatusProps } from '@/types/order-status'

export interface PatchApproveOrderParams {
  orderId: string
}

interface PatchApproveOrderResponse {
  id: string
  createdAt: string
  status: OrderStatusProps
  totalInCents: number
  customer: CustomerProps
  orderItems: OrderItemProps[]
}

export async function patchApproveOrder({ orderId }: PatchApproveOrderParams) {
  await api.patch<PatchApproveOrderResponse>(`/orders/${orderId}/approve`)
}
