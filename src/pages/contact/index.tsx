import { SectionTitle } from '../../components'
import Header from './header'

const ContactPage = () => {
  return (
    <div>
      <Header />
      <SectionTitle text='Contacto' className='mt-8 mb-12' />

      <div className='container flex flex-wrap justify-center gap-6'>
        <img src='/img/dummy/fachada.jpg' alt='Fachada' className='w-full lg:w-2/5' />

        <div className='w-full lg:w-2/5 flex flex-wrap justify-between'>
          <div className='w-1/2 flex flex-col items-center justify-center'>
            <div className='bg-white h-20 w-20 flex items-center justify-center rounded-2xl shadow-lg mb-5'>
              <i className='fa-solid fa-mobile-screen-button text-4xl text-accent-500'></i>
            </div>
            <p className='font-bold mb-2'>Teléfono</p>
            <p>442 212 3456</p>
          </div>
          <div className='w-1/2 flex flex-col items-center justify-center'>
            <div className='bg-white h-20 w-20 flex items-center justify-center rounded-2xl shadow-lg mb-5'>
              <i className='fa-solid fa-location-dot text-4xl text-accent-500'></i>
            </div>
            <p className='font-bold mb-2'>Domicilio</p>
            <p>
              Hidalgo #130 <br />
              C.P. 38300 <br />
              Cortazar, Gto.
            </p>
          </div>
          <div className='w-fit flex flex-col items-center justify-center mx-auto'>
            <div className='bg-white h-20 w-20 flex items-center justify-center rounded-2xl shadow-lg mb-5'>
              <i className='fa-regular fa-clock text-4xl text-accent-500'></i>
            </div>
            <p className='font-bold mb-2'>Horario de Atencion</p>
            <p>
              <span className='font-semibold'>Lunes a Viernes:</span> 10:30 - 15:00 hrs y 17:00 - 20:00 hrs. <br />
              <span className='font-semibold'>Sábados:</span> 9:30 - 15:00 hrs <br />
              <span className='font-semibold'>Jueves:</span> 10:30 - 15 hrs
            </p>
          </div>
        </div>
      </div>

      <div className='w-full max-w-2xl mx-auto mt-12 mb-12 p-10 bg-white rounded-lg shadow-lg'>
        <form action='#' method='POST' className='space-y-4'>
          {/* Email */}
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              placeholder='tuemail@ejemplo.com'
            />
          </div>
          {/* Asunto */}
          <div>
            <label htmlFor='subject' className='block text-sm font-medium text-gray-700'>
              Asunto
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              required
              className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              placeholder='Asunto del mensaje'
            />
          </div>
          {/* Mensaje */}
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
              Mensaje
            </label>
            <textarea
              id='message'
              name='message'
              required
              rows={5}
              className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              placeholder='Escribe tu mensaje aquí...'
              defaultValue={''}
            />
          </div>
          {/* Botón Enviar */}
          <div>
            <button
              type='submit'
              className='w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
