import axios from "../api/axios";
import { FETCH_CATEGORY_BEGIN,FETCH_CATEGORY_SUCCESS,FETCH_CATEGORY_ERROR, FETCH_SINGLE_MEAL_BEGIN, FETCH_SINGLE_MEAL_SUCCESS, FETCH_SINGLE_MEAL_ERROR, FETCH_CATEGORY_MEALS_BEGIN, FETCH_CATEGORY_MEALS_SUCCESS, FETCH_CATEGORY_MEALS_ERROR, FETCH_MEALS_BEGIN, FETCH_MEALS_SUCCESS,FETCH_MEALS_ERROR} from "./actions";
import {CATEGORIES_URL, MEAL_CATEGORIES_URL, MEAL_SINGLE_URL, SEARCH_URL} from '../utils/constants'

export const startFetchCategories = async(dispatch)=>{
    
try {
    dispatch({type:FETCH_CATEGORY_BEGIN})
    const resp = await axios.get(`${CATEGORIES_URL}`)

    dispatch({type:FETCH_CATEGORY_SUCCESS,payload:resp.data.categories})
} catch (error) {
    dispatch({type:FETCH_CATEGORY_ERROR,payload:error.message})
}
}

export const startFetchSingleMeal = async (dispatch,id) => {
try {
    dispatch({type:FETCH_SINGLE_MEAL_BEGIN})
    const resp = await axios.get(`${MEAL_SINGLE_URL}${id}`)
    dispatch({type:FETCH_SINGLE_MEAL_SUCCESS,payload:resp.data.meals})
} catch (error) {
    dispatch({type:FETCH_SINGLE_MEAL_ERROR,payload:error.message})
}
}

export const startFetchMealsByCategory = async( dispatch,category)=>{
try {
    dispatch({type:FETCH_CATEGORY_MEALS_BEGIN})
    const resp = await axios.get(`${MEAL_CATEGORIES_URL}${category}`)
    dispatch({type:FETCH_CATEGORY_MEALS_SUCCESS,payload:resp.data.meals})
} catch (error) {
    dispatch({type:FETCH_CATEGORY_MEALS_ERROR,payload:error.message})
}
}

export const startFetchMealsBySearch = async(dispatch,searchTerm)=>{
    try {
        dispatch({type:FETCH_MEALS_BEGIN})
        const resp = await axios.get(`${SEARCH_URL}${searchTerm}`)
        dispatch({type:FETCH_MEALS_SUCCESS,payload:resp.data.meals})
    } catch (error) {
        dispatch({type:FETCH_MEALS_ERROR,payload:error.message})
    }
}