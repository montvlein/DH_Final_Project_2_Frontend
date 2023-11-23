import Link from 'next/link'
import Image from 'next/image'
import type { Category } from '@/models/Category'
import PropTypes from 'prop-types'

interface CategoryListProps {
  categories: Category[]
}

const CategoryList: React.FC<CategoryListProps> = function ({ categories }) {
  return (
    <section className="flex flex-col gap-4 place-items-center bg-white p-2 font-semibold bg-no-repeat bg-right-top bg-[url('/estrellitas.svg')] lg:bg-none">
      <div className="text-center lg:py-8 lg:px-24 lg:bg-no-repeat lg:bg-right-top lg:bg-[url('/estrellitas.svg')]">
        <h2 className="uppercase text-sm text-gray-600 m-2">categorias</h2>
        <h3 className="text-3xl text-center text-gray-900 font-bold">Los espectáculos que te encantan. <span className="text-gray-600">En directo.</span></h3>
      </div>
      <div className="p-4 flex flex-col gap-6 lg:flex-row">
        {categories.map((cat, i) => (
          <Link href={`category/${cat.description}`} className="relative rounded-2xl overflow-hidden lg:max-h-none" key={i}>
            <div className="bg-black opacity-40 shadow-inner absolute top-0 left-0 w-full h-full rounded-2xl transition-opacity hover:opacity-0"></div>
            <Image
              src={cat.urlImage}
              alt={cat.description}
              width={433}
              height={234}
              className='object-cover w-full h-full'
            />
            <span className="absolute bottom-3 left-3 text-white font-bold opacity-100">{cat.urlImage}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategoryList
