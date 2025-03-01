import { Category, Forma, Marca, Product, TipoArmazon } from '../types'
import { httpClient } from '../utils/http_client'

type ProductFilters = {
  categoriaId?: string
  marcaId?: string
  formaId?: string
  tipoArmazonId?: string
}

export class ProductService {
  async getCategories(): Promise<Category[]> {
    const { data } = await httpClient.get<Category[]>('/products/lookups/categories')
    return data
  }

  async getFormas(): Promise<Forma[]> {
    const { data } = await httpClient.get<Forma[]>('/products/lookups/formas')
    return data
  }

  async getMarcas(): Promise<Marca[]> {
    const { data } = await httpClient.get<Marca[]>('/products/lookups/marcas')
    return data
  }

  async getTipos(): Promise<TipoArmazon[]> {
    const { data } = await httpClient.get<TipoArmazon[]>('/products/lookups/tipo-armazones')
    return data
  }

  async getProducts(filters?: ProductFilters): Promise<Product[]> {
    const { data } = await httpClient.get<Product[]>('/products', {
      params: {
        ...filters,
      },
    })
    return data
  }

  async getProductById(id: string): Promise<Product | undefined> {
    const { data } = await httpClient.get<Product>(`/products/${id}`)
    return data
  }
}

export const productService = new ProductService()
