import Image from 'next/image'
import type { Evento } from '@/models/Event'
interface InfoProps {
  evento: Evento
}
const Info: React.FC<InfoProps> = ({ evento }) => {
  const meses = [
    'ENE', 'FEB', 'MAR', 'ABR',
    'MAY', 'JUN', 'JUL', 'AGO',
    'SEP', 'OCT', 'NOV', 'DIC'
  ]
  return (
    <>
      <div className='flex flex-col md:flex-row bg-white my-10'>
        <div className="flex-1">
          <p className="font-Montserrat text-3xl font-semibold leading-11 tracking-tighter text-center text-gray-600 my-2 ml-4">    Próximas fechas</p>
          <div className="">
            <ul >
              {evento.dateList.map((lugar) => {
                let date
                if (Array.isArray(lugar.dateTime)) {
                  const [year, month, day] = lugar.dateTime
                  date = new Date(year, month - 1, day)
                } else {
                  date = new Date(lugar.dateTime)
                }

                return (
                  <li className="my-1 ml-2"
                    key={lugar.id}
                    style={{
                      backgroundImage: `url(${lugar.id % 2 === 0 ? '/infoBlanco.svg' : '/infoVioleta.svg'})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '100% 100%',
                      backgroundPosition: 'left'
                    }}

                  >
                    <div className="flex justify-center gap-8">
                      <div>
                        <p className="text-lg font-semibold leading-tight mt-1" style={{ color: lugar.id % 2 === 0 ? '#975D93' : 'white' }}
                        >{evento.venue.city}</p>

                        <p className="text-lg font-semibold leading-tight" style={{ color: lugar.id % 2 === 0 ? '#975D93' : 'white' }}
                        >{evento.venue.country}</p>  </div> <div>
                        <p className="text-lg font-semibold leading-tight" style={{ color: lugar.id % 2 === 0 ? '#975D93' : 'white' }}>{meses[date.getMonth()]}</p>
                        <p className="font-DM+Sans text-3xl font-bold leading-15 tracking-normal text-left">{date.getDate()}</p></div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="flex ml-4 md:ml-0">
          <div className='pt-8 mr-2 lg:flex-col '>
            {/* Imagen */}
            <Image
              src="/INFO.svg"
              alt="Info"
              width={70}
              height={100}
              className="w-32 h-32 sm:w-56 sm:h-56 "
            />
          </div>
          <div className="w-[878px] pt-6 mr-16 ms:mr-0">
            <h3 className="font-Montserrat text-3xl font-normal leading-14 tracking-tighter text-left">
              {evento.name}
            </h3>
            <p className="font-Montserrat text-base font-normal leading-7 tracking-tighter text-left">
              {evento.description}
            </p>

          </div>
        </div>
      </div >
    </>
  )
}

export default Info
