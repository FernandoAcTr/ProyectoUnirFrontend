import { sleep } from '../utils/time'

export class OrderService {
  async payOrder(order: unknown) {
    console.log('Paying order', order)
    await sleep(2000)
  }
}

export const orderService = new OrderService()