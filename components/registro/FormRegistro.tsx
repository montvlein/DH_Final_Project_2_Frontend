'use client'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

interface FormData {
  nombre: string
  apellido: string
  email: string
  contrasena: string
}

const FormRegistro: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()
  const onSubmit: (data: FormData) => void = (data) => {
    console.log(data)
  }
  return (
    <>
      <div className='bg-[#F8F7F3]  px-2 py-2'>
        <h1 className="font-poppins text-4xl font-bold leading-60 tracking-normal text-left text-[#975D93]">Registrate!</h1>
        <div className="flex justify-center items-center  px-20 py-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Controller
                name="nombre"
                control={control}
                rules={{ required: 'El nombre es obligatorio' }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="nombre"
                    type="text"
                    placeholder='Nombre'
                    className={`placeholder-top border border-gray-300 pl-4 w-[480px] rounded-xl h-14 ${errors.nombre !== null && errors.nombre !== undefined ? 'border-red-500' : ''}`}
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
              {errors.nombre !== null && errors.nombre !== undefined && <p className="text-red-500">{errors.nombre.message}</p>}
            </div>
            <div className="mb-4">
              <Controller
                name="apellido"
                control={control}
                rules={{ required: 'El apellido es obligatorio' }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="apellido"
                    type="text"
                    placeholder='Apellido'
                    className={`border border-gray-300 pl-4 w-[480px] rounded-xl h-14 ${errors.apellido !== null && errors.apellido !== undefined ? 'border-red-500' : ''}`}
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
              {errors.apellido !== null && errors.apellido !== undefined && <p className="text-red-500">{errors.apellido.message}</p>}
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
                name="contrasena"
                control={control}
                rules={{ required: 'La contraseña es obligatoria' }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="contrasena"
                    type="password"
                    placeholder='Contraseña'
                    className={`border border-gray-300 pl-4 w-[480px] rounded-xl h-14  ${errors.contrasena !== null && errors.contrasena !== undefined ? 'border-red-500' : ''}`}
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
              {errors.nombre !== null && errors.contrasena !== undefined && <p className="text-red-500">{errors.contrasena.message}</p>}
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
