import { Separator } from '../../components'

const Header = () => {
  return (
    <header className='bg-primary-700 h-52 flex flex-col items-center justify-center'>
      <h1 className='text-3xl mb-6 font-bold text-center text-white'>Detalle del Producto</h1>
      <Separator />
    </header>
  )
}

export default Header
