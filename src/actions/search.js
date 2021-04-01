import axios from 'axios';
import { batch } from 'react-redux';
import { setRandomMeal } from './randomMeal';
import { fetchCategoriesSuccess } from './categories';
export const getSearchRecipes = (recipeName) => {
    return async (dispatch) => {
        dispatch(fetchSearchRecipes())
        Promise.all([axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`),
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    ]).then(res => {
        batch(() => {
            dispatch(fetchSearchRecipesSuccess(res[0].data.meals));
            dispatch(setRandomMeal(res[1].data.meals[0]));
            dispatch(fetchCategoriesSuccess(res[2].data.categories));
        })
    }).catch(err => console.log(err)); 
        
    }
}


export const fetchSearchRecipes = () => ({
    type: 'FETCH_SEARCH_RECIPES'
})

export const fetchSearchRecipesSuccess = (meals) => ({
    type: 'FETCH_SEARCH_RECIPES_SUCCESS',
    payload: meals
})