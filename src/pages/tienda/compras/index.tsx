import { useEffect, useState } from 'react'
import { Order } from '../../../types'
import { orderService } from '../../../services/order.service'
import Header from './header'
import { Link } from 'react-router'

const MisCompras = () => {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    orderService.getOrders().then((data) => {
      setOrders(data)
    })
  }, [])

  return (
    <>
      <Header />
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Mis Compras</h1>
        <div className='grid grid-cols-1 gap-4'>
          {orders.map((order) => (
            <Link
              to={`/tienda/orden/${order.id}`}
              key={order.id}
              className='p-4 border rounded-lg shadow-md hover:scale-105 transition-transform'
            >
              <p>
                <strong>Subtotal:</strong> ${order.subtotal.toFixed(2)}
              </p>
              <p>
                <strong>Total:</strong> ${order.total.toFixed(2)}
              </p>
              <p>
                <strong>IVA:</strong> ${order.iva.toFixed(2)}
              </p>
              <p>
                <strong>Fecha de la Orden:</strong> {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <p>
                <strong>Número de Productos:</strong> {order.orderItems.reduce((acc, item) => acc + item.quantity, 0)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default MisCompras
