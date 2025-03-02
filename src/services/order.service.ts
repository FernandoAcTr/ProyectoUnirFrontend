import { CartItem, Order } from '../types'
import { httpClient } from '../utils/http_client'

export class OrderService {
  async payOrder(order: CartItem[]): Promise<Order> {
    const items = order.map((item) => ({ productId: item.id, quantity: item.quantity }))

    const { data } = await httpClient.post('/orders', { items })

    return data
  }

  async getOrder(id: number): Promise<Order | null> {
    try {
      const { data } = await httpClient.get(`/orders/${id}`)
      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

export const orderService = new OrderService()
