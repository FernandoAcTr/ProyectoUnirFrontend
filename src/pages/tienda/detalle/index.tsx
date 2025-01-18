import { useEffect, useState } from 'react'
import { Product } from '../../../types'
import { useNavigate, useParams } from 'react-router'
import { productService } from '../../../services/product.service'
import { useCartContextContext } from '../../../context/cart.context'
import Header from './header'
import { toast } from 'react-toastify'

const DetalleProducto = () => {
  const [product, setProduct] = useState<Product>()
  const [quantity, setQuantity] = useState(1)
  const params = useParams()
  const navigate = useNavigate()
  const { addProduct, openCart } = useCartContextContext()

  useEffect(() => {
    const id = params.id
    if (!id) {
      navigate('/tienda')
      return
    }
    productService.getProductById(id).then((product) => {
      setProduct(product)
    })
  }, [])

  const handleAddProduct = (product: Product, quantity: number) => {
    addProduct(product, quantity)
    toast('Producto agregado al carrito', { type: 'success', onClick: openCart })
  }

  if (!product || !product.details) {
    return <div>Cargando...</div>
  }

  return (
    <div>
      <Header />
      <div className='detalle'>
        <div className='detalle__container'>
          <div className='detalle__image-container'>
            <img
              src={product.details.image?.foto_url || '/placeholder.png'}
              alt={product.descripcion}
              className='detalle__image'
            />
          </div>

          <div className='detalle__info'>
            <h1 className='detalle__brand'>{product.marca?.descripcion}</h1>
            <p className='detalle__sku'>SKU: {product.details.sku}</p>
            <p className='detalle__description'>{product.descripcion}</p>
            <p className='detalle__price'>${product.precio.toFixed(2)}</p>

            <div className='detalle__actions'>
              <input
                type='number'
                min='1'
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className='detalle__quantity'
              />
              <button
                className='detalle__add-button'
                onClick={() => handleAddProduct(product, quantity)}
              >
                Agregar al Carrito
              </button>
            </div>

            <div className='detalle__specs'>
              <table className='detalle__specs-table'>
                <tbody className='detalle__specs-body'>
                  <tr>
                    <td className='detalle__specs-label'>Color</td>
                    <td className='detalle__specs-value'>{product.details.color}</td>
                  </tr>
                  <tr>
                    <td className='detalle__specs-label'>Talla</td>
                    <td className='detalle__specs-value'>{product.details.talla}</td>
                  </tr>
                  <tr>
                    <td className='detalle__specs-label'>Longitud de Varilla</td>
                    <td className='detalle__specs-value'>{product.details.longitud_varilla}</td>
                  </tr>
                  <tr>
                    <td className='detalle__specs-label'>Ancho de Puente</td>
                    <td className='detalle__specs-value'>{product.details.ancho_puente}</td>
                  </tr>
                  <tr>
                    <td className='detalle__specs-label'>Ancho Total</td>
                    <td className='detalle__specs-value'>{product.details.ancho_total}</td>
                  </tr>
                  <tr>
                    <td className='detalle__specs-label'>Tipo de Armazón</td>
                    <td className='detalle__specs-value'>{product.tipo?.descripcion}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalleProducto
