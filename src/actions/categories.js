import axios from 'axios';

export const getCategories =  () => {
    return async (dispatch) => {
        dispatch(fetchCategories())  
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
            console.log(response.data.meals);
            dispatch(fetchCategoriesSuccess(response.data.meals));
        }catch(err) {
            console.log(err);
        }
    }
}

export const fetchCategories = () => ({
    type: 'FETCH_CATEGORIES'
});

export const fetchCategoriesSuccess = (categories) => ({
    type: 'FETCH_CATEGORIES_SUCCESS',
    payload: categories
})