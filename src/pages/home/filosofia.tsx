import { SectionTitle, Spacer } from '../../components'

const Filosofia = () => {
  return (
    <section className='mt-12 mb-20'>
      <SectionTitle text='¡El mejor servicio, con la mejor calidad!' />
      <div className='container grid grid-cols-1 lg:grid-cols-3 mt-6 gap-10'>
        <div className='border p-5 rounded-lg shadow-lg w-full mx-auto flex flex-col'>
          <img src='/img/mision.png' alt='Mision' width={100} className='mx-auto' />
          <Spacer />
          <h3 className='text-center font-semibold my-4 text-lg'>Misión</h3>
          <Spacer />
          <p>
            Mantenerse líder en el sector Óptico realizando diagnósticos precisos mediante Lic en Optometría, Nuestro
            objetivo es llevar salud visual a la población y darles una nueva visión del mundo.
          </p>
        </div>

        <div className='border p-5 rounded-lg shadow-lg w-full mx-auto flex flex-col'>
          <img src='/img/vision.png' alt='Vision' width={100} className='mx-auto' />
          <Spacer />
          <h3 className='text-center font-semibold my-4 text-lg'>Visión</h3>
          <Spacer />
          <p>
            Ser la empresa líder en el sector Óptico en la región, ofreciendo productos y servicios de calidad, con
            tecnología de punta y personal altamente calificado.
          </p>
        </div>

        <div className='border p-5 rounded-lg shadow-lg w-full mx-auto flex flex-col'>
          <img src='/img/valores.png' alt='Valores' width={100} className='mx-auto' />
          <Spacer />
          <h3 className='text-center font-semibold my-4 text-lg'>Valores</h3>
          <Spacer />
          <p>
            Honestidad, Responsabilidad, Respeto, Compromiso, Calidad, Servicio, Innovación, Trabajo en equipo y
            Profesionalismo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Filosofia
