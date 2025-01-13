const Footer = () => {
  return (
    <footer className='bg-primary-700 text-white pt-8'>
      <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        {/* Información de atención al cliente */}
        <div className='text-center md:text-left'>
          <h3 className='text-lg font-semibold'>Atención a clientes</h3>
          <p className='mt-2'>
            Tel.{' '}
            <a href='tel:4111601866' className='hover:underline'>
              4111601866
            </a>
          </p>
          <p>Lunes a Viernes</p>
          <p>10:30-15:00 - 17:00-20:00</p>
          <p>Cortazar, Gto. México</p>
        </div>
        {/* Enlaces y redes sociales */}
        <div className='mt-6 md:mt-0 text-center'>
          <div className='mb-4'>
            <a href='/privacidad' className='text-sm hover:underline'>
              Políticas de Privacidad
            </a>
          </div>
          <div className='flex justify-center space-x-6'>
            <a href='https://twitter.com' target='_blank' className='hover:text-gray-300'>
              <i className='fab fa-twitter text-xl' />
            </a>
            <a href='https://instagram.com' target='_blank' className='hover:text-gray-300'>
              <i className='fab fa-instagram text-xl' />
            </a>
            <a href='https://facebook.com' target='_blank' className='hover:text-gray-300'>
              <i className='fab fa-facebook text-xl' />
            </a>
          </div>
        </div>
      </div>

      <div className='bg-primary-800'>
        <p className='text-center mt-8 text-xs py-3 font-light'>&copy; 2021 Óptica Tovar. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
