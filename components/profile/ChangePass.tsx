/* eslint-disable @typescript-eslint/restrict-plus-operands */
'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
import { GoldenApi } from '@/api/data'
export interface pass {
  oldPassword?: string
  password?: string
  password2?: string
}
const ChangePassword: React.FC = () => {
  const param = useParams()
  const userId = param?.id ?? 0
  const { control, register, handleSubmit, formState: { errors } } = useForm<pass>()

  const cambiarPass: SubmitHandler = async (pass: pass) => {
    console.log(pass)
    const baseUrl = GoldenApi.base
    const endpoint = GoldenApi.endoints.user.signup
    const apiUrl = baseUrl + endpoint

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pass)
      })
      if (response.status === 201) {
        const data = await response.json()
        console.log('Contraseña guardada con éxito:', data)
      } else {
        console.error('Error al cambiar contraseña')
      }
    } catch (error) {
      console.error('Error de red:', error)
    }
  }
  return (
    <section className="flex flex-col z-10 w-11/12">
      <div className="m-4">
        <h2 className="text-white font-semibold text-2xl">Mi cuenta</h2>
        <p className="font-semibold text-base">Modifica tu contraseña</p>
      </div>
      <div className="shadow-lg bg-white dark:bg-gray-700 dark:text-white">
        <div className="flex lg:gap-2 justify-around">
          <Link href={'/profile/' + userId}><button className="grow py-4 uppercase font-semibold lg:text-2xl text-xs ">Información personal</button></Link>
          <button className=" py-4 uppercase font-semibold lg:text-2xl text-[#975D93] border-2 border-transparent border-b-[#DCA6D8] text-xs  ">Cambiar contraseña</button>
          <Link href={'/mytickets/' + userId}><button className="grow py-4 uppercase font-semibold lg:text-2xl text-xs ">Mis entradas</button></Link>
        </div>
        <form onSubmit={handleSubmit(cambiarPass)} className="p-8 lg:mx-28">
          <label htmlFor="passOld" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Contraseña actual</label>
          <Controller
            name="oldPassword"
            control={control}
            rules={{ required: 'Escribe tu contraseña actual' }}
            render={({ field }) => (
              <input
                {...register('oldPassword')}
                id="oldPassword"
                type="password"
                placeholder='******'
                className={`border border-gray-300 pl-4 w-full rounded-xl h-14 ${errors.oldPassword !== null && errors.oldPassword !== undefined ? 'border-red-500' : ''}`}
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
          {errors.oldPassword !== null && errors.oldPassword !== undefined && <p className="text-red-500 w-full text-sm">{errors.oldPassword.message}</p>}
          <label htmlFor="PassNew" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Contraseña nueva</label>
          <div className="mb-4">
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Ingresa una nueva contraseña',
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
                  {...register('password')}
                  id="password"
                  type="password"
                  placeholder='******'
                  className={`border border-gray-300 pl-4 w-full  rounded-xl h-14 ${errors.password !== null && errors.password !== undefined ? 'border-red-500' : ''}`}
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
          </div>

          <label htmlFor="passNew2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Repetir contraseña</label>
          <Controller
            name="password2"
            control={control}
            rules={{
              required: 'Repite tu nueva contraseña'
            }}
            render={({ field }) => (
              <input
                {...register('password2')}
                id="password2"
                type="password"
                placeholder='******'
                className={`border border-gray-300 pl-4 w-full rounded-xl h-14 ${errors.password2 !== null && errors.password2 !== undefined ? 'border-red-500' : ''}`}
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
          {errors.password2 !== null && errors.password2 !== undefined && <p className="text-red-500 w-full text-sm">{errors.password2.message}</p>}

          <div className="flex lg:justify-end gap-2 lg:gap-4 border-2 border-transparent border-t-gray-100 p-8">
            <button className="p-4 border-2">Cancelar</button>
            <button type='submit' className="p-4 bg-gradient-to-t from-[#DCA6D8] to-[#975D93] text-white fonr-bold">Guardar cambios</button>
          </div>
        </form>
      </div >
    </section >

  )
}
export default ChangePassword
