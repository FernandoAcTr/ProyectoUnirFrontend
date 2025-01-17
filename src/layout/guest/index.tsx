import { Outlet } from 'react-router'
import { Navbar } from './navbar'
import { Cart } from './cart'
import Footer from './footer'
import { ToastContainer } from 'react-toastify'

const GuestLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Cart />
      <ToastContainer />
    </>
  )
}

export default GuestLayout
