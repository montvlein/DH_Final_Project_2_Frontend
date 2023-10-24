'use client'

import { useForm } from 'react-hook-form'

interface TFormValues {
  name: string
  place: string
}

const Search: React.FC = () => {
  const { register, handleSubmit } = useForm<TFormValues>()

  const onSubmit = async (data: TFormValues): Promise<void> => {
    console.log(data)
  }

  return (

    <div className="absolute -bottom-10 inset-x-0 max-w-screen-xl mx-auto p-6 rounded-l md:flex md:items-center md:space-x-4 md:justify-center md:space-y-0 md:mb-0" style={{ backgroundColor: '#2B2B2B', borderRadius: '20px' }}>
      <form className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white font-dm-sans text-base font-normal">Busca tu evento</label>
          <input
            id="name"
            type="text"
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B', width: '289px' }}
            className="px-2 py-1"
            { ... register('name')}
            />
        </div>
        <div className="flex flex-col">
          <label htmlFor="place" className="text-white font-dm-sans text-base font-normal">Lugar</label>
          <input
            id="place"
            type="text"
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B', width: '289px' }}
            className="px-2 py-1"
            { ... register('place')}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white font-dm-sans text-base font-normal">Fecha</label>
          <select
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B', width: '289px' }}
            className="border rounded px-2 py-1"></select>
        </div>
        <button
          className="text-white px-6 py-3 rounded-full border-2 border-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
          style={{
            borderRadius: '50px',
            background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)',
            width: '132px',
            marginRight: '10px'
          }}>
          Buscar
        </button>
      </form>
    </div>
  )
}

export default Search
