'use client'

import type { Category } from '@/models/Category'
import { useRouter } from 'next/navigation'
import type { Evento } from '@/models/Event'
import { useForm, type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form'
import { useState } from 'react'

interface MenuFilterProps {
  categories: Category[]
  selectedCategory: string
  evento: Evento[]
}
interface IFormMenuFilter {
  place: string
  date: string
}

type EventCategoryMappings = Record<string, string>

const MenuFilter: React.FC<MenuFilterProps> = ({ categories, selectedCategory, evento }) => {
  const { register, handleSubmit, getValues } = useForm<IFormMenuFilter>()
  const router = useRouter()
  const [filteredDates, setFilteredDates] = useState<string[]>([])

  const handleCategoryClick = (categoryDescription: string): void => {
    router.push(`/category/${categoryDescription}`)
  }
  const onSubmit: SubmitHandler<IFormMenuFilter> = async () => {
    const values = getValues()
    console.log(values)
  }
  const onError: SubmitErrorHandler<IFormMenuFilter> = () => { alert('Por favor, revisar los datos.') }

  const categoryMappings: EventCategoryMappings = {
    Concierto: 'Conciertos',
    Teatro: 'Teatros',
    'Evento Deportivo': 'Deportes'
  }
  const getMappedCategoryDescription = (originalDescription: string): string => {
    return categoryMappings[originalDescription] ?? originalDescription
  }

  const availableVenues = evento.filter((e) => (getMappedCategoryDescription(e.category.description)) === selectedCategory).map((e) => e.venue.venue)

  const uniqueVenues = Array.from(new Set(availableVenues))

  const handlePlaceChange = (selectedPlace: string): void => {
    const dates = evento.filter(e => getMappedCategoryDescription(e.category.description) === selectedCategory && e.venue.venue === selectedPlace).flatMap(e =>
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
  const uniqueDates = Array.from(new Set(filteredDates))
  return (
    <>
    <div className="bg-[#2B2B2B] w-full flex flex-col lg:w-1/4">
      <div className="py-4 flex flex-col items-center lg:items-start">
        <h2 className='text-[#DCA6D8] font-poppins text-3xl pb-2'>Categorias</h2>
        {categories.map((cat) => (
            <button
              onClick={() => { handleCategoryClick(cat.description) } }
              key={cat.description}
              className={selectedCategory === cat.description ? 'flex flex-col rounded-2xl bg-[#D791D2] py-2 px-6 text-lg text-white font-semibold' : 'flex flex-col text-white text-sm lg:text-lg py-2 px-6'}
            >
            {cat.description}
            </button>
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col py-4 px-6">
          <label className="text-[#DCA6D8] font-poppins text-3xl pb-2">Lugar</label>
          <select
            {...register('place')}
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
            className="border rounded px-2 py-1 text-white "
            onChange={(e) => { handlePlaceChange(e.target.value) }}>
              <option value=""></option>
              {uniqueVenues.map((venue, i) => (
                  <option key={i} value={venue}>{venue}</option>
              ))}
            </select>
        </div>
        <div className="flex flex-col py-4 px-6">
          <label className="text-[#DCA6D8] font-poppins text-3xl pb-2">Fecha</label>
          <select
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
            className="border rounded px-2 py-1 text-white">
            <option value="" disabled selected></option>
              {uniqueDates.map(date => (
                <option key={date} value={date}>{date}</option>
              ))}
            </select>
        </div>
      </form>
    </div>
    </>
  )
}

export default MenuFilter
