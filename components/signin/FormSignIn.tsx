'use client'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
import type { User } from '../../models/User'
import { logIn } from './../../redux/features/auth-slice'
import { setUser } from '@/redux/features/activeUser-slice'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/redux/store'
import { useState } from 'react'

const FormSignIn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { register, getValues, control, handleSubmit, formState: { errors } } = useForm<User>()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onSubmit: SubmitHandler<User> = async (data) => {
    const values = getValues()
    const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })

    if (response.status === 200) {
      const data = await response.json()
      localStorage.setItem('token', data.token)
      dispatch(logIn(data.user.email))
      dispatch(setUser(data.user))
      window.location.href = '/'
    } else {
      setErrorMessage('Credenciales inválidas')
    }
  }

  return (
    <>
      <div className="flex justify-center items-center  pt-6 pb-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8">
            <Controller
              name="email"
              control={control}
              rules={{ required: 'Ingrese su email' }}
              render={({ field }) => (
                <input
                  {...register('email')}
                  id="email"
                  type="text"
                  placeholder='Email'
                  className={`border border-gray-300 pl-4 w-[480px] rounded-xl h-14 ${errors.email !== null && errors.email !== undefined ? 'border-red-500' : ''}`}
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0em',
                    textAlign: 'left'
                  }}
                />
              )}
            />
            {errors.email !== null && errors.email !== undefined && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <Controller
              name="password"
              control={control}
              rules={{ required: 'Ingrese su contraseña' }}
              render={({ field }) => (
                <input
                  {...register('password')}
                  id="password"
                  type="password"
                  placeholder='Contraseña'
                  className={`border border-gray-300 pl-4 w-[480px] rounded-xl h-14  ${errors.password !== null && errors.password !== undefined ? 'border-red-500' : ''}`}
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0em',
                    textAlign: 'left'
                  }}
                />
              )}
            />
            {errors.password !== null && errors.password !== undefined && <p className="text-red-500 w-[480px] ">{errors.password.message}</p>}
            {errorMessage !== null && <p className="text-red-500 pl-1">{errorMessage}</p>}
          </div>

          <div className="mt-10">
            <button type="submit" className="text-white font-poppins text-base font-medium w-[480px] rounded-xl h-14 bg-gradient-to-b from-[#975D93]  to-[#DCA6D8] transition duration-300  hover:to-[#975D93] ">Confirmar</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default FormSignIn
