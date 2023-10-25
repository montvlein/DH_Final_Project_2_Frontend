import EventListCatalog from '@/components/events/catalog'
import { Hero, Search } from '@/components'

const Home: React.FC = () => {
  const categories = [
    { title: 'Deportes', img: '/deportes.svg' },
    { title: 'Conciertos', img: '/conciertos.svg' },
    { title: 'Teatros', img: '/teatros.svg' }
  ]

  return (
    <>
      <div className='relative lg:h-full'>
        <Hero />
        <Search />
      </div>
      <EventListCatalog categories={categories}/>
    </>
  )
}

export default Home
