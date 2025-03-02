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
      <div className='flex flex-col items-center justify-center min-h-[60vh] py-12 container'>
        <p className='max-w-2xl text-sm mb-4'>
          Lamentamos que tu compra no haya sido lo que esperabas, pero no te preocupes, puedes devolverla en un plazo de
          30 días desde la fecha de compra. Para poder realizar la devolución, sigue estos pasos:
        </p>
        <ol className='list-decimal list-inside text-sm max-w-2xl mx-auto'>
          <li>Ingresa el número de tu orden en el campo de arriba y haz clic en buscar.</li>
          <li>Selecciona los productos que deseas devolver.</li>
          <li>Selecciona el motivo de la devolución.</li>
          <li>Imprime la etiqueta de devolución.</li>
          <li>Empaqueta los productos que deseas devolver y pégale la etiqueta de devolución.</li>
          <li>Una vez que recibamos tu paquete validaremos la devolución y recibirás un reembolso de tu compra.</li>
        </ol>
        <p className='text-xs mt-6'>
          Nota: Los productos deben estar en su empaque original y en perfecto estado para poder ser devueltos. <br />{' '}
          Si el producto se encuetra dañado o usado, la devolución será rechazada.
        </p>
        <h2 className='text-2xl font-bold mb-6 text-center mt-6'>Ingresa el número de tu Orden</h2>

        <form onSubmit={handleSearch} className='w-full max-w-md'>
          <div className='flex gap-2'>
            <input
              type='text'
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder='Ingrese el número de orden'
              className='flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button
              type='submit'
              className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
            >
              Buscar
            </button>
          </div>
        </form>

        {loading && <Spinner className='mt-5' />}

        {!loading && products.length > 0 && (
          <div className='w-full max-w-2xl mt-8'>
            <h3 className='text-lg font-semibold mb-4'>Productos de tu orden:</h3>
            <div className='space-y-4'>
              {products.map((product) => (
                <div key={product.id} className='flex items-center gap-4 p-4 border rounded-lg'>
                  <input
                    type='checkbox'
                    checked={selectedProducts.includes(product.id.toString())}
                    onChange={() => handleProductSelect(product.id.toString())}
                    className='h-5 w-5 text-blue-500'
                  />
                  {product.details?.image && (
                    <img
                      src={product.details.image.fotoUrl}
                      alt={product.descripcion}
                      className='w-20 h-20 object-contain rounded-md'
                    />
                  )}
                  <div className='flex-1'>
                    <p className='font-medium'>{product.descripcion}</p>
                    <p className='text-sm text-gray-600'>{product.marca}</p>
                  </div>
                </div>
              ))}
            </div>

            {errorMessage && (
              <div className='bg-red-100 border border-red-200 text-red-800 p-4 rounded-lg mt-4'>{errorMessage}</div>
            )}

            {message && (
              <div className='bg-green-100 border border-green-200 text-green-800 p-4 rounded-lg mt-4'>{message}</div>
            )}

            <div className='flex justify-end'>
              {isDevolutionLoading && <Spinner />}
              {!isDevolutionLoading && !message && (
                <button
                  className='mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
                  onClick={handleDevolution}
                >
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
