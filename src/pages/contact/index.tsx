import { SectionTitle } from '../../components'
import Header from './header'

const ContactPage = () => {
  return (
    <div>
      <Header />
      <SectionTitle text='Contacto' className='mt-8 mb-12' />

      <div className='contact__content'>
        <img src='/img/dummy/fachada.jpg' alt='Fachada' className='contact__image' />

        <div className='contact__info'>
          <div className='contact__info-item'>
            <div className='contact__info-icon'>
              <i className='fa-solid fa-mobile-screen-button contact__info-icon-image'></i>
            </div>
            <p className='contact__info-title'>Teléfono</p>
            <p>442 212 3456</p>
          </div>
          <div className='contact__info-item'>
            <div className='contact__info-icon'>
              <i className='fa-solid fa-location-dot contact__info-icon-image'></i>
            </div>
            <p className='contact__info-title'>Domicilio</p>
            <p>
              Hidalgo #130 <br />
              C.P. 38300 <br />
              Cortazar, Gto.
            </p>
          </div>
          <div className='contact__info-item'>
            <div className='contact__info-icon'>
              <i className='fa-regular fa-clock contact__info-icon-image'></i>
            </div>
            <p className='contact__info-title'>Horario de Atencion</p>
            <p>
              <span className='font-semibold'>Lunes a Viernes:</span> 10:30 - 15:00 hrs y 17:00 - 20:00 hrs. <br />
              <span className='font-semibold'>Sábados:</span> 9:30 - 15:00 hrs <br />
              <span className='font-semibold'>Jueves:</span> 10:30 - 15 hrs
            </p>
          </div>
        </div>
      </div>

      <div className='contact__form-container'>
        <form action='#' method='POST' className='contact__form'>
          <div className='contact__form-group'>
            <label htmlFor='email' className='contact__form-label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='contact__form-input'
              placeholder='tuemail@ejemplo.com'
            />
          </div>
          <div className='contact__form-group'>
            <label htmlFor='subject' className='contact__form-label'>
              Asunto
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              required
              className='contact__form-input'
              placeholder='Asunto del mensaje'
            />
          </div>
          <div className='contact__form-group'>
            <label htmlFor='message' className='contact__form-label'>
              Mensaje
            </label>
            <textarea
              id='message'
              name='message'
              required
              rows={5}
              className='contact__form-input'
              placeholder='Escribe tu mensaje aquí...'
              defaultValue={''}
            />
          </div>
          <div className='contact__form-group'>
            <button type='submit' className='contact__form-button'>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
