import axios from 'axios';
import { batch } from 'react-redux';
import { setSimilarMeals } from './similarMeals';
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
            
            const similarMealsRes = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipeDetailsRes.data.meals[0].strCategory}`);
            const startIndex = similarMealsRes.data.meals.length > 3 ? Math.floor(Math.random() * (similarMealsRes.data.meals.length - 3)) : 0;
            
            const similarMealsFullDataRes = await Promise.all([
                axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${similarMealsRes.data.meals[startIndex].idMeal}`),
                axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${similarMealsRes.data.meals[startIndex + 1].idMeal}`),
                axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${similarMealsRes.data.meals[startIndex + 2].idMeal}`)
            ])
            const similarMealsFullData = [];
            console.log(startIndex, similarMealsRes);
            similarMealsFullDataRes.forEach(res => {
                similarMealsFullData.push(res.data.meals[0]);
            })
            batch(() => {
                dispatch(fetchSingleMealSuccess(recipeDetailsRes.data.meals[0]));
                dispatch(setSimilarMeals(similarMealsFullData));
            })
        }catch(err) {
            console.log(err);
        }
    }
}