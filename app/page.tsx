import EventListCatalog from '@/components/events/catalog'
import { Hero, Search, Subcription } from '@/components'

const Home: React.FC = () => {
  const categories = [
    { title: 'Deportes', img: 'https://media.tycsports.com/files/2022/03/02/396970/river-pibes_862x485.jpg' },
    { title: 'Conciertos', img: 'https://aeronoticias.com.pe/noticiero/wp-content/uploads/2022/10/apla.jpg' },
    { title: 'Teatros', img: 'https://www.sanangel.edu.mx/sites/default/files/gdi/OBRA%20DE%20TEATRO.jpg' }
  ]

  return (
    <>
      <div className='relative'>
        <Hero />
        <Search />
      </div>
      <EventListCatalog categories={categories}/>
      <Subcription />
    </>
  )
}

export default Home
