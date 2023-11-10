import CategoryList from '@/components/events/CategoryList'
import { Hero, Search, Subcription } from '@/components'
import NextEventList from '@/components/events/nextEventList'
import { categories } from '../api/data'

const Home: React.FC = () => {
  return (
    <>
      <div className='relative'>
        <Hero />
        <Search />
      </div>
      <CategoryList categories={categories} />
      <NextEventList categories={categories} />
      <Subcription />
    </>
  )
}

export default Home
