import { Category, Forma, Marca, Product, TipoArmazon } from '../types'
import categories from '../data/categories.json'
import formas from '../data/formas.json'
import marcas from '../data/marcas.json'
import tipos from '../data/tipos_armazon.json'
import products from '../data/productos.json'
import productDetails from '../data/productos_detalle.json'

export class ProductService {
  async getCategories(): Promise<Category[]> {
    return categories
  }

  async getFormas(): Promise<Forma[]> {
    return formas
  }

  async getMarcas(): Promise<Marca[]> {
    return marcas
  }

  async getTipos(): Promise<TipoArmazon[]> {
    return tipos
  }

  async getProducts(): Promise<Product[]> {
    const _products = [...products]

    return _products.map((product) => ({
      ...product,
      details: productDetails.find((detail) => detail.producto_id === product.id),
      tipo: tipos.find((tipo) => tipo.id === product.tipo_armazon_id),
      marca: marcas.find((marca) => marca.id === product.marca_id),
      categoria: categories.find((category) => category.id === product.categoria_id),
      forma: formas.find((forma) => forma.id === product.forma_id),
    }))
  }

  async getProductById(id: string): Promise<Product | undefined> {
    const product = products.find((product) => product.id === id)

    if (!product) {
      return undefined
    }

    return {
      ...product,
      details: productDetails.find((detail) => detail.producto_id === product.id),
      tipo: tipos.find((tipo) => tipo.id === product.tipo_armazon_id),
      marca: marcas.find((marca) => marca.id === product.marca_id),
      categoria: categories.find((category) => category.id === product.categoria_id),
      forma: formas.find((forma) => forma.id === product.forma_id),
    }
  }
}
