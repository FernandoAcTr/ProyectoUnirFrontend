import { useNavigate, useParams } from 'react-router'
import Header from './header'
import { useEffect, useState } from 'react'
import { orderService } from '../../../services/order.service'
import { Order } from '../../../types'

const SuccessPage = () => {
  const navigate = useNavigate()
  const { id: orderId } = useParams()
  const [order, setOrder] = useState<Order>()

  useEffect(() => {
    if (!orderId) {
      navigate('/tienda')
      return
    }
    if (isNaN(Number(orderId))) {
      navigate('/tienda')
      return
    }

    orderService.getOrder(Number(orderId)).then((order) => {
      if (!order) {
        return navigate('/tienda')
      }

      setOrder(order)
    })
  }, [orderId])

  return (
    <div>
      <Header />
      <div className='flex justify-center items-center min-h-[calc(100vh-16rem)] p-4'>
        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl'>
          <p className='text-gray-600 mb-2'>
            Orden #<span className='font-semibold'>{orderId}</span>
          </p>

          <ul className='divide-y divide-gray-200'>
            {order?.orderItems.map((item) => (
              <li key={item.id} className='py-4'>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-gray-800 font-semibold mb-2'>{item.product?.marca?.descripcion}</p>
                    <p className='text-gray-800 max-w-96 mb-1'>{item.product?.descripcion}</p>
                    <p className='text-gray-600 text-sm'>
                      Cantidad: {item.quantity} - Precio unitario: ${item.product?.precio.toFixed(2)}
                    </p>
                  </div>
                  <span className='text-gray-800'>${item.subtotal.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className='mt-6 border-t pt-4'>
            <div className='flex justify-between mb-2'>
              <span className='text-gray-600'>Subtotal:</span>
              <span className='text-gray-800'>${order?.subtotal.toFixed(2)}</span>
            </div>
            <div className='flex justify-between mb-2'>
              <span className='text-gray-600'>IVA (16%):</span>
              <span className='text-gray-800'>${order?.iva.toFixed(2)}</span>
            </div>
            <div className='flex justify-between mt-4 pt-4 border-t'>
              <span className='text-lg font-bold'>Total pagado:</span>
              <span className='text-lg font-bold'>${order?.total.toFixed(2)}</span>
            </div>
            <button
              className='mt-6 w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600'
              onClick={() => {
                navigate(-1)
              }}
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage
