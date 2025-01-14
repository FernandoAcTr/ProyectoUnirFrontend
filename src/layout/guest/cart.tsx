import { useMemo } from 'react'
import { useCartContextContext } from '../../context/cart.context'
import { formatMoney } from '../../utils/text'
import { Link } from 'react-router'

export type CartProps = {}

export const Cart = () => {
  const { isOpened, products, toggleCart, removeProduct } = useCartContextContext()

  const total = useMemo(() => products.reduce((acc, product) => acc + product.precio * product.quantity, 0), [products])

  return (
    <aside
      className={`fixed top-0 left-0 w-96 h-full bg-white shadow-lg transform transition-transform z-50 ${
        isOpened ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='flex flex-col h-full'>
        <div className='p-4 border-b flex items-center gap-10 bg-primary-600 text-white'>
          <button onClick={toggleCart}>
            <i className='fas fa-arrow-left'></i>
          </button>
          <h2 className='text-xl font-bold'>Carrito de Compras</h2>
        </div>

        <div className='flex-1 overflow-y-auto p-4'>
          {products.map((product) => (
            <div key={product.id} className='flex items-center gap-3 mb-4 p-2 border-b'>
              <div className='w-16 h-16'>
                <img
                  src={product.details?.image?.foto_url}
                  alt={product.descripcion}
                  className='w-full h-full object-contain rounded'
                />
              </div>
              <div className='flex-1'>
                <h3 className='text-sm font-medium'>{product.marca?.descripcion}</h3>
                <p className='text-xs text-gray-500'>{product.descripcion}</p>
                <div className='flex items-center justify-between mt-2'>
                  <span className='text-sm font-bold'>${product.precio}</span>
                  <div className='flex items-center gap-2'>
                    <button className='p-1 text-xs bg-gray-100 rounded' onClick={() => removeProduct(product)}>
                      <i className='fas fa-minus'></i>
                    </button>
                    <span className='text-sm'>
                      {product.quantity} x {formatMoney(product.precio)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='p-4 border-t'>
          <div className='flex justify-between mb-4 text-2xl'>
            <span className='font-bold'>Total:</span>
            <span className='font-bold text-accent-600'>{formatMoney(total)}</span>
          </div>

          <Link
            to={'/tienda/pagar'}
            className='w-full py-2 text-white bg-accent-600 rounded block text-center'
            onClick={toggleCart}
          >
            Pagar
          </Link>
        </div>
      </div>
    </aside>
  )
}
