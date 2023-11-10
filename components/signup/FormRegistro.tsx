'use client'
import React from 'react'
import type { User } from '../../models/User'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
// import SuccessModal from './SuccessModal'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/redux/store'
import { openModal } from '@/redux/features/modal-slice'
import Modal from './Modal'

const FormRegistro: React.FC = () => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<User>()
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const values = getValues()
  // console.log('dolo', values)
  const dispatch = useDispatch<AppDispatch>()
  const createUser: SubmitHandler<User> = async (user: User) => {
    const apiUrl = 'http://localhost:3000/api/users/create'

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      if (response.status === 201) {
        const data = await response.json()
        console.log('Usuario creado con éxito:', data)
        // setIsModalOpen(true)
        dispatch(openModal())
        // window.location.href = `profile/${data.id}`
      } else {
        console.error('Error al crear el usuario')
      }
    } catch (error) {
      console.error('Error de red:', error)
    }
  }
  // const handleCloseModal = (): void => {
  //   setIsModalOpen(false)
  // }
  return (
    <>
      <div className="flex justify-center items-center  py-2">
        <form onSubmit={handleSubmit(createUser)}>
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
                  className={`border focus:border-purple-700 border-gray-300 pl-4 w-[480px] rounded-xl h-14 ${errors.lastName !== null && errors.lastName !== undefined ? 'border-red-500' : ''}`}
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
              name="email"
              control={control}
              rules={{ required: 'El email es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Email no válido' } }}
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
            {errors.email !== null && errors.email !== undefined && <p className="text-red-500 text-sm">{errors.email.message}</p>}
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
            {errors.password !== null && errors.password !== undefined && <p className="text-red-500 w-[480px] text-sm">{errors.password.message}</p>}
            <p className="font-poppins text-xs text-[#975D93] font-normal leading-5 ml-1">Mínimo 8 caracteres con una combinación de letras mayúsculas y minúsculas.</p>
          </div>

          <div className="mt-8">
            <button type="submit" className="text-white font-poppins text-base font-medium w-[480px] rounded-xl h-14 bg-gradient-to-b from-[#975D93]  to-[#DCA6D8] transition duration-300  hover:to-[#975D93] ">Confirmar</button>
            <Modal />
          </div>
        </form>
      </div>
    </>
  )
}
export default FormRegistro
// <SuccessModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />