import { Link } from 'react-router'
import '../../assets/css/home.css'

const CallToAction = () => {
  return (
    <section className='cta'>
      <Link to='/contacto' className='cta__link'>
        Contáctanos
      </Link>
    </section>
  )
}

export default CallToAction
