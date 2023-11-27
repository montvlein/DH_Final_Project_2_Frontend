import Link from 'next/link'
import Image from 'next/image'

interface CardProp {
  ticket: any
}

const CardsProfile: React.FC<CardProp> = function ({ ticket }) {
  const evento = ticket.event
  const day = ticket.dateTime.dateTime[2]
  const meses = [
    'ENE', 'FEB', 'MAR', 'ABR',
    'MAY', 'JUN', 'JUL', 'AGO',
    'SEP', 'OCT', 'NOV', 'DIC'
  ]
  const monthNum = ticket.dateTime.dateTime[1]
  const monthName = meses[monthNum]

  return (
    <article className='rounded-2xl overflow-hidden shadow-xl  md:mx-24 my-2'>
      <Link href={`/ticketdetails/${ticket.id}`} passHref className='relative lg:max-h-none'>
        <Image
          src={evento.bannerImageUrl}
          alt={evento.name}
          width={1000}
          height={197}
          className='object-cover w-full h-64'
        />
        <div className='p-4 flex gap-6 bg-gray-100 dark:bg-gray-700'>
          <p className='flex flex-col items-center font-bold'>
            <span className='text-blue-500'>{monthName}</span>
            <span className='text-3xl'>{day}</span>
          </p>
          <div className='text-base'>
            <h4 className='mb-2'>{evento.name}</h4>
            <p className='text-sm font-normal text-gray-600 dark:text-gray-100'>
              {evento.description}
            </p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default CardsProfile
