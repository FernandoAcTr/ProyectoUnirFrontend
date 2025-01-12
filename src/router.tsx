import { createBrowserRouter } from 'react-router'
import HomePage from './pages/home'

const routes = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <HomePage />,
  },
])

export default routes
