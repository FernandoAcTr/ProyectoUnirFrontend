import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { useScrollDown } from '../../hooks'

export type NavbarProps = {
  //
}

export const Navbar = () => {
  const [isOver, setIsOver] = useState(false)
  const location = useLocation()

  useScrollDown((isScrolled) => setIsOver(isScrolled))

  const isMenuActive = (path: string): boolean => {
    return location.pathname === path
  }

  return (
    <nav
      className={`flex justify-between items-center h-16 px-5 fixed top-0 inset-x-0 transition-all z-20 ${
        isOver ? 'bg-primary-700 shadow-md' : 'bg-transparent'
      }`}
    >
      <Link className='navbar-brand' to='/'>
        <img src='/img/logo-ligth.png' alt='Logo' width='70' />
      </Link>

      <ul className='flex items-center gap-5'>
        <li className={isMenuActive('/') ? 'opacity-100' : 'opacity-40'}>
          <Link to='/' className='text-white'>
            Inicio
          </Link>
        </li>
        <li className='opacity-40'>
          <Link to='#' className='text-white'>
            Tienda
          </Link>
        </li>
        <li className={isMenuActive('/contacto') ? 'opacity-100' : 'opacity-40'}>
          <Link to='/contacto' className='text-white'>
            Contacto
          </Link>
        </li>
        <li className='opacity-40'>
          <Link to='#' className='text-white'>
            Ayuda
          </Link>
        </li>
        <li className='opacity-40'>
          <i className='fa-solid fa-cart-plus text-white'></i>
        </li>
      </ul>
    </nav>
  )
}
