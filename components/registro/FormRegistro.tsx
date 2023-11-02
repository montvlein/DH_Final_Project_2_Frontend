'use client'
import React from 'react'
import Logo from './Logo'
import { useForm, Controller } from 'react-hook-form'

interface FormData {
  nombre: string
  apellido: string
  email: string
  contrasena: string
}

const FormRegistro: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()
  const onSubmit = (data: FormData) => {
    console.log(data)
  }
  return (
    <> <div className='bg-black flex'>
      <Logo />
      <div className='rounded-tl-[5%] rounded-bl-[5%] rounded-br-0 rounded-tr-0 bg-[#F8F7F3] w-screen py-10'>
        <h1 className='ml-10'>Registrate!</h1>
        <div className="flex justify-center items-center ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-gray-700">Nombre</label>
              <Controller
                name="nombre"
                control={control}
                rules={{ required: 'El nombre es obligatorio' }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="nombre"
                    type="text"
                    className={`border border-gray-300 p-2 w-[480px] rounded ${errors.nombre ? 'border-red-500' : ''}`}
                  />
                )}
              />
              {errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="apellido" className="block text-gray-700">Apellido</label>
              <Controller
                name="apellido"
                control={control}
                rules={{ required: "El apellido es obligatorio" }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="apellido"
                    type="text"
                    className={`border border-gray-300 p-2  rounded w-[480px] ${errors.apellido ? 'border-red-500' : ''}`}
                  />
                )}
              />
              {errors.apellido && <p className="text-red-500">{errors.apellido.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <Controller
                name="email"
                control={control}
                rules={{ required: "El email es obligatorio", pattern: { value: /^\S+@\S+$/i, message: "Email no válido" } }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="email"
                    type="text"
                    className={`border border-gray-300 p-2 w-[480px] rounded ${errors.email ? 'border-red-500' : ''}`}
                  />
                )}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="contrasena" className="block text-gray-700">Contraseña</label>
              <Controller
                name="contrasena"
                control={control}
                rules={{ required: "La contraseña es obligatoria" }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="contrasena"
                    type="password"
                    className={`border border-gray-300 p-2 w-[480px] rounded ${errors.contrasena ? 'border-red-500' : ''}`}
                  />
                )}
              />
              {errors.contrasena && <p className="text-red-500">{errors.contrasena.message}</p>}
            </div>

            <div className="mt-6">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Confirmar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
export default FormRegistro
