import { api } from '@/lib/axios'
import { CustomerProps } from '@/types/customer'
import { OrderItemProps } from '@/types/order-item'
import { OrderStatusProps } from '@/types/order-status'

interface GetOrderDetailsParams {
  orderId: string
}

interface GetOrderDetailsResponse {
  id: string
  createdAt: string
  status: OrderStatusProps
  totalInCents: number
  customer: CustomerProps
  orderItems: OrderItemProps[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`orders/${orderId}`)
  return response.data
}
