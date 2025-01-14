import React, { createContext, useContext, useState } from 'react'
import { Product } from '../types'

type CartItem = Product & { quantity: number }

type ContextType = {
  products: CartItem[]
  isOpened: boolean
  addProduct: (product: Product, quantity?: number) => void
  removeProduct: (product: Product, quantity?: number) => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
}

const CartContextContext = createContext<ContextType | null>(null)

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<CartItem[]>([])
  const [opened, setOpened] = useState(false)

  const selectProduct = (product: Product, quantity = 1) => {
    const index = products.findIndex((p) => p.id === product.id)
    if (index === -1) {
      setProducts([...products, { ...product, quantity }])
    } else {
      const newProducts = [...products]
      newProducts[index].quantity += quantity
      setProducts(newProducts)
    }
  }

  const removeProduct = (product: Product, quantity = 1) => {
    const index = products.findIndex((p) => p.id === product.id)
    if (index === -1) return
    if (products[index].quantity <= quantity) {
      setProducts(products.filter((p) => p.id !== product.id))
    } else {
      const newProducts = [...products]
      newProducts[index].quantity -= quantity
      setProducts(newProducts)
    }
  }

  const openCart = () => setOpened(true)
  const closeCart = () => setOpened(false)
  const toggleCart = () => setOpened((prev) => !prev)

  return (
    <CartContextContext.Provider
      value={{
        products,
        addProduct: selectProduct,
        removeProduct,
        isOpened: opened,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContextContext.Provider>
  )
}

export const useCartContextContext = () => useContext(CartContextContext)!
