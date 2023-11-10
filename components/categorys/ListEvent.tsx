import React from 'react'
import EventCard from './EventCard'
import { eventList } from '@/api/data'

interface ListEventProps {
  selectedCategory: string
}

const ListEvent: React.FC<ListEventProps> = ({ selectedCategory }) => {
  const filteredEvents = eventList.filter((event) => event.category.title === selectedCategory)

  return (
    <div className='flex flex-col items-center w-full gap-10 py-10'>
      { filteredEvents.map((e, i) => <EventCard key={i} evento={e}/>)}
    </div>
  )
}

export default ListEvent
