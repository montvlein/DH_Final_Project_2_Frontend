'use client'
import React from 'react'
import type { User } from '../../models/User'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
import type { AppDispatch } from '@/redux/store'
import { openModal } from '@/redux/features/modal-slice'
import ModalSu from './ModalSu'
import { useDispatch } from 'react-redux'
import { logIn } from '@/redux/features/auth-slice'
import { setUser } from '@/redux/features/activeUser-slice'
import { GoldenApi } from '@/api/data'
import GetUserInfo from '@/services/GetUser'

const FormRegistro: React.FC<any> = ({ setLoading, isAdmin }: { setLoading: React.Dispatch<React.SetStateAction<boolean>>, isAdmin: boolean }) => {
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm<User>()
  const dispatch = useDispatch<AppDispatch>()
  const createUser: SubmitHandler<User> = async (user: User) => {
    const baseUrl = GoldenApi.base
    const endpoint = GoldenApi.endoints.user.signup
    const apiUrl = baseUrl + endpoint

    try {
      setLoading(true)
      user.role = isAdmin ? 'ADMIN' : 'USER'
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      setLoading(false)
      if (response.status === 201) {
        const data = await response.json()
        reset()

        if (!isAdmin) {
          dispatch(logIn(data.jwt))

          const infoUser = await GetUserInfo()
          dispatch(setUser(infoUser))
        }

        dispatch(openModal())
      } else {
        console.error('Error al crear el usuario')
        throw new Error('Error al crear el usuario')
      }
    } catch (error) {
      console.error('Error de red:', error)
    }
  }

  return (
    <>
      <div className="flex justify-center items-center pb-2">
        <form onSubmit={handleSubmit(createUser)} className="w-full lg:w-[480px]">
          <div className="mb-4">
            <Controller
              name="firstName"
              control={control}
              rules={{ required: 'El nombre es obligatorio' }}
              render={({ field }) => (
                <input
                  {...register('firstName')}
                  id="firstName"
                  type="text"
                  placeholder='Nombre'
                  className={`placeholder-top border border-gray-300 pl-4 w-full lg:w-[480px] rounded-xl h-14 ${errors.firstName !== null && errors.firstName !== undefined ? 'border-red-500' : ''}`}
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
            {errors.firstName !== null && errors.firstName !== undefined && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>
          <div className="mb-4">
            <Controller
              name="lastName"
              control={control}
              rules={{ required: 'El apellido es obligatorio' }}
              render={({ field }) => (
                <input
                  {...register('lastName')}
                  id="lastName"
                  type="text"
                  placeholder='Apellido'
                  className={`border focus:border-purple-700 border-gray-300 pl-4 w-full lg:w-[480px] rounded-xl h-14 ${errors.lastName !== null && errors.lastName !== undefined ? 'border-red-500' : ''}`}
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
            {errors.lastName !== null && errors.lastName !== undefined && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>

          <div className="mb-4">
            <Controller
              name="mail"
              control={control}
              rules={{ required: 'El email es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Email no válido' } }}
              render={({ field }) => (
                <input
                  {...register('mail')}
                  id="email"
                  type="text"
                  placeholder='Email'
                  className={`border border-gray-300 pl-4 w-full lg:w-[480px] rounded-xl h-14 ${errors.mail !== null && errors.mail !== undefined ? 'border-red-500' : ''}`}
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
            {errors.mail !== null && errors.mail !== undefined && <p className="text-red-500 text-sm">{errors.mail.message}</p>}
          </div>

          <div className="mb-4">
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'La contraseña es obligatoria',
                validate: (value: any) => {
                  if (value.length < 8) {
                    return 'La contraseña debe tener al menos 8 caracteres.'
                  }
                  if (!/[A-Z]/.test(value) || !/[a-z]/.test(value)) {
                    return 'La contraseña debe contener tanto mayúsculas como minúsculas.'
                  }
                  return true
                }
              }}
              render={({ field }) => (
                <input
                  {...register('password')}
                  id="password"
                  type="password"
                  placeholder='Contraseña'
                  className={`border border-gray-300 pl-4 w-full lg:w-[480px] rounded-xl h-14 ${errors.password !== null && errors.password !== undefined ? 'border-red-500' : ''}`}
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
            {errors.password !== null && errors.password !== undefined && <p className="text-red-500 w-full text-sm">{errors.password.message}</p>}
            <p className="font-poppins text-xs text-[#975D93] font-normal leading-5 ml-1">Mínimo 8 caracteres con una combinación de letras mayúsculas y minúsculas.</p>
          </div>

          <div className="mt-6">
            <button type="submit" className="text-white font-poppins text-base font-medium w-full lg:w-[480px] rounded-xl h-14 bg-gradient-to-b from-[#975D93]  to-[#DCA6D8] transition duration-300  hover:to-[#975D93] ">Confirmar</button>
            <ModalSu></ModalSu>
          </div>
        </form>
      </div>
    </>

  )
}
export default FormRegistro
