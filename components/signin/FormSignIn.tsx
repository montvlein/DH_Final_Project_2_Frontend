'use client'
import React, { useState } from 'react'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
import type { User } from '../../models/User'
import { logIn } from './../../redux/features/auth-slice'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/redux/store'
// import { redirect } from 'next/navigation'
// import { useRouter } from 'next/router'

const FormSignIn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  // const router = useRouter()
  const { register, getValues, control, handleSubmit, formState: { errors } } = useForm<User>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit: SubmitHandler<User> = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users/read')
      if (response.status === 200) {
        const data = await response.json()
        console.log('Lista de usuarios', data)
        const values = getValues()
        console.log(values)
        alert('login exitoso')
        dispatch(logIn(values.email))
      } else {
        console.error('Error al obtener la lista de usuarios')
      }
    } catch (error) {
      console.error('Error de red:', error)
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
