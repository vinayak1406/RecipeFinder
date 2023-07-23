import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoMdMenu } from 'react-icons/io'
import { useSidebarContext } from '../../contexts/sidebarContext'
import {MdFoodBank} from 'react-icons/md'
import SearchForm from './SearchForm'
const NavBar = () => {
  const { openSidebar } = useSidebarContext()
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 60) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${scrolled ? 'bg-white py-4  shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to='/'>
          <div className='flex'>
            <div> <MdFoodBank size={25}/></div>
          <h1 className='ml-2 text-black'>Recipe-finder</h1>
          </div>
        </Link>
        <div className='flex flex-row justify-center'>
            <SearchForm />
        </div>
        <div onClick={() => openSidebar()} className='cursor-pointer flex relative max-w-[50px]'>
            <IoMdMenu size={25} />
        </div>
      </div>

    </nav>
  )
}

export default NavBar