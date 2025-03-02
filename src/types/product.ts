export interface Product {
  id: number
  precio: number
  descripcion: string
  tipoArmazon: string
  marca: string
  categoria: string
  forma: string
  createdAt: Date
  updatedAt: Date
  details: Details
}

export interface Details {
  color: string
  talla: string
  longitudVarilla: string
  anchoPuente: string
  anchoTotal: string
  sku: string
  image?: Image
}

export interface Image {
  fotoUrl: string
  fotoPublicId: string
}
