import Image from 'next/image'
import type { Evento } from '@/models/Event'

interface Hero1DetailsListProps {
  evento: Evento
}

const Hero1: React.FC<Hero1DetailsListProps> = ({ evento }) => {
  return (
    <>
      <Image
        src={evento.bannerImageUrl}
        alt="hero1"
        className="w-full"
        width={1488}
        height={522}
      />
    </>
  )
}
export default Hero1
