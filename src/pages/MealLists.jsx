import React from 'react'
import { useMealContext } from '../contexts/mealContext'
import MealList from '../components/MealList'
import NotFound from '../components/NotFound'
import Loader from '../components/Loader'
const MealLists = () => {
  const { meals, mealsLoading } = useMealContext()
  return (
    <div className=''>
       <section className="h-[300px] py-24 shadow-md bg-[#F9B5D0]">
        <div className="container mx-auto flex justify-around h-full">
          <div className='font-semibold flex items-center'>
            <div className='w-10 h-[2px] bg-orange-400 mr-3'>
          <h1 className='text-yellow-700 font-medium text-[30px] mb-4 uppercase'>Meals</h1>
            </div>
          </div>
        </div>
      </section>
      <div className=''>
    {(mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals={meals} /> : ''}
      </div>
    </div>
  )
}

export default MealLists