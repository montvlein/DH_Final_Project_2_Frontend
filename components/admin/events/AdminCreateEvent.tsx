/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react'
import { useForm, type SubmitErrorHandler, type SubmitHandler, useFieldArray } from 'react-hook-form'
import type { Evento } from '@/models/Event'

interface Entry {
  nameTicket: string
  priceTicket: number
}

const AdminCreateEvent: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [dates, setDates] = useState([''])
  const [entries, setEntries] = useState<Entry[]>([{ nameTicket: '', priceTicket: 0 }])

  const { register, handleSubmit, getValues, control } = useForm<Evento>({
    defaultValues: {
      dates: [{ dateList: '' }],
      entries: [{ nameTicket: '', priceTicket: 0 }]
    }
  })

  const { fields: dateFields, append: appendDate, remove: removeDate } = useFieldArray({
    control,
    name: 'dates'
  })

  const { fields: entryFields, append: appendEntry, remove: removeEntry } = useFieldArray({
    control,
    name: 'entries'
  })

  const handleAddDate = () => {
    appendDate({ dateList: '' })
  }

  const handleRemoveDate = (index: number) => {
    if (index === 0) {
      return
    }
    removeDate(index)
  }

  // const handleAddEntry = () => {
  //  appendEntry({ nameTicket: '', priceTicket: 0 })
  // }

  // const handleRemoveEntry = (index: number) => {
  //  if (entryFields.length === 1) {
  //    return
  //  }
  //  removeEntry(index)
  // }
  const handleAddFields = () => {
    setEntries([...entries, { nameTicket: '', priceTicket: 0 }])
  }

  const handleRemoveFields = (index: number) => {
    if (entries.length === 1) {
      return
    }
    const newEntries = [...entries]
    newEntries.splice(index, 1)
    setEntries(newEntries)
  }

  const handleNext = (): void => {
    setCurrentStep(currentStep + 1)
  }

  const handlePrev = (): void => {
    setCurrentStep(currentStep - 1)
  }
  const onSubmit: SubmitHandler<Evento> = async () => {
    const values = getValues()
    console.log(values)
  }
  const onError: SubmitErrorHandler<Evento> = () => { alert('Por favor, revisar los datos.') }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <ol className="flex space-x-4 justify-center mb-5">
        {[1, 2, 3, 4].map((step: number) => (
          <li
            key={step}
            className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep === step ? 'bg-[#DCA6D8]' : 'bg-gray-300'
              }`}
          >
            {step}
          </li>
        ))}
      </ol>

      {currentStep === 1 && (
        <div>
          <h2 className='text-[#975D93] font-montserrat font-semibold text-2xl'>DATOS GENERALES</h2>
          <div className="my-2 flex flex-col lg:flex-row lg:gap-5">
            <div className='w-full mb-2'>
              <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Nombre del evento o Artista</label>
              <input
                type="text"
                {...register('name')}
                name='name'
                className='w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold'
              />
            </div>
            <div className='w-full mb-2'>
              <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Lugar del evento</label>
              <input
                type="text"
                {...register('venue.venue')}
                name='place'
                className='w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold'
              />
            </div>
          </div>
          <div className="my-2 flex flex-col lg:flex-row lg:gap-5">
            <div className='w-full mb-2'>
              <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Dirección del evento</label>
              <input
                type="text"
                {...register('venue.address')}
                name='address'
                className='w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold'
              />
            </div>
            <div className='w-full flex flex-col mb-2'>
              <label htmlFor="place" className="text-[#6A6A6A] font-montserrat text-base font-normal">Categorias</label>
              <select
                {...register('category')}
                className="w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold">
                <option value="" disabled selected></option>
                <option value="Deportes" >Deportes</option>
                <option value="Conciertos" >Conciertos</option>
                <option value="Teatros" >Teatros</option>
              </select>
            </div>
          </div>
          <div className="my-2 flex flex-col lg:flex-row lg:gap-5">
            <div className='w-full mb-2'>
              <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Hora de inicio de evento</label>
              <input
                type="text"
                {...register('dateList')}
                name='hour'
                className='w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold'
              />
            </div>
            <div className='w-full mb-2'>
              <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Titulo de descripción</label>
              <input
                type="text"
                {...register('description_title')}
                name='description_title'
                className='w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold'
              />
            </div>
          </div>
          <div className="my-2 flex flex-col">
            <div className='w-full mb-2'>
              <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Descripción</label>
              <input
                type="text"
                {...register('description')}
                name='description'
                className='w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold'
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={handleNext} className="text-white px-6 py-3"
              style={{
                background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)'
              }}>
              Siguiente
            </button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <h2 className='text-[#975D93] font-montserrat font-semibold text-2xl'>IMÁGENES</h2>
          <div className='my-5'>
            <h4 className='text-gray-600 font-montserrat text-xl font-semibold'>Banner</h4>
            <p className='text-gray-600 font-montserrat text-base font-normal'>Dimensiones óptimas 1559x446 px.</p>
            <input
              type="text"
              {...register('bannerImageUrl')}
              name='bannerImageUrl'
              className='w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold'
            />
          </div>
          <div className='my-5'>
            <h4 className='text-gray-600 font-montserrat text-xl font-semibold'>Imagen detalle del evento</h4>
            <p className='text-gray-600 font-montserrat text-base font-normal'>Dimensiones óptimas 1450x815 px.</p>
            <input
              type="text"
              {...register('detailImageUrl')}
              name='detailImageUrl'
              className='w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold'
            />
          </div>
          <div className='my-5'>
            <h4 className='text-gray-600 font-montserrat text-xl font-semibold'>Imagen tarjeta del evento</h4>
            <p className='text-gray-600 font-montserrat text-base font-normal'>Dimensiones óptimas 350x200 px.</p>
            <input
              type="text"
              {...register('miniImageUrl')}
              name='miniImageUrl'
              className='w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold'
            />
          </div>
          <div className="flex justify-end gap-3">
            <button type="button" onClick={handlePrev} className='border-2 px-6 py-3'>
              Anterior
            </button>
            <button type="button" onClick={handleNext} className="text-white px-6 py-3"
              style={{
                background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)'
              }}>
              Siguiente
            </button>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <h2 className='text-[#975D93] font-montserrat font-semibold text-2xl'>FECHAS</h2>
          <div className="my-2">
            {dateFields.map((date, index) => (
              <div key={index} className='w-full mb-2 flex flex-col'>
                <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Fecha del evento</label>
                <div className="flex gap-4 mb-5">
                  <input
                    type="text"
                    {...register(`dates.${index}.dateList`)}
                    className='w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold'
                  />
                  <button
                    type="button"
                    onClick={handleAddDate}
                    className="text-white px-6 py-3"
                    style={{
                      background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)'
                    }}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => { handleRemoveDate(index) }}
                    className="border-2 px-6 py-3"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-3">
            <button type="button" onClick={handlePrev} className='border-2 px-6 py-3'>
              Anterior
            </button>
            <button type="button" onClick={handleNext} className="text-white px-6 py-3"
              style={{
                background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)'
              }}>
              Siguiente
            </button>
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div>
          <h2 className='text-[#975D93] font-montserrat font-semibold text-2xl'>ENTRADAS</h2>
          <div className="my-2">
            {entries.map((entry, index) => (
              <div key={index} className='w-full mb-2 flex flex-col'>
                <div className="flex gap-4 mb-5">
                  <div className='flex flex-col'>
                    <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Tipo de entrada</label>
                    <input
                      type="text"
                      name={`nameTicket${index}`}
                      className='w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Precio de entrada</label>
                    <input
                      type="text"
                      name={`priceTicket${index}`}
                      className='w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold'
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleAddFields}
                    className="text-white px-6 py-3 h-15 mt-4"
                    style={{
                      background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)'
                    }}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => { handleRemoveFields(index) }}
                    className="border-2 px-6 py-3 h-15 mt-4"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-3">
            <button type="button" onClick={handlePrev} className='border-2 px-6 py-3'>
              Anterior
            </button>
            <button type='submit' onClick={onSubmit} className="text-white px-6 py-3"
              style={{
                background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)'
              }}>
              Guardar cambios
            </button>
          </div>
        </div>
      )}
    </form>
  )
}

export default AdminCreateEvent
