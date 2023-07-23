import React from 'react'
import Error_Page from '../assets/404_error-h.png'

const NotFound = () => {
  return (
    <div className='h-screen  flex items-center justify-center'>
      <img src={Error_Page} alt="NotFound" className='shadow-md max-h-[500px]' />
    
      </div>
  )
}

export default NotFound