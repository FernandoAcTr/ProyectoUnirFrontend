import { Separator } from '../../components'
import Header from './header'

const formas = [
  {
    title: 'Forma Cuadrada',
    description:
      'Tienen casi la misma medida de largo que de ancho, las medidas de las mejillas, la frente y la mandíbula deben ser similares. La mandíbula tiene ángulos bien definidos y rectos en sus esquinas más anchas. La cara con forma cuadrada se ven bien con armazones que equilibran sus líneas pronunciadas, así que busca los redondos u ovalados. Para reducir la apariencia de tener una mandíbula muy pronunciada, busca un marco de bordes delgados y delicados (hecho de metal y de un color similar al tono de tu piel) para definir la forma de tu cara. Los armazones deben ser un poco más anchos que tus pómulos para que te quede bien.',
    imgM: '/img/cuadrada-m.jpg',
    imgH: '/img/cuadrada-h.jpg',
  },
  {
    title: 'Forma Rectangular',
    description:
      'Son más largas que anchas, las mejillas tienen la misma medida que la frente y la línea de la mandíbula. Tienen ángulos bien definidos y rectos en sus esquinas. Las caras rectangulares se ven mejor con los marcos redondos o curvos, que atenúan su largo ligeramente y enfatizan su ancho. Elige los que tengan los bordes superiores e inferiores de la misma forma, pues esto interrumpirá el largo de la cara. También elige los marcos que tengan un puente bajo, que reduce el tamaño de la nariz. Un buen ejemplo son los lentes estilo aviador, pues su forma de gota ayudan a acentuar tus mejillas y los huesos de la mandíbula. De forma redonda o cuadrada, no importa, lo vital es que te asegures de que sean grandes, para que luzcan y no se pierdan en tu cara.',
    imgM: '/img/rectangular-m.jpg',
    imgH: '/img/rectangular-h.jpg',
  },
  {
    title: 'Forma Ovalada',
    description:
      'Son más largas que anchas, las mejillas son un poco más anchas que la medida de la frente y la línea de la mandíbula, el mentón es algo redondo. Las caras ovaladas se ven excelentes con cualquier tipo de armazon, ya sean de lágrima, redondos o de pasta, así que elige alguno que se adapte a tu personalidad. Puedes jugar con los colores y estilos que se acomoden a tu estado de ánimo, y sentirte confiado si pruebas las tendencias más recientes o eliges una opción clásica para estar seguro de que esté de moda por más tiempo.',
    imgM: '/img/ovalada-m.jpg',
    imgH: '/img/ovalada-h.jpg',
  },
  {
    title: 'Forma Redonda',
    description:
      'Tienen casi la misma medida de largo que de ancho, las mejillas son más anchas que la medida de la frente y la línea de la mandíbula, el mentón es curvo y redondo. Las caras redondas se ven mejor con los marcos que tienen ángulos pronunciados, como los cuadrados y rectangulares. Estos suelen hacer que esta se vea más larga e interrumpen su suavidad. Si tienes una cara muy rellena, considera los rectángulos horizontales, que hacen que se vea más delgada.',
    imgM: '/img/redonda-m.jpg',
    imgH: '/img/redonda-h.jpg',
  },
  {
    title: 'Forma Triangular',
    description:
      'Son ligeramente más largas que anchas, su mentón es relativamente estrecho, delgado y largo. Las caras triangulares se ven geniales con los lentes que destacan la mitad superior del marco, como los semi al aire o los ascendentes, o que tienen dos tonos, siendo la parte de arriba más oscura que la de abajo, también lentes metálicos delgados o armazones de plástico transparente, así lograrás equilibrar tu rostro.',
    imgM: '/img/triangular-m.jpg',
    imgH: '/img/triangular-h.jpg',
  },
  {
    title: 'Forma Diamante',
    description:
      'Son más largas que anchas, las mejillas son ligeramente más anchas que la frente y la línea de la mandíbula. Tienen ángulos bien definidos y rectos en sus esquinas. Las caras de forma de diamante les acomoda casi todo tipo de armazones, aunque si se usan lentes de forma rectangular serán un elemento de equilibrio a tu barbilla. Los estilos y formas llenas de color y detalles, también serán un buen elemento para suavizar la mitad inferior del rostro.',
    imgM: '/img/diamante-m.jpg',
    imgH: '/img/diamante-h.jpg',
  },
  {
    title: 'Forma Corazon',
    description:
      'Se identifican por su forma de triángulo invertido, son más largas que anchas, las mejillas y la frente son más anchas que la línea de la mandíbula, por lo general tienen la entrada del cabello en forma de triángulo y un mentón relativamente puntiagudo. Al igual que una cara triangular, el objetivo es agregar equilibrio a la frente y barbilla. Sin embargo, a diferencia de la triangular, debes de utilizar armazones ovalados, así lograrás suavizar los pómulos.',
    imgM: '/img/corazon-m.jpg',
    imgH: '/img/corazon-h.jpg',
  },
]

