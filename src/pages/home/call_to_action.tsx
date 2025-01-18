import { Link } from 'react-router'

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
