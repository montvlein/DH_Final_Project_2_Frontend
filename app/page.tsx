import CategoryList from '@/components/events/CategoryList'
import { Hero, Search, Subcription } from '@/components'
import NextEventList from '@/components/events/nextEventList'
import { categories } from '../api/data'
import GetEvents from '@/services/GetEvents'

const Home: React.FC = async () => {
  const eventList = await GetEvents()
  return (
    <>
      <div className='relative'>
        <Hero />
        <Search evento={eventList}/>
      </div>
      <CategoryList categories={categories} />
      <NextEventList categories={categories} evento={eventList} />
      <Subcription />
    </>
  )
}

export default Home
