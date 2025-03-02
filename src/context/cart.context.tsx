import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { CartItem, Product } from '../types'

type ContextType = {
  products: CartItem[]
  isOpened: boolean
  totalProducts: number
  addProduct: (product: Product, quantity?: number) => void
  removeProduct: (product: Product, quantity?: number) => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  clearCart: () => void
}

const CART_STORAGE_KEY = 'cartProducts'

const CartContextContext = createContext<ContextType | null>(null)

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<CartItem[]>(() => {
    const storedProducts = sessionStorage.getItem(CART_STORAGE_KEY)
    return storedProducts ? JSON.parse(storedProducts) : []
  })
  const [opened, setOpened] = useState(false)

  const totalProducts = useMemo(() => products.reduce((acc, p) => acc + p.quantity, 0), [products])

  useEffect(() => {
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(products))
  }, [products])

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
  const clearCart = () => setProducts([])

  return (
    <CartContextContext.Provider
      value={{
        products,
        addProduct: selectProduct,
        removeProduct,
        isOpened: opened,
        totalProducts,
        openCart,
        closeCart,
        toggleCart,
        clearCart,
      }}
    >
      {children}
    </CartContextContext.Provider>
  )
}

export const useCartContextContext = () => useContext(CartContextContext)!
