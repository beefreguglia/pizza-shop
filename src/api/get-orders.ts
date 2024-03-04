import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export type OrderStatusType =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

export interface Order {
  orderId: string
  createdAt: string
  status: OrderStatusType
  customerName: string
  total: number
}

export interface Meta {
  pageIndex: number
  perPage: number
  totalCount: number
}

export interface GetOrdersResponse {
  orders: Order[]
  meta: Meta
}

export async function getOrders({
  pageIndex,
  customerName,
  orderId,
  status,
}: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      customerName,
      orderId,
      status,
    },
  })

  return response.data
}
