import { createBrowserRouter } from 'react-router'
import HomePage from './pages/home'
import GuestLayout from './layout/guest'

const routes = createBrowserRouter([
  {
    element: <GuestLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <HomePage />,
      },
    ],
  },
])

export default routes
