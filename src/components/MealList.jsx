import React from 'react'
import { Link } from 'react-router-dom'
const MealList = ({meals}) => {
  // console.log(meals)
  return (
    <div className='py-1'>
      <div className='mx-auto'>
   
      <section className='grid gid-row-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
        {
          meals?.map((mealItem)=>{
            const {idMeal:id,strArea:area,strCategory:category,strMeal:meal,strMealThumb:thumbnail} = mealItem

            return(
              <div className='border shadow-md  bg-[#B7B7B7] h-[300px] mb-2 rounded-md overflow-hidden group transition' key={id}>
                <div  className='w-full h-full flex justify-center items-center'>
                <Link to={`/meal/${id}`}  >
                <div className='w-[200px] mx-auto flex justify-center items-center'>
                  <img src={thumbnail} alt={meal} className='max-h-[160px] sm:max-h-[160px] group-hover:scale-110 transition duration-300 rounded-[150px]' /> 
                </div>
                <div className='grid'>
                  <div className='grid grid-rows-2'>
                    <span className='text-center  rounded-md mt-3'>
                     <p className='text-red-500'> {area} </p>
                     <p className='text-blue-500'>{category}</p>
                    </span>
                    <h3 className='text-center'>{meal}</h3>
                  </div>
                </div>
                </Link>
              </div>
              </div>
              
            )
          })
        }
      </section>
      </div>
    </div>
  )
}

export default MealList