/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState, useEffect } from 'react'
import { useForm, type SubmitErrorHandler, type SubmitHandler, useFieldArray } from 'react-hook-form'
import type { Evento } from '@/models/Event'
import type { Venue } from '@/models/Venue'
import type { Category } from '@/models/Category'
import type { EventDateTime } from '@/models/DateTime'
import { GoldenApi } from '@/api/data'
import { openModal } from '@/redux/features/modal-slice'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/redux/store'
import ModalAdm from './ModalEE'
interface Entry {
  nameTicket: string
  priceTicket: number
}

type EventoOther = Evento & {
  dates?: Array<{ dateList: string }>
  entries?: Array<{ nameTicket: string, priceTicket: number }>
}

const AdminCreateEvent: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [entries, setEntries] = useState<Entry[]>([{ nameTicket: '', priceTicket: 0 }])
  const dispatch = useDispatch<AppDispatch>()
  const [venueOptions, setVenueOptions] = useState<Venue[]>([])
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null)
  const [categoryOptions, setCategoryOptions] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  useEffect(() => {
    if (venueOptions.length === 0) {
      fetch('https://api.goldenticket.ar/event/venue')
        .then(async (response) => await response.json())
        .then((data) => {
          setVenueOptions(data)
        })
        .catch((error) => {
          console.error('Error fetching venue options:', error)
        })
    }
  }, [venueOptions])

  useEffect(() => {
    if (categoryOptions.length === 0) {
      fetch('https://api.goldenticket.ar/event/category')
        .then(async (response) => await response.json())
        .then((data) => {
          setCategoryOptions(data)
        })
        .catch((error) => {
          console.error('Error fetching category options:', error)
        })
    }
  }, [categoryOptions])

  const { register, handleSubmit, getValues, control } = useForm<EventoOther>({
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

  const handleAddFields = () => {
    appendEntry({ nameTicket: '', priceTicket: 0 })
  }

  const handleRemoveFields = (index: number) => {
    if (index === 0) {
      return
    }
    removeEntry(index)
  }

  const handleNext = (): void => {
    setCurrentStep(currentStep + 1)
  }

  const handlePrev = (): void => {
    setCurrentStep(currentStep - 1)
  }

  const handleVenueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value)
    const selected = venueOptions.find((venue) => venue.id === selectedId)
    setSelectedVenue(selected ?? null)
  }
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value)
    const category = categoryOptions.find((category) => category.id === selectedId)
    setSelectedCategory(category ?? null)
  }

  const onSubmit: SubmitHandler<Evento> = async () => {
    // setLoading(true)
    const values = getValues()
    let eventDateTimes: EventDateTime[] = []
    const dateListForm = values.dates
    const hourForm = values.dateList[0].id

    if (dateListForm) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      eventDateTimes = dateListForm.map(data => {
        const dateString = data.dateList
        const year = +dateString.slice(0, 4)
        const month = +dateString.slice(4, 6) - 1
        const day = +dateString.slice(6, 8)
        const hour = Math.floor(hourForm / 100)
        const minutes = hourForm % 100
        const date = new Date(year, month, day, hour, minutes)

        const ticketTypeList = values.dateList[0].ticketTypeList.map(ticketType => ({
          ...ticketType,
          stock: 1000,
          urlImage: 'urlimagen'
        }))

        return {
          dateTime: date,
          ticketTypeList
        }
      })
    }
    const eventData: Evento = {
      dateList: eventDateTimes,
      description: values.description,
      description_title: values.description_title,
      name: values.name,
      miniImageUrl: values.miniImageUrl,
      bannerImageUrl: values.bannerImageUrl,
      detailImageUrl: values.detailImageUrl,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      category: selectedCategory
        ? {
            id: selectedCategory.id,
            description: selectedCategory.description,
            urlImage: selectedCategory.urlImage
          }
        : null,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      venue: selectedVenue
        ? {
            id: selectedVenue.id,
            venue: selectedVenue.venue,
            country: selectedVenue.country,
            city: selectedVenue.city,
            address: selectedVenue.address
          }
        : null
    }

    console.log('eventdata', eventData)

    const baseUrl = GoldenApi.base
    const endpoint = GoldenApi.endoints.event.all
    const apiTicketUrl = baseUrl + endpoint
    fetch(apiTicketUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(async res => await res.json())
      .then(data => {
        console.log(data)
        dispatch(openModal())
      })
      .catch(err => {
        console.error(err.message)
      })
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
              <select
                {...register('venue.venue')}
                onChange={handleVenueChange}
                className="w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold">
                <option value="" disabled selected></option>
                {venueOptions.map((venue) => (
                <option key={venue.id} value={venue.id}>
                  {venue.venue}
                </option>
                ))}
              </select>
            </div>
          </div>
          <div className="my-2 flex flex-col lg:flex-row lg:gap-5">
              <div className='w-full mb-2'>
              <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Dirección del evento</label>
              <input
                type="text"
                defaultValue={selectedVenue?.address}
                {...register('venue.address')}
                name='venue.address'
                className='w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold'
              />
            </div>
            <div className='w-full flex flex-col mb-2'>
              <label htmlFor="place" className="text-[#6A6A6A] font-montserrat text-base font-normal">Categorias</label>
              <select
                {...register('category')}
                onChange={handleCategoryChange}
                className="w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold">
                <option value='' disabled selected></option>
                {categoryOptions.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.description}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="my-2 flex flex-col lg:flex-row lg:gap-5">
            <div className='w-full mb-2'>
              <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Hora de inicio de evento</label>
              <input
                type="text"
                {...register('dateList.0.id', {
                  pattern: /^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/
                })}
                placeholder='Hora en formato HHmm'
                name='dateList.0.id'
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
                    {...register(`dates.${index}.dateList`, {
                      pattern: /^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])\d{4}$/
                    })}
                    placeholder='Fecha en formato ddmmyyyy'
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
            {entryFields.map((entry, index) => (
              <div key={index} className='w-full mb-2 flex flex-col'>
                <div className="flex gap-4 mb-5">
                  <div className='flex flex-col'>
                    <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Tipo de entrada</label>
                    <input
                      type="text"
                      {...register(`dateList.${index}.ticketTypeList.${index}.name`)}
                      name={`dateList.${index}.ticketTypeList.${index}.name`}
                      className='w-full border-b border-black p-3 focus:outline-none focus:border-b-2 focus:border-[#975D93] focus:font-semibold'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Precio de entrada</label>
                    <input
                      type="text"
                      {...register(`dateList.${index}.ticketTypeList.${index}.price`)}
                      name={`dateList.${index}.ticketTypeList.${index}.price`}
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
            <button type='submit' className="text-white px-6 py-3"
              style={{
                background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)'
              }}>
              Guardar cambios
            </button>
          </div>
        </div>
      )}
      <ModalAdm></ModalAdm>
    </form>
  )
}

export default AdminCreateEvent
