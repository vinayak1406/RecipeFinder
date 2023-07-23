import React, {useEffect} from 'react';
import { useMealContext } from '../contexts/mealContext';
import MealList from '../components/MealList';
import { useParams } from 'react-router-dom';
import { startFetchMealsByCategory } from '../actions/mealsAction';



const CategoryPage = () => {
  const {name} = useParams();
  const { categoryMeals, dispatch, categories } = useMealContext();
  let catDescription = "";

  if(categories){
    categories.forEach(category => {
      if(category?.strCategory === name) catDescription = category?.strCategoryDescription;
    })
  }

  useEffect(() => {
    startFetchMealsByCategory(dispatch, name);
  }, [name, dispatch]);

  return (
    <div className=''>
      <section className="h-[300px] bg-[#BFCCB5] py-24 shadow-md ">
        <div className="container mx-auto flex justify-around h-full">
          <div className='font-semibold flex items-center'>
            <div className='w-10 h-[2px] bg-teal-400 mr-3'>
          <h1 className='text-[#8C3333] font-medium text-5xl mb-2'>{name}</h1>
            </div>
          </div>
        </div>
      </section>
        <div className='mt-2 rounded-md'>
          <p className='bg-[#FFEF82] p-2 mb-4 rounded-lg'>{catDescription}</p>
      {
        (categoryMeals?.length) ? <MealList meals = { categoryMeals } /> : null
      }
        </div>
      </div>
      
  
  )
}

export default CategoryPage
