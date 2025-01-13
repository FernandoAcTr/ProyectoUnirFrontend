import { Category } from './category'
import { Forma } from './forma'
import { Marca } from './marca'
import { TipoArmazon } from './tipo_armazon'

export type Product = {
  id: string
  precio: string
  descripcion: string
  tipo_armazon_id: string
  marca_id: string
  categoria_id: string
  forma_id: string
  created_at: string
  updated_at: string
  details?: ProductDetail
  tipo?: TipoArmazon
  marca?: Marca
  categoria?: Category
  forma?: Forma
}

export type ProductDetail = {
  id: string
  producto_id: string
  color: string
  talla: string
  longitud_varilla: string
  ancho_puente: string
  ancho_total: string
  image_id: string
  sku: string
}
