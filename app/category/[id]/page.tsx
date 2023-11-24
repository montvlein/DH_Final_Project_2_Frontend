import HeroCategory from '@/components/categorys/HeroCategory'
import MenuFilter from '@/components/categorys/MenuFilter'
import { categories } from '@/api/data'
import ListEvent from '@/components/categorys/ListEvent'
import GetEvents from '@/services/GetEvents'

interface CategoryFilterProps {
  params: any
}

const CategoryFilter: React.FC<CategoryFilterProps> = async ({ params }) => {
  const { id } = params
  const eventList = await GetEvents()

  return (
    <>
      <HeroCategory />
      <div className='lg:flex'>
        <MenuFilter
          categories={categories}
          selectedCategory={id}
          evento={eventList}
          />
        <ListEvent selectedCategory={id} evento={eventList}/>
      </div>
    </>
  )
}

export default CategoryFilter
