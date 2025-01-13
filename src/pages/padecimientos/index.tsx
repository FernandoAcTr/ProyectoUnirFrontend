import { SectionTitle } from '../../components'
import Header from './header'

const PadecimietosPage = () => {
  return (
    <div>
      <Header />
      <SectionTitle text='Padecimientos' className='my-12' />

      <div className='container flex flex-wrap items-start justify-center gap-6 mb-12'>
        <div className='w-full lg:w-1/2'>
          <p className='mb-3'>
            La mayoría de las personas tienen algún tipo de problema visual en algún momento de la vida. Algunas dejan
            de poder ver objetos lejanos; a otras les cuesta mucho leer la letra pequeña. Este tipo de problemas suelen
            ser fáciles de tratar, con lentes graduados (oftálmicos) o lentes de contacto.
          </p>
          <p className='mb-5'>Estos son algunos de los principales problemas</p>
          <ul className='list-disc list-inside pl-10'>
            <li>Miopía</li>
            <li>Hipermetropía</li>
            <li>Astigmatismo</li>
          </ul>
        </div>
        <img src='/img/padecimientos-intro.jpg' alt='Examen de la vista' />
      </div>

      <div className='px-5'>
        <div className='mb-12'>
          <h3 className='p-5 bg-primary-700 text-white text-xl uppercase mb-4'>Miopía</h3>
          <div className='flex flex-wrap justify-between items-center'>
            <img src='/img/miopia.jpg' alt='Miopioa' className='w-full lg:w-4/12' />
            <div className='w-full lg:w-7/12'>
              <p className='mb-4'>
                La miopía es un defecto de refracción del ojo en el cual los rayos de luz paralelos convergen en un
                punto focal situado delante de la retina, en lugar de converger en la misma retina; es el defecto
                inverso a la hipermetropía, en la que los rayos de luz llegan a la retina antes de converger.
              </p>
              <p className='mb-4'>
                Puede definirse también como un exceso de potencia de refracción de los medios transparentes del ojo con
                respecto a su longitud, por lo que los rayos luminosos procedentes de objetos situados a cierta
                distancia del ojo convergen hacia un punto anterior a la retina.
              </p>
              <p className='mb-4'>
                Una persona con miopía tiene dificultades para enfocar bien los objetos lejanos, lo que provoca déficit
                de agudeza visual y puede conducir también a dolores de cabeza, estrabismo, incomodidad visual e
                irritación del ojo.
              </p>
            </div>
          </div>
        </div>

        <div className='mb-12'>
          <h3 className='p-5 bg-primary-700 text-white text-xl uppercase mb-4'>Hipermiopía (Hipermetropía)</h3>
          <div className='flex flex-wrap justify-between items-center'>
            <img src='/img/hipermetropia.jpg' alt='Miopioa' className='w-full lg:w-4/12' />
            <div className='w-full lg:w-7/12'>
              <p className='mb-4'>
                La hipermetropía es un defecto ocular de refracción que consiste en que los rayos de luz que vienen del
                infinito inciden en el ojo humano, convergiendo detrás de la retina, formando de esta manera el foco o
                imagen. Es debida casi siempre a que el ojo es muy corto en su eje antero-posterior.
              </p>
              <p className='mb-4'>
                Es un defecto muy frecuente, aunque no es progresivo ni tiene repercusiones graves. Se trata mediante el
                uso de lentes compensadoras convergentes o convexas y/o se corrige con cirugías refractivas a base de
                rayos láser. La hipermetropía, la miopía y el astigmatismo son los principales defectos de refracción o
                ametropías.
              </p>
              <p className='mb-4'>La magnitud de este defecto se mide en dioptrías positivas.</p>
            </div>
          </div>
        </div>

        <div className='mb-12'>
          <h3 className='p-5 bg-primary-700 text-white text-xl uppercase mb-4'>Astigmatismo</h3>
          <div className='flex flex-wrap justify-between items-center'>
            <img src='/img/astigmatismo.jpg' alt='Miopioa' className='w-full lg:w-4/12' />
            <div className='w-full lg:w-7/12'>
              <p className='mb-4'>
                El astigmatismo es un defecto ocular que se caracteriza porque existe una refracción diferente entre dos
                meridianos oculares, lo que impide el enfoque claro de los objetos. Generalmente se debe a una
                alteración en la curvatura anterior de la córnea.
              </p>
              <p className='mb-4'>
                La córnea es la región transparente que se encuentra en el polo anterior del ojo y actúa como una lente
                a través de la cual pasa la luz que se enfoca sobre la retina en la parte posterior del ojo.
              </p>
              <p className='mb-4'>
                La superficie de la córnea debe ser simétrica y regular en sus curvaturas, de no ser así se produce el
                astigmatismo.
              </p>
            </div>
          </div>
        </div>

        <div className='mb-12'>
          <h3 className='p-5 bg-primary-700 text-white text-xl uppercase mb-4'>Visión 20 / 20</h3>
          <div className='flex flex-wrap justify-between items-center'>
            <img src='/img/vista-2020.jpg' alt='Miopioa' className='w-full lg:w-4/12' />
            <div className='w-full lg:w-7/12'>
              <p className='mb-4'>
                Una visión 20/20 no necesariamente significa que se tenga una visión perfecta, se refiere únicamente a
                la capacidad de la visión a distancia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PadecimietosPage
