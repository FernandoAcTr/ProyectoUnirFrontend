import { Outlet } from 'react-router'
import { Navbar } from './navbar'
import Footer from './footer'

const GuestLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default GuestLayout
