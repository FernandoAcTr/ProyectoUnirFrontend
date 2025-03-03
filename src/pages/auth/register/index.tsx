import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuthContext } from '../../../context/auth.context'
import { string, useForm } from 'react-form-ease'

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { register } = useAuthContext()
  const navigate = useNavigate()

  const { formData, validateForm, updateForm, errors } = useForm({
    data: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validations: {
      name: (v) => string(v).required('Campo requerido').validate(),
      email: (v) => string(v).required('Campo requerido').email('Ingresa un email válido').validate(),
      password: (v) => string(v).required('Campo requerido').validate(),
      confirmPassword: (v, data) => {
        const error = string(v).required('Campo requerido').validate()
        if (error) return error
        if (v !== data.password) return 'Las contraseñas no coinciden'
      },
    },
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    await register(formData.name, formData.email, formData.password)

    navigate('/tienda')
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
              Nombre
            </label>
            <input
              type='text'
              id='name'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Nombre'
              value={formData.name}
              onChange={(e) => updateForm({ name: e.target.value })}
            />
            {errors?.name && <p className='text-red-500 text-xs italic'>{errors.name}</p>}
          </div>
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
              placeholder='Contraseña'
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
          <div className='mb-4 mt-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='confirmPassword'>
              Confirmar Contraseña
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id='confirmPassword'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Confirmar Contraseña'
              value={formData.confirmPassword}
              onChange={(e) => updateForm({ confirmPassword: e.target.value })}
            />
            {errors?.confirmPassword && <p className='text-red-500 text-xs italic'>{errors.confirmPassword}</p>}
          </div>
          <div className='flex items-center justify-between mt-6'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Registrarse
            </button>
          </div>
          <div className='mt-4 text-center'>
            <span className='text-gray-700'>¿Ya tienes cuenta?</span>
            <Link to='/login' className='text-blue-500 hover:text-blue-700 ml-2'>
              Iniciar sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
