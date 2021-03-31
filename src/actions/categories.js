import axios from 'axios';

export const getCategories =  () => {
    return async (dispatch) => {
        dispatch(fetchCategories())  
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            console.log(response);
            dispatch(fetchCategoriesSuccess(response.data.categories));
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