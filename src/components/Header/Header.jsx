import React from 'react'

const Header = () => {
  return (
    <header>
      <section className="h-[300px] py-24 shadow-md bg-[#862B0D]">
        <div className="container mx-auto flex justify-around h-full">
          <div className='font-semibold flex items-center'>
            <div className='w-10 h-[2px] bg-orange-400 mr-3'>
            </div>
            <h1 className='text-[30px] text-white font-bold mb-4'>Check out for your favourite recipe's</h1>

          </div>
        </div>
      </section>
    </header>
  )
}

export default Header