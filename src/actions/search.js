import axios from 'axios';
export const getSearchRecipes = (recipeName) => {
    return async (dispatch) => {
        dispatch(fetchSearchRecipes())
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);
            console.log(response);
            dispatch(fetchSearchRecipesSuccess(response.data.meals))
        }catch(err) {
            console.log(err);
        }
    }
}


export const fetchSearchRecipes = () => ({
    type: 'FETCH_SEARCH_RECIPES'
})

export const fetchSearchRecipesSuccess = (meals) => ({
    type: 'FETCH_SEARCH_RECIPES_SUCCESS',
    payload: meals
})