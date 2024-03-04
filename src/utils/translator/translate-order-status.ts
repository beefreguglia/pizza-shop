import { OrderStatusType } from '@/api/get-orders'

export const orderStatusMap: Record<OrderStatusType, string> = {
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  pending: 'Pendente',
  processing: 'Em preparo',
}
