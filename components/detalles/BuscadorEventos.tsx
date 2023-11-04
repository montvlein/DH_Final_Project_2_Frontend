'use client'
import Image from 'next/image'
import { useForm, type SubmitHandler } from 'react-hook-form'

interface IForm {
  evento: string
}
const BuscadorEventos: React.FC = () => {
  const { register, handleSubmit, getValues } = useForm<IForm>()

  const onSubmit: SubmitHandler<IForm> = async () => {
    const values = getValues()
    console.log(values)
  }

  return (
    <>
      <div className="w-full h-20 bg-[#2B2B2B] shadow-md flex items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="relative w-full ml-4">

          <Image
            src="/lupa.svg"
            alt="Buscar"
            width={50}
            height={50}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600"
          />
          <input
            id="evento"
            {...register('evento')}
            className="w-3/4 sm:w-1/2  h-14 rounded-full pl-12 bg-gray-300"
            type="text"
            placeholder="Buscar eventos, recitales, artistas."
          />

        </form>
      </div>
    </>
  )
}
export default BuscadorEventos
