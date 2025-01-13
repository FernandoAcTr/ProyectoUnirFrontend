import { createBrowserRouter } from 'react-router'
import HomePage from './pages/home'
import GuestLayout from './layout/guest'
import ContactPage from './pages/contact'
import PadecimietosPage from './pages/padecimientos'
import FormaCara from './pages/forma_cara'

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
    ],
  },
])

export default routes
