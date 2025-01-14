import { useEffect, useState } from 'react'
import { Accordion, SectionTitle } from '../../components'
import { Category, Product } from '../../types'
import Header from './header'
import { productService } from '../../services/product.service'
import { ProductCard } from './ProductCard'

const Tienda = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [categories, setCategories] = useState<Category[]>([])
  const [brands, setBrands] = useState<Category[]>([])
  const [frameShapes, setFrameShapes] = useState<Category[]>([])
  const [frameTypes, setFrameTypes] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    productService.getCategories().then(setCategories)
    productService.getMarcas().then(setBrands)
    productService.getFormas().then(setFrameShapes)
    productService.getTipos().then(setFrameTypes)
    productService.getProducts().then(setProducts)
  }, [])

  const filteredProducts = products.filter(
    (product) =>
      product.marca?.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <Header />
      <SectionTitle text='¡Encuentra lo que estas buscando!' className='my-12' />
      <div className='px-5 md:px-10 flex flex-wrap md:flex-nowrap gap-4'>
        <div className='w-full md:w-60 shrink-0'>
          <p className='text-xl mb-6'>Filtrar por</p>
          <Accordion
            titles={['Categoría', 'Marca', 'Forma del Armazón', 'Tipo de Armazón']}
            tabs={[
              <ul className='px-4 py-4 divide-y'>
                {categories.map((category) => (
                  <li className='py-2' key={category.id}>
                    {category.descripcion}
                  </li>
                ))}
              </ul>,
              <ul className='px-4 py-4 divide-y'>
                {brands.map((brand) => (
                  <li className='py-2' key={brand.id}>
                    {brand.descripcion}
                  </li>
                ))}
              </ul>,
              <ul className='px-4 py-4 divide-y'>
                {frameShapes.map((shape) => (
                  <li className='py-2' key={shape.id}>
                    {shape.descripcion}
                  </li>
                ))}
              </ul>,
              <ul className='px-4 py-4 divide-y'>
                {frameTypes.map((type) => (
                  <li className='py-2' key={type.id}>
                    {type.descripcion}
                  </li>
                ))}
              </ul>,
            ]}
          />
        </div>

        <div className='w-full md:w-fit flex-grow '>
          <div className='mb-6 flex justify-end'>
            <input
              type='text'
              placeholder='Buscar productos...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-96 p-2 border border-gray-300 rounded'
            />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tienda
