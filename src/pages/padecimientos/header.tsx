const Header = () => {
  return (
    <header className='bg-[url(/img/banner.jpg)] bg-cover bg-center h-[80vh] relative'>
      <div className='pt-16 relative flex flex-col items-center justify-center gap-4 z-10 text-white h-full'>
        <h1 className='text-7xl mb-6 font-bold'>Padecimientos</h1>
        <button className='border border-white p-2 px-5 rounded-full hover:bg-white hover:text-black transition-all'>
          Tienda
        </button>
      </div>
    </header>
  )
}

export default Header
