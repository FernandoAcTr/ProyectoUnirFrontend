import { useNavigate, useParams } from 'react-router'
import { useCartContextContext } from '../../../context/cart.context'
import Header from './header'
import { useEffect, useMemo } from 'react'

const SuccessPage = () => {
  const { products, clearCart } = useCartContextContext()
  const navigate = useNavigate()
  const { id: orderId } = useParams()

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
      <div className='success-container'>
        <div className='success-card'>
          <div className='success-card__header'>
            <i className='success-card__icon fas fa-check-circle'></i>
            <h1 className='success-card__title'>¡Gracias por tu compra!</h1>
          </div>

          <p className='success-order'>
            Orden #<span className='success-order__number'>{orderId}</span>
          </p>

          <ul className='success-products'>
            {products.map((product) => (
              <li key={product.id} className='success-product'>
                <div className='success-product__container'>
                  <div>
                    <p className='success-product__brand'>{product.marca?.descripcion}</p>
                    <p className='success-product__description'>{product.descripcion}</p>
                    <p className='success-product__details'>
                      Cantidad: {product.quantity} - Precio unitario: ${product.precio.toFixed(2)}
                    </p>
                  </div>
                  <span className='success-product__price'>${(product.precio * product.quantity).toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className='success-summary'>
            <div className='success-summary__row'>
              <span className='success-summary__label'>Subtotal:</span>
              <span className='success-summary__value'>${subtotal.toFixed(2)}</span>
            </div>
            <div className='success-summary__row'>
              <span className='success-summary__label'>IVA (16%):</span>
              <span className='success-summary__value'>${iva.toFixed(2)}</span>
            </div>
            <div className='success-summary__total'>
              <span className='success-summary__total-label'>Total pagado:</span>
              <span className='success-summary__total-value'>${total.toFixed(2)}</span>
            </div>
            <button
              className='success-button'
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
