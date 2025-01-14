import { useNavigate } from 'react-router'
import { useCartContextContext } from '../../../context/cart.context'
import Header from './header'
import { useEffect, useMemo } from 'react'

const SuccessPage = () => {
  const { products, clearCart } = useCartContextContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (products.length === 0) {
      navigate('/tienda')
    }
  }, [])

  const { subtotal, iva, total } = useMemo(() => {
    const subtotal = products.reduce((acc, product) => acc + product.precio * product.quantity, 0)
    const iva = subtotal * 0.16
    const total = subtotal + iva
    return { subtotal, iva, total }
  }, [products])

  return (
    <div>
      <Header />
      <div className='flex justify-center items-center min-h-[calc(100vh-16rem)] p-4'>
        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl'>
          <div className='text-center mb-6'>
            <i className='fas fa-check-circle text-green-500 text-4xl mb-2'></i>
            <h1 className='text-2xl font-bold text-gray-800'>¡Gracias por tu compra!</h1>
          </div>

          <ul className='divide-y divide-gray-200'>
            {products.map((product) => (
              <li key={product.id} className='py-4'>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-gray-800 font-semibold mb-2'>{product.marca?.descripcion}</p>
                    <p className='text-gray-800 max-w-96 mb-1'>{product.descripcion}</p>
                    <p className='text-gray-600 text-sm'>
                      Cantidad: {product.quantity} - Precio unitario: ${product.precio.toFixed(2)}
                    </p>
                  </div>
                  <span className='text-gray-800'>${(product.precio * product.quantity).toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className='mt-6 border-t pt-4'>
            <div className='flex justify-between mb-2'>
              <span className='text-gray-600'>Subtotal:</span>
              <span className='text-gray-800'>${subtotal.toFixed(2)}</span>
            </div>
            <div className='flex justify-between mb-2'>
              <span className='text-gray-600'>IVA (16%):</span>
              <span className='text-gray-800'>${iva.toFixed(2)}</span>
            </div>
            <div className='flex justify-between mt-4 pt-4 border-t'>
              <span className='text-lg font-bold'>Total pagado:</span>
              <span className='text-lg font-bold'>${total.toFixed(2)}</span>
            </div>
            <button
              className='mt-6 w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600'
              onClick={() => {
                clearCart()
                navigate('/tienda')
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
