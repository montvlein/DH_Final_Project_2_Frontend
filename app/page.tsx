import EventListCatalog from "@/components/events/catalog"
import { Hero } from '@/components'

import Header from '@/components/Header'

const Home: React.FC = () => {
  const categories = [
    { title: "Deportes", img: '/deportes.svg' },
    { title: "Conciertos", img: '/conciertos.svg' },
    { title: "Teatros", img: '/teatros.svg' }
  ]

  return (
    <>
      <Hero />
      <EventListCatalog categories={categories} />
    </>
  )
}

export default Home
