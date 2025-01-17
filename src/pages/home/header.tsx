import ReactTypingEffect from 'react-typing-effect'

const Header = () => {
  return (
    <header className='bg-[url(/img/banner3.jpg)] bg-cover bg-center h-[80vh] relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60'></div>
      <div className='pt-16 relative flex flex-col items-center justify-center gap-4 z-10 text-white h-full'>
        <p>¡Hola! Bienvenido a</p>
        <ReactTypingEffect
          text={['Óptica Tovar', 'La Óptica que Cortazar prefiere.', 'Tu mejor opción.']}
          cursorClassName='text-3xl lg:text-7xl'
          typingDelay={500}
          speed={50}
          eraseSpeed={50}
          eraseDelay={2500}
          displayTextRenderer={(text) => {
            return (
              <h1 className='text-3xl lg:text-7xl mb-6 font-bold text-center'>
                {text.split('').map((char, i) => {
                  const key = `${i}`
                  return <span key={key}>{char}</span>
                })}
              </h1>
            )
          }}
        />
        <button className='border border-white p-2 px-5 rounded-full hover:bg-white hover:text-black transition-all'>
          Tienda
        </button>
      </div>
    </header>
  )
}

export default Header
