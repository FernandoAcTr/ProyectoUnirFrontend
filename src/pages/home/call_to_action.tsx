import { Link } from 'react-router'

const CallToAction = () => {
  return (
    <section className='mt-12 h-52 flex justify-center items-center'>
      <Link to='#' className='border-2 border-black py-5 lg:py-8 px-10 lg:px-28 text-3xl font-light rounded-full hover:bg-accent-400 hover:text-black transition-all'>
        Contáctanos
      </Link>
    </section>
  )
}

export default CallToAction
