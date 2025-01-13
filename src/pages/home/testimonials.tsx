import { SectionTitle } from '../../components'

const Testimonials = () => {
  return (
    <section className='mt-12 mb-20'>
      <SectionTitle text='Testimoniales' />
      <div className='container grid grid-cols-1 lg:grid-cols-3 mt-6 gap-10'>
        <blockquote className='border p-5 shadow-lg rounded-lg'>
          <div className='flex items-start gap-6 mb-6'>
            <i className='fa-solid fa-quote-left text-7xl text-accent-400'></i>
            <p className='tracking-widest leading-loose'>
              Sin duda alguna es de las majores ópticas en Cortazar, Celaya y la región
            </p>
          </div>
          <footer className='flex items-center justify-center gap-6'>
            <img src='/img/testimonial.jpg' alt='imagen Testimonial' className='w-20 h-20 rounded-full' />
            <cite>Juan Mendoza Aguilar</cite>
          </footer>
        </blockquote>

        <blockquote className='border p-5 shadow-lg rounded-lg'>
          <div className='flex items-start gap-6 mb-6'>
            <i className='fa-solid fa-quote-left text-7xl text-accent-400'></i>
            <p className='tracking-widest leading-loose'>
              Excelente servicio, el personal es muy educado y hacen un trabajo de calidad
            </p>
          </div>
          <footer className='flex items-center justify-center gap-6'>
            <img src='/img/testimonial2.jpeg' alt='imagen Testimonial' className='w-20 h-20 rounded-full' />
            <cite>Juan Mendoza Aguilar</cite>
          </footer>
        </blockquote>

        <blockquote className='border p-5 shadow-lg rounded-lg'>
          <div className='flex items-start gap-6 mb-6'>
            <i className='fa-solid fa-quote-left text-7xl text-accent-400'></i>
            <p className='tracking-widest leading-loose'>
              Fui a tres ópticas antes y en todas me graduaron mal mis lentes, que bueno que me recomendaron a Óptica
              Tovar
            </p>
          </div>
          <footer className='flex items-center justify-center gap-6'>
            <img src='/img/testimonial3.jpg' alt='imagen Testimonial' className='w-20 h-20 rounded-full' />
            <cite>Juan Mendoza Aguilar</cite>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}

export default Testimonials
