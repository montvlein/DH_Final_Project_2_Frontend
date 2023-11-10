'use client'

import React, { useState } from 'react'
import HeroCategory from '@/components/categorys/HeroCategory'
import MenuFilter from '@/components/categorys/MenuFilter'
import { categories } from '@/api/data'
import ListEvent from '@/components/categorys/ListEvent'

interface CategoryFilterProps {
  params: any
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ params }) => {
  const { id } = params
  const [selectedCategory, setSelectedCategory] = useState(id)

  return (
    <>
      <HeroCategory />
      <div className='lg:flex'>
        <MenuFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={(category) => { setSelectedCategory(category) }}
          />
        <ListEvent selectedCategory={selectedCategory}/>
      </div>
    </>
  )
}

export default CategoryFilter
