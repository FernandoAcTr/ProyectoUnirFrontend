import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import { RouterProvider } from 'react-router'
import routes from './router'
import { CartContextProvider } from './context/cart.context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartContextProvider>
      <RouterProvider router={routes} />
    </CartContextProvider>
  </StrictMode>
)
