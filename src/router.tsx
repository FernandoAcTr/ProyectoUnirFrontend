import { createBrowserRouter } from 'react-router'
import HomePage from './pages/home'
import GuestLayout from './layout/guest'
import ContactPage from './pages/contact'

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
    ],
  },
])

export default routes
