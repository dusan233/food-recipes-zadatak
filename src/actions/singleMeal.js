import axios from 'axios';

export const fetchSingleMeal = () => ({
    type: "FETCH_SINGLE_MEAL"
})
export const fetchSingleMealSuccess = (meal) => ({
    type: "FETCH_SINGLE_MEAL_SUCCESS",
    payload: meal
})

export const getSingleMealData = (recipeId) => {
    return async (dispatch) => {
        dispatch(fetchSingleMeal())
        try {
            const recipeDetailsRes = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
            console.log(recipeDetailsRes);
            dispatch(fetchSingleMealSuccess(recipeDetailsRes.data.meals[0]))
        }catch(err) {
            console.log(err);
        }
    }
}