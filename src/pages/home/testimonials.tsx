import { SectionTitle } from '../../components'

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <SectionTitle text='Testimoniales' />
      <div className='testimonials__grid'>
        <blockquote className='testimonial'>
          <div className='testimonial__content'>
            <i className='fa-solid fa-quote-left testimonial__quote'></i>
            <p className='testimonial__text'>
              Sin duda alguna es de las majores ópticas en Cortazar, Celaya y la región
            </p>
          </div>
          <footer className='testimonial__footer'>
            <img src='/img/testimonial.jpg' alt='imagen Testimonial' className='testimonial__image' />
            <cite>Juan Mendoza Aguilar</cite>
          </footer>
        </blockquote>

        <blockquote className='testimonial'>
          <div className='testimonial__content'>
            <i className='fa-solid fa-quote-left testimonial__quote'></i>
            <p className='testimonial__text'>
              Excelente servicio, el personal es muy educado y hacen un trabajo de calidad
            </p>
          </div>
          <footer className='testimonial__footer'>
            <img src='/img/testimonial2.jpeg' alt='imagen Testimonial' className='testimonial__image' />
            <cite>Juan Mendoza Aguilar</cite>
          </footer>
        </blockquote>

        <blockquote className='testimonial'>
          <div className='testimonial__content'>
            <i className='fa-solid fa-quote-left testimonial__quote'></i>
            <p className='testimonial__text'>
              Fui a tres ópticas antes y en todas me graduaron mal mis lentes, que bueno que me recomendaron a Óptica
              Tovar
            </p>
          </div>
          <footer className='testimonial__footer'>
            <img src='/img/testimonial3.jpg' alt='imagen Testimonial' className='testimonial__image' />
            <cite>Juan Mendoza Aguilar</cite>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}

export default Testimonials
