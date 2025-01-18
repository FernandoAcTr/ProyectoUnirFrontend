import { SectionTitle, Spacer } from '../../components'

const Filosofia = () => {
  return (
    <section className='filosofia'>
      <SectionTitle text='¡El mejor servicio, con la mejor calidad!' />
      <div className='filosofia__grid'>
        <div className='filosofia__card'>
          <img src='/img/mision.png' alt='Mision' className='filosofia__image' />
          <Spacer />
          <h3 className='filosofia__title'>Misión</h3>
          <Spacer />
          <p>
            Mantenerse líder en el sector Óptico realizando diagnósticos precisos mediante Lic en Optometría, Nuestro
            objetivo es llevar salud visual a la población y darles una nueva visión del mundo.
          </p>
        </div>

        <div className='filosofia__card'>
          <img src='/img/vision.png' alt='Vision' className='filosofia__image' />
          <Spacer />
          <h3 className='filosofia__title'>Visión</h3>
          <Spacer />
          <p>
            Ser la empresa líder en el sector Óptico en la región, ofreciendo productos y servicios de calidad, con
            tecnología de punta y personal altamente calificado.
          </p>
        </div>

        <div className='filosofia__card'>
          <img src='/img/valores.png' alt='Valores' className='filosofia__image' />
          <Spacer />
          <h3 className='filosofia__title'>Valores</h3>
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
