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
      <div className='p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Imagen del producto */}
          <div className='w-full'>
            <img
              src={product.details.image?.foto_url || '/placeholder.png'}
              alt={product.descripcion}
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>

          {/* Información principal */}
          <div className='space-y-4'>
            <h1 className='text-3xl font-bold text-gray-800'>{product.marca?.descripcion}</h1>
            <p className='text-sm text-gray-600'>SKU: {product.details.sku}</p>
            <p className='text-gray-700'>{product.descripcion}</p>
            <p className='text-2xl font-bold text-accent-600'>${product.precio.toFixed(2)}</p>

            <div className='flex items-center gap-4 py-4'>
              <input
                type='number'
                min='1'
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className='w-20 px-3 py-2 border border-gray-300 rounded-md'
              />
              <button
                className='px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
                onClick={() => handleAddProduct(product, quantity)}
              >
                Agregar al Carrito
              </button>
            </div>

            {/* Detalles técnicos */}
            <div className='mt-8'>
              <table className='w-full border-collapse'>
                <tbody className='divide-y divide-gray-200'>
                  <tr>
                    <td className='py-2 font-semibold'>Color</td>
                    <td className='py-2'>{product.details.color}</td>
                  </tr>
                  <tr>
                    <td className='py-2 font-semibold'>Talla</td>
                    <td className='py-2'>{product.details.talla}</td>
                  </tr>
                  <tr>
                    <td className='py-2 font-semibold'>Longitud de Varilla</td>
                    <td className='py-2'>{product.details.longitud_varilla}</td>
                  </tr>
                  <tr>
                    <td className='py-2 font-semibold'>Ancho de Puente</td>
                    <td className='py-2'>{product.details.ancho_puente}</td>
                  </tr>
                  <tr>
                    <td className='py-2 font-semibold'>Ancho Total</td>
                    <td className='py-2'>{product.details.ancho_total}</td>
                  </tr>
                  <tr>
                    <td className='py-2 font-semibold'>Tipo de Armazón</td>
                    <td className='py-2'>{product.tipo?.descripcion}</td>
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
