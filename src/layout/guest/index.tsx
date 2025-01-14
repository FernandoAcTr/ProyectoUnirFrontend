import { Outlet } from 'react-router'
import { Navbar } from './navbar'
import { Cart } from './cart'
import Footer from './footer'

const GuestLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Cart />
    </>
  )
}

export default GuestLayout
