import type { Evento } from '@/models/Event'

interface HeroDetailsListProps {
  evento: Evento
}

const Hero2: React.FC<HeroDetailsListProps> = ({ evento }) => {
  return (
    <>
      <div className="bg-[url('/taylordetails.png')] bg-cover h-screen my-20" >
        <div className="flex flex-col items-start justify-center h-full text-white p-20">
          <h2 className="text-4xl mb-4">Detalle del evento</h2>
          <div
            className="mb-4"
            style={{
              background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)',
              borderRadius: '50px',
              padding: '15px',
              width: '350px'
            }}
            >
            Fecha: Martes 12 de Diciembre 2023
            </div>
          <div
            className="mb-4 p-5"
            style={{
              borderRadius: '50px',
              border: '1.5px solid #FFF',
              width: '350px'
            }}
            >Lugar: {evento.venue.name}</div>
          <div
            className="mb-4"
            style={{
              background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)',
              borderRadius: '50px',
              padding: '15px',
              width: '350px'
            }}
            >
            Dirección: {evento.venue.address}
            </div>
          <div
            className="mb-4 p-5"
            style={{
              borderRadius: '50px',
              border: '1.5px solid #FFF',
              width: '350px'
            }}
            >Show comienza: 20 hs </div>
        </div>
      </div>
    </>
  )
}

export default Hero2
