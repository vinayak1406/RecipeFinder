import React from 'react'
import { useMealContext } from '../contexts/mealContext'
import Loader from '../components/Loader'
import Header from '../components/Header/Header'
import CategoryList from '../components/CategoryList'
const HomePage = () => {
  const { categories,categoryLoading} = useMealContext()

  return (
    <div>
      <Header/>
      <div className='py-1'>
        <div className='mx-auto'>
          <div>
        {(categoryLoading) ? <Loader /> : <CategoryList categories={categories} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage