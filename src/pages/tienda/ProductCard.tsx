import { Link } from 'react-router'
import { Product } from '../../types'
import { useCartContextContext } from '../../context/cart.context'

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addProduct } = useCartContextContext()

  return (
    <div className='border rounded-lg shadow-sm overflow-hidden'>
      <div className='relative'>
        <img
          src={product.details?.image?.foto_url || '/placeholder.png'}
          alt={product.descripcion}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='p-4'>
        <h3 className='font-semibold text-lg mb-2'>{product.marca?.descripcion}</h3>
        <p className='text-gray-600 text-sm mb-3 line-clamp-2'>{product.descripcion}</p>
        <p className='text-xl font-bold mb-4'>${product.precio}</p>
        <div className='flex gap-2'>
          <button
            className='flex-1 bg-accent-500 text-white py-2 px-4 rounded hover:bg-primary/90'
            onClick={() => addProduct(product)}
          >
            Agregar
          </button>
          <Link
            to={`/tienda/productos/${product.id}`}
            className='flex-1 border border-primary text-primary py-2 px-4 rounded hover:bg-gray-50 text-center'
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  )
}
