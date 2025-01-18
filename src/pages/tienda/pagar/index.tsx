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
      <div className='pagar'>
        <Header />
        <div className='pagar__empty'>
          <div className='pagar__empty-content'>
            <i className='fas fa-shopping-cart pagar__empty-icon' />
            <h2 className='pagar__empty-title'>Tu carrito está vacío</h2>
            <p className='pagar__empty-text'>¿No sabes qué comprar? ¡Miles de productos te esperan!</p>
            <Link to='/tienda' className='pagar__empty-button'>
              <i className='fas fa-store pagar__empty-button-icon' />
              Ir a la tienda
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='pagar'>
      <Header />
      <div className='pagar__container'>
        <div className='pagar__grid'>
          <div className='pagar__products'>
            <div className='pagar__products-card'>
              <h2 className='pagar__products-title'>
                <i className='fas fa-shopping-cart pagar__products-title-icon' />
                Productos en tu carrito
              </h2>
              <div className='pagar__products-list'>
                {products.map((product) => (
                  <div key={product.id} className='pagar__product'>
                    <div className='pagar__product-content'>
                      <div className='pagar__product-image'>
                        <img
                          src={product.details?.image?.foto_url || '/placeholder.png'}
                          alt={product.descripcion}
                          className='pagar__product-img'
                        />
                      </div>
                      <div className='pagar__product-info'>
                        <h3 className='pagar__product-name'>{product.descripcion}</h3>
                        <p className='pagar__product-brand'>Marca: {product.marca?.descripcion}</p>
                        <div className='pagar__product-quantity'>
                          <p>Cantidad: {product.quantity}</p>
                          <button className='pagar__product-button' onClick={() => addProduct(product)}>
                            <i className='fas fa-plus'></i>
                          </button>
                          <button className='pagar__product-button' onClick={() => removeProduct(product)}>
                            <i className='fas fa-minus'></i>
                          </button>
                        </div>
                      </div>
                      <div className='pagar__product-price'>
                        <p>{formatMoney(product.precio * product.quantity)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='pagar__summary'></div>
          <div className='pagar__summary-card'>
            <h2 className='pagar__summary-title'>
              <i className='fas fa-credit-card pagar__summary-title-icon' />
              Resumen de pago
            </h2>
            <div className='pagar__summary-content'>
              <div className='pagar__summary-row'>
                <span>Subtotal:</span>
                <span>{formatMoney(subtotal)}</span>
              </div>
              <div className='pagar__summary-row'>
                <span>IVA (16%):</span>
                <span>{formatMoney(iva)}</span>
              </div>
              <div className='pagar__summary-total'>
                <div className='pagar__summary-total-row'>
                  <span>Total a pagar:</span>
                  <span>{formatMoney(total)}</span>
                </div>
              </div>

              {isLoading ? (
                <button className='pagar__summary-button pagar__summary-button--disabled' disabled>
                  Procesando pago <Spinner />
                </button>
              ) : (
                <button className='pagar__summary-button' onClick={handlePay} disabled={isLoading}>
                  Proceder al pago
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PagarPage
