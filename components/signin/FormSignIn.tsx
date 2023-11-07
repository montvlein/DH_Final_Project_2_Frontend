'use client'
import React from 'react'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
import type { User } from '../../models/User'
// import { useRouter } from 'next/router'

const FormSignIn: React.FC = () => {
  // const router = useRouter()
  const { register, getValues, control, handleSubmit, formState: { errors } } = useForm<User>()
  const onSubmit: SubmitHandler<User> = async () => {
    const values = getValues()
    console.log(values)
    alert('Usuario creado')
    // await fetch("http://localhost:3000/api/create", { method: "POST", body: JSON.stringify(values) }) Router.push("/products") };
    // router.push('/')
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
            {errors.password !== null && errors.password !== undefined && <p className="text-red-500 w-[480px]">{errors.password.message}</p>}
            <p className="font-poppins text-xs text-[#975D93] font-normal leading-5 ml-1">Mínimo 8 caracteres con una combinación de letras mayúsculas y minúsculas.</p>
          </div>

          <div className="mt-8">
            <button type="submit" className="text-white font-poppins text-base font-medium w-[480px] rounded-xl h-14 bg-gradient-to-b from-[#975D93]  to-[#DCA6D8] transition duration-300  hover:to-[#975D93] ">Confirmar</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default FormSignIn
