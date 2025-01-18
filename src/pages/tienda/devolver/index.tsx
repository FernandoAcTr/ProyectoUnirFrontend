import { Spinner } from '../../../components'
import { productService } from '../../../services/product.service'
import { Product } from '../../../types'
import { sleep } from '../../../utils/time'
import Header from './header'
import { useState } from 'react'

const DevolverPage = () => {
  const [orderNumber, setOrderNumber] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [isDevolutionLoading, setIsDevolutionLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    const dummyProds = await productService.getProducts()
    await sleep(1000)
    setProducts(dummyProds.slice(0, 3))
    setErrorMessage('')
    setMessage('')
    setLoading(false)
  }

  const handleProductSelect = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    )
  }

  const handleDevolution = async () => {
    if (selectedProducts.length === 0) {
      setErrorMessage('Debes seleccionar al menos un producto para devolver')
      return
    }
    setIsDevolutionLoading(true)
    await sleep(2000)
    setErrorMessage('')
    setMessage(
      'Tu proceso de devolución se ha registrado, ahora debes enviar los productos a nuestra dirección y te reembolsaremos el dinero.'
    )
    setIsDevolutionLoading(false)
  }

  return (
    <div>
      <Header />
      <div className='devolver-main'>
        <p className='devolver-main__description'>
          Lamentamos que tu compra no haya sido lo que esperabas, pero no te preocupes, puedes devolverla en un plazo de
          30 días desde la fecha de compra. Para poder realizar la devolución, sigue estos pasos:
        </p>
        <ol className='devolver-main__steps'>
          <li>Ingresa el número de tu orden en el campo de arriba y haz clic en buscar.</li>
          <li>Selecciona los productos que deseas devolver.</li>
          <li>Selecciona el motivo de la devolución.</li>
          <li>Imprime la etiqueta de devolución.</li>
          <li>Empaqueta los productos que deseas devolver y pégale la etiqueta de devolución.</li>
          <li>Una vez que recibamos tu paquete validaremos la devolución y recibirás un reembolso de tu compra.</li>
        </ol>
        <p className='devolver-main__note'>
          Nota: Los productos deben estar en su empaque original y en perfecto estado para poder ser devueltos. <br />
          Si el producto se encuetra dañado o usado, la devolución será rechazada.
        </p>
        <h2 className='devolver-header__title'>Ingresa el número de tu Orden</h2>

        <form onSubmit={handleSearch} className='devolver-search'>
          <div className='devolver-search__form'>
            <input
              type='text'
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder='Ingrese el número de orden'
              className='devolver-search__input'
            />
            <button type='submit' className='devolver-search__button'>
              Buscar
            </button>
          </div>
        </form>

        {loading && <Spinner className='mt-5' />}

        {!loading && products.length > 0 && (
          <div className='devolver-products'>
            <h3 className='devolver-products__title'>Productos de tu orden:</h3>
            <div className='devolver-products__list'>
              {products.map((product) => (
                <div key={product.id} className='devolver-products__item'>
                  <input
                    type='checkbox'
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleProductSelect(product.id)}
                    className='devolver-products__checkbox'
                  />
                  {product.details?.image && (
                    <img
                      src={product.details.image.foto_url}
                      alt={product.descripcion}
                      className='devolver-products__image'
                    />
                  )}
                  <div className='devolver-products__info'>
                    <p className='devolver-products__name'>{product.descripcion}</p>
                    <p className='devolver-products__brand'>{product.marca?.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>

            {errorMessage && <div className='devolver-message'>{errorMessage}</div>}

            {message && <div className='devolver-message devolver-message--success'>{message}</div>}

            <div className='devolver-footer'>
              {isDevolutionLoading && <Spinner />}
              {!isDevolutionLoading && !message && (
                <button className='devolver-footer__button' onClick={handleDevolution}>
                  Devolver
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DevolverPage
