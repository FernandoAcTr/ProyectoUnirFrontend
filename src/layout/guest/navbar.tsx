import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { useScrollDown } from '../../hooks'
import { useCartContextContext } from '../../context/cart.context'

export type NavbarProps = {
  //
}

export const Navbar = () => {
  const [isOver, setIsOver] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { toggleCart, totalProducts } = useCartContextContext()

  useScrollDown((isScrolled) => setIsOver(isScrolled))

  const isMenuActive = (path: string): boolean => {
    return location.pathname === path
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav
      className={`flex flex-wrap justify-between items-center h-auto py-5 md:h-16 px-5 fixed top-0 inset-x-0 transition-all z-50 
      ${isOver ? 'bg-primary-700 shadow-md' : 'bg-transparent'} 
      ${isMobileMenuOpen ? 'bg-primary-700 shadow-lg' : ''}`}
    >
      <div className='flex justify-between items-center w-full md:w-auto'>
        <Link className='navbar-brand' to='/'>
          <img src={isMobileMenuOpen ? '/img/logo.png' : '/img/logo-light.png'} alt='Logo' width='70' />
        </Link>

        <button
          onClick={toggleMobileMenu}
          className={`md:hidden ${isMobileMenuOpen ? 'text-white' : 'text-white'}`}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      <ul
        className={`${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row w-full md:w-auto items-center gap-5 mt-4 md:mt-0`}
      >
        <li className={`w-full md:w-auto text-center ${isMenuActive('/') ? 'opacity-100' : 'opacity-40'}`}>
          <Link to='/' className={`block py-2 md:py-0 ${isMobileMenuOpen ? 'text-white' : 'text-white'}`}>
            Inicio
          </Link>
        </li>
        <li className={`w-full md:w-auto text-center ${isMenuActive('/tienda') ? 'opacity-100' : 'opacity-40'}`}>
          <Link to='/tienda' className={`block py-2 md:py-0 ${isMobileMenuOpen ? 'text-white' : 'text-white'}`}>
            Tienda
          </Link>
        </li>
        <li className={`w-full md:w-auto text-center ${isMenuActive('/contacto') ? 'opacity-100' : 'opacity-40'}`}>
          <Link to='/contacto' className={`block py-2 md:py-0 ${isMobileMenuOpen ? 'text-white' : 'text-white'}`}>
            Contacto
          </Link>
        </li>
        <li className='group relative w-full md:w-auto text-center'>
          <button
            className={`flex items-center justify-center md:justify-start gap-2 w-full py-2 md:py-0 
            ${isMobileMenuOpen ? 'text-white' : 'text-white'}
            ${
              isMenuActive('/padecimientos') || isMenuActive('/forma-cara') || isMenuActive('/faqs')
                ? 'opacity-100'
                : 'opacity-40'
            }`}
          >
            Ayuda
            <i className='fa-solid fa-chevron-down'></i>
          </button>
          <div className='z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-md shadow w-44 md:absolute md:right-0'>
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

        <li className={`w-full md:w-auto text-center ${totalProducts > 0 ? 'opacity-100' : 'opacity-40'}`}>
          <button
            onClick={toggleCart}
            className={`py-2 md:py-0 ${isMobileMenuOpen ? 'text-white' : 'text-white'}`}
          >
            <i className='fa-solid fa-cart-plus mr-2'></i>
            <span>({totalProducts})</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}
