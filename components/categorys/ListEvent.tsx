import React from 'react'
import EventCard from './EventCard'
import type { Evento } from '@/models/Event'

interface ListEventProps {
  selectedCategory: string
  evento: Evento[]
}

type EventCategoryMappings = Record<string, string>

const ListEvent: React.FC<ListEventProps> = ({ selectedCategory, evento }) => {
  const categoryMappings: EventCategoryMappings = {
    Concierto: 'Conciertos',
    Teatro: 'Teatros',
    'Evento Deportivo': 'Deportes'
  }
  const getMappedCategoryDescription = (originalDescription: string): string => {
    return categoryMappings[originalDescription] ?? originalDescription
  }

  const filteredEvents = evento.filter((event) => {
    const mappedDescription = getMappedCategoryDescription(event.category.description)
    return mappedDescription === selectedCategory
  })

  return (
    <div className='flex flex-col items-center w-full gap-10 py-10'>
      { filteredEvents.map((e, i) => <EventCard key={i} evento={e}/>)}
    </div>
  )
}

export default ListEvent
