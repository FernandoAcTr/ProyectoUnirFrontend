const Header = () => {
  return (
    <header className='bg-[url(/img/banner3.avif)] bg-cover bg-center h-[80vh] relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60'></div>
      <div className='pt-16 relative flex flex-col items-center justify-center gap-4 z-10 text-white h-full'>
        <h1 className='text-7xl mb-6 font-bold text-center'>¿Cómo elegir el mejor marco <br /> para tu cara?</h1>
        <button className='border border-white p-2 px-5 rounded-full hover:bg-white hover:text-black transition-all'>
          Tienda
        </button>
      </div>
    </header>
  )
}

export default Header
