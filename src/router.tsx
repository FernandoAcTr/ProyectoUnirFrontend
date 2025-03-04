import { createBrowserRouter } from 'react-router'
import HomePage from './pages/home'
import GuestLayout from './layout/guest'
import ContactPage from './pages/contact'
import PadecimietosPage from './pages/padecimientos'
import FormaCara from './pages/forma_cara'
import Faqs from './pages/faqs'
import Tienda from './pages/tienda'
import DetalleProducto from './pages/tienda/detalle'
import PagarPage from './pages/tienda/pagar'
import SuccessPage from './pages/tienda/success'
import DevolverPage from './pages/tienda/devolver'
import MisCompras from './pages/tienda/compras'
import OrderPage from './pages/tienda/order'
import LoginPage from './pages/auth/login'
import RegisterPage from './pages/auth/register'

const routes = createBrowserRouter([
  {
    element: <GuestLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <HomePage />,
      },
      {
        path: '/contacto',
        element: <ContactPage />,
      },
      {
        path: '/padecimientos',
        element: <PadecimietosPage />,
      },
      {
        path: '/forma-cara',
        element: <FormaCara />,
      },
      {
        path: '/faqs',
        element: <Faqs />,
      },
      {
        path: '/tienda',
        element: <Tienda />,
      },
      {
        path: '/tienda/productos/:id',
        element: <DetalleProducto />,
      },
      {
        path: '/tienda/pagar',
        element: <PagarPage />,
      },
      {
        path: '/tienda/orden/:id/success',
        element: <SuccessPage />,
      },
      {
        path: '/tienda/devolver',
        element: <DevolverPage />,
      },
      {
        path: '/tienda/ordenes',
        element: <MisCompras />,
      },
      {
        path: '/tienda/orden/:id',
        element: <OrderPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
])

export default routes
