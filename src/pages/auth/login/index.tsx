import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuthContext } from '../../../context/auth.context'
import { string, useForm } from 'react-form-ease'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuthContext()
  const navigate = useNavigate()

  const { formData, validateForm, updateForm, errors } = useForm({
    data: {
      email: '',
      password: '',
    },
    validations: {
      email: (v) => string(v).required('Campo requerido').email('Ingresa un email válido').validate(),
      password: (v) => string(v).required('Campo requerido').validate(),
    },
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    await login(formData.email, formData.password)

    const params = new URLSearchParams(window.location.search)
    const redirect = params.get('redirect')

    navigate(redirect || '/tienda')
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Inciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Email'
              value={formData.email}
              onChange={(e) => updateForm({ email: e.target.value })}
            />
            {errors?.email && <p className='text-red-500 text-xs italic'>{errors.email}</p>}
          </div>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            Contraseña
          </label>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Password'
              value={formData.password}
              onChange={(e) => updateForm({ password: e.target.value })}
            />
            <button
              type='button'
              className='absolute right-0 -translate-y-1/2 top-1/2 pr-3'
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <i className='fa-solid fa-lock-open text-gray-700'></i>
              ) : (
                <i className='fa-solid fa-lock text-gray-700'></i>
              )}
            </button>
          </div>
          {errors?.password && <p className='text-red-500 text-xs italic'>{errors.password}</p>}

          <div className='flex items-center justify-between mt-6'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Iniciar sesión
            </button>
          </div>
          <div className='mt-4 text-center'>
            <span className='text-gray-700'>¿No tienes cuenta?</span>
            <Link to='/register' className='text-blue-500 hover:text-blue-700 ml-2'>
              Regístrate
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
