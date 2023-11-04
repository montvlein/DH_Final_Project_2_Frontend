import Link from 'next/link'
import Image from 'next/image'
import type { Evento } from '@/models/Event'

interface NextEventCardProp {
  evento: Evento
}

const NextEventCard: React.FC<NextEventCardProp> = function ({ evento }) {
  const day = evento.dateList[0].dayAndHour.getDate()
  const meses = [
    'ENE', 'FEB', 'MAR', 'ABR',
    'MAY', 'JUN', 'JUL', 'AGO',
    'SEP', 'OCT', 'NOV', 'DIC'
  ]
  const monthNum = evento.dateList[0].dayAndHour.getMonth()
  const monthName = meses[monthNum]

  return (
    <article className='rounded-2xl overflow-hidden shadow-xl max-w-sm'>
      <Link href={`event/${evento.id}`} className='relative lg:max-h-none'>
        <Image
          src={evento.miniImageUrl}
          alt={evento.name}
          width={344}
          height={197}
          className='object-cover w-full'
        />
        <div className='p-4 flex gap-6'>
          <p className='flex flex-col items-center font-bold'>
            <span className='text-blue-500'>{ monthName }</span>
            <span className='text-3xl'>{ day }</span>
          </p>
          <div className='text-base'>
            <h4 className='mb-2'>{ evento.name }</h4>
            <p className='text-sm font-normal text-gray-600'>
              { evento.description }
            </p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default NextEventCard