const FormaCara = () => {
  return (
    <div>
      <Header />
      <h2 className='text-center text-3xl font-light mt-8 mb-2'>
        Cómo elegir el armazón de acuerdo a la forma de tu cara
      </h2>
      <h3 className='text-center'>Identifica cómo comprar el lente ideal para tí.</h3>
      <Separator />

      <p className='max-w-6xl mx-auto mt-12 px-5 mb-12'>
        Hoy en día hay muchas opciones de lentes atractivos y a la moda. La primera regla para elegir armazones es
        seleccionar una opción que te encante y que te haga sentir seguro de ti mismo. Una manera de encontrar unos que
        acentúen mejor tus rasgos es escoger los que complementen la forma y el tono de tu piel, y que también
        representen tu estilo.
      </p>

      <div className='bg-primary-700 text-white py-8 text-center'>
        <h4 className='text-2xl mb-3'>Pasos para sacar la forma de tu cara</h4>
        <p>
          Necesitarás una cinta métrica flexible (no una regla rígida) <br /> que pueda acoplarse con comodidad a las
          curvas de tu cara.
        </p>
      </div>

      <div className='container flex flex-wrap justify-between py-12'>
        <img
          src='/img/rostro-medida-mujer.jpg'
          alt='Medida de Rostro para Mujer'
          className='rounded-full'
          width={550}
        />
        <img
          src='/img/rostro-medida-hombre.jpg'
          alt='Medida de Rostro para Hombre'
          className='rounded-full'
          width={550}
        />
      </div>

      <div className='px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className='text-center'>
          <p className='text-4xl font-sans'>1</p>
          <p className='my-3 text-xl'>Mide la longitud (largo) de tu cara</p>
          <p>
            Ubica el punto medio exacto de tu línea de cabello (la línea que se forma donde el cabello se une con la
            frente), empieza a medir desde ese punto pasando sobre tu nariz y hasta la punta de tu mentón.
          </p>
        </div>

        <div className='text-center'>
          <p className='text-4xl font-sans'>2</p>
          <p className='my-3 text-xl'>Mide tu frente</p>
          <p>
            Ubica la parte más ancha de tu frente. Por lo general, se encuentra casi en medio de las cejas. Coloca la
            cinta métrica en el punto de inicio en un lado de tu frente, en su punto más ancho y mide hasta el otro
            punto en el lado opuesto.
          </p>
        </div>

        <div className='text-center'>
          <p className='text-4xl font-sans'>3</p>
          <p className='my-3 text-xl'>Mide de una mejilla a la otra</p>
          <p>
            Mide a través de la parte superior de tus pómulos. Coloca el extremo de la cinta métrica justo después de la
            esquina exterior de tu ojo, este es tu punto de inicio y hasta llegar al otro punto del lado opuesto.
          </p>
        </div>

        <div className='text-center'>
          <p className='text-4xl font-sans'>4</p>
          <p className='my-3 text-xl'>Mide la línea de tu mandíbula</p>
          <p>
            Ubica la parte inferior de las orejas e identifica el inicio de tu mandibula. Este será el punto de inicio
            para tu medición. Mide desde este punto hasta la punta de tu mentón y la medida que te de multiplicala por
            dos para obtener la longitud combinada de ambos lados de tu mandíbula.
          </p>
        </div>
      </div>

      <div className='bg-primary-700 text-white py-8 text-center mb-12'>
        <h4 className='text-2xl mb-3'>
          Te mostraremos las diferentes formas de cara y el armazón ideal para cada una.
        </h4>
        <p>
          En general, los armazones agregan más interés y se ven perfectos cuando contrastan con tus características
          naturales, lo que quiere decir que las caras más redondeadas se ven mejor con los lentes más angulosos,
          mientras que las caras con ángulos más pronunciados se ven mejor con los lentes más redondeados.
        </p>
      </div>

      {formas.map((forma) => (
        <div className='container mb-20'>
          <h4 className='text-center text-2xl uppercase font-light mb-4'>{forma.title}</h4>
          <p className='max-w-6xl mx-auto text-center font-extralight text-sm leading-relaxed'>{forma.description}</p>
          <div className='flex flex-wrap justify-evenly'>
            <img src={forma.imgM} alt='Imagen Cara Cuadrada Mujer' className='rounded-full' width={300} />
            <img src={forma.imgH} alt='Imagen Cara Cuadrada Hombre' className='rounded-full' width={300} />
          </div>
          <p className='text-xl text-center font-light my-12 uppercase'>Te mostramos algunas recomendaciones</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {Array.from({ length: 4 }).map(() => (
              <div className='text-center'>
                <p className='text-xs leading-loose'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ab vitae
                </p>
                <img
                  src='https://www.blockbluelight.co.uk/cdn/shop/products/blockbluelight-blue-light-filter-computer-glasses-clear-lens-screentime-billie-computer-glasses-black-29752330322052.jpg?v=1651274298'
                  alt='Recomendación'
                  width={255}
                  className='mx-auto'
                />
                <button className='border p-2 px-5 rounded-full bg-accent-400 hover:bg-accent-500 hover:text-black transition-all'>
                  Comprar
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FormaCara
