import React from 'react';
import { Link } from 'react-router-dom';


const CategoryList = ({categories}) => {
  return (
    <div className='py-1'>
        <div className='mt-3'>
          <h1 className='text-2xl font-semibold text-center p-2'>Categories</h1>
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {
              categories.map(category => {
                const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail} = category;
                return (
                  <div className='border bg-[#FFF9C9] shadow-lg  h-[300px] mb-2 relative overflow-hidden group transition' key={id}>
                    <div className='w-full h-full flex justify-center items-center'>
                  <Link to = {`/meal/category/${title}`}  >
                    <div className='w-[200px] mx-auto flex justify-center items-center' > 
                     <img src = {thumbnail} alt = {title} className='max-h-[160px] group-hover:scale-110 transition duration-300' />
                    </div>
                    <div className='absolute bottom-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                        <h3 className='text-center text-black'>{title}</h3>
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

export default CategoryList