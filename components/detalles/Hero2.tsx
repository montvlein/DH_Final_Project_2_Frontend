import type { Evento } from '@/models/Event'

interface HeroDetailsListProps {
  evento: Evento
}

const Hero2: React.FC<HeroDetailsListProps> = ({ evento }) => {
  return (
    <>
      <div style={{ backgroundImage: `url(${evento.detailImageUrl})` }} className="bg-cover bg-center h-auto lg:h-full" >
        <div className="div">
          <h2>Detalle del evento</h2>
          <div
            className="div"
            style={{
              background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)'
            }}
            >
            Fecha:
            </div>
          <div className="div">Lugar:{evento.venue.name}</div>
          <div
            className="div"
            style={{
              background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)'
            }}
            >
            Dirección:{evento.venue.city},{evento.venue.country}
            </div>
          <div className="div">Show comienza: 20 hs </div>
        </div>
      </div>
    </>
  )
}

export default Hero2
