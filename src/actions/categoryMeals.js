import axios from 'axios';

export const getCategoryMeals = (categoryName) => {
    return async (dispatch) => {
        dispatch(fetchCategoryMeals())
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
            console.log(response);
            dispatch(fetchCategoryMealsSuccess(response.data.meals));
        }catch(err) {
            console.log(err)
        }
    }
}

export const fetchCategoryMeals = () => ({
    type: 'FETCH_CATEGORY_MEALS'
})

export const fetchCategoryMealsSuccess = (meals) => ({
    type: 'FETCH_CATEGORY_MEALS_SUCCESS',
    payload: meals
})