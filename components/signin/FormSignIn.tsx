'use client'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
import type { UserLi } from '../../models/User'
import { logIn } from './../../redux/features/auth-slice'
import { setUser } from '@/redux/features/activeUser-slice'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/redux/store'
import { useState } from 'react'
import Spinner from '../Spinner'

const FormSignIn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [loading, setLoading] = useState(false)
  const { register, getValues, control, handleSubmit, formState: { errors } } = useForm<UserLi>()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onSubmit: SubmitHandler<UserLi> = async (data) => {
    setLoading(true)
    const values = getValues()

    const baseUrl = 'http://ec2-3-208-12-227.compute-1.amazonaws.com:8080/'
    const endpoint = 'user/login'
    const response = await fetch(baseUrl + endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })

    setLoading(false)
    if (response.status === 202) {
      console.log(values)
      const data = await response.json()
      console.log(data)
      localStorage.setItem('token', data.jwt)
      dispatch(logIn(data))
      const endpoint2 = 'user/dataUser'

      const obtenerUser = await fetch(baseUrl + endpoint2, {
        method: 'GET',
        headers: {
          token: data.jwt,
          'Content-Type': 'application/json'
        }
      })

      if (obtenerUser.status === 200) {
        const infoUser = await obtenerUser.json()
        console.log('Data del usuario:', infoUser)
        dispatch(setUser(infoUser))
        window.location.href = '/'
      } else {
        console.error('Second API call failed:', obtenerUser.status)
      }
    } else {
      setErrorMessage('Credenciales inválidas')
    }
  }

  return (
    <>
      <div className="flex justify-center items-center pt-6 pb-4">
        { loading && <Spinner/> }
        <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-[480px]">
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
                  className={`border border-gray-300 pl-4 rounded-xl h-14 w-full ${errors.email !== null && errors.email !== undefined ? 'border-red-500' : ''}`}
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
                  className={`border border-gray-300 pl-4 rounded-xl h-14 w-full ${errors.password !== null && errors.password !== undefined ? 'border-red-500' : ''}`}
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
            {errors.password !== null && errors.password !== undefined && <p className="text-red-500">{errors.password.message}</p>}
            {errorMessage !== null && <p className="text-red-500 pl-1">{errorMessage}</p>}
          </div>

          <div className="mt-10">
            <button type="submit" className="text-white font-poppins text-base font-medium w-full rounded-xl h-14 bg-gradient-to-b from-[#975D93] to-[#DCA6D8] transition duration-300 hover:to-[#975D93] ">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
export default FormSignIn
