import ReactTypingEffect from 'react-typing-effect'
import '../../assets/css/home.css'

const Header = () => {
  return (
    <header className='header header__bg'>
      <div className='header__overlay'></div>
      <div className='header__content'>
        <p className='header__welcome'>¡Hola! Bienvenido a</p>
        <ReactTypingEffect
          text={['Óptica Tovar', 'La Óptica que Cortazar prefiere.', 'Tu mejor opción.']}
          cursorClassName='text-3xl lg:text-7xl'
          typingDelay={500}
          speed={50}
          eraseSpeed={50}
          eraseDelay={2500}
          displayTextRenderer={(text) => {
            return (
              <h1 className='header__title'>
                {text.split('').map((char, i) => {
                  const key = `${i}`
                  return <span key={key}>{char}</span>
                })}
              </h1>
            )
          }}
        />
        <button className='header__cta'>Tienda</button>
      </div>
    </header>
  )
}

export default Header
