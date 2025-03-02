import { Product } from './product'

export type CartItem = Product & { quantity: number }

export interface Order {
  id: number
  userId: number
  subtotal: number
  total: number
  iva: number
  createdAt: string
  updatedAt: string
  orderItems: OrderItem[]
}

export interface OrderItem {
  id: number
  productId: number
  quantity: number
  price: number
  subtotal: number
  createdAt: string
  updatedAt: string
  product?: Product
}
