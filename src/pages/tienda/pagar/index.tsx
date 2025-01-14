import { useCartContextContext } from '../../../context/cart.context'
import Header from './header'

const PagarPage = () => {
  const { products } = useCartContextContext()

  const subtotal = products.reduce((acc, product) => acc + product.precio * product.quantity, 0)
  const iva = subtotal * 0.16
  const total = subtotal + iva

  return (
    <div>
      <Header />
      <div className='container mx-auto px-4 py-8'>
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
                        <p className='text-gray-600'>Cantidad: {product.quantity}</p>
                      </div>
                      <div className='text-right'>
                        <p className='font-bold text-lg'>${(product.precio * product.quantity).toFixed(2)}</p>
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
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>IVA (16%):</span>
                  <span>${iva.toFixed(2)}</span>
                </div>
                <div className='border-t pt-4'>
                  <div className='flex justify-between font-bold text-lg'>
                    <span>Total a pagar:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className='w-full bg-accent-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors'>
                  Proceder al pago
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PagarPage
