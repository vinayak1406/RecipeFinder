import React, {useState, useEffect} from 'react';

import { BsSearch } from "react-icons/bs";
import { useMealContext } from '../../contexts/mealContext';
import { useNavigate } from 'react-router-dom';
import { startFetchMealsBySearch } from '../../actions/mealsAction';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch, meals } = useMealContext();

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){
      setSearchTerm(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/meallist");
    startFetchMealsBySearch(dispatch, searchTerm);
    // console.log(meals)
  }

  return (
    <div className='flex'>
    <form className='flex ' onSubmit={(e) => handleSearchResult(e)}>
      <input type = "text" className='p-2 border-2 rounded-md' placeholder='Search recipes here ...' onChange={(e) => handleSearchTerm(e)} />
      <button type = "submit" className=''>
        <BsSearch className=' ml-2 text-white' size = {25} />
      </button>
    </form>
    <div>
    </div>
    </div>
  )
}

export default SearchForm