import axios from 'axios';

export const getCategoryMeals = (categoryName) => {
    return async (dispatch) => {
        dispatch(fetchCategoryMeals())
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
            console.log(response);
            const randomMealIndex = Math.floor(Math.random() * response.data.meals.length)
            const randomMeal = response.data.meals[randomMealIndex];
            const meals = response.data.meals.filter((_, i) => i !== randomMealIndex);
            dispatch(fetchCategoryMealsSuccess(meals, randomMeal));
        }catch(err) {
            console.log(err)
        }
    }
}

export const fetchCategoryMeals = () => ({
    type: 'FETCH_CATEGORY_MEALS'
})

export const fetchCategoryMealsSuccess = (meals, recomendedMeal) => ({
    type: 'FETCH_CATEGORY_MEALS_SUCCESS',
    payload: {
        meals,
        recomendedMeal
    }
})