import { Link } from 'react-router'
import { Separator } from '../../components'

const Nuevo = () => {
  return (
    <section className='mt-12'>
      <div className='container flex items-center justify-center gap-10'>
        <img src='/img/lo-nuevo.png' alt='Lentes Nuevos' />
        <div>
          <h2 className='text-7xl font-light leading-snug'>
            Encuentra lo <br /> nuevo
          </h2>
          <Separator />
          <p className='mt-6 mb-6'>
            Tenemos una gran variedad de productos nuevos y a la moda, para que no te quedes desactualizado y disfrutes
            de lo mejor en calidad y precio.
          </p>
          <Link to='#' className='border p-2 px-5 rounded-full hover:bg-accent-400 hover:text-black transition-all'>
            Ver Más
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Nuevo
