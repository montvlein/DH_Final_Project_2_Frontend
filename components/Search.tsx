'use client'

import { useState } from 'react'
import { useForm, type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form'
import type { Evento } from '@/models/Event'
import { useRouter } from 'next/navigation'

interface IFormValues {
  name: string
  place: string
  date: string
}
interface SearchProp {
  evento: Evento[]
}

const Search: React.FC<SearchProp> = function ({ evento }) {
  const { register, handleSubmit, getValues } = useForm<IFormValues>()

  const router = useRouter()

  const [filteredPlaces, setFilteredPlaces] = useState<string[]>([])
  const [filteredDates, setFilteredDates] = useState<string[]>([])

  const handleNameChange = (selectedName: string): void => {
    const places = evento.filter(e => e.name === selectedName).map(e => e.venue.city)
    setFilteredPlaces(places)
    const dates = evento.filter(e => e.name === selectedName).flatMap(e =>
      e.dateList.map(date => {
        let formattedDate
        if (Array.isArray(date.dateTime)) {
          const [year, month, day] = date.dateTime
          const newDate = new Date(year, month - 1, day)
          formattedDate = `${String(newDate.getDate()).padStart(2, '0')}/${String(newDate.getMonth() + 1).padStart(2, '0')}/${newDate.getFullYear()}`
        } else {
          const newDate = new Date(date.dateTime)
          formattedDate = `${String(newDate.getDate()).padStart(2, '0')}/${String(newDate.getMonth() + 1).padStart(2, '0')}/${newDate.getFullYear()}`
        }
        return formattedDate
      })
    )
    setFilteredDates(dates)
  }

  const onSubmit: SubmitHandler<IFormValues> = async () => {
    const values = getValues()
    console.log(values)
    const selectedEvent = evento.find(e => e.name === getValues().name)
    if (selectedEvent !== undefined && selectedEvent !== null && typeof selectedEvent.id === 'number' && !isNaN(selectedEvent.id)) {
      router.push(`/event/${selectedEvent.id}`)
    } else {
      router.push('/category/Conciertos')
    }
  }
  const onError: SubmitErrorHandler<IFormValues> = () => { alert('Por favor, revisar los datos.') }

  return (
    <div className="max-w-screen-xl mx-auto p-6 lg:rounded-3xl lg:absolute lg:-bottom-10 lg:inset-x-0" style={{ backgroundColor: '#2B2B2B' }}>
      <form className="flex flex-col gap-8 lg:flex-row lg:justify-center lg:items-center" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col md:justify-end">
          <label htmlFor="name" className="text-white font-dm-sans text-base font-normal">Busca tu evento</label>
          <select
            {...register('name')}
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
            className="px-2 py-1 text-white font-bold xl:w-72"
            onChange={(e) => { handleNameChange(e.target.value) }}>
              <option value="" hidden disabled selected></option>
              {evento.map(e => <option key={e.id} value={e.name}>{e.name}</option>)}
          </select>
        </div>
        <div className="flex flex-col md:justify-end">
          <label htmlFor="place" className="text-white font-dm-sans text-base font-normal">Lugar</label>
          <select
            {...register('place')}
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
            className="px-2 py-1 text-white font-bold xl:w-72">
              <option value="" hidden disabled></option>
                {filteredPlaces.map(place => (
                  <option key={place} value={place}>{place}</option>
                ))}
          </select>
        </div>
        <div className="flex flex-col md:justify-end">
          <label className="text-white font-dm-sans text-base font-normal">Fecha</label>
          <select
            {...register('date')}
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
            className="border rounded px-2 py-1 text-white lg:w-52 xl:w-72">
              <option value="" hidden disabled></option>
              {filteredDates.map(date => (
                <option key={date} value={date}>{date}</option>
              ))}
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
