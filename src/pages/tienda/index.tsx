import { useEffect, useState } from 'react'
import { Accordion, SectionTitle } from '../../components'
import { Category, Product } from '../../types'
import Header from './header'
import { productService } from '../../services/product.service'
import { ProductCard } from './ProductCard'
import { Link } from 'react-router'

const Tienda = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('none')
  const [categories, setCategories] = useState<Category[]>([])
  const [brands, setBrands] = useState<Category[]>([])
  const [frameShapes, setFrameShapes] = useState<Category[]>([])
  const [frameTypes, setFrameTypes] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [selectedShape, setSelectedShape] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)

  useEffect(() => {
    productService.getCategories().then(setCategories)
    productService.getMarcas().then(setBrands)
    productService.getFormas().then(setFrameShapes)
    productService.getTipos().then(setFrameTypes)
    productService.getProducts().then(setProducts)
  }, [])

  const sortProducts = (products: Product[]) => {
    switch (sortBy) {
      case 'price-asc':
        return [...products].sort((a, b) => a.precio - b.precio)
      case 'price-desc':
        return [...products].sort((a, b) => b.precio - a.precio)
      case 'brand-asc':
        return [...products].sort((a, b) => (a.marca?.descripcion || '').localeCompare(b.marca?.descripcion || ''))
      case 'brand-desc':
        return [...products].sort((a, b) => (b.marca?.descripcion || '').localeCompare(a.marca?.descripcion || ''))
      default:
        return products
    }
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.marca?.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.descripcion.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory ? product.categoria?.id === selectedCategory : true
    const matchesBrand = selectedBrand ? product.marca?.id === selectedBrand : true
    const matchesShape = selectedShape ? product.forma?.id === selectedShape : true
    const matchesType = selectedType ? product.tipo?.id === selectedType : true

    return matchesSearch && matchesCategory && matchesBrand && matchesShape && matchesType
  })

  const handleFilter = (type: 'category' | 'brand' | 'shape' | 'type', id: string) => {
    switch (type) {
      case 'category':
        setSelectedCategory(selectedCategory === id ? null : id)
        break
      case 'brand':
        setSelectedBrand(selectedBrand === id ? null : id)
        break
      case 'shape':
        setSelectedShape(selectedShape === id ? null : id)
        break
      case 'type':
        setSelectedType(selectedType === id ? null : id)
        break
    }
  }

  const sortedAndFilteredProducts = sortProducts(filteredProducts)

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
                  <li
                    className={`py-2 cursor-pointer hover:text-blue-600 ${
                      selectedCategory === category.id ? 'text-blue-600 font-semibold' : ''
                    }`}
                    key={category.id}
                    role='button'
                    onClick={() => handleFilter('category', category.id)}
                  >
                    {category.descripcion}
                  </li>
                ))}
              </ul>,
              <ul className='px-4 py-4 divide-y'>
                {brands.map((brand) => (
                  <li
                    className={`py-2 cursor-pointer hover:text-blue-600 ${
                      selectedBrand === brand.id ? 'text-blue-600 font-semibold' : ''
                    }`}
                    key={brand.id}
                    role='button'
                    onClick={() => handleFilter('brand', brand.id)}
                  >
                    {brand.descripcion}
                  </li>
                ))}
              </ul>,
              <ul className='px-4 py-4 divide-y'>
                {frameShapes.map((shape) => (
                  <li
                    className={`py-2 cursor-pointer hover:text-blue-600 ${
                      selectedShape === shape.id ? 'text-blue-600 font-semibold' : ''
                    }`}
                    key={shape.id}
                    role='button'
                    onClick={() => handleFilter('shape', shape.id)}
                  >
                    {shape.descripcion}
                  </li>
                ))}
              </ul>,
              <ul className='px-4 py-4 divide-y'>
                {frameTypes.map((type) => (
                  <li
                    className={`py-2 cursor-pointer hover:text-blue-600 ${
                      selectedType === type.id ? 'text-blue-600 font-semibold' : ''
                    }`}
                    key={type.id}
                    role='button'
                    onClick={() => handleFilter('type', type.id)}
                  >
                    {type.descripcion}
                  </li>
                ))}
              </ul>,
            ]}
          />
          <Link to={'/tienda/devolver'} className='mt-6 text-sm text-primary-900 hover:underline block'>
            Devolver pedido
          </Link>
        </div>

        <div className='w-full md:w-fit flex-grow '>
          <div className='mb-6 flex flex-wrap justify-end items-center gap-4'>
            <input
              type='text'
              placeholder='Buscar productos...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-96 p-2 border border-gray-300 rounded'
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='p-2 border border-gray-300 rounded'
            >
              <option value='none'>Ordenar por</option>
              <option value='price-asc'>Precio (de bajo a alto)</option>
              <option value='price-desc'>Precio (de alto a bajo)</option>
              <option value='brand-asc'>Marca (de A a Z)</option>
              <option value='brand-desc'>Marca (de Z a A)</option>
            </select>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {sortedAndFilteredProducts.length === 0 ? (
              <div className='col-span-full text-center text-gray-500 py-8'>No hay resultados</div>
            ) : (
              sortedAndFilteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tienda
