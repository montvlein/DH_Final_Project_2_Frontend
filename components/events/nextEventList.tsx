'use client'

import NextEventCard from './nextEventCard'
import type { Category } from '@/models/Category'
import PropTypes from 'prop-types'
import { eventList } from '@/api/data'
import { useState } from 'react'

interface EventListProps {
  categories: Category[]
}

const NextEventList: React.FC<EventListProps> = function ({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState('Top Selling')

  const filteredEvents = eventList.filter((event) =>
    selectedCategory === 'Top Selling' ? true : event.category.description === selectedCategory
  )

  return (
    <section className='flex flex-col gap-4 place-items-center bg-white p-2 font-semibold text-gray-900'>
        <h3 className='text-3xl text-center font-bold'>Próximos eventos en <span className='text-gray-600'>Buenos Aires.</span></h3>
        <div className='p-4 flex flex-col gap-6 w-full lg:w-auto'>
            <Chooser
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                { filteredEvents.map((e, i) => <NextEventCard key={i} evento={e}/>)}
            </div>
        </div>
    </section>
  )
}

export default NextEventList

interface ChooserProps {
  categories: Category[]
  selectedCategory: string
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

const Chooser: React.FC<ChooserProps> = function ({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className='flex gap-6 text-gray-500 overflow-x-auto'>
      <button
        onClick={() => { setSelectedCategory('Top Selling') }}
        className={selectedCategory === 'Top Selling' ? 'rounded-2xl bg-pink-400 p-2 lg:py-2 lg:px-6 text-white font-semibold text-sm lg:text-md' : 'text-sm lg:text-md'}
      >
        Top Selling
      </button>
      {categories.map((cat) => (
        <button
          key={cat.description}
          onClick={() => { setSelectedCategory(cat.description) }}
          className={selectedCategory === cat.description ? 'rounded-2xl bg-pink-400 py-2 px-6 text-white font-semibold' : 'text-sm lg:text-md'}
        >
          {cat.description}
        </button>
      ))}
    </div>
  )
}

Chooser.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired
}

NextEventList.propTypes = {
  categories: PropTypes.array.isRequired
}
