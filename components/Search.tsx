'use client'

import { useForm, type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form'

interface IFormValues {
  name: string
  place: string
}

const Search: React.FC = () => {
  const { register, handleSubmit, getValues } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = async () => {
    const values = getValues()
    console.log(values)
  }
  const onError: SubmitErrorHandler<IFormValues> = () => { alert('Por favor, revisar los datos.') }

  return (
    <div className="max-w-screen-xl mx-auto p-6 lg:rounded-3xl lg:absolute lg:-bottom-10 lg:inset-x-0" style={{ backgroundColor: '#2B2B2B' }}>
      <form className="flex flex-col gap-8 lg:flex-row lg:justify-center lg:items-center" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col md:justify-end">
          <label htmlFor="name" className="text-white font-dm-sans text-base font-normal">Busca tu evento</label>
          <input
            id="name"
            type="text"
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
            className="px-2 py-1 text-white font-bold xl:w-72"
            { ... register('name')}
            />
        </div>
        <div className="flex flex-col md:justify-end">
          <label htmlFor="place" className="text-white font-dm-sans text-base font-normal">Lugar</label>
          <input
            id="place"
            type="text"
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
            className="px-2 py-1 text-white font-bold xl:w-72"
            { ... register('place')}
          />
        </div>
        <div className="flex flex-col md:justify-end">
          <label className="text-white font-dm-sans text-base font-normal">Fecha</label>
          <select
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
            className="border rounded px-2 py-1 text-white lg:w-52 xl:w-72">
              <option value=""></option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
            </select>
        </div>
        <button
          className="text-white px-6 py-3 lg:rounded-xl"
          style={{
            background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)'
          }}>
          Buscar
        </button>
      </form>
    </div>
  )
}

export default Search
