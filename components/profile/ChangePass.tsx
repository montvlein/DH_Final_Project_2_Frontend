/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
// import UpdateUserPass from '@/services/UpdateUSerPass'
import { useState } from 'react'
import { openModal } from '@/redux/features/modal-slice'
import ModalSu from './ModalSu'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/redux/store'
import { GoldenApi } from '@/api/data'
export interface pass {
  currentPassword: string
  newPassword: string
  password2: string
}
const ChangePassword: React.FC = () => {
  const param = useParams()
  const userId = param?.id ?? 0
  const { control, register, handleSubmit, formState: { errors } } = useForm<pass>()
  const [errorPass, seterrorPass] = useState('')
  const [errorOldPass, seterrorOldPass] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const cambiarPass: SubmitHandler<pass> = async ({ currentPassword, newPassword, password2 }: pass) => {
    if (newPassword !== password2) {
      seterrorPass('Las contraseñas no coinciden')
    } else {
      seterrorPass('')

      const baseUrl = GoldenApi.base
      const endpoint = GoldenApi.endoints.user.changePass
      const apiUrl = baseUrl + endpoint
      const jwt = localStorage.getItem('token')
      console.log(jwt)

      try {
        const response = await fetch(apiUrl, {
          method: 'PATCH',
          headers: {
            token: jwt ?? '',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ currentPassword, newPassword })
        })
        if (response.ok) {
          dispatch(openModal())
          seterrorOldPass('')
          //   const data = await response.json()
        } else {
          seterrorOldPass('Contraseña actual incorrecta, vuelve a intentarlo')
          console.error('Error al cambiar contraseña:', response.status, response.statusText, await response.text())
        }
      } catch (error) {
        console.error('Error de red:', error)
      }
    }
  }
  return (
    <section className="flex flex-col  w-11/12">
      <div className="m-4 ">
        <h2 className="text-white font-semibold text-2xl ">Mi cuenta</h2>
        <p className="font-semibold text-base ">Modifica tu contraseña</p>
      </div>
      <div className="shadow-lg bg-white dark:bg-gray-700 dark:text-white ">
        <div className="flex lg:gap-2 justify-around">
          <Link href={'/profile/' + userId}><button className="grow py-4 uppercase font-semibold lg:text-2xl text-xs ">Información personal</button></Link>
          <button className=" py-4 uppercase font-semibold lg:text-2xl text-[#975D93] border-2 border-transparent border-b-[#DCA6D8] text-xs  ">Cambiar contraseña</button>
          <Link href={'tickets/'}><button className="grow py-4 uppercase font-semibold lg:text-2xl text-xs ">Mis entradas</button></Link>
        </div>
        <form onSubmit={handleSubmit(cambiarPass)} className="p-8 lg:mx-28">
          <label htmlFor="passOld" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">contraseña actual</label>
          <Controller
            name="currentPassword"
            control={control}
            rules={{ required: 'Escribe tu contraseña actual' }}
            render={({ field }) => (
              <input
                {...register('currentPassword')}
                id="oldPassword"
                type="password"
                placeholder='******'
                className={`border border-gray-300 pl-4 w-full rounded-xl h-14 ${errors.currentPassword !== null && errors.currentPassword !== undefined ? 'border-red-500' : ''}`}
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
          {errors.currentPassword !== null && errors.currentPassword !== undefined && <p className="text-red-500 w-full text-sm">{errors.currentPassword.message}</p>}
          <label htmlFor="PassNew" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">contraseña nueva</label>
          <div className="mb-4">
            <Controller
              name="newPassword"
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
                  {...register('newPassword')}
                  id="newPassword"
                  type="password"
                  placeholder='******'
                  className={`border border-gray-300 pl-4 w-full  rounded-xl h-14 ${errors.newPassword !== null && errors.newPassword !== undefined ? 'border-red-500' : ''}`}
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
            {errors.newPassword !== null && errors.newPassword !== undefined && <p className="text-red-500 w-full text-sm">{errors.newPassword.message}</p>}
          </div>

          <label htmlFor="passNew2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Repetir contraseña</label>
          <Controller
            name="newPassword"
            control={control}
            rules={{
              required: 'Escribe tu nueva contraseña'
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
          {<p className="text-red-500 w-full text-sm">{errorPass}</p>}
          {<p className="text-red-500 w-full text-sm">{errorOldPass}</p>}

          <div className="flex lg:justify-end gap-2 lg:gap-4 border-2 border-transparent border-t-gray-100 p-8">
            <Link href={'/'}><button className="p-4 border-2 ">Cancelar</button></Link>
            <button type='submit' className="p-4 bg-gradient-to-t from-[#DCA6D8] to-[#975D93] text-white font-bold">Guardar cambios</button>
          </div>
        </form>
      </div >
      <div className='z-50'>
        <ModalSu></ModalSu></div>
    </section >

  )
}
export default ChangePassword
