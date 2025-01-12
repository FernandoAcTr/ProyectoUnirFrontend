const HomePage = () => {
  return (
    <div className='bg-[url(/img/banner3.jpg)] bg-cover bg-center h-[80vh] relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60'></div>
      <div className='pt-16 relative flex flex-col items-center justify-center gap-4 z-10 text-white h-full'>
        <p>¡Hola! Bienvenido a</p>
        <h1 className='text-7xl mb-6 font-bold'>Óptica Tovar</h1>
        <button className='border border-white p-2 px-5 rounded-full'>Tienda</button>
      </div>
    </div>
  )
}

export default HomePage
