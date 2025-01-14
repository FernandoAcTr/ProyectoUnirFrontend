import { useCartContextContext } from '../../../context/cart.context'
import { Link, useNavigate } from 'react-router'
import Header from './header'
import { formatMoney } from '../../../utils/text'
import { orderService } from '../../../services/order.service'
import { useState } from 'react'
import { Spinner } from '../../../components'

const PagarPage = () => {
  const { products, removeProduct, addProduct, closeCart } = useCartContextContext()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const subtotal = products.reduce((acc, product) => acc + product.precio * product.quantity, 0)
  const iva = subtotal * 0.16
  const total = subtotal + iva

  const handlePay = async () => {
    setIsLoading(true)
    await orderService.payOrder(products)
    navigate(`/tienda/orden/${Math.floor(Math.random() * 1000)}/success`)
    closeCart()
    setIsLoading(false)
  }

  if (products.length === 0) {
    return (
      <div className=''>
        <Header />
        <div className='flex items-center justify-center h-[calc(100vh-27rem)] mx-auto px-4 py-16'>
          <div className='text-center'>
            <i className='fas fa-shopping-cart text-6xl text-gray-400 mb-4' />
            <h2 className='text-3xl font-bold text-gray-700 mb-4'>Tu carrito está vacío</h2>
            <p className='text-gray-600 mb-8'>¿No sabes qué comprar? ¡Miles de productos te esperan!</p>
            <Link
              to='/tienda'
              className='inline-flex items-center px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors'
            >
              <i className='fas fa-store mr-2' />
              Ir a la tienda
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className='container mx-auto px-4 py-8  min-h-[calc(100vh-27rem)]'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Lista de productos */}
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-xl font-bold mb-6 flex items-center'>
                <i className='fas fa-shopping-cart mr-2' />
                Productos en tu carrito
              </h2>
              <div className='space-y-4'>
                {products.map((product) => (
                  <div key={product.id} className='border-b pb-4'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-24 h-24'>
                        <img
                          src={product.details?.image?.foto_url || '/placeholder.png'}
                          alt={product.descripcion}
                          className='w-full h-full object-contain rounded'
                        />
                      </div>
                      <div className='flex-1'>
                        <h3 className='font-semibold'>{product.descripcion}</h3>
                        <p className='text-gray-600'>Marca: {product.marca?.descripcion}</p>
                        <div className='flex items-center gap-2'>
                          <p className='text-gray-600'>Cantidad: {product.quantity}</p>
                          <button className='p-1 text-xs bg-gray-100 rounded' onClick={() => addProduct(product)}>
                            <i className='fas fa-plus'></i>
                          </button>
                          <button className='p-1 text-xs bg-gray-100 rounded' onClick={() => removeProduct(product)}>
                            <i className='fas fa-minus'></i>
                          </button>
                        </div>
                      </div>
                      <div className='text-right '>
                        <p className='font-bold text-lg'>{formatMoney(product.precio * product.quantity)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resumen de pago */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-xl font-bold mb-6 flex items-center'>
                <i className='fas fa-credit-card mr-2' />
                Resumen de pago
              </h2>
              <div className='space-y-4'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Subtotal:</span>
                  <span>{formatMoney(subtotal)}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>IVA (16%):</span>
                  <span>{formatMoney(iva)}</span>
                </div>
                <div className='border-t pt-4'>
                  <div className='flex justify-between font-bold text-lg'>
                    <span>Total a pagar:</span>
                    <span>{formatMoney(total)}</span>
                  </div>
                </div>

                {isLoading ? (
                  <button
                    className='w-full bg-gray-400 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2'
                    disabled
                  >
                    Procesando pago <Spinner />
                  </button>
                ) : (
                  <button
                    className='w-full bg-accent-600 text-white py-3 px-4 rounded-lg hover:bg-accent-700 transition-colors'
                    onClick={handlePay}
                    disabled={isLoading}
                  >
                    Proceder al pago
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PagarPage
