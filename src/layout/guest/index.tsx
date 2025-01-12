import { Outlet } from 'react-router'
import { Navbar } from './navbar'

const GuestLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default GuestLayout
