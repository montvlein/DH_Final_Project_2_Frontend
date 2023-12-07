import Link from 'next/link'
import Image from 'next/image'
import type { Evento } from '@/models/Event'

interface EventCardListProp {
  evento: Evento
}

const EventCardList: React.FC<EventCardListProp> = function ({ evento }) {
  const meses = [
    'ENE', 'FEB', 'MAR', 'ABR',
    'MAY', 'JUN', 'JUL', 'AGO',
    'SEP', 'OCT', 'NOV', 'DIC'
  ]
  let date: Date

  if (Array.isArray(evento.dateList[0].dateTime)) {
    const [year, month, day] = evento.dateList[0].dateTime
    date = new Date(year, month - 1, day)
  } else {
    date = new Date(evento.dateList[0].dateTime)
  }

  const day = date.getDate()
  const monthNum = date.getMonth()
  const monthName = meses[monthNum]

  return (
    <article className='rounded-2xl overflow-hidden shadow-xl max-w-lg'>
      <Link href={`/event/${evento.id}`} passHref className='relative lg:max-h-none'>
        <Image
          src={evento.bannerImageUrl}
          alt={evento.name}
          width={1000}
          height={197}
          className='object-cover w-full'
        />
        <div className='p-4 flex gap-6 bg-white dark:bg-gray-400'>
          <p className='flex flex-col items-center font-bold'>
            <span className='text-blue-500'>{monthName}</span>
            <span className='text-3xl'>{day}</span>
          </p>
          <div className='text-base'>
            <h4 className='mb-2'><strong>Evento: </strong>{evento.name}</h4>
            <h4 className='mb-2'><strong>Lugar: </strong>{evento.venue.venue}</h4>
            <h4 className='mb-2'><strong>Dirección: </strong>{evento.venue.address}</h4>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default EventCardList
