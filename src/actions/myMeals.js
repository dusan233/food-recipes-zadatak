import axios from 'axios'
export const fetchMyMeals = () => ({
    type: "FETCH_MY_MEALS"
})
export const fetchMyMealsSuccess = (meals) => ({
    type: "FETCH_MY_MEALS_SUCCESS",
    payload: meals
})

export const getMyMeals = () => {
    return (dispatch) => {
        dispatch(fetchMyMeals())
        Promise.all([
            axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
            axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
            axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
            axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        ]).then(res => {
            const myMeals = res.map((resp => resp.data.meals[0]))
            dispatch(fetchMyMealsSuccess(myMeals));
        }).catch(err => console.log(err))
    }
}