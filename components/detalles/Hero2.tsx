import type { Evento } from '@/models/Event'

interface HeroDetailsListProps {
  evento: Evento
}

const Hero2: React.FC<HeroDetailsListProps> = ({ evento }) => {
  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]

  let date: Date

  if (Array.isArray(evento.dateList[0].dateTime)) {
    const [year, month, day] = evento.dateList[0].dateTime
    date = new Date(year, month - 1, day)
  } else {
    date = new Date(evento.dateList[0].dateTime)
  }

  const dayOfMonth = date.getDate()
  const monthNum = date.getMonth()
  const monthName = meses[monthNum]

  return (
    <>
      <div style={{ backgroundImage: `url(${evento.detailImageUrl})`, backgroundSize: 'cover', height: '100vh' }} >
        <div className="flex flex-col items-start justify-center h-full text-white p-20">
          <h2 className="text-4xl mb-4">Detalle del evento</h2>
          <div
            className="mb-4"
            style={{
              background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)',
              borderRadius: '50px',
              padding: '20px',
              width: '400px'
            }}
            >
              <h4 className='ml-4'>Fecha: {dayOfMonth} de {monthName} 2023</h4>
            </div>
          <div
            className="mb-4 p-5"
            style={{
              borderRadius: '50px',
              border: '1.5px solid #FFF',
              width: '400px'
            }}
            >
              <h4 className='ml-4'>Lugar: {evento.venue.venue}</h4>
            </div>
          <div
            className="mb-4"
            style={{
              background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)',
              borderRadius: '50px',
              padding: '15px',
              width: '400px'
            }}
            >
              <h4 className='ml-4'>Dirección: {evento.venue.address}</h4>
            </div>
          <div
            className="mb-4 p-5"
            style={{
              borderRadius: '50px',
              border: '1.5px solid #FFF',
              width: '400px'
            }}
            >
              <h4 className='ml-4'>Show comienza: 20 hs</h4>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero2
