'use client'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import type { User } from './../../models/User'

const FormRegistro: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<User>()
  const onSubmit: (data: User) => void = (data) => {
    console.log(data)
  }


  return (
    <>
      <div className='bg-[#F8F7F3]   py-2 w-full'>
        <h1 className="font-poppins text-4xl font-bold leading-60 tracking-normal text-left ml-2 text-[#975D93]">Registrate!</h1>
        <div className="flex justify-center items-center  py-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Controller
                name="firstName"
                control={control}
                rules={{ required: 'El nombre es obligatorio' }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="firstName"
                    type="text"
                    placeholder='Nombre'
                    className={`placeholder-top border border-gray-300 pl-4 w-[480px] rounded-xl h-14 ${errors.firstName !== null && errors.firstName !== undefined ? 'border-red-500' : ''}`}
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
              {errors.firstName !== null && errors.firstName !== undefined && <p className="text-red-500">{errors.firstName.message}</p>}
            </div>
            <div className="mb-4">
              <Controller
                name="lastName"
                control={control}
                rules={{ required: 'El apellido es obligatorio' }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="lastName"
                    type="text"
                    placeholder='Apellido'
                    className={`border border-gray-300 pl-4 w-[480px] rounded-xl h-14 ${errors.lastName !== null && errors.lastName !== undefined ? 'border-red-500' : ''}`}
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
              {errors.lastName !== null && errors.lastName !== undefined && <p className="text-red-500">{errors.lastName.message}</p>}
            </div>

            <div className="mb-4">
              <Controller
                name="email"
                control={control}
                rules={{ required: 'El email es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Email no válido' } }}
                render={({ field }) => (
                  <input
                    {...field}
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
                rules={{
                  required: 'La contraseña es obligatoria',
                  validate: (value) => {
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
                    {...field}
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
              {errors.password !== null && errors.password !== undefined && <p className="text-red-500 w-[480px]">{errors.password.message}</p>}
              <p className="font-poppins text-xs text-[#975D93] font-normal leading-5 ml-1">Mínimo 8 caracteres con una combinación de letras mayúsculas y minúsculas.</p>
            </div>

            <div className="mt-6">
              <button type="submit" className="bg-[#975D93]  text-white font-poppins text-base font-medium w-[480px] rounded-xl h-14">Confirmar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default FormRegistro
