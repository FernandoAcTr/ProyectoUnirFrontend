import { useMemo, useState } from 'react'
import { Separator } from '../../components'
import Header from './header'
import '../../assets/css/faqs.css'

const faqs = [
  {
    subject: 'Garantías',
    questions: [
      {
        question: '¿Cuáles son las garantías con las que cuentan mis lentes?',
        answer: [
          'Para tus lentes oftálmicos y/o solares con o sin graduación, cuentas con garantías de calidad e imagen',
          'Para las micas y/o tratamientos puedes solicitar garantías de: Adaptación, Imagen y Calidad.',
          'En los lentes de contacto, contamos con las garantías de: Adaptación, Imagen y Calidad.',
          'Aplica en armazones oftálmicos o solares graduados, y lentes de contacto con graduación.',
        ],
      },
      {
        question: '¿Cuánto tiempo de vigencia tengo para hacer válidas las garantías?',
        answer: [
          'Los armazones disponen de una garantía de medio año por defectos de fábrica y las micas dos semanas contra defecto de fábrica o incomodidad en la graduación',
        ],
      },
      {
        question: 'Si no me siento cómodo con la graduación, ¿Qué garantía solicito?',
        answer: [
          'Visita nuestra sucursal, puedes solicitar la Garantía de Adaptación, esto hasta que tu visión sea nítida y clara. Lleva tu ticket para hacerla valida.',
        ],
      },
      {
        question: 'Si ya no me gustó el color de mis lentes, me los pueden cambiar?',
        answer: [
          'Si quieres cambiar el color, diseño, o tamaño solicita la Garantía de Imagen* de tus lentes. Solo llévalos a la óptica de tu preferencia junto con el ticket para hacerla válida. El producto para cambio debe estar en buenas condiciones, sin rayaduras y con su estuche, paño y empaque original.',
        ],
      },
    ],
  },
  {
    subject: 'Lentes oftálmicos',
    questions: [
      {
        question: '¿El precio que aparece en el armazón es el costo total del trabajo completo?',
        answer: ['No, ya que el costo es por separado armazón, micas y tratamientos.'],
      },
      {
        question: '¿Con que accesorios se entrega el producto?',
        answer: ['Se entregan con el estuche y paño del armazón (Dependiendo de la marca y modelo).'],
      },
      {
        question: '¿Cuáles son los lentes que te protegen al utilizar la computadora?',
        answer: [
          'Manejamos el tratamiento Eyezen que protege tus ojos de la luz digital (filtra la luz azul), te compartimos información del tratamiento en la siguiente liga: http://www.eyezen.com.mx/',
        ],
      },
      {
        question: '¿Fechas de entrega?',
        answer: [
          'En armazones oftálmicos es en un periodo de 10-15 días hábiles, en armazones solares es de 8-10 días hábiles.',
        ],
      },
    ],
  },
  {
    subject: 'Atención a clientes',
    questions: [
      {
        question: '¿Cómo puedo saber el status de mis lentes?',
        answer: [
          'Con gusto en óptica pueden informarle el status de su pedido o bien puede ponerse en contacto con nosotros con cualquiera de las formas que se encuentran en nuestra paǵina de contacto y con gusto lo atenderemos para que pueda verificar en que proceso se encuentra su orden de pedido. Es importante que tenga a la mano su ticket de compra ya que se le solicitarán algunos datos que aparecen en el mismo',
        ],
      },
      {
        question: 'No veo bien con mis lentes, ¿qué puedo hacer?',
        answer: [
          'Le recomendamos acudir a óptica para la realización de un nuevo examen aplicando su garantía de adaptación que tiene una vigencia de 2 semanas para lente oftálmico y 90 días para lente de contacto graduado a partir de la fecha de entrega.',
        ],
      },
      {
        question: '¿Qué convenios especiales tienen? (empleados de gobierno, maestros, etc)',
        answer: [
          'Para conocer más sobre de los convenios favor de comunicarse con con nosotros con cualquiera de las formas que se encuentran en nuestra paǵina de contacto',
        ],
      },
      {
        question: '¿Cómo puedo hacer una cotización?',
        answer: [
          'Para una cotización debes asistir a la sucursal de tu preferencia o puedes simular el proceso de compra y el precio te aparecerá en la parte superior derecha.',
        ],
      },
    ],
  },
  {
    subject: 'Lentes de contacto',
    questions: [
      {
        question: '¿Cuánto tiempo de uso tienen los lentes de contacto?',
        answer: ['Los lentes de contacto tienen una duración de 1 año a partir de la fecha de apertura del empaque.'],
      },
      {
        question: '¿Puedo dormir con mis lentes de contacto?',
        answer: ['No, no es recomendable dormir con los lentes de contacto ya que pueden causar daños en la córnea.'],
      },
      {
        question: '¿Cuánto tiempo puedo tener puesto mis lentes de contacto?',
        answer: ['El tiempo máximo de uso de los lentes de contacto es de 8 horas al día.'],
      },
      {
        question: '¿Puedo usar lentes de contacto si tengo astigmatismo?',
        answer: ['Sí, existen lentes de contacto especiales para personas con astigmatismo.'],
      },
    ],
  },
]

const Faqs = () => {
  const [search, setSearch] = useState('')

  const filteredFaqs = useMemo(() => {
    return faqs.filter((item) => {
      const questions = item.questions.filter((q) => {
        return q.question.toLowerCase().includes(search.toLowerCase())
      })

      return questions.length > 0
    })
  }, [search])

  return (
    <div className="faqs">
      <Header />
      <h2 className="faqs__title">Preguntas Frecuentes</h2>
      <h3 className="faqs__subtitle">Respondemos a las preguntas más comúnes, para que no te quedes con ninguna duda.</h3>
      <Separator />

      <div className="faqs__search-container">
        <input
          type="text"
          placeholder="Buscar pregunta..."
          className="faqs__search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="faqs__content">
        {filteredFaqs.length == 0 && (
          <div className="faqs__no-results">
            Lo sentimos, no encontramos resultados para tu búsqueda.
          </div>
        )}

        {filteredFaqs.map((item) => (
          <div className="faqs__category" key={item.subject}>
            <h2 className="faqs__category-title">{item.subject}</h2>
            <div className="faqs__questions">
              {item.questions.map((q) => (
                <div className="faqs__question-item" key={q.question}>
                  <h3 className="faqs__question-title">{q.question}</h3>
                  {q.answer.map((aw) => (
                    <p className="faqs__question-answer" key={aw}>
                      {aw}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faqs
