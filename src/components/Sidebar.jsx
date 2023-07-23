import React from 'react';
import { useSidebarContext } from '../contexts/sidebarContext';
import{ImCancelCircle} from 'react-icons/im'
// import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useMealContext } from '../contexts/mealContext';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar} = useSidebarContext();
    const { categories } = useMealContext() 

    return (
        <div className={` ${isSidebarOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className='flex items-center justify-between py-6 border-b'>
            <div className='uppercase text-sm font-semibold'> Categories</div>
            <div onClick={() => closeSidebar()}  className='cursor-pointer w-8 h-8 flex justify-center items-center'>
                <ImCancelCircle size = {24} />
            </div>
                </div>
    
            <div className='flex flex-col py-2  h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
                  <ul className='uppercase'>
                  {
                       categories.map(category =>(
                           <li  key={category.idCategory} className='pb-2'>
                            <Link to={`/meal/category/${category.strCategory}`} onClick={()=>closeSidebar()}>
                            {category.strCategory}
                            </Link>
                        </li>
                    ))
                }
                  </ul>
                  
                
                </div>
        </div>
    )
}

export default Sidebar