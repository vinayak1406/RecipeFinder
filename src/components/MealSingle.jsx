import React from 'react';
// import "./Meal.scss";


const MealSingle = ({ meal }) => {
  // console.log(meal);
  let tags = meal?.tags?.split(',');
  // console.log(meal);
  let instructions = meal?.instructions?.split('\r\n');
  instructions = instructions?.filter(instruction => instruction.length > 1);

  return (
    <>
      <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center md:py-12'>
        <div className='container mx-auto'>
          <div className='flex flex-col border p-2 shadow-md lg:flex-row items-center'>
            <div className='flex justify-center  items-center mb-8 lg:mb-0'>
              <div className='max-w-screen-lg mx-auto'>
              <img src={meal?.thumbnail} alt="" className='w-auto h-[13.5em] object-contain' />
              </div>
              <div className='grid grid-rows-2 text-center ml-5 lg:text-left'>
                <h3 className='text-black font-bold text-2xl '>{meal?.title}</h3>
                <h1 className='text-lg'>Category:
                  <span className='text-capitalize text-xl '>{meal?.category}</span>
                  <div className='flex'>
                  <span className='flex'>Source:</span>
                  <a href={meal.source} target='__blank__' className=' hover:text-red-400 '>{meal.source ? (meal?.source).substring(0, 20) + "..." : "Not found"}</a>
                  </div>
                </h1>
                <h5 className='text-xl flex'>Tags:
                  <ul className='flex'>
                    {
                      tags?.map((tag, idx) => (<li key={idx} className="flex">{tag}</li>))
                    }
                  </ul>
                </h5>
               

              </div>
            </div>
            <div>
              <h6 className='text-black font-semibold text-center'>Ingredients</h6>
              <ul className='grid grid-cols-2 gap-2 place-items-center'>
                {
                  meal?.ingredients?.map((ingredient, idx) => (
                    <li key={idx} className="flex align-center">
                     {idx + 1}
                        <span className='text-capitalize text-black p-2 uppercase'>{ingredient}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col border p-2 shadow-md lg:flex-row items-center'>
        <div className='container mx-auto rounded-lg'>
          <h6 className='text-black font-semibold'>Measure:</h6>
          <ul className='grid grid-cols-2 gap-2 '>
            {
              meal?.measures?.map((measure, idx) => (
                <li key={idx} className="">
                  <span className='text-capitalize text-black p-2'>{measure}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h6 className='font-bold'>Instructions:</h6>
          <ul className='grid grid-cols-1 gap-1'>
            {
              instructions?.map((instruction, idx) => (
                <li key={idx} className="">
                  {idx + 1}
                    <span className='text-capitalize text-black p-2'>{instruction}</span>
                 
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default MealSingle