import { Link } from 'react-router'
import { Separator } from '../../components'
import '../../assets/css/home.css'

const Nuevo = () => {
  return (
    <section className='nuevo'>
      <div className='nuevo__container'>
        <img src='/img/lo-nuevo.png' alt='Lentes Nuevos' />
        <div>
          <h2 className='nuevo__title'>Encuentra lo nuevo</h2>
          <Separator />
          <p className='nuevo__description'>
            Tenemos una gran variedad de productos nuevos y a la moda, para que no te quedes desactualizado y disfrutes
            de lo mejor en calidad y precio.
          </p>
          <Link to='#' className='nuevo__link'>
            Ver Más
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Nuevo
