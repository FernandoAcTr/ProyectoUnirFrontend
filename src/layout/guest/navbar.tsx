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
          <Link to='/tienda' className='text-white'>
            Tienda
          </Link>
        </li>
        <li className={isMenuActive('/contacto') ? 'opacity-100' : 'opacity-40'}>
          <Link to='/contacto' className='text-white'>
            Contacto
          </Link>
        </li>
        <li className='group relative'>
          <button
            className={`text-white flex items-center gap-2 ${
              isMenuActive('/padecimientos') || isMenuActive('/forma-cara') || isMenuActive('/faqs')
                ? 'opacity-100'
                : 'opacity-40'
            }`}
          >
            Ayuda
            <i className='fa-solid fa-chevron-down'></i>
          </button>
          <div
            id='dropdownNavbar'
            className='z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-md shadow w-44 absolute right-0'
          >
            <ul className='py-2 text-sm text-gray-700 dark:text-gray-400' aria-labelledby='dropdownLargeButton'>
              <li>
                <Link
                  to='/padecimientos'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-accent-400 dark:hover:text-white'
                >
                  Padecimientos
                </Link>
              </li>
              <li>
                <Link
                  to='/forma-cara'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-accent-400 dark:hover:text-white'
                >
                  Forma de Cara
                </Link>
              </li>
              <li>
                <Link
                  to='/faqs'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-accent-400 dark:hover:text-white'
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className='opacity-40'>
          <i className='fa-solid fa-cart-plus text-white'></i>
        </li>
      </ul>
    </nav>
  )
}
