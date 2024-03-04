import { Product } from './product'

export interface OrderItemProps {
  id: string
  priceInCents: number
  quantity: number
  product: Product
}
