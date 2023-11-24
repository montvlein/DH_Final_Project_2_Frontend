'use client'

import type { Category } from '@/models/Category'

interface MenuFilterProps {
  categories: Category[]
  selectedCategory: string
  onCategoryClick: (category: string) => void
}

const MenuFilter: React.FC<MenuFilterProps> = ({ categories, selectedCategory, onCategoryClick }) => {
  return (
    <>
    <div className="bg-[#2B2B2B] w-full flex flex-col lg:w-1/4">
      <div className="py-4 flex flex-col items-center lg:items-start">
        <h2 className='text-[#DCA6D8] font-poppins text-3xl pb-2'>Categorias</h2>
        {categories.map((cat) => (
            <button
              key={cat.description}
              onClick={() => { onCategoryClick(cat.description) }}
              className={selectedCategory === cat.description ? 'flex flex-col rounded-2xl bg-[#D791D2] py-2 px-6 text-lg text-white font-semibold' : 'flex flex-col text-white text-sm lg:text-lg py-2 px-6'}
            >
            {cat.description}
            </button>
        ))}
      </div>
      <div className="flex flex-col py-4 px-6">
        <label className="text-[#DCA6D8] font-poppins text-3xl pb-2">Lugar</label>
        <select
          style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
          className="border rounded px-2 py-1 text-white ">
            <option value=""></option>
            <option value="opcion1">Boca Junios</option>
            <option value="opcion2">River Plate</option>
            <option value="opcion3">Teatro Vorterix</option>
          </select>
      </div>
      <div className="flex flex-col py-4 px-6">
        <label className="text-[#DCA6D8] font-poppins text-3xl pb-2">Fecha</label>
        <select
          style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
          className="border rounded px-2 py-1 text-white">
            <option value=""></option>
            <option value="opcion1">24-12-2023</option>
          </select>
      </div>
    </div>
    </>
  )
}

export default MenuFilter
