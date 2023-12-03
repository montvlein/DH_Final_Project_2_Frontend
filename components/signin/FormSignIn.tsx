'use client'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
import type { UserLi } from '../../models/User'
import { logIn } from './../../redux/features/auth-slice'
import { setUser } from '@/redux/features/activeUser-slice'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/redux/store'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { GoldenApi } from '@/api/data'
import GetUserInfo from '@/services/GetUser'

const FormSignIn: React.FC<any> = ({ setLoading }: { setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const { register, getValues, control, handleSubmit, formState: { errors } } = useForm<UserLi>()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onSubmit: SubmitHandler<UserLi> = async (data) => {
    setLoading(true)
    const values = getValues()

    const baseUrl = GoldenApi.base
    const endpoint = GoldenApi.endoints.user.login
    fetch(baseUrl + endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
      .then(async (response) => await response.json())
      .then(async (data) => {
        if (data.error) throw new Error(data.message)
        localStorage.setItem('token', data.jwt)
        dispatch(logIn(data.jwt))

        const infoUser = await GetUserInfo()
        dispatch(setUser(infoUser))
        router.push('/')
      })
      .catch(err => {
        console.error('First API call failed:', err.message)
        setErrorMessage('Credenciales inválidas')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div className="flex justify-center items-center pt-6 pb-4">
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
